import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { QueryUserAuthKeys } from '@src/constants/QueryUserAuthKeys';
import { signUpAPI, loginAPI } from '@src/apis/auth';
import useToast from '@src/hooks/useToast';
import { IUserInfo } from '@src/types/userAuthTypes';
import { useAppDispatch } from '@src/hooks/useDispatch';
import { loggedInAction } from '@src/reducers/userSlice';
import { IUserAuthResponse } from '@src/types/response';
import { AxiosError, AxiosResponse } from 'axios';
import { USER_TOKEN } from '@src/constants';

export const useSignUpQuery = (userInfo: IUserInfo) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation<any, AxiosError, IUserInfo>(() => signUpAPI(userInfo), {
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

export const useLoginQuery = (userInfo: IUserInfo) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<any, AxiosError, IUserInfo>(() => loginAPI(userInfo), {
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
