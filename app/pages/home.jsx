import React from 'react';
import { Count } from './Count';
import {Pets} from './Pets';



const home = () => {
    const handleClicked = () => (
        alert("btn clicked")
    )
    return (
        <div>
            <div className='flex justify-center items-center gap-4'>
            <h1 className='text-red-500'>Home Page</h1>
            <button onClick={handleClicked} className='btn btn-outline btn-success'>click here </button>
            </div>
           <div>
           <Count></Count>
           </div>
           <div>
            <Pets></Pets>
           </div>
          
        </div>
        
    ) 
}

export default home;