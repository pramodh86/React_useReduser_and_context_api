

import { useState,useContext } from 'react'
import './App.css'

import ComTwo from './ComTwo'
import { NewItemContext } from './Context/MyContext';









function App() {



  let { state, addItem,getItemCount } = useContext(NewItemContext);
  //let [count,setCount] = useState(false)
  let numberOfItems = getItemCount();
  const handleAddItem = () => {

    const newItem = {
      id: 1,
      title: 'New Item',
      price: 10,
      description: 'Description of new item',
      category: 'New Category',
      image: 'image-url',
      rating: {
        rate: 4.5,
        count: 10,
      },
    };
    addItem(newItem);
    //setCount(true)
  };

// useEffect(()=>{

//   numberOfItems = getItemCount();

// },[count])
  

  


  

  return (
    <>
    <button onClick={handleAddItem}>Add Item</button>
    <ul>
        {state.map(item => (
          <li key={item.id}>{item.title}</li>
          
        ))}
      </ul>
      <h2>{numberOfItems}</h2>
    <h2>Hi</h2>
    
        <ComTwo></ComTwo>
    



   
     
    </>
  )
}

export default App
