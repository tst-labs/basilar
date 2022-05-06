import React from 'react';

import Botao from './botao';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Balisar/Botão',
  component: Botao,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Botao {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Botão',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Botão',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Botão',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Botão',
};
