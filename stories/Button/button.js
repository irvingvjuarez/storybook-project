import "./button.css";

export const createButton = ({
    style = "primary",
    size,
    label
}) => {
    const button = document.createElement("button");
    button.type = "submit";
    button.role = "button";
    button.className = ["button", `button--${style}`, `button--${size}`].join(" ");
    button.textContent = label;

    return button;
}
