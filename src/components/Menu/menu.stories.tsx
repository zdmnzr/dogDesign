import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Menu from "./menu";
import Item from "./menuItem";
import SubMenu from "./subMenu";

const menuMeta: ComponentMeta<typeof Menu> = {
  title: '第六章: Menu',
  id: 'Menu',
  component: Menu,
  subcomponents: { 'SubMenu': SubMenu, 'Item': Item },
  args: {
    defaultIndex: '1',
    defaultOpenSubMenus: ['3']
  },
  argTypes: {
    defaultIndex: {
      control: 'color',
      description: 'normal text'
    }
  },
  parameters: {
    controls: {
      matchers: {
        date: /mode$/,
      }
    }
  }
}

export default menuMeta

const Template: ComponentStory<typeof Menu> = (args) => {
  return (
    <Menu {...args}>
      <Item>
        cool link 1
      </Item>
      <Item>
        cool link 2
      </Item>
      <Item disabled>
        disabled
      </Item>
      <SubMenu title='下拉选项'>
        <Item>
          下拉选项一
        </Item>
        <Item>
          下拉选项二
        </Item>
      </SubMenu>
    </Menu>
  )
}

export const DefaultMenu = Template.bind({})
DefaultMenu.storyName = 'default Menu'

export const VerticalMenu = Template.bind({})
VerticalMenu.args = {
  defaultIndex: '0',
  mode: 'vertical'
}
VerticalMenu.argTypes = {
  defaultIndex: {
    control: 'string',
    description: 'hhhhh'
  }
},
VerticalMenu.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ]
  }
}
VerticalMenu.storyName = 'vertical Menu'


