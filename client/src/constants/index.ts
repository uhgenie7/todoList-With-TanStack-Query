export const localStorage = typeof window !== 'undefined' ? window.localStorage : null;
export const ISSERVER = typeof window === 'undefined';
export const USER_TOKEN = 'USER_TOKEN';
