import {
    Spinner,
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalTitle,
    Button,
} from "@doar/components";
import React, { FC, Fragment, useEffect, useState } from "react";
import { useTeams } from "../../../hooks/useTeams";
import { Col, Row } from "styled-bootstrap-grid";
import "./SectionTeams.scss";
import { Edit, FileMinus, Plus } from "react-feather";
import ModalAddAndEditTeam from "../../../components/dashboard-two/ModalAddAndEditTeam/ModalAddAndEditTeam";
import { ContractType, Team } from "../../../models/Teams";
import Tippy from "@tippyjs/react";
import CustomTippy from "@tippyjs/react/headless"; // different import path!
import dayjs from "dayjs";
import { cutString } from "../../../utils/editString";
import { Person } from "../../../models/Person";

const SectionTeams: FC = () => {
    const [show, setShow] = useState(false);
    const [selectedDeleteTeam, setSelectedDeleteTeam] = useState<Team>();
    const [selectedTeam, setSelectedTeam] = useState<Team>();
    const [isLoadingDeleteTeam, setIsLoadingDeleteTeam] = useState(false);
    const { fetchTeams, teams, deleteTeam, resetTeams, loading } = useTeams();
    useEffect(() => {
        // eslint-disable-next-line
        fetchTeams();
        return () => {
            resetTeams();
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setShow(Boolean(selectedTeam));
    }, [selectedTeam]);

    const onEditTeam = () => {
        // eslint-disable-next-line
        fetchTeams();
        setShow(false);
    };

    const removeTeam = async (_id: string) => {
        setIsLoadingDeleteTeam(true);
        try {
            await deleteTeam(_id);
        } catch (error) {
            console.error("error", error);
        } finally {
            setSelectedDeleteTeam(undefined);
            setIsLoadingDeleteTeam(false);
        }
    };

    const getColorBadge = (
        percentual: number
    ): { className: string; color: "warning" | "success" | "danger" } => {
        switch (true) {
            case percentual === 0:
                return { className: "", color: "warning" };

            case percentual > 1 && percentual <= 50:
                return { className: "background-orange", color: "success" };

            case percentual > 50 && percentual <= 99:
                return {
                    className: "background-light-green",
                    color: "success",
                };
            case percentual === 100:
                return { className: "", color: "success" };

            default:
                return { className: "", color: "danger" };
        }
    };
    const RenderTestCard: FC<{ team: Team }> = ({ team }) => {
        return (
            <div className="container-card">
                <div className="container-front">
                    <p className="card">{team.name}</p>
                    <p className="description">{team.description}</p>
                </div>
                <div className="pointer-edit">
                    <Edit
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedTeam(team);
                        }}
                    />
                </div>
                <div className="pointer">
                    <div className="test-2">READ</div>
                    <div className="test">
                        <span>Data inizio</span>
                        <span>Data fine</span>
                        <Edit />
                    </div>
                </div>
            </div>
        );
    };

    const renderCustomPersonTippy = (
        { name, surname, skills, email, sector, workLoad }: Person,
        attr: any,
        contractType: ContractType
    ) => {
        return (
            <div
                className="container-cutom-person-tippy"
                tabIndex={-1}
                {...attr}
            >
                <div className="d-flex justify-between">
                    <span className="name-person">{`${surname} ${name}`}</span>
                    <span>{contractType}</span>
                </div>
                <p className="font-weight-900 text-center mb-0">Email</p>
                <p className="text-center mb-1">{email}</p>
                <p className="font-weight-900 text-center mb-0">Sector</p>
                <p className="text-center mb-1">{sector?.value || ""}</p>
                <p className="font-weight-900 text-center mb-0">Work load</p>
                <p className="text-center mb-1">
                    <Badge
                        className={getColorBadge(workLoad).className}
                        color={getColorBadge(workLoad).color}
                    >
                        {`${workLoad}%`}
                    </Badge>
                </p>
                <p className="text-center font-weight-700 mb-0">Skills</p>
                <div className="container-skills mb-1">
                    {skills.map(({ value }, i) => (
                        <span className="skill" key={i}>
                            {value}
                        </span>
                    ))}
                </div>
            </div>
        );
    };
    const RenderTestCard2: FC<{ team: Team }> = ({ team }) => {
        const {
            name: nameTeam,
            description,
            startDate,
            endDate,
            persons: personsTeam,
            _id: _idTeam,
        } = team;
        const persons = personsTeam.filter(({ person }) => Boolean(person));
        return (
            <div className="container-card-2">
                <div className="left">
                    <span className="name">{nameTeam}</span>
                </div>
                <div className="right">
                    <div className="container-header">
                        <div className="container-date">
                            <span className="label">Data inizio</span>
                            <span className="value">
                                {dayjs(startDate).format("DD/MM/YYYY")}
                            </span>
                        </div>
                        <div className="container-date">
                            <span className="label">Data fine</span>
                            <span className="value">
                                {endDate
                                    ? dayjs(endDate).format("DD/MM/YYYY")
                                    : "-"}
                            </span>
                        </div>
                    </div>
                    <Tippy
                        disabled={description?.length < 100}
                        content={description}
                    >
                        <p className="description">
                            {description ? cutString(description, 100) : ""}
                        </p>
                    </Tippy>
                    <p className="font-weight-900 mb-0 text-center">Persons</p>
                    {persons.length ? (
                        <div className="container-team-persons">
                            {persons.map(({ person, contractType }, i) => {
                                if (!person) return <Fragment key={i} />;
                                const { name, surname, _id } = person;
                                return (
                                    <CustomTippy
                                        key={i}
                                        delay={200}
                                        render={(attr) =>
                                            renderCustomPersonTippy(
                                                person,
                                                attr,
                                                contractType
                                            )
                                        }
                                    >
                                        {/* // eslint-disable-next-line */}
                                        <span className="person-team">{`${name} ${surname}`}</span>
                                    </CustomTippy>
                                );
                            })}
                        </div>
                    ) : (
                        <p>Non ci sono persone assegnate</p>
                    )}
                    <div className="flex-1" />
                    <div className="container-footer-card">
                        <Edit
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTeam(team);
                            }}
                            cursor={"pointer"}
                            size={15}
                        />
                        <FileMinus
                            size={15}
                            cursor={"pointer"}
                            color={"red"}
                            onClick={() => setSelectedDeleteTeam(team)}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="container-title">
                <h1 className="title">Projects</h1>
                <Plus
                    cursor={"pointer"}
                    color={"green"}
                    onClick={() => setShow(true)}
                />
            </div>
            <div className="container-section-teams">
                <Row style={{ width: "100%" }}>
                    {loading ? (
                        <div className="cotainer-spinner">
                            <Spinner size={"lg"} />
                        </div>
                    ) : (
                        <>
                            {teams &&
                                teams.docs.map((team) => {
                                    return (
                                        <Col key={team._id} xs={12} lg={6}>
                                            <RenderTestCard2 team={team} />
                                        </Col>
                                    );
                                })}
                        </>
                    )}
                </Row>
            </div>
            <ModalAddAndEditTeam
                show={show}
                setShow={setShow}
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
                onChange={onEditTeam}
            />
            <Modal
                show={Boolean(selectedDeleteTeam)}
                onClose={() => {
                    setSelectedDeleteTeam(undefined);
                }}
            >
                <ModalBody p={32}>
                    <h3 className="text-center mb-4">{`Remove ${
                        selectedDeleteTeam?.name || ""
                    }?`}</h3>
                    <div className="d-flex justify-center gap-2">
                        <Button
                            color="secondary"
                            onClick={() => {
                                setSelectedDeleteTeam(undefined);
                            }}
                        >
                            Close
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => removeTeam(selectedDeleteTeam!._id)}
                            disabled={isLoadingDeleteTeam}
                        >
                            {isLoadingDeleteTeam ? (
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
                            ) : (
                                "Delete"
                            )}
                        </Button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default SectionTeams;
