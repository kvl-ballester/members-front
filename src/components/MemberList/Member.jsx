import React from 'react'
import { ImBin } from "react-icons/im";

export const Member = ({member, onClickMember, onClickDeleteMember}) => {
    

    return (
        <div className="member-container">
            <div className="member">
                <div className='member-info' onClick={() => onClickMember(member.id)}>
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
            </div>
            <div className="bin-container" onClick={() => onClickDeleteMember(member.id)}>
                <ImBin />
            </div>

        </div>

    )
}
