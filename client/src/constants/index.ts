export const ISSERVER = typeof window === 'undefined';
export const USER_TOKEN = 'USER_TOKEN';
export const hasUserToken = !ISSERVER && !!localStorage.getItem('USER_TOKEN');
