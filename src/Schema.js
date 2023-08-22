import { defineMessages } from 'react-intl';

const messages = defineMessages({
  CountdownBlock: {
    id: 'countdown-block',
    defaultMessage: 'Countdown Block',
  },
  Default: {
    id: 'default',
    defaultMessage: 'Default',
  },
  CountTitle: {
    id: 'count-title',
    defaultMessage: 'Count Title',
  },
  CountdownToNextEvent: {
    id: 'countdown-to-next-event',
    defaultMessage: 'Countdown to Next event',
  },
  CountdownToDate: {
    id: 'countdown-to-date',
    defaultMessage: 'Countdown to Date',
  },
  EndMessage: {
    id: 'end-message',
    defaultMessage: 'End Message',
  },
  CountdownIsOver: {
    id: 'countdown-is-over',
    defaultMessage: 'Countdown is over',
  },
  ShowHours: {
    id: 'show-hours',
    defaultMessage: 'Show Hours',
  },
  ShowMinutes: {
    id: 'show-minutes',
    defaultMessage: 'Show minutes',
  },
  ShowSeconds: {
    id: 'show-seconds',
    defaultMessage: 'Show Seconds',
  },
  Emphasis: {
    id: 'emphasis',
    defaultMessage: 'Emphasis',
  },
  Primary: {
    id: 'primary',
    defaultMessage: 'Primary',
  },
  Secondary: {
    id: 'secondary',
    defaultMessage: 'Secondary',
  },
  Tertiary: {
    id: 'tertiary',
    defaultMessage: 'Tertiary',
  },
});

export const CountdownSchema = (props) => {
  const { intl } = props;
  const currentDate = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(currentDate.getDate() + 0);
  const defaultDate = tomorrow.toISOString();

  return {
    title: intl.formatMessage(messages.CountdownBlock),
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.Default),
        fields: ['title', 'countToDate', 'endMessage', 'showHour', 'showMinute', 'showSecond', 'emphasis'],
      },
    ],

    properties: {
      title: {
        title: intl.formatMessage(messages.CountTitle),
        default: intl.formatMessage(messages.CountdownToNextEvent),
      },
      countToDate: {
        title: intl.formatMessage(messages.CountdownToDate),
        widget: 'datetime',
        default: currentDate.toISOString(),
      },
      endMessage: {
        title: intl.formatMessage(messages.EndMessage),
        default: intl.formatMessage(messages.CountdownIsOver),
      },
      showHour: {
        title: intl.formatMessage(messages.ShowHours),
        type: 'boolean',
        default: true,
      },
      showMinute: {
        title: intl.formatMessage(messages.ShowMinutes),
        type: 'boolean',
        default: true,
      },
      showSecond: {
        title: intl.formatMessage(messages.ShowSeconds),
        type: 'boolean',
        default: true,
      },
      emphasis: {
        title: intl.formatMessage(messages.Emphasis),
        choices: [
          ['primary', intl.formatMessage(messages.Primary)],
          ['secondary', intl.formatMessage(messages.Secondary)],
          ['tertiary', intl.formatMessage(messages.Tertiary)],
        ],
      },
    },
    required: [],
  };
};
