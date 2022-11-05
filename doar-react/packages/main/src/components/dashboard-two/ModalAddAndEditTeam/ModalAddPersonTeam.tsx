import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    Input,
    ListGroup,
    ListGroupItem,
    Avatar,
    AvatarInitial,
    Button,
    ModalFooter,
} from "@doar/components";
import Select from "react-select";
import React, {
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { Person } from "../../../models/Person";
import { useEndpoints } from "../../../hooks/useEndpoints";
import "./ModalAddPersonTeam.scss";
import { ContractType } from "../../../models/Teams";

interface IModalAddPersonTeam {
    show: boolean;
    onSelectedPerson: (person: Person, contractType: ContractType) => void;
    setShowAddPerson: Dispatch<SetStateAction<boolean>>;
}

const ModalAddPersonTeam: FC<IModalAddPersonTeam> = ({
    show,
    onSelectedPerson,
    setShowAddPerson,
}) => {
    const [valueSearch, setValueSearch] = useState("");
    const [contractType, setContractType] = useState("F.T");
    const [canAddPerson, setCanAddPerson] = useState(false);
    const [persons, setPersons] = useState<Person[]>([]);
    const [selectedPerson, setSelectedPerson] = useState<Person>();
    const { getPersons } = useEndpoints();

    const fetchPersons = async () => {
        try {
            const {
                data: { docs },
            } = await getPersons({
                limit: 30,
                page: 1,
                search: valueSearch,
            });
            setPersons(docs);
        } catch (error) {
            console.error("error", error);
        }
    };

    useEffect(() => {
        //eslint-disable-next-line
        fetchPersons();
        // eslint-disable-next-line
    }, [valueSearch]);
    useEffect(() => {
        setCanAddPerson(Boolean(selectedPerson && contractType));
        // eslint-disable-next-line
    }, [selectedPerson, contractType]);

    const options = [
        { value: "F.T", label: "F.T" },
        { value: "P.T", label: "P.T" },
        { value: "Q.T", label: "Q.T" },
    ];

    return (
        <Modal
            size={"lg"}
            className="modal-add-team"
            show={show}
            onClose={() => {}}
        >
            <ModalHeader>
                <ModalTitle>Add new Person</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div style={{ marginBottom: "0.4rem" }}>
                    <Select
                        defaultValue={options[0]}
                        onChange={(newValue) => {
                            setContractType(newValue?.value as string);
                        }}
                        options={options}
                    />
                </div>
                <Input
                    name="person"
                    id="person"
                    type="text"
                    placeholder="Search person..."
                    value={valueSearch}
                    onChange={({ target: { value } }) => {
                        setValueSearch(value);
                    }}
                />
                <div className="container-list-add-person-team">
                    <ListGroup>
                        {React.Children.toArray(
                            persons.map((person) => {
                                const { name, surname, email, _id } = person;
                                return (
                                    //eslint-disable-next-line
                                    <ListGroupItem
                                        as={"button"}
                                        {...{
                                            onClick: () => {
                                                setSelectedPerson(person);
                                                // onSelectedPerson(person);
                                            },
                                        }}
                                        className={`container-person-list ${
                                            selectedPerson?._id === _id
                                                ? "selected-person"
                                                : ""
                                        }`}
                                    >
                                        <div className="container-person">
                                            <div className="person">
                                                <Avatar size={"xs"}>
                                                    <AvatarInitial>{`${surname[0]}${name[0]}`}</AvatarInitial>
                                                </Avatar>
                                                <span>{`${surname} ${name}`}</span>
                                            </div>
                                            <span>{email}</span>
                                        </div>
                                    </ListGroupItem>
                                );
                            })
                        )}
                    </ListGroup>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="secondary"
                    onClick={() => {
                        setSelectedPerson(undefined);
                        setShowAddPerson(false);
                    }}
                >
                    Close
                </Button>
                <Button
                    disabled={!canAddPerson}
                    color="primary"
                    onClick={() => {
                        onSelectedPerson(
                            // eslint-disable-next-line
                            selectedPerson!,
                            contractType as ContractType
                        );
                        setSelectedPerson(undefined);
                        setContractType("F.T");
                    }}
                >
                    Add Person
                </Button>
            </ModalFooter>
        </Modal>
    );
};
export default ModalAddPersonTeam;
