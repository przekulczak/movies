import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";
import favoritesReducer from "../store/favoritesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"], // only favorites will be persisted
};

// Combine reducers
const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  favorites: favoritesReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(movieApi.middleware),
});

// Create persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
