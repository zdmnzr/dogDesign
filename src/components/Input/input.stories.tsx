import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './input'

const inputMeta: ComponentMeta<typeof Input> = {
  title: '第九章: Input',
  component: Input
}

export default inputMeta

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <>
      <Input {...args}></Input>
      <Input {...args}></Input>
    </>
  )
}

// const ControlledInput = () => {
//   const [value, setValue] = useState('')
//   return <Input value={value} defaultValue={value} onChange={(e) => {setValue(e.target.value)}}/>
// }


export const DefaultInput = Template.bind({})
DefaultInput.args = {
  placeholder: 'Default Input',
}
DefaultInput.storyName = 'DefaultInput'


export const LargeInput = Template.bind({})
LargeInput.args = {
  style:{width:'500px'},
  placeholder: 'Large Input',
  size: 'lg'
}
LargeInput.storyName = 'largeInput'


export const SmallInput = Template.bind({})
SmallInput.args = {
  placeholder: 'Small Input',
  size: 'sm'
}
SmallInput.storyName = 'SmallInput'


export const DisabledInput = Template.bind({})
DisabledInput.args = {
  placeholder: 'Disabled Input',
  disabled: true
}
DisabledInput.storyName = 'DisabledInput'


export const IconInput = Template.bind({})
IconInput.args = {
  placeholder: 'Icon Input',
  icon: "search"
}
IconInput.storyName = 'IconInput'


export const PrepandInput = Template.bind({})
PrepandInput.args = {
  placeholder: 'Prepand Input',
  prepend: "https://"
}
PrepandInput.storyName = 'PrepandInput'


export const AppendInput = Template.bind({})
AppendInput.args = {
  placeholder: 'Append Input',
  append: ".com"
}
AppendInput.storyName = 'AppendInput'
