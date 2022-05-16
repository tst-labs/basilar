import React from 'react';

import { LogoBicolor } from './logo-bicolor';

export default {
  title: 'Componentes/Imagens/LogoBicolor',
  component: LogoBicolor,
  parameters: {
    backgrounds: {
      default: 'facebook',
      values: [
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },  
  argTypes: {
    largura: {
      control: { type: 'range', min: 20.0, max: 200.0, step: 0.5}
    }
  }
};

const Template = (args) => <LogoBicolor {...args} />;

export const Original = Template.bind({});
