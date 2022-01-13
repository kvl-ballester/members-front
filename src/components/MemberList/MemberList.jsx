
import React from 'react'
import { Member } from "./Member";
import { useNavigate } from "react-router-dom";

import "./memberList.scss"

export const MemberList = ({data}) => {
    const navigate = useNavigate();

    const handleClickMember = (id) => {
        navigate(`/member/${id}`);
    }

    const handleDeleteMember = (id) => {
        console.log("click borrar member: ", id)
    }


    return (
        <div className='members-list'>
            {data.map( member => {
                return <Member 
                    key={member.id} 
                    member={member}
                    onClickMember={(id) => handleClickMember(id)}
                    onClickDeleteMember={(id) => handleDeleteMember(id)}
                />
            })}
        </div>
    )
}
