import React, {
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { Formik } from "formik";
import {
    Button,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalClose,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    Spinner,
    Table,
    Textarea,
} from "@doar/components";
import "./ModalAddAndEditTeam.scss";
import { Team } from "../../../models/Teams";
import { Person } from "../../../models/Person";
import DatePicker from "../../../components/date-picker";
import dayjs from "dayjs";
import { Row, Col } from "styled-bootstrap-grid";
import { Plus, UserX } from "react-feather";
import ModalAddPersonTeam from "./ModalAddPersonTeam";
import { useEndpoints } from "../../../hooks/useEndpoints";

interface IModalAddAndEditTeam {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
    setSelectedTeam: Dispatch<SetStateAction<Team | undefined>>;
    selectedTeam: Team | undefined;
    onChange: () => void;
}

interface IForm {
    name: string;
    description: string;
    persons: { person: Person; contractType: string }[];
    startDate: number;
    endDate: number;
}

const ModalAddAndEditTeam: FC<IModalAddAndEditTeam> = ({
    show,
    setShow,
    setSelectedTeam,
    selectedTeam,
    onChange,
}) => {
    const [showAddPerson, setShowAddPerson] = useState(false);
    const { editTeam, addNewTeam } = useEndpoints();
    const getInitialValue = (): IForm => {
        const getPersons = selectedTeam?.persons
            ? (selectedTeam.persons.filter(({ person }) => person !== null) as {
                  person: Person;
                  contractType: string;
              }[])
            : [];

        return {
            name: selectedTeam?.name || "",
            description: selectedTeam?.description || "",
            persons: getPersons,
            startDate: selectedTeam?.startDate || 0,
            endDate: selectedTeam?.endDate || 0,
        };
    };
    const [initialValue, setInitialValue] = useState<IForm>(getInitialValue());

    const openAddPerson = () => setShowAddPerson(true);

    useEffect(() => {
        setInitialValue(getInitialValue());
        // eslint-disable-next-line
    }, [selectedTeam]);

    const tablePersons = (
        values: IForm,
        setFieldForm: (
            field: string,
            // eslint-disable-next-line
            value: any,
            shouldValidate?: boolean | undefined
        ) => void
    ) => {
        const handleChangeContractType = (index: number, newValue: string) => {
            const copyPersons = JSON.parse(JSON.stringify(values.persons));
            copyPersons[index].contractType = newValue;
            setFieldForm("persons", copyPersons);
        };
        return (
            <div
                className={`container-persons-${
                    values.persons.length ? "input" : "empty"
                }`}
            >
                {values.persons.length ? (
                    <div className="container-persons">
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">Contract type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {React.Children.toArray(
                                    values.persons.map(
                                        (
                                            {
                                                person: {
                                                    name,
                                                    surname,
                                                    email,
                                                    _id,
                                                },
                                                contractType,
                                            },
                                            i
                                        ) => {
                                            return (
                                                // eslint-disable-next-line
                                                <tr>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{surname}</td>
                                                    <td>{name}</td>
                                                    <td>{email}</td>
                                                    <td>
                                                        <select
                                                            className="select-contract-type"
                                                            onChange={({
                                                                target: {
                                                                    value,
                                                                },
                                                            }) =>
                                                                handleChangeContractType(
                                                                    i,
                                                                    value
                                                                )
                                                            }
                                                            name="contractType"
                                                        >
                                                            {[
                                                                "F.T",
                                                                "P.T",
                                                                "Q.T",
                                                            ].map((value) => {
                                                                return (
                                                                    <option
                                                                        key={
                                                                            value
                                                                        }
                                                                        value={
                                                                            value
                                                                        }
                                                                        selected={
                                                                            contractType ===
                                                                            value
                                                                        }
                                                                    >
                                                                        {value}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <UserX
                                                            color="red"
                                                            cursor={"pointer"}
                                                            size={14}
                                                            onClick={() => {
                                                                const newPersons =
                                                                    values.persons.filter(
                                                                        (
                                                                            _,
                                                                            index
                                                                        ) =>
                                                                            index !==
                                                                            i
                                                                    );
                                                                setFieldForm(
                                                                    "persons",
                                                                    newPersons
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )
                                )}
                                <tr>
                                    <td
                                        colSpan={6}
                                        style={{ textAlign: "center" }}
                                    >
                                        <Plus
                                            cursor={"pointer"}
                                            color="green"
                                            onClick={openAddPerson}
                                            size={24}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <div className="container-plus-persons">
                        <Plus
                            cursor={"pointer"}
                            color="green"
                            onClick={openAddPerson}
                        />
                    </div>
                )}
            </div>
        );
    };
    return (
        <>
            <Formik
                validateOnChange={false}
                validateOnMount={false}
                enableReinitialize
                initialValues={initialValue}
                validate={(values) => {
                    const errors: Partial<Record<keyof IForm, string>> = {};
                    if (!values.name) errors.name = "Required";
                    if (!values.startDate) errors.startDate = "Required";
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    try {
                        const body = {
                            ...values,
                            persons: values.persons.map(
                                ({ contractType, person: { _id } }) => ({
                                    person: _id,
                                    contractType,
                                })
                            ),
                            startDate: dayjs(values.startDate)
                                .toDate()
                                .getTime(),
                            endDate: values.endDate
                                ? dayjs(values.endDate).toDate().getTime()
                                : 0,
                        };
                        if (selectedTeam) {
                            await editTeam(selectedTeam._id, body);
                        } else {
                            await addNewTeam(body);
                        }
                    } catch (error) {
                        console.error("error", error);
                    } finally {
                        setSubmitting(false);
                        onChange();
                    }
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    setFieldValue,
                    handleSubmit,
                    resetForm,
                    isSubmitting,
                    /* and other goodies */
                }) => {
                    const getDate = (name: string, date: string) => {
                        setFieldValue(name, date);
                    };
                    return (
                        <form>
                            <Modal
                                show={show}
                                onClose={() => {
                                    setSelectedTeam(undefined);
                                    resetForm();
                                    setShow(false);
                                }}
                                size={"xl"}
                                centered={true}
                            >
                                <ModalHeader>
                                    <ModalTitle>Modal Title</ModalTitle>
                                    <ModalClose
                                        onClose={() => {
                                            resetForm();
                                            setShow(false);
                                            setSelectedTeam(undefined);
                                        }}
                                    >
                                        x
                                    </ModalClose>
                                </ModalHeader>
                                <ModalBody>
                                    <FormGroup mb={"20px"}>
                                        <Label
                                            display="block"
                                            mb="5px"
                                            htmlFor="name"
                                        >
                                            Name *
                                        </Label>
                                        <Input
                                            name="name"
                                            id="name"
                                            onChange={handleChange}
                                            type="text"
                                            value={values.name}
                                        />
                                        <p
                                            style={{
                                                color: "red",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            {errors.name}
                                        </p>
                                    </FormGroup>
                                    <FormGroup mb={"20px"}>
                                        <Label
                                            display="block"
                                            mb="5px"
                                            htmlFor="description"
                                        >
                                            Description
                                        </Label>
                                        <Textarea
                                            name="description"
                                            id="description"
                                            value={values.description}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <Row>
                                        <Col md={12} lg={6}>
                                            <FormGroup mb={"20px"}>
                                                <Label
                                                    display="block"
                                                    mb="5px"
                                                    htmlFor="startDate"
                                                >
                                                    Start Date *
                                                </Label>
                                                <DatePicker
                                                    name="startDate"
                                                    id="startDate"
                                                    placeholder="Select Date"
                                                    getDate={getDate}
                                                    formatDate={"DD/MM/YYYY"}
                                                    formatLabelDate={
                                                        "DD/MM/YYYY"
                                                    }
                                                    currentDate={
                                                        values.startDate
                                                            ? dayjs(
                                                                  values.startDate
                                                              ).toDate()
                                                            : undefined
                                                    }
                                                />
                                                <p
                                                    style={{
                                                        color: "red",
                                                        fontStyle: "italic",
                                                    }}
                                                >
                                                    {errors.startDate}
                                                </p>
                                            </FormGroup>
                                        </Col>
                                        <Col md={12} lg={6}>
                                            <FormGroup mb={"20px"}>
                                                <Label
                                                    display="block"
                                                    mb="5px"
                                                    htmlFor="endDate"
                                                >
                                                    End Date
                                                </Label>
                                                <DatePicker
                                                    name="endDate"
                                                    id="endDate"
                                                    placeholder="Select Date"
                                                    getDate={getDate}
                                                    formatDate={"DD/MM/YYYY"}
                                                    formatLabelDate={
                                                        "DD/MM-YYYY"
                                                    }
                                                    currentDate={
                                                        values.endDate
                                                            ? dayjs(
                                                                  values.endDate
                                                              ).toDate()
                                                            : undefined
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Label
                                        display="block"
                                        mb="5px"
                                        className="label-persons"
                                        htmlFor="persons"
                                    >
                                        Persons
                                    </Label>
                                    {tablePersons(values, setFieldValue)}
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="secondary"
                                        onClick={() => {
                                            setShow(false);
                                            setSelectedTeam(undefined);
                                        }}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        color="primary"
                                        disabled={isSubmitting}
                                        onClick={handleSubmit}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Spinner size="xs" />
                                                <span
                                                    style={{
                                                        marginLeft: "5px",
                                                    }}
                                                >
                                                    Loading
                                                </span>
                                            </>
                                        ) : selectedTeam ? (
                                            "edit Team"
                                        ) : (
                                            "Add new team"
                                        )}
                                    </Button>
                                </ModalFooter>
                            </Modal>
                            <ModalAddPersonTeam
                                show={showAddPerson}
                                setShowAddPerson={setShowAddPerson}
                                onSelectedPerson={(person, contractType) => {
                                    setFieldValue("persons", [
                                        ...values.persons,
                                        { person, contractType },
                                    ]);
                                    setShowAddPerson(false);
                                }}
                            />
                        </form>
                    );
                }}
            </Formik>
        </>
    );
};

export default ModalAddAndEditTeam;
