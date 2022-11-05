export const cutString = (string: string, length: number, dots = true) =>
    `${string.substring(0, length)}${
        dots && string && string.length > length ? "..." : ""
    }`;
