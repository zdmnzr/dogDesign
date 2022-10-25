import React from 'react'
import Button from './button'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const buttonMeta: ComponentMeta<typeof Button> = {
  title: '第四章: Button',
  component: Button
}

export default buttonMeta

const Template: ComponentStory<typeof Button> = (args)=>{
  return <Button {...args}></Button>
}

export const Default = Template.bind({})
Default.args={
  children:'Default Button'
}
// 下面三行和上面三行是一个意思，上面是模板写法，省略相同的代码。
// export const Default: ComponentStory<typeof Button> = (args) => {
//   return <Button {...args}>Default Button</Button>
// }
Default.storyName = '默认按钮样式'

export const LargeButton = Template.bind({})
LargeButton.args={
  children:'Large Button',
  size:'lg'
}
LargeButton.storyName='largeButton'

export const SmallButton = Template.bind({})
SmallButton.args={
  children:'Small Button',
  size:'sm'
}
SmallButton.storyName='smallButton'

export const PrimaryButton = Template.bind({})
PrimaryButton.args={
  children:'Primary Button',
  btnType:'primary'
}
PrimaryButton.storyName='primaryButton'

export const DangerButton = Template.bind({})
DangerButton.args={
  children:'Danger Button',
  btnType:'danger'
}
DangerButton.storyName='dangerButton'

export const LinkButton = Template.bind({})
LinkButton.args={
  children:'Link Button',
  btnType:'link'
}
LinkButton.storyName='linkButton'

// export const ButtonWithSize: ComponentStory<typeof Button> = () => {
//   return (
//     <>
//       <Button size='sm'>small button</Button>
//       <Button size='lg'>large button</Button>
//     </>
//   )
// }
// ButtonWithSize.storyName = '不同尺寸的按钮'

// export const ButtonWithType: ComponentStory<typeof Button> = () => {
//   return (
//     <>
//       <Button btnType='primary'>primary button</Button>
//       <Button btnType='danger'>danger button</Button>
//       <Button btnType='link'>link button</Button>
//     </>
//   )
// }
// ButtonWithType.storyName = '不同类型的按钮'
