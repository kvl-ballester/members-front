import React from 'react'
import { useNavigate } from "react-router-dom";

export const Member = ({member}) => {
    const navigate = useNavigate();

    const handleClickMember = (id) => {
        navigate(`/member/${id}`);
    }

    return (
        <div className='member' onClick={() => handleClickMember(member.id)}>
            <div className="fields">
                <div className="name">
                    Name: 
                </div>
                <div className="age">
                    Age: 
                </div>
            </div>
            <div className="values">
                <div className="name">
                    {member.name}
                </div>
                <div className="age">
                    {member.age}
                </div>
            </div>
            
        </div>
    )
}
