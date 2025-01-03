import { useState } from "react";



export const Count = () => {
    const [count , setCount] = useState(0);
    const handleAdd = () => {
        let newCount = count + 1 ;
        setCount(newCount);
    }
    const handleRemove = () => {
         const  newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div className="flex justify-center gap-4 rounded-xl w-3/5 mx-auto bg-purple-900 border-2 p-6 mt-2 flex-col items-center">
            <h1>Counter : {count}</h1>
            <button onClick={handleAdd} className="btn  btn-success w-1/4">Add</button>
            <button onClick={handleRemove} className="btn  btn-success w-1/4">Remove</button>
        </div>
    );
};





