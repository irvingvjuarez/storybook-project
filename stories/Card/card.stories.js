import { createCard } from "./card";

export default {
    title: "Atoms/Card",
    argTypes: {
        size: {
            name: "Size",
            options: ["small", "medium", "large"],
            control: {
                type: "select",
            }
        },
        style: {
            options: ["primary", "secondary"],
            control: {
                type: "select",
            }
        }
    }
}

const Template = ({...args}) => {
    return createCard({...args});
}

export const Default = Template.bind({});
Default.args = {
    size: "medium",
    style: "primary",
    title: "Card title",
    description: "Card description",
    initials: "AB"
}