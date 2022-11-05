import { CheckCircle, X, XSquare, RefreshCcw } from "react-feather";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
    Button,
    Badge,
    Input,
    Select,
} from "@doar/components";
import { useState } from "react";
import { useEndpoints } from "../../../hooks/useEndpoints";
import { usePersons } from "../../../hooks/usePersons";
import { useAppSelector } from "../../../redux/hooks";
import { Skill } from "../../../models/Skills";
import ReactSelect from "react-select";
import { customStyleReactSelectPrimary } from "../../../react-select-styles/primary";
import { useToast } from "../../../hooks/useToast";
import { AxiosError } from "axios";
import axios from "axios";
interface IProps {
    show: boolean;
    onClose: () => void;
    onFinishUpload: () => void;
}

interface PersonCsv {
    name: string;
    surname: string;
    email: string;
    skills: Skill[] | string;
    sector: { label: string; value: string } | string | undefined;
    uploaded?: boolean;
}

export interface IAxiosLoginError {
    message?: string;
    invalidFields?: {
        email?: string[];
        password?: string[];
    };
    error?: string;
}

type CoolorBadge =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
const ModalUploadCsv = ({ show, onClose }: IProps) => {
    const { skills: skillsSelector } = useAppSelector(({ skills }) => skills);
    const { sectors: sectorsSelector } = useAppSelector(
        ({ sectors }) => sectors
    );
    const { fetchPersons } = usePersons();
    const { addNewPerson } = useEndpoints();
    const { showToast } = useToast();
    const [arrayCsv, setArrayCsv] = useState<PersonCsv[]>([]);
    const [isUploaded, setIsUploaded] = useState(false);
    const csvFileToArray = (string: string) => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = csvRows
            .map((i) => {
                const values = i.split(",");
                const obj = csvHeader.reduce((object, header, index) => {
                    // eslint-disable-next-line
                    (object as any)[header.toLowerCase() as string] =
                        values[index];
                    return object;
                }, {} as PersonCsv);
                return obj;
            })
            .filter((obj) => Object.values(obj).some(Boolean));
        const mappedSkillsArray = array.map((item) => {
            const skills = (item.skills as string)
                .split(";")
                .map((stringSkill) => stringSkill.trim())
                .map((trimmedSkill) =>
                    skillsSelector?.find(({ value }) => value === trimmedSkill)
                )
                .filter(Boolean);

            const findSector = sectorsSelector?.find(
                ({ value }) => value === item.sector
            );

            return {
                ...item,
                skills,
                sector: findSector
                    ? { label: findSector.value, value: findSector._id }
                    : undefined,
            };
        }) as {
            skills: Skill[];
            name: string;
            surname: string;
            email: string;
            sector: { label: string; value: string } | undefined;
            uploaded?: boolean | undefined;
        }[];
        setArrayCsv(mappedSkillsArray);
    };

    const getColorBadge = (skill: string): CoolorBadge => {
        switch (true) {
            case skill.includes("react"):
                return "info";
            case skill.includes("angular"):
                return "danger";
            case skill.includes("vue"):
                return "success";
            default:
                return "light";
        }
    };
    const onCloseModal = () => {
        onClose();
        setArrayCsv([]);
        setIsUploaded(false);
    };

    const addNewPersonsFromCsv = async () => {
        setIsUploaded(false);
        try {
            await Promise.all(
                arrayCsv.map(
                    async (person, i) =>
                        // eslint-disable-next-line
                        new Promise(async (resolve, reject) => {
                            try {
                                await addNewPerson({
                                    ...person,
                                    skills: (person.skills as Skill[]).map(
                                        ({ _id }) => _id
                                    ),
                                    sector:
                                        typeof person.sector === "string"
                                            ? ""
                                            : person.sector!.value,
                                });
                                setArrayCsv((prev) => {
                                    const copyPrev = [...prev];
                                    copyPrev[i].uploaded = true;
                                    return copyPrev;
                                });
                            } catch (error) {
                                setArrayCsv((prev) => {
                                    const copyPrev = [...prev];
                                    copyPrev[i].uploaded = false;
                                    return copyPrev;
                                });
                            } finally {
                                resolve(undefined);
                            }
                        })
                )
            );
            if (arrayCsv.every((item) => item?.uploaded)) onCloseModal();
            await fetchPersons();
        } catch (error) {
            console.error("error", error);
        }
    };

    const onChangeValueArrayCsv = (
        // eslint-disable-next-line
        value: any,
        key: "email" | "name" | "surname" | "sector",
        index: number
    ) => {
        setArrayCsv((prev) => {
            const copyPrev = [...prev];
            copyPrev[index][key] = value;
            return copyPrev;
        });
    };

    const handleRetryAddNewPerson = async (index: number) => {
        const currentPerson = arrayCsv[index];
        setArrayCsv((prev) => {
            const copyPrev = [...prev];
            copyPrev[index].uploaded = undefined;
            return copyPrev;
        });
        try {
            await addNewPerson({
                ...currentPerson,
                skills: (currentPerson.skills as Skill[]).map(({ _id }) => _id),
                sector:
                    typeof currentPerson.sector === "string" ||
                    currentPerson.sector === undefined
                        ? ""
                        : currentPerson.sector.value,
            });
            setArrayCsv((prev) => {
                const copyPrev = [...prev];
                copyPrev[index].uploaded = true;
                return copyPrev;
            });
        } catch (error) {
            const e = error as AxiosError<IAxiosLoginError>;
            // eslint-disable-next-line
            if (axios.isAxiosError(error) && e.response?.data?.message) {
                showToast(
                    "error",
                    `Line ${index + 1}: ${e.response?.data?.message}`
                );
            }
            setArrayCsv((prev) => {
                const copyPrev = [...prev];
                copyPrev[index].uploaded = false;
                return copyPrev;
            });
        }
    };

    const styleBadge = { style: { marginLeft: "2px" } };
    return (
        <Modal show={show} size={"xl"} onClose={onCloseModal}>
            <ModalHeader>
                <ModalTitle>Generate The Report</ModalTitle>
                <ModalClose onClose={onCloseModal}>
                    <X />
                </ModalClose>
            </ModalHeader>
            <ModalBody>
                <p>Do you want to generate the report?</p>
                <input
                    type={"file"}
                    multiple={false}
                    accept={".csv"}
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setIsUploaded(true);
                            const fileReader = new FileReader();
                            fileReader.onload = function (event) {
                                // eslint-disable-next-line
                                const text = event.target!.result;
                                csvFileToArray(text as string);
                            };

                            fileReader.readAsText(file);
                        }
                    }}
                />
                <div
                    style={{
                        maxHeight: "calc(100vh - 400px)",
                        overflowY: "auto",
                    }}
                >
                    {Boolean(arrayCsv?.length) && (
                        <table
                            style={{
                                width: "100%",
                            }}
                        >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Email</th>
                                    <th>Skills</th>
                                    <th>Sector</th>
                                    <th style={{ textAlign: "center" }}>
                                        State upload
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrayCsv.map(
                                    (
                                        {
                                            name,
                                            surname,
                                            email,
                                            skills,
                                            sector,
                                            uploaded,
                                        },
                                        i
                                    ) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        type={"text"}
                                                        value={name}
                                                        onChange={({
                                                            target: { value },
                                                        }) => {
                                                            onChangeValueArrayCsv(
                                                                value,
                                                                "name",
                                                                i
                                                            );
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <Input
                                                        id="surname"
                                                        name="surname"
                                                        type={"text"}
                                                        value={surname}
                                                        onChange={({
                                                            target: { value },
                                                        }) => {
                                                            onChangeValueArrayCsv(
                                                                value,
                                                                "surname",
                                                                i
                                                            );
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type={"text"}
                                                        value={email}
                                                        onChange={({
                                                            target: { value },
                                                        }) => {
                                                            onChangeValueArrayCsv(
                                                                value,
                                                                "email",
                                                                i
                                                            );
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    {(skills as Skill[]).map(
                                                        (
                                                            { value: skill },
                                                            indexSkill
                                                        ) => {
                                                            return (
                                                                <Badge
                                                                    key={
                                                                        indexSkill
                                                                    }
                                                                    color={getColorBadge(
                                                                        skill.toLowerCase()
                                                                    )}
                                                                    {...styleBadge}
                                                                >
                                                                    {skill}
                                                                </Badge>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td>
                                                    {/* <Input
                                                        id="sector"
                                                        name="sector"
                                                        type={"text"}
                                                        value={sector}
                                                        onChange={({
                                                            target: { value },
                                                        }) => {
                                                            onChangeValueArrayCsv(
                                                                value,
                                                                "sector",
                                                                i
                                                            );
                                                        }}
                                                    /> */}
                                                    <ReactSelect
                                                        styles={
                                                            customStyleReactSelectPrimary
                                                        }
                                                        onChange={(
                                                            newValue
                                                        ) => {
                                                            setArrayCsv(
                                                                (prev) => {
                                                                    const copyPrev =
                                                                        prev.map(
                                                                            (
                                                                                mappedPrev,
                                                                                index
                                                                            ) =>
                                                                                i ===
                                                                                index
                                                                                    ? {
                                                                                          ...mappedPrev,
                                                                                          sector: newValue as {
                                                                                              label: string;
                                                                                              value: string;
                                                                                          },
                                                                                      }
                                                                                    : mappedPrev
                                                                        );
                                                                    return [
                                                                        ...copyPrev,
                                                                    ];
                                                                }
                                                            );
                                                        }}
                                                        value={sector}
                                                        options={(
                                                            sectorsSelector ||
                                                            []
                                                        ).map(
                                                            ({
                                                                _id,
                                                                value,
                                                            }) => ({
                                                                label: value,
                                                                value: _id,
                                                            })
                                                        )}
                                                    />
                                                </td>
                                                <td
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {uploaded === undefined ? (
                                                        "-"
                                                    ) : uploaded ? (
                                                        <CheckCircle
                                                            color="green"
                                                            size={14}
                                                        />
                                                    ) : (
                                                        <>
                                                            <RefreshCcw
                                                                onClick={() =>
                                                                    handleRetryAddNewPerson(
                                                                        i
                                                                    )
                                                                }
                                                                cursor={
                                                                    "pointer"
                                                                }
                                                                color="red"
                                                                size={14}
                                                            />
                                                        </>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={onCloseModal}>
                    Close
                </Button>
                <Button
                    disabled={!isUploaded}
                    onClick={() => addNewPersonsFromCsv()}
                >
                    upload data
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalUploadCsv;
