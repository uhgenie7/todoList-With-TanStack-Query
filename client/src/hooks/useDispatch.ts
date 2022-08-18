import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@src/store/configureStore';

export const useAppDispatch: () => AppDispatch = useDispatch;
