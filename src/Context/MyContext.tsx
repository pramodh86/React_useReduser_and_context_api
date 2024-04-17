import { useItemReducer, State, Item } from '../Hooks/MyHook';
import React, { createContext } from 'react';

// Define context type
type ItemContextType = {
  state: State;
  addItem: (item: Item) => void;
  getItemCount: () => number;
  // Add more actions if needed
};

type ItemCountProviderProps = {
  children: React.ReactNode;
};

// Create context
export const NewItemContext = createContext<ItemContextType>({} as ItemContextType)

export const ItemContProvider = ({children}:ItemCountProviderProps) => {

    let { state, addItem,getItemCount } = useItemReducer();
    return (<NewItemContext.Provider value={{ state, addItem,getItemCount }}>{children}</NewItemContext.Provider>)
}