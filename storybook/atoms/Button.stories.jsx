import { Button as Component } from "@component/atoms/Button";

export default {
  title: "UI Web/atoms",
  component: Component,
  argTypes: {
    variant: {
      options: ["Success", "Error", "Transparent", "Default"],
      control: { type: "radio" },
    },
  },
};

export const Button = (args) => <Component {...args}></Component>;

Button.args = {
  children: "Default",
  variant: "default",
};
