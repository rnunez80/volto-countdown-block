import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { CountdownSchema } from './Schema';
import { BlockDataForm } from '@plone/volto/components';

const messages = defineMessages({
  CountdownBlock: {
    id: 'Countdown Block',
    defaultMessage: 'Countdown Block',
  },
});

const CountdownData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer } = props;
  const intl = useIntl();

  const schema = schemaEnhancer
    ? schemaEnhancer(CountdownSchema({ ...props, intl }), props)
    : CountdownSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title={intl.formatMessage(messages.CountdownBlock)}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
    />
  );
};

export default CountdownData;
