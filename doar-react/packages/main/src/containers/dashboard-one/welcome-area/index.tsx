import { useState } from "react";
import { Mail, Printer, File } from "react-feather";
import Breadcrumb from "../../../components/breadcrumb";
import ModalPrint from "../../../components/dashboard-one/modal-print";
import ModalUploadCsv from "../../../components/dashboard-one/modal-upload-csv";
import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea = () => {
    const [showPrintModal, setShowPrintModal] = useState(false);
    const [showReportModal, setShowReportModal] = useState(false);
    const handlePrintModal = () => {
        setShowPrintModal((prev) => !prev);
    };
    const handleReportModal = () => {
        setShowReportModal((prev) => !prev);
    };
    return (
        <>
            <StyledWelcomeArea>
                <StyledWelcomeLeft>
                    <Breadcrumb
                        prev={[{ text: "Dashboard", link: "/" }]}
                        title="Persons"
                        wcText="Welcome page of persons"
                    />
                </StyledWelcomeLeft>
                <StyledWelcomeRight>
                    <StyledButton
                        size="sm"
                        ml="10px"
                        hasIcon
                        onClick={handleReportModal}
                    >
                        <File />
                        upload csv
                    </StyledButton>
                </StyledWelcomeRight>
            </StyledWelcomeArea>
            <ModalPrint show={showPrintModal} onClose={handlePrintModal} />
            <ModalUploadCsv
                show={showReportModal}
                onClose={handleReportModal}
                onFinishUpload={() => {}}
            />
        </>
    );
};

export default WelcomeArea;
