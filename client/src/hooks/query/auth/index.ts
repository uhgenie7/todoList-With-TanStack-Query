import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { QueryUserAuthKeys } from '@src/constants/QueryUserAuthKeys';
import { signUpAPI, loginAPI } from '@src/apis/auth';
import useToast from '@src/hooks/useToast';
import { IUserInfo } from '@src/types/userAuthTypes';
import { useAppDispatch } from '@src/hooks/useDispatch';
import { loggedInAction } from '@src/reducers/userSlice';
import { IUserAuthResponse } from '@src/types/response';
import { AxiosError } from 'axios';

export const useSignUpQuery = (userInfo: IUserInfo) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation<{ data: IUserAuthResponse }, AxiosError, IUserInfo>(() => signUpAPI(userInfo), {
    onSuccess: (res) => {
      console.log(res);
      dispatch(loggedInAction(true));
      queryClient.invalidateQueries(QueryUserAuthKeys.signUp);
      router.push('/');
    },
    onError: (error) => {
      if (typeof error === 'string') {
        toast.error(error);
      }
    },
  });
};

export const useLoginQuery = (userInfo: IUserInfo) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation<{ data: IUserAuthResponse }, AxiosError, IUserInfo>(() => loginAPI(userInfo), {
    onSuccess: () => {
      dispatch(loggedInAction(true));
      queryClient.invalidateQueries(QueryUserAuthKeys.login);
      router.push('/');
    },
    onError: (error) => {
      if (typeof error === 'string') {
        toast.error(error);
      }
    },
  });
};
