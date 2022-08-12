import { atom } from 'recoil';
import { localStorageEffect } from '@src/utils/localStorageEffect';
import { USER_TOKEN } from '@src/constants';

export const isLoginState = atom({
  key: 'isLoginState',
  default: {} as null | string,
  effects: [localStorageEffect(USER_TOKEN)],
});
