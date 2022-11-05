/// <reference types="react" />
interface IImgProps {
    alignMent?: "top" | "middle" | "end";
    children: React.ReactNode;
}
declare const MediaLeft: ({ children, alignMent, ...restProps }: IImgProps) => JSX.Element;
export default MediaLeft;
