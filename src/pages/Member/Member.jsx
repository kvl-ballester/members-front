import { Header } from "../../components";
import React, { useState , useEffect} from 'react'

import { useParams } from 'react-router-dom';


const items = [
    {id: 1, name :"pepe", age: 23},
    {id: 12, name :"alex", age: 21},
    {id: 13, name :"jose", age: 22},
    {id: 14, name :"asdf", age: 23},
    {id: 15, name :"cris", age: 22},
    {id: 16, name :"fdsa", age: 24},
    {id: 17, name :"dfdf", age: 25},
    {id: 18, name :"asa", age: 23},
    {id: 19, name :"fdss", age: 22},
    {id: 10, name :"peperere", age: 28},
  
  ]
  

export const Member = () => {
    let { id } = useParams()
    const [member, setMember] = useState({})

    

    useEffect(() => {
        const selectedMember = items.filter( member => {
            return member.id === parseInt(id)
        })[0]

        setMember(selectedMember);
        
    }, [])

    return (
        <div>
            <Header text={`Member: ${member.name}`}/>
        </div>
    )
}
