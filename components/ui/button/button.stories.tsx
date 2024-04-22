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
    children: { type: 'string', description: '버튼의 내용을 출력합니다.' },
    disabled: {
      type: 'boolean',
      description: '버튼 활성/비활성시 스타일을 적용합니다.',
    },
    intent: {
      options: ['filled', 'outlined', 'text'],
      control: { type: 'radio' },
      defaultValue: 'filled',
      description: '버튼의 기본 스타일을 지정합니다.',
    },
    sizes: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      defaultValue: 'sm',
      description: '버튼의 크기를 지정합니다.',
    },
    rounded: {
      options: ['normal', 'full'],
      control: { type: 'radio' },
      defaultValue: 'normal',
      description: '버튼의 모서리 둥글기를 지정합니다.',
    },
    leadingIcon: {
      options: Object.keys(ICONS),
      mapping: ICONS,
      control: {
        type: 'select',
      },
      if: { arg: 'trailingIcon', exists: false },
      description: '버튼의 선행에 아이콘을 추가합니다.',
    },
    trailingIcon: {
      options: Object.keys(ICONS),
      mapping: ICONS,
      control: {
        type: 'select',
      },
      if: { arg: 'leadingIcon', exists: false },
      description: '버튼의 후행에 아이콘을 추가합니다.',
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
