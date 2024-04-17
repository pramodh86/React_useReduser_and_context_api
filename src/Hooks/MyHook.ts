
import { useReducer } from 'react'


export type Item = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
  }
  
  export type Action = {
    type:string,
    payload:Item
  
  } 

  
  export type State = Item[];

  const reducer = (state:State, action:Action): State => {

    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "UPDATE":
        return [...state, action.payload];
      case "REMOVE":
        return [...state, action.payload];
      case "COUNT":
        return [...state, action.payload] 
      default:
        return [...state, action.payload];
    }

  }

  

  


  export const useItemReducer = () => {



    const[state,dispatch]=useReducer(reducer,[])
    

    const addItem = (item: Item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
      };

      const getItemCount = () => {
        return state.length;
      };
    

      return { state, addItem,getItemCount };
  }

 