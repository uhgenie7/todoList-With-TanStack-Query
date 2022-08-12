import { toast, ToastPosition } from 'react-toastify';

const useToast = () => {
  const option = {
    position: 'top-center' as ToastPosition,
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  const success = (message: string) => {
    return toast.success(message, option);
  };

  const error = (message: string) => {
    return toast.error(message, option);
  };

  return { success, error };
};

export default useToast;
