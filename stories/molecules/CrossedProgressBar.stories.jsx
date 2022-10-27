import { CrossedProgressBar as Component } from '@components/molecules/CrossedProgressBar'

export default {
  title: 'UI Web/molecules',
  component: Component,
  argTypes: {
    progress: { control: { type: 'number', min: 0, max: 100, step: 2 } }
  }
}

const Template = (args) => <Component {...args} />

export const CrossedProgressBar = Template.bind({})

CrossedProgressBar.args = {
  progress: 50,
  href: '#'
}
