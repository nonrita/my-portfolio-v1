import type { Meta, StoryObj } from '@storybook/react';
import CircleImage from './CircleImage';
import defaltImage from '@/assets/myself-image.jpg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'CircleImage',
  component: CircleImage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof CircleImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: defaltImage,
  },
};
