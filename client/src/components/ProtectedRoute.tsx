import { useEffect } from 'react';
import ROUTES from '@src/constants/routes';
import { ISSERVER } from '@src/constants';
import { isLoginState } from '@src/states/loginState';
import { useRecoilValue } from 'recoil';
import FullPageLoader from './FullPageLoader';

const ProtectedRoute = ({ router, children }) => {
  const isAuthenticated = useRecoilValue(isLoginState);
  console.log(isAuthenticated);
  const publicedRoutes = [ROUTES.AUTH.LOGIN, ROUTES.AUTH.SIGNUP];
  const pathIsProtected = publicedRoutes.indexOf(router.pathname) === -1;
  console.log(pathIsProtected);
  useEffect(() => {
    if (!ISSERVER && !isAuthenticated && pathIsProtected) {
      // Redirect route, you can point this to /login
      router.push(ROUTES.AUTH.LOGIN);
    }
  }, [isAuthenticated, pathIsProtected]);

  if (!ISSERVER && !isAuthenticated && pathIsProtected) {
    return <FullPageLoader />;
  }

  return children;
};

export default ProtectedRoute;
