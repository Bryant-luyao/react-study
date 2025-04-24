import type { Meta, StoryObj } from '@storybook/react';
import Calendar, { CalendarProps } from '../components/Calendar';
import dayjs from 'dayjs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '日历组件',
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    value: {
        control: 'date'
    }
  }

} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderCalendar = (args: CalendarProps) => {
    if(typeof args.value === 'number') {
        return <Calendar {...args} value={dayjs(new Date(args.value))}/>
    }
    return <Calendar {...args}/>
}

export const Value: Story = {
    args: {
        value: dayjs('2023-11-08')
    },
    render: renderCalendar
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DateRender: Story = {
  args: {
    value: dayjs('2025-05-01'),
    dateRender(currentDate) {
        return <div>
            日期{currentDate.date()}
        </div>
    },
  },
  render: renderCalendar
};

export const DateInnerContent: Story = {
    args: {
        value: dayjs('2025-05-01'),
        dateInnerContent(currentDate) {
            return <div>
                日期{currentDate.date()}
            </div>
        }
    },
    render: renderCalendar
};

export const Locale: Story = {
    args: {
        value: dayjs('2025-05-01'),
        locale: 'en-US'
    },
    render: renderCalendar
};
