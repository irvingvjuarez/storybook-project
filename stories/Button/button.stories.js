import {createButton} from "./button.js";

export default {
    title: "Atoms/Button"
}

const Template = ({ label, ...args }) => {
    return createButton({ label, ...args });
}

export const Default = Template.bind({});
Default.args = {
    label: "Click me",
    size: "medium",
    style: "primary"
}