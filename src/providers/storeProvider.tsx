import React, { createContext, useState, Dispatch, SetStateAction, FC, ReactNode } from "react";

import { ReviewProps } from "../types/Types";

interface StoreContextProps {
  reviews: [reviews: ReviewProps[], setTimeEntries: Dispatch<SetStateAction<ReviewProps[]>>];
}

export const StoreContext = createContext({} as StoreContextProps);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = {
    reviews: useState<ReviewProps[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
