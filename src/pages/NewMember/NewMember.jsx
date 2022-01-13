import { Header, BackTo, Button } from "../../components";
import { useState } from 'react'
import { MemberForm } from "./MemberForm";

import "./newMember.scss"

export const NewMember = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [sex, setSex] = useState("")
    const [age, setAge] = useState(null)

    const handleDeleteMember = () => {
        console.log("click cancel")
    }

    const handleAddMember = () => {
        console.log("click add member")
    }

    return (
        <>  
            <Header text="Add member" />
            <div id="new-member">
                <BackTo path="/" text="Back to members" />
                <div className="member-data">
                    <MemberForm />
                </div>
                <div className="buttons">
                    <Button text="Cancel" onClickButton={() => handleDeleteMember()}/>
                    <Button text="Add" onClickButton={() => handleAddMember()}/>

                </div>
            </div>
        </>
        
    )
}
