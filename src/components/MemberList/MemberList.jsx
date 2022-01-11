
import React from 'react'
import { Member } from "./Member";
import "./memberList.scss"

export const MemberList = ({data}) => {
    return (
        <div className='members-list'>
            {data.map( member => {
                return <Member key={member.id} member={member}/>
            })}
        </div>
    )
}
