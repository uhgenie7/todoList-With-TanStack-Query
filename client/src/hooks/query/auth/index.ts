import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { QueryUserAuthKeys } from '@src/constants/QueryUserAuthKeys';
import { signUpAPI, loginAPI } from '@src/apis/auth';
import { IUserInfo } from '@src/types/userAuthTypes';
import { useAppDispatch } from '@src/hooks/useDispatch';
import { loggedInAction } from '@src/reducers/userSlice';
import { AxiosError } from 'axios';
import { USER_TOKEN } from '@src/constants';

interface IQueryParams {
  userInfo: IUserInfo;
  errorHandler: (message: string) => void;
}

export const useLoginQuery = ({ userInfo, errorHandler }: IQueryParams) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<any, AxiosError, IUserInfo>(() => loginAPI(userInfo, errorHandler), {
    onSuccess: (res) => {
      if (res) {
        console.log(res);
        localStorage.setItem(USER_TOKEN, res.token);
        dispatch(loggedInAction(true));
        queryClient.invalidateQueries(QueryUserAuthKeys.login);
        router.push('/');
      }
    },
  });
};

export const useSignUpQuery = ({ userInfo, errorHandler }: IQueryParams) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<any, AxiosError, IUserInfo>(() => signUpAPI(userInfo, errorHandler), {
    onSuccess: (res) => {
      if (res) {
        console.log(res);
        localStorage.setItem(USER_TOKEN, res.token);
        dispatch(loggedInAction(true));
        queryClient.invalidateQueries(QueryUserAuthKeys.signUp);
        router.push('/');
      }
    },
  });
};
