import { toast } from "react-hot-toast";

const defaultOption: Parameters<typeof toast.custom>[1] = {
    duration: 5000,
    position: "bottom-center",
    className: "ml-3 text-sm font-normal",
    style: {
        color: "rgb(107 114 128)",
        padding: "1rem",
    },
};

export const useToast = () => {
    const showToast = (type: "success" | "error", message: string) => {
        toast[type](message, defaultOption);
    };

    return { showToast };
};
