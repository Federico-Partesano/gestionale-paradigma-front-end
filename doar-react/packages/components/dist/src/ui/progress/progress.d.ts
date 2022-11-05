/// <reference types="react" />
import { SpaceProps } from "@doar/shared/styled";
export interface IProps extends SpaceProps {
    /**
     * Extra Class Name
     */
    className?: string;
    /**
     * Current value of progress
     */
    now: number;
    /**
     * Minimum value progress can begin from
     */
    min?: number;
    /**
     * Maximum value progress can reach
     */
    max?: number;
    /**
     * Show label that represents visual percentage. EG. 60%
     */
    isLabel?: boolean;
    /**
     * Progress Bar Background Color.
     */
    bg?: string;
    /**
     * Progress Bar Height
     */
    height?: string;
    /**
     * Uses a gradient to create a striped effect.
     */
    striped?: boolean;
    /**
     * Animate's the stripes from right to left
     */
    animated?: boolean;
    /**
     * Pass opacity of progress bar
     */
    opacity?: number;
}
declare const Progress: {
    ({ className, now, min, max, isLabel, bg, height, striped, animated, opacity, ...restProps }: IProps): JSX.Element;
    defaultProps: {
        now: number;
        min: number;
        max: number;
        bg: string;
        height: string;
        striped: boolean;
        animated: boolean;
    };
};
export default Progress;
