/// <reference types="react" />
import { TypographyProps } from "@doar/shared/styled";
interface IProps {
    title: string;
    desc?: string;
    descProps?: TypographyProps;
    titleProps?: TypographyProps;
}
declare const SectionTitle: ({ title, desc, descProps, titleProps }: IProps) => JSX.Element;
export default SectionTitle;
