/// <reference types="react" />
export interface IFeedback {
    children: React.ReactNode;
    state?: "success" | "warning" | "error";
    showState?: boolean;
    showErrorOnly?: boolean;
}
declare const Feedback: ({ state, showState, showErrorOnly, children }: IFeedback) => JSX.Element;
export default Feedback;
