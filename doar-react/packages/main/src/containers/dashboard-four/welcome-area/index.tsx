import { useState } from "react";
import { Save, Share2, Plus } from "react-feather";
import Breadcrumb from "../../../components/breadcrumb";
import ModalSave from "../../../components/dashboard-four/modal-save";
import ModalShare from "../../../components/dashboard-four/modal-share";
import ModalCreateTicket from "../../../components/dashboard-four/modal-create-ticket";
import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea = () => {
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showTicketModal, setShowTicketModal] = useState(false);
    const handleSaveModal = () => {
        setShowSaveModal((prev) => !prev);
    };
    const handleShareModal = () => {
        setShowShareModal((prev) => !prev);
    };
    const handleTicketModal = () => {
        setShowTicketModal((prev) => !prev);
    };
    return (
        <>
            <StyledWelcomeArea>
                <StyledWelcomeLeft>
                    <Breadcrumb
                        prev={[{ text: "Dashboard", link: "/" }]}
                        title="Helpdesk Management"
                        wcText="Welcome To Dashboard"
                    />
                </StyledWelcomeLeft>
            </StyledWelcomeArea>
        </>
    );
};

export default WelcomeArea;
