import React, { ChangeEvent } from 'react';

interface IUseSelect<Option> {
  value: Option;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select<Option>({ props }: UseSelectParams<Option>) {
  const selectProps = useSelect(props);

  return <select name="" id="" {...selectProps}></select>;
}
