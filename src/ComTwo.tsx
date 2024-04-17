import {  useState,useContext } from 'react'

import { NewItemContext } from './Context/MyContext';

function ComTwo() {



  let {getItemCount} = useContext(NewItemContext)
  let count = getItemCount()
    
    
    

  return (
    <>
       
        <h2>{count}</h2>
    </>
  )
}

export default ComTwo