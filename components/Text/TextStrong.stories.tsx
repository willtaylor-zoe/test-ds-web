import { Meta, StoryObj } from '@storybook/react'
import { DSTextStrong } from './Text'

const meta: Meta<typeof DSTextStrong> = {
  title: 'Typography/TextStrong',
  component: DSTextStrong,
}

export default meta

type Story = StoryObj<typeof DSTextStrong>

export const TextStrong: Story = {
  args: {
    children: 'This is a strong text.',
    as: 'p',
    variant: 'fluid-paragraph-400',
  },
}
