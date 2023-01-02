export const CountdownSchema = (props) => {
  const {intl} = props;
  const currentDate = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(currentDate.getDate() + 0);
  const defaultDate = tomorrow.toISOString();

  return {
    title: 'Countdown Block',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'countToDate', 'endMessage', 'showHour', 'showMinute', 'showSecond', 'emphasis'],
      },
    ],

    properties: {
      title: {
        title: 'Count Title',
        default: 'Countdown to Next event',
      },
      countToDate: {
        title: 'Countdown to Date',
        widget: 'datetime',
        default: currentDate.toISOString(),
      },
      endMessage: {
        title: 'End Message',
        default: 'Countdown is over',
      },
      showHour: {
        title: 'Show Hours',
        type: 'boolean',
        default: true,
      },
      showMinute: {
        title: 'Show minutes',
        type: 'boolean',
        default: true,
      },
      showSecond: {
        title: 'Show Seconds',
        type: 'boolean',
        default: true,
      },
      emphasis: {
        title: 'Emphasis',
        choices: [
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
        ],
      },
    },
    required: [],
  };
};
