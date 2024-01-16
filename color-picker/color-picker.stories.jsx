import ColorPicker from './index'
import { useState } from 'react'

export default {
  title: 'ColorPicker',
  component: ColorPicker,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
  return <ColorPicker />
}

export const FirstStory = Template.bind({})

FirstStory.args = {}
