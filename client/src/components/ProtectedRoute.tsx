import { useEffect } from 'react';
import ROUTES from '@src/constants/routes';
import { ISSERVER } from '@src/constants';
import PageLoader from './atoms/PageLoader';
import { useAppSelector } from '@src/hooks/useSelector';

const ProtectedRoute = ({ router, children }) => {
  const isAuthenticated = useAppSelector((state) => state.user.isLoggedIn);

  console.log(isAuthenticated);
  const publicedRoutes = [ROUTES.AUTH.LOGIN, ROUTES.AUTH.SIGNUP];
  const pathIsProtected = publicedRoutes.indexOf(router.pathname) === -1;
  console.log(pathIsProtected);

  useEffect(() => {
    if (!ISSERVER && !isAuthenticated && pathIsProtected) {
      router.push(ROUTES.AUTH.LOGIN);
    }
  }, [isAuthenticated, pathIsProtected, router]);

  if (!ISSERVER && !isAuthenticated && pathIsProtected) {
    return <PageLoader />;
  }

  return children;
};

export default ProtectedRoute;
