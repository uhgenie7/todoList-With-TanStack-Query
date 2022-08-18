import { useEffect } from 'react';
import ROUTES from '@src/constants/routes';
import { ISSERVER } from '@src/constants';
import PageLoader from './atoms/PageLoader';
import { useAppSelector } from '@src/hooks/useSelector';
import { NextRouter } from 'next/router';
import customToast from '@src/utils/customToast';

interface IProtectedRoute {
  router: NextRouter;
  children: JSX.Element;
}

const ProtectedRoute = ({ router, children }: IProtectedRoute) => {
  const toast = customToast();
  const isAuthenticated = useAppSelector((state) => state.user.isLoggedIn);
  const publicedRoutes = [ROUTES.AUTH.LOGIN, ROUTES.AUTH.SIGNUP];
  const pathIsProtected = publicedRoutes.indexOf(router.pathname) === -1;

  useEffect(() => {
    if (!ISSERVER && !isAuthenticated && pathIsProtected) {
      toast.error('로그인부터 해주세요');
      router.push(ROUTES.AUTH.LOGIN);
    }

    if (!ISSERVER && isAuthenticated && !pathIsProtected) {
      router.push(ROUTES.TODO);
    }
  }, [isAuthenticated, pathIsProtected, router]);

  if (!ISSERVER && !isAuthenticated && pathIsProtected) {
    return <PageLoader />;
  }

  if (!ISSERVER && isAuthenticated && !pathIsProtected) {
    return <PageLoader />;
  }

  return children;
};

export default ProtectedRoute;
