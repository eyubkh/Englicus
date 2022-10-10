import { ProgressBar as Component } from '@components/atoms/ProgressBar'

export default {
  title: 'UI Web/atoms',
  component: Component,
  argTypes: {
    progress: { control: { type: 'number', min: 0, max: 100, step: 2 } }
  }
}

const Template = (args) => <Component {...args} />

export const ProgressBar = Template.bind({})

ProgressBar.args = {
  progress: 50
}
