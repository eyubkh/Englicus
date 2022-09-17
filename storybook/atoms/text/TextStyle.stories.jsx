import { TextStyle as Component } from "@component/atoms/text";

export default {
  title: "UI Web/atoms/Text",
  component: Component,
  argTypes: {
    variant: {
      options: ["success", "error", "light", "grey", "purple", "default"],
      control: { type: "radio" },
    },
    bold: {
      control: { type: "boolean" },
    },
  },
};

export const TextStyle = (args) => <Component {...args} />;

TextStyle.args = {
  children: "example text",
  variant: "default",
  bold: false,
};
