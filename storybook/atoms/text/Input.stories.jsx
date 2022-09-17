import { TextField as Component } from "@component/atoms/text";

export default {
  title: "UI Web/atoms/Text",
  component: Component,
  argTypes: {
    isDisabled: {
      control: { type: "boolean" },
    },
  },
};

export const TextField = (args) => <Component {...args} />;

TextField.args = {
  isDisabled: false,
};
