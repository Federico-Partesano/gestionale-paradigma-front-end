export const customStyleReactSelectPrimary = {
    // eslint-disable-next-line
    option: (provided: any, state: any) => ({
        ...provided,
        padding: 14,
        cursor: "pointer",
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        height: "40px",
        display: "flex",
        alignItems: "center",
        minWidth: "120px",
        border: "1px solid #677287",
        borderRadius: "4px",
    }),
    // eslint-disable-next-line
    singleValue: (provided: any, state: any) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";
        // eslint-disable-next-line
        return { ...provided, opacity, transition };
    },
};
