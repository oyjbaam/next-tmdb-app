import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fullwidth: { type: 'boolean' },
    validation: { type: 'boolean', defaultValue: 'false' },
    sizes: { options: ['sm', 'md', 'lg'], control: { type: 'radio' }, defaultValue: 'md' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: '사용자 입력',
    // primary: true,
    // label: 'Button',
  },
}

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
