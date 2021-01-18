import React from 'react'
import { Button, ButtonProps } from '@material-ui/core'
import { action } from '@storybook/addon-actions'
import ButtonList from './index'

import { Story, Meta } from '@storybook/react/types-6-0'

export interface MyButtonProps extends ButtonProps {
  label: string
}

export default {
  component: Button,
  title: 'MaterialUI/Material Button',
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'default'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'outlined', 'contained'],
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<MyButtonProps> = ({ color, variant, label, ...rest }) => {
  return (
    <Button color={color} variant={variant}>
      {label}
    </Button>
  )
}

export const SingleButton = Template.bind({})
SingleButton.args = {
  color: 'default',
  variant: 'contained',
  label: 'My Button',
}

export const Buttons = () => <ButtonList />

//  const Default = () => (
//   <Button onClick={action('Default button clicked')} variant='contained'>
//     Default
//   </Button>
// )

// export const Primary = () => (
//   <Button color='primary' onClick={action('Primary button clicked')} variant='contained'>
//     Primary
//   </Button>
// )

// export const Secondary = () => (
//   <Button color='secondary' onClick={action('Secondary button clicked')} variant='contained'>
//     Secondary
//   </Button>
// )
