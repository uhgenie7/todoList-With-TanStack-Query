import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import type { UseMutationOptions } from '@tanstack/react-query';
import { QueryUserAuthKeys } from '@src/constants/QueryUserAuthKeys';
import { signUpAPI, loginAPI } from '@src/apis/auth';
import useToast from '@src/hooks/useToast';

export const useSignUpQuery = (userInfo: any) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation(() => signUpAPI(userInfo), {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryUserAuthKeys.signUp);
      router.push('/');
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};

export const useLoginQuery = (userInfo: any) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation(() => loginAPI(userInfo), {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryUserAuthKeys.login);
      router.push('/');
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};

export const useUserAuthQuery = (userInfo: any, handleAuthAPI, queryKey) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();
  return useMutation(() => handleAuthAPI(userInfo), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      router.push('/');
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};
