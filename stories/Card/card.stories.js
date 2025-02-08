import { createCard } from "./card";
import { Markdown } from "@storybook/blocks";
import CardDocs from "./card.md?raw";

export default {
    title: "Atoms/Card",
    decorators: [
        (Story) => {
            const decorator = document.createElement("div");
            decorator.style.margin = "24px";
            decorator.appendChild(Story());

            return decorator;
        }
    ],
    parameters: {
        viewMode: "docs",
        docs: {
            page: null,
            description: {
                component: CardDocs,
            },
        }
    },
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