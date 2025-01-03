import { useEffect, useState } from "react"
import { Pet } from "./pet";


export const Pets = () => {
    const [data , setPets] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPets(data))
    },[])
    return(
        <div>
            <div className=" p-5 flex justify-center items-center border-2 mt-5 w-3/5 mx-auto">
                <h1>Pets: {data.length}</h1>
                {
                    data.map(
                        user => <Pet></Pet>
                    )
                }
            </div>
        </div>
    )
}