import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalClose,
    Label,
    Input,
    FormGroup,
    Spinner,
    Button,
} from "@doar/components";
import CreatableSelect from "react-select/creatable";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Select, { StylesConfig, OnChangeValue } from "react-select";
import { sectorOptions } from "../../../data/sectorOptions";
// import makeAnimated from "react-select/animated";
import { useEndpoints } from "../../../hooks/useEndpoints";
import { Person } from "../../../models/Person";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import stringSimilitary from "string-similarity";
import { setValueSkills } from "../../../redux/slices/skills";
import { setValueSectors } from "../../../redux/slices/sectors";
// const animatedComponents = makeAnimated();

interface IModalAddPerson {
    show: boolean;
    onClick: () => void;
    onSubmit: () => void;
    setShow: Dispatch<SetStateAction<boolean>>;
    setSelectedPerson: Dispatch<SetStateAction<Person | undefined>>;
    selectedPerson?: Person;
}

interface IForm {
    name: string;
    surname: string;
    email: string;
    skills: { label: string; value: string }[];
    sector: { label: string; value: string } | undefined;
}

export const ModalAddPerson: FC<IModalAddPerson> = ({
    show,
    onSubmit,
    setShow,
    setSelectedPerson,
    selectedPerson,
}) => {
    const {
        addNewPerson,
        editPerson,
        getSectors,
        addNewSkill: addNewSkillEndpoint,
        addNewSector: addNEwSectorEndpoint,
        getSkills,
    } = useEndpoints();
    const dispatch = useAppDispatch();
    const [loadingCreateSelect, setLoadingCreateSelect] = useState(false);
    const [loadingCreateSelectSector, setLoadingCreateSelectSector] =
        useState(false);
    const { skills: skillsSelector } = useAppSelector(({ skills }) => skills);
    const { sectors: sectorsSelector } = useAppSelector(
        ({ sectors }) => sectors
    );
    const [skillOptions, setSkillOptions] = useState<
        { label: string; value: string }[]
    >(
        skillsSelector
            ? skillsSelector.map(({ _id, value }) => ({
                  label: value,
                  value: _id,
              }))
            : []
    );
    const [initialValue, setInitialValue] = useState<IForm>({
        name: selectedPerson?.name || "",
        surname: selectedPerson?.surname || "",
        email: selectedPerson?.email || "",
        skills:
            selectedPerson?.skills.map(({ _id, value }) => ({
                label: value,
                value: _id,
            })) || [],
        sector: selectedPerson?.sector
            ? {
                  label: selectedPerson.sector.value,
                  value: selectedPerson.sector._id,
              }
            : undefined,
    } as IForm);
    // eslint-disable-next-line
    const colourStyles: StylesConfig<any> = {
        control: (styles) => ({ ...styles, marginTop: "12px" }),
    };

    useEffect(() => {
        setSkillOptions(
            skillsSelector
                ? skillsSelector.map(({ _id, value }) => ({
                      label: value,
                      value: _id,
                  }))
                : []
        );
    }, [skillsSelector]);

    useEffect(() => {
        setInitialValue({
            name: selectedPerson?.name || "",
            surname: selectedPerson?.surname || "",
            email: selectedPerson?.email || "",
            skills:
                selectedPerson?.skills.map(({ _id, value }) => ({
                    label: value,
                    value: _id,
                })) || [],
            sector: selectedPerson?.sector
                ? {
                      label: selectedPerson.sector.value,
                      value: selectedPerson.sector._id,
                  }
                : undefined,
        } as IForm);
    }, [selectedPerson]);

    const addNewSkill = async (
        value: string,
        callback: (newSkill: { _id: string; value: string }) => void
    ) => {
        setLoadingCreateSelect(true);
        try {
            const { data: newSkill } = await addNewSkillEndpoint(value);
            const { data } = await getSkills();
            dispatch(setValueSkills(data));
            callback(newSkill);
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoadingCreateSelect(false);
        }
    };
    const addNewSector = async (
        value: string,
        callback: (newSkill: { _id: string; value: string }) => void
    ) => {
        setLoadingCreateSelectSector(true);
        try {
            const { data: newSector } = await addNEwSectorEndpoint(value);
            const { data } = await getSectors();
            dispatch(setValueSectors(data));
            callback(newSector);
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoadingCreateSelectSector(false);
        }
    };

    const checkSimilitarySkills = (
        skill: string,
        type: "skills" | "sectors"
    ) => {
        const typeArray = type === "skills" ? skillsSelector : sectorsSelector;
        if (!typeArray) return [];
        return typeArray.reduce((acc, { value }) => {
            return stringSimilitary.compareTwoStrings(skill, value) > 0.7
                ? [...acc, value]
                : acc;
        }, [] as string[]);
    };

    return (
        <Formik
            validateOnChange={false}
            validateOnMount={false}
            enableReinitialize
            initialValues={initialValue}
            validate={(values) => {
                const errors: Record<string, string> = {};
                if (!values.name) {
                    errors.name = "Required";
                }
                if (!values.surname) {
                    errors.surname = "Required";
                }
                if (!values.email) {
                    errors.email = "Required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                    )
                ) {
                    errors.email = "Invalid email address";
                }
                if (!values.sector) {
                    errors.sector = "Required";
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                const body = {
                    ...values,
                    skills: values.skills.map(({ value }) => value),
                    sector: values.sector?.value,
                } as Person<string[], string>;
                try {
                    /* eslint-disable-next-line */
                    selectedPerson
                        ? /* eslint-disable-next-line */
                          await editPerson(selectedPerson._id, body)
                        : /* eslint-disable-next-line */
                          await addNewPerson(body);
                    onSubmit();
                } catch (error) {
                    console.error("error", error);
                } finally {
                    setSubmitting(false);
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
            }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Modal
                            show={show}
                            onClose={() => {
                                setSelectedPerson(undefined);
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
                                        setSelectedPerson(undefined);
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
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        value={values.name}
                                        placeholder="Name"
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
                                        htmlFor="surname"
                                    >
                                        Surname *
                                    </Label>
                                    <Input
                                        type="text"
                                        id="surname"
                                        onChange={handleChange}
                                        value={values.surname}
                                        name="surname"
                                        placeholder="Surname"
                                    />
                                    <p
                                        style={{
                                            color: "red",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {errors.surname}
                                    </p>
                                </FormGroup>
                                <FormGroup mb={"20px"}>
                                    <Label
                                        display="block"
                                        mb="5px"
                                        htmlFor="email"
                                    >
                                        Email *
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <p
                                        style={{
                                            color: "red",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {errors.email}
                                    </p>
                                </FormGroup>
                                <FormGroup mb={"20px"}>
                                    <Label
                                        display="block"
                                        mb="5px"
                                        htmlFor="skills"
                                    >
                                        Skills
                                    </Label>
                                    <CreatableSelect
                                        isMulti
                                        isLoading={loadingCreateSelect}
                                        formatOptionLabel={({ label }) => label}
                                        formatCreateLabel={(createOption) => {
                                            const similitarySkills =
                                                checkSimilitarySkills(
                                                    createOption,
                                                    "skills"
                                                );
                                            return (
                                                <>
                                                    <span>
                                                        {`Create "${createOption}"`}
                                                    </span>
                                                    {Boolean(
                                                        similitarySkills.length
                                                    ) && (
                                                        <span className="color-red ms-1">
                                                            {`Warning the selected skill is similar has: ${similitarySkills.join(
                                                                ", "
                                                            )}`}
                                                        </span>
                                                    )}
                                                </>
                                            );
                                        }}
                                        onCreateOption={async (newValue) => {
                                            await addNewSkill(
                                                newValue,
                                                ({ _id, value }) => {
                                                    setFieldValue("skills", [
                                                        ...values.skills,
                                                        {
                                                            label: value,
                                                            value: _id,
                                                        },
                                                    ]);
                                                }
                                            );
                                        }}
                                        value={values.skills}
                                        // components={animatedComponents}
                                        onChange={(
                                            newValue: OnChangeValue<
                                                {
                                                    label: string;
                                                    value: string;
                                                },
                                                true
                                            >
                                            // actionMeta: ActionMeta<any>
                                        ) => {
                                            setFieldValue("skills", [
                                                ...newValue,
                                            ]);
                                        }}
                                        options={skillOptions.sort((a, b) =>
                                            a.value > b.value ? 1 : -1
                                        )}
                                    />
                                </FormGroup>
                                <FormGroup mb={"20px"}>
                                    <Label
                                        display="block"
                                        mb="5px"
                                        htmlFor="sector"
                                    >
                                        Sector *
                                    </Label>
                                    <CreatableSelect
                                        styles={colourStyles}
                                        isLoading={loadingCreateSelectSector}
                                        options={(sectorsSelector || []).map(
                                            ({ _id, value }) => ({
                                                value: _id,
                                                label: value,
                                            })
                                        )}
                                        placeholder={"Select..."}
                                        formatCreateLabel={(createOption) => {
                                            const similitarySkills =
                                                checkSimilitarySkills(
                                                    createOption,
                                                    "sectors"
                                                );
                                            return (
                                                <>
                                                    <span>
                                                        {`Create "${createOption}"`}
                                                    </span>
                                                    {Boolean(
                                                        similitarySkills.length
                                                    ) && (
                                                        <span className="color-red ms-1">
                                                            {`Warning the selected sector is similar has: ${similitarySkills.join(
                                                                ", "
                                                            )}`}
                                                        </span>
                                                    )}
                                                </>
                                            );
                                        }}
                                        onCreateOption={async (newValue) => {
                                            await addNewSector(
                                                newValue,
                                                ({ _id, value }) => {
                                                    setFieldValue("sector", {
                                                        label: value,
                                                        value: _id,
                                                    });
                                                }
                                            );
                                        }}
                                        value={
                                            values.sector
                                                ? values.sector
                                                : undefined
                                        }
                                        onChange={(newValue) => {
                                            setFieldValue("sector", newValue);
                                        }}
                                    />
                                    <p
                                        style={{
                                            color: "red",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {errors.sector}
                                    </p>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="secondary"
                                    onClick={() => {
                                        setShow(false);
                                        setSelectedPerson(undefined);
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
                                            <Spinner size="xs" />{" "}
                                            <span style={{ marginLeft: "5px" }}>
                                                Loading
                                            </span>
                                        </>
                                    ) : selectedPerson ? (
                                        "edit Person"
                                    ) : (
                                        "Add new person"
                                    )}
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </form>
                );
            }}
        </Formik>
    );
};
