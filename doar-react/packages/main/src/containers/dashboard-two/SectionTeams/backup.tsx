import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Spinner,
} from "@doar/components";
import React, { FC, useEffect, useState } from "react";
import { useTeams } from "../../../hooks/useTeams";
import { Col, Row } from "styled-bootstrap-grid";
import "./SectionTeams.scss";
import CardTeamPersons from "../../../components/dashboard-two/CardTeam/CardTeamPersons";
import { Edit, FileMinus, Plus } from "react-feather";
import ModalAddAndEditTeam from "../../../components/dashboard-two/ModalAddAndEditTeam/ModalAddAndEditTeam";
import { Team } from "../../../models/Teams";

const SectionTeams2: FC = () => {
    const [show, setShow] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState<Team>();
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
        try {
            await deleteTeam(_id);
        } catch (error) {
            console.error("error", error);
        }
    };

    const renderTestCard: FC = () => {
        return (
            <div>
                <p>test</p>
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
                                    const { _id, name, persons, description } =
                                        team;
                                    return (
                                        <Col key={_id} xs={12} lg={6}>
                                            <Card
                                                width={["100%", "100%"]}
                                                color={"secondary"}
                                                mb={"0.7rem"}
                                            >
                                                <CardHeader>
                                                    <div className="container-header">
                                                        <span>{name}</span>
                                                        <div className="container-options">
                                                            <Edit
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    setSelectedTeam(
                                                                        team
                                                                    );
                                                                }}
                                                                cursor={
                                                                    "pointer"
                                                                }
                                                                size={15}
                                                            />
                                                            <FileMinus
                                                                size={15}
                                                                cursor={
                                                                    "pointer"
                                                                }
                                                                color={"red"}
                                                                onClick={() =>
                                                                    removeTeam(
                                                                        _id
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                                <CardBody>
                                                    {Boolean(
                                                        persons?.length
                                                    ) && (
                                                        <>
                                                            <Row>
                                                                {React.Children.toArray(
                                                                    // eslint-disable-next-line
                                                                    persons.map(
                                                                        ({
                                                                            person,
                                                                            contractType,
                                                                        }) => {
                                                                            if (
                                                                                !person
                                                                            )
                                                                                return (
                                                                                    <>

                                                                                    </>
                                                                                );
                                                                            return (
                                                                                // eslint-disable-next-line
                                                                                <Col
                                                                                    lg={
                                                                                        6
                                                                                    }
                                                                                    style={{
                                                                                        marginTop:
                                                                                            "0.5rem",
                                                                                    }}
                                                                                >
                                                                                    <CardTeamPersons
                                                                                        person={
                                                                                            person
                                                                                        }
                                                                                        contractType={
                                                                                            contractType
                                                                                        }
                                                                                    />
                                                                                </Col>
                                                                            );
                                                                        }
                                                                    )
                                                                )}
                                                            </Row>
                                                        </>
                                                    )}
                                                    <div className="separator" />
                                                    <CardText>
                                                        {description}
                                                    </CardText>
                                                </CardBody>
                                            </Card>
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
        </>
    );
};

export default SectionTeams2;
