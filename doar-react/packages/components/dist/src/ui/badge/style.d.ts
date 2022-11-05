import { SpaceProps } from "@doar/shared/styled";
interface BadgeProps extends SpaceProps {
    $color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    $variant?: "contained" | "texted";
    $shape?: "rounded" | "square" | "circle";
    $pill?: boolean;
}
export declare const StyledBadge: import("styled-components").StyledComponent<"span", any, BadgeProps, never>;
export {};
