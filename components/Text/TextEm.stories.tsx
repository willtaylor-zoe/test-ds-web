import { Meta, StoryObj } from '@storybook/react'
import { DSTextEm } from './Text'

const meta: Meta<typeof DSTextEm> = {
  title: 'Typography/TextEm',
  component: DSTextEm,
}

export default meta

type Story = StoryObj<typeof DSTextEm>

export const TextEm: Story = {
  args: {
    children: 'This is a strong text.',
    as: 'p',
    variant: 'fluid-paragraph-400',
  },
}
