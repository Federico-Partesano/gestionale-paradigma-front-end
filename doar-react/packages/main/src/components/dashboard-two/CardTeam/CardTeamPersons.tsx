import { Avatar, AvatarInitial } from "@doar/components";
import React, { FC } from "react";
import { Person } from "../../../models/Person";
import "./CardTeamPersons.scss";

interface ICardTeam {
    person: Person;
    contractType: string;
}

const CardTeamPersons: FC<ICardTeam> = ({
    person: { _id, name, surname },
    contractType,
}) => {
    return (
        <div className="container-person">
            <Avatar size={"xs"} shape={"circle"}>
                <AvatarInitial>{contractType}</AvatarInitial>
            </Avatar>
            <span>{`${surname} ${name}`}</span>
        </div>
    );
};

export default CardTeamPersons;
