import React, { useState, useEffect, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import cx from 'classnames';
import './theme/countdown.css';

const View = ({ data, isEditMode, className }) => {
  const intl = useIntl();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countData = useMemo(() => {
    if (!data?.countToDate) return null;
    const targetTime = new Date(data.countToDate).getTime();
    const currentTime = now.getTime();
    const distance = targetTime - currentTime;

    if (distance <= 0) {
      return { expired: true };
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
      expired: false,
      days: Math.floor(distance / day),
      hours: Math.floor((distance % day) / hour),
      minutes: Math.floor((distance % hour) / minute),
      seconds: Math.floor((distance % minute) / second),
    };
  }, [data?.countToDate, now]);

  if (!countData?.expired && countData === null) {
    return null;
  }

  const emphasisClass = data?.emphasis || '';

  return (
    <div className={cx('countdown', emphasisClass, className)}>
      {data?.title && <h2>{data.title}</h2>}
      {countData.expired ? (
        <div>{data?.endMessage || intl.formatMessage({ id: 'Countdown is over' })}</div>
      ) : (
        <ul>
          <li>
            <span>{countData.days}</span>{' '}
            <FormattedMessage id="days" defaultMessage="days" />
          </li>
          {data?.showHour !== false && (
            <li>
              <span>{countData.hours}</span>{' '}
              <FormattedMessage id="hours" defaultMessage="hours" />
            </li>
          )}
          {data?.showMinute !== false && (
            <li>
              <span>{countData.minutes}</span>{' '}
              <FormattedMessage id="minutes" defaultMessage="minutes" />
            </li>
          )}
          {data?.showSecond !== false && (
            <li>
              <span>{countData.seconds}</span>{' '}
              <FormattedMessage id="seconds" defaultMessage="seconds" />
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default withBlockExtensions(View);
