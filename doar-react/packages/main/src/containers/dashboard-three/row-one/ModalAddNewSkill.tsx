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
import { Formik } from "formik";
import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Skill } from "../../../models/Skills";
import stringSimilitary from "string-similarity";
import { useEndpoints } from "../../../hooks/useEndpoints";
import { addNewSkill, editSkill } from "../../../redux/slices/skills";
import "./ModalAddNewSkill.scss";

interface IModalAddNewSkill {
    show: boolean;
    onClose: () => void;
    onSubmit: () => Promise<void>;
    selectedSkill?: Skill;
}

const { equal, similar } = {
    equal: "Error this skill already exists",
    similar: "Warning: this skill is similar to:",
} as const;

const ModalAddNewSkill: FC<IModalAddNewSkill> = ({
    show,
    onClose,
    onSubmit,
    selectedSkill,
}) => {
    const { skills: skillsSelector } = useAppSelector(({ skills }) => skills);
    const dispatch = useAppDispatch();
    const { addNewSkill: addNewSkillEndpoint, editSkill: editSkillEndpoint } =
        useEndpoints();
    const checkSimilitarySkills = (skill: string) => {
        if (!skillsSelector) return [];
        return skillsSelector.reduce((acc, { value }) => {
            return stringSimilitary.compareTwoStrings(skill, value) > 0.7
                ? [...acc, value]
                : acc;
        }, [] as string[]);
    };

    const handleCheckError = (valueForm: string) => {
        if ((skillsSelector || []).some(({ value }) => value === valueForm)) {
            // Return when skill is equal antother skill
            return equal;
        }
        const similitarySkills = checkSimilitarySkills(valueForm);
        if (similitarySkills.length) {
            return `${similar} ${similitarySkills.join(", ")}`;
        }
    };

    return (
        <Formik
            enableReinitialize
            validateOnChange
            initialValues={{ value: selectedSkill?.value || "" }}
            // eslint-disable-next-line
            onSubmit={async ({ value }, { setSubmitting }) => {
                setSubmitting(true);
                try {
                    if (selectedSkill) {
                        // eslint-disable-next-line
                        await editSkillEndpoint(selectedSkill!._id, value);
                        dispatch(editSkill({ _id: selectedSkill._id, value }));
                    } else {
                        const { data } = await addNewSkillEndpoint(value);
                        dispatch(addNewSkill(data));
                    }
                    await onSubmit();
                    onClose();
                    // eslint-disable-next-line
                } catch (error) {
                } finally {
                    setSubmitting(false);
                }
            }}
            // validate={(values) => {
            //     const errors: Record<string, string> = {};
            //     if (
            //         (skillsSelector || []).some(
            //             ({ value }) => value === values.value
            //         )
            //     ) {
            //         // Return when skill is equal antother skill
            //         return { ...errors, value: equal };
            //     }
            //     const similitarySkills = checkSimilitarySkills(values.value);
            //     if (similitarySkills.length) {
            //         errors.value = `${similar} ${similitarySkills.join(", ")}`;
            //     }
            //     return errors;
            // }}
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
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
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

export default ModalAddNewSkill;
