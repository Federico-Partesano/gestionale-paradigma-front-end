interface AlertProps {
    $variant: "contained" | "outlined";
    $color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    $solid: boolean;
    $hasLink: boolean;
    $isDismissible: boolean;
    $hasIcon: boolean;
}
export declare const StyledAlert: import("styled-components").StyledComponent<"div", any, AlertProps, never>;
export {};
