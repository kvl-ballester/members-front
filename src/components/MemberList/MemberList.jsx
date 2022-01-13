
import React from 'react'
import { Member } from "./Member";
import { useNavigate } from "react-router-dom";

import "./memberList.scss"

export const MemberList = ({data, onClickMember, onClickDeleteMember}) => {
    const navigate = useNavigate();

    


    return (
        <div className='members-list'>
            {data.map( member => {
                return <Member 
                    key={member.id} 
                    member={member}
                    onClickMember={onClickMember}
                    onClickDeleteMember={onClickDeleteMember}
                />
            })}
        </div>
    )
}
