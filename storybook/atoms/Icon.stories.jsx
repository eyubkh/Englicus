import { Icon as Component } from "@component/atoms/icon/Icon";

export default {
  title: "UI Web/atoms",
  component: Component,
  argTypes: {
    icon: {
      options: [
        "CircleCheck",
        "XMark",
        "Lang",
        "CircleXMark",
        "Rotate",
        "Error icon",
      ],
      control: { type: "radio" },
    },
  },
};

export const Icon = (args) => <Component {...args} />;

Icon.args = {
  icon: "circleCheck",
  size: "120px",
};
