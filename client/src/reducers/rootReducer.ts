import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from '@src/reducers/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export const persistedReducer = persistReducer(persistConfig, rootReducer);
