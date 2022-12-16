



export const ButtonSchema = (props) => {
  const {intl} = props;

  return {
    title: intl.formatMessage(messages.ButtonBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'href', 'inneralign', 'emphasis'],
      },
    ],

    properties: {
      title: {
        title: props.intl.formatMessage(messages.ButtonTitle),
        default: 'Countdown to the next event',
      },
      countToDate: {
        title: 'Countdown to Date',
        widget: 'datetime',
        default: 'left',
      },
      showHour: {
        title: 'Show Hours',
        type: 'boolean',
      },
      showMinute: {
        title: 'Show minutes',
        type: 'boolean',
      },
      showSecond: {
        title: 'Show Seconds',
        type: 'boolean',
      },
      emphasis: {
        title: props.intl.formatMessage(messages.Emphasis),
        choices: [
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
          ['positive', 'Positive'],
          ['negative', 'Negative'],
        ],
      },
    },
    required: [],
  };
};
