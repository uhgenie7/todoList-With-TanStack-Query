import { atom, selector, selectorFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { USER_TOKEN } from '@src/constants';
import { localStorageEffect } from '@src/utils/localStorageEffect';

const localStorage = typeof window !== `undefined` ? window.localStorage : null;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});

// export const loginAsyncState = selector({
//   key: 'loginAsyncState',
//   get: async ({ get }) => {
//     const isLogged = get(isLoginState);
//     if (!isLogged) {
//       localStorage.removeItem('USER_TOKEN');
//     } else {
//       localStorage.setItem('USER_TOKEN', response.token);
//     }
//   },
// });
