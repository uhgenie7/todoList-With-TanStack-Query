import { KeyboardEvent } from 'react';

export const onEnterEvent = (e: KeyboardEvent<HTMLInputElement>, func: any) => {
  if (e.key === 'Enter') {
    func();
  } else {
    return;
  }
};
