import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { QueryUserAuthKeys } from '@src/constants/QueryUserAuthKeys';
import { signUpAPI, loginAPI } from '@src/apis/auth';
import useToast from '@src/hooks/useToast';
import { IUserInfo } from '@src/types/userAuthTypes';

export const useSignUpQuery = (userInfo: IUserInfo) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation(() => signUpAPI(userInfo), {
    onSuccess: () => {
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
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation(() => loginAPI(userInfo), {
    onSuccess: () => {
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

export const useUserAuthQuery = (userInfo: IUserInfo, handleAuthAPI: any, queryKey: string[]) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation(() => handleAuthAPI(userInfo), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      router.push('/');
    },
    onError: (error) => {
      if (typeof error === 'string') {
        toast.error(error);
      }
    },
  });
};
