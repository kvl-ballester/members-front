import React from 'react'

export const Member = ({member}) => {
    return (
        <div className='member'>
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
