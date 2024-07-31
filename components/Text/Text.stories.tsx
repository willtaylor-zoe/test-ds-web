import { Meta, StoryObj } from '@storybook/react'
import { DSText } from './Text'

const meta: Meta<typeof DSText> = {
  title: 'Typography/Text',
  component: DSText,
}

export default meta

type Story = StoryObj<typeof DSText>

// Story variants
export const Display1000: Story = {
  args: {
    children: 'This is a Display1000 text.',
    as: 'h1',
    variant: 'fluid-display-1000',
  },
}

export const Heading900: Story = {
  args: {
    children: 'This is a Heading900.',
    as: 'h3',
    variant: 'fluid-heading-900',
  },
}

export const Heading800: Story = {
  args: {
    children: 'This is a Heading800.',
    as: 'h4',
    variant: 'fluid-heading-800',
  },
}

export const Heading700: Story = {
  args: {
    children: 'This is a Heading700.',
    as: 'h5',
    variant: 'fluid-heading-700',
  },
}

export const Heading600: Story = {
  args: {
    children: 'This is a Heading600.',
    as: 'h6',
    variant: 'fluid-heading-600',
  },
}

export const Heading500: Story = {
  args: {
    children: 'This is a Heading500.',
    as: 'h6',
    variant: 'fluid-heading-500',
  },
}

export const Heading500Alt: Story = {
  args: {
    children: 'This is a Heading500Alt.',
    as: 'h6',
    variant: 'fluid-heading-500alt',
  },
}

export const Paragraph400: Story = {
  args: {
    children: 'This is a Paragraph400.',
    as: 'p',
    variant: 'fluid-paragraph-400',
  },
}

export const Paragraph300: Story = {
  args: {
    children: 'This is a Paragraph300.',
    as: 'p',
    variant: 'fluid-paragraph-300',
  },
}

export const Paragraph200: Story = {
  args: {
    children: 'This is a Paragraph200.',
    as: 'p',
    variant: 'fluid-paragraph-200',
  },
}

export const Label100: Story = {
  args: {
    children: 'This is a Label100.',
    as: 'p',
    variant: 'fluid-label-100',
  },
}
