import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Sector } from "../../../models/Sectors";
import stringSimilitary from "string-similarity";
import { Formik, useFormikContext } from "formik";
import { useEndpoints } from "../../../hooks/useEndpoints";
import { addNewSector, editSector } from "../../../redux/slices/sectors";
import {
    Button,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from "@doar/components";
import "./ModalAddNewSector.scss";

interface IModalAddNewSector {
    show: boolean;
    onClose: () => void;
    onSubmit: () => Promise<void>;
    selectedSector?: Sector;
}

const { equal, similar } = {
    equal: "Error this sector already exists",
    similar: "Warning: this sector is similar to:",
} as const;

const ModalAddNewSector: FC<IModalAddNewSector> = ({
    show,
    onClose,
    onSubmit,
    selectedSector,
}) => {
    const { sectors: sectorsSelector } = useAppSelector(
        ({ sectors }) => sectors
    );
    const dispatch = useAppDispatch();
    const {
        editSector: editSectorEndpoint,
        addNewSector: addNewSectorEnpoint,
    } = useEndpoints();

    const checkSimilitarySectors = (skill: string) => {
        if (!sectorsSelector) return [];
        return sectorsSelector.reduce((acc, { value }) => {
            return stringSimilitary.compareTwoStrings(skill, value) > 0.7
                ? [...acc, value]
                : acc;
        }, [] as string[]);
    };

    const handleCheckError = (valueForm: string) => {
        if ((sectorsSelector || []).some(({ value }) => value === valueForm)) {
            // Return when skill is equal antother skill
            return equal;
        }
        const similitarySkills = checkSimilitarySectors(valueForm);
        if (similitarySkills.length) {
            return `${similar} ${similitarySkills.join(", ")}`;
        }
    };

    return (
        <Formik
            enableReinitialize
            validateOnChange
            initialValues={{ value: selectedSector?.value || "" }}
            // eslint-disable-next-line
            onSubmit={async ({ value }, { setSubmitting }) => {
                setSubmitting(true);
                try {
                    if (selectedSector) {
                        // eslint-disable-next-line
                        await editSectorEndpoint(selectedSector!._id, value);
                        dispatch(
                            editSector({ _id: selectedSector._id, value })
                        );
                    } else {
                        const { data } = await addNewSectorEnpoint(value);
                        dispatch(addNewSector(data));
                    }
                    await onSubmit();
                    onClose();
                    // eslint-disable-next-line
                } catch (error) {
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
                const error = handleCheckError(values.value);
                return (
                    <form onSubmit={handleSubmit}>
                        <Modal show={show} onClose={onClose}>
                            <ModalHeader>
                                <ModalTitle>Skill</ModalTitle>
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
                                        value={values.value}
                                        onChange={handleChange}
                                        name="value"
                                        id="value"
                                    />
                                    <p className="color-red font-italic">
                                        {error}
                                    </p>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={handleSubmit}
                                    disabled={error === equal}
                                >
                                    Submit
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </form>
                );
            }}
        </Formik>
    );
};

export default ModalAddNewSector;
