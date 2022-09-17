import { DisplayText as Component } from "@component/atoms/text";

export default {
  component: Component,
  title: "UI Web/atoms/Text",
  argTypes: {
    size: {
      options: ["xxl", "xl", "l", "m", "s", "xs"],
      control: { type: "radio" },
    },
  },
};

export const DisplayText = (args) => <Component {...args} />;

DisplayText.args = {
  children: "Text content example",
  size: "m",
};
