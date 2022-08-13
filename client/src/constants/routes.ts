const ROUTES = Object.freeze({
  TODO: '/',
  TODODETAIL: '/[id]',
  AUTH: {
    LOGIN: '/auth',
    SIGNUP: '/auth/signup',
  },
});

export const NEED_LOGIN_ROUTES = [...Object.values(ROUTES.TODO), ...Object.values(ROUTES.TODODETAIL)];

export default ROUTES;
