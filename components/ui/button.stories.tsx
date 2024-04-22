import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { TvIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const ICONS = {
  TvIcon,
  AcademicCapIcon,
}
const meta = {
  title: 'Ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { type: 'string', description: 'Some text' },
    disabled: {
      type: 'boolean',
    },
    intent: { options: ['filled', 'outlined', 'text'], control: { type: 'radio' }, defaultValue: 'filled' },
    sizes: { options: ['sm', 'md', 'lg'], control: { type: 'radio' }, defaultValue: 'sm' },
    rounded: { options: ['normal', 'full'], control: { type: 'radio' }, defaultValue: 'normal' },
    leadingIcon: {
      options: Object.keys(ICONS), // An array of serializable values
      mapping: ICONS, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
      },
      if: { arg: 'trailingIcon', exists: false },
    },
    trailingIcon: {
      options: Object.keys(ICONS), // An array of serializable values
      mapping: ICONS, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
      },
      if: { arg: 'leadingIcon', exists: false },
    },
  },
  args: {
    children: 'Button',
    rounded: 'normal',
    sizes: 'sm',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    intent: 'filled',
  },
}

export const Outlined: Story = {
  args: {
    intent: 'outlined',
  },
}

export const Text: Story = {
  args: {
    intent: 'text',
  },
}

export const LeadingIcon: Story = {
  args: {
    leadingIcon: TvIcon,
  },
}
export const TrailingIcon: Story = {
  args: {
    trailingIcon: TvIcon,
  },
}
