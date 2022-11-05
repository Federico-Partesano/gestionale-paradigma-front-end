import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Mail, Slash, User, MoreVertical, Edit } from "react-feather";
import {
    Avatar,
    AvatarInitial,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
} from "@doar/components";
import {
    StyledListMiddle,
    StyledListTitle,
    StyledListText,
    StyledListEnd,
    StyledNavIcon,
    StyledNavLink,
    StyledDropdown,
} from "./style";
import { Person } from "../../../models/Person";

const Item = ({
    person,
    setSelectedPerson,
    onRemove,
}: {
    person: Person;
    onRemove: (id: string) => void;
    setSelectedPerson: Dispatch<SetStateAction<Person | undefined>>;
}) => {
    // const op = bg === "gray600" ? 1 : 0.5;
    const op = "gray600";
    const { name, surname, email, _id: id, workLoad } = person;
    const initialAvatar = () => {
        return `${surname.substring(0, 1)}${name.substring(0, 1)}`;
    };
    return (
        <>
            <Avatar display={["none", "block"]}>
                {/* {image && <img src={image} alt={name} />} */}

                <AvatarInitial bg={undefined} opacity={op}>
                    {initialAvatar()}
                </AvatarInitial>
            </Avatar>
            <StyledListMiddle>
                <StyledListTitle>
                    {`${surname} ${name} - `}{" "}
                    <Badge
                        color={
                            workLoad > 101
                                ? "danger"
                                : workLoad > 50
                                ? "warning"
                                : "success"
                        }
                    >
                        {`${workLoad}%`}
                    </Badge>
                </StyledListTitle>
                <a href={`mailto:${email}`}>
                    <StyledListText>{email}</StyledListText>
                </a>
            </StyledListMiddle>
            <StyledListEnd>
                <StyledNavIcon>
                    <StyledNavLink
                        href="#"
                        onClick={(
                            e: MouseEvent<HTMLButtonElement, MouseEvent>
                        ) => {
                            e.preventDefault();
                            setSelectedPerson(person);
                        }}
                        display={["none", "block"]}
                    >
                        <Edit size="24" />
                    </StyledNavLink>
                    <StyledNavLink
                        href={`mailto:${email}`}
                        display={["none", "block"]}
                    >
                        <Mail size="24" />
                    </StyledNavLink>
                    <StyledNavLink
                        href="#"
                        onClick={(
                            e: MouseEvent<HTMLButtonElement, MouseEvent>
                        ) => {
                            e.preventDefault();
                            onRemove(id);
                        }}
                        display={["none", "block"]}
                    >
                        <Slash size="24" />
                    </StyledNavLink>

                    <StyledNavLink href={""} display={["none", "block"]}>
                        <User size="24" />
                    </StyledNavLink>
                    <StyledDropdown direction="left">
                        <DropdownToggle variant="texted">
                            <MoreVertical size="18" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem path={""}>
                                <Mail size="15" /> Messages
                            </DropdownItem>
                            <DropdownItem path={""}>
                                <User size="15" />
                                Profile
                            </DropdownItem>
                            <DropdownItem path="#">
                                <Slash size="15" /> Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </StyledDropdown>
                </StyledNavIcon>
            </StyledListEnd>
        </>
    );
};

export default Item;
