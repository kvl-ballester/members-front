import { Header, BackTo, Button } from "../../components";
import { useState } from 'react'
import { MemberForm } from "./MemberForm";
import { useNavigate } from "react-router-dom";

import "./newMember.scss"

export const NewMember = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [sex, setSex] = useState("")
    const [age, setAge] = useState("")

    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    /* Handle setters for form */
    const handleSetPhone= (event) => {
        setPhone(event.target.value)
    }

    const handleSetEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSetFirstName = (event) => {
        setFirstName(event.target.value)
    }
    

    const handleSetLastName = (event) => {
        setLastName(event.target.value)
    }

    const handleSetSex= (event) => {
        setSex(event.target.value)
    }

    const handleSetAge = (event) => {
        setAge(event.target.value)
    }

    const handleSetAddress = (event) => {
        setAddress(event.target.value)
    }

    const handleSetZip = (event) => {
        setZip(event.target.value)
    }

    const handleSetCity = (event) => {
        setCity(event.target.value)
    }

    const handleSetCountry = (event) => {
        setCountry(event.target.value)
    }

    /* Handle buttons actions */

    const handleDeleteMember = () => {
        navigate("/")
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
                    <MemberForm 
                        firstName={firstName} setFirstName={handleSetFirstName}
                        lastName={lastName} setLastName={handleSetLastName}
                        sex={sex} setSex={handleSetSex}
                        age={age} setAge={handleSetAge}
                        address={address} setAddress={handleSetAddress}
                        zip={zip} setZip={handleSetZip}
                        city={city} setCity={handleSetCity}
                        country={country} setCountry={handleSetCountry}
                        phone={phone} setPhone={handleSetPhone}
                        email={email} setEmail={handleSetEmail}
                    />
                </div>
                <div className="buttons">
                    <Button text="Cancel" onClickButton={() => handleDeleteMember()}/>
                    <Button text="Add" onClickButton={() => handleAddMember()}/>

                </div>
            </div>
        </>
        
    )
}
