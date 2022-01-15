import PropTypes from 'prop-types'
import { InputTitle } from "../../components";
import "./memberForm.scss"

export const MemberForm = ({
    firstName,setFirstName,
    lastName, setLastName,
    sex , setSex,
    age,  setAge,
    address, setAddress,
    zip, setZip,
    city, setCity,
    country, setCountry,
    phone, setPhone,
    email, setEmail
}) => {
    return (
        <div className='form'>
            <div className="row personal">
                <h2>Personal Information</h2>
                <div className="info-section">
                    <div className="inner-row">
                        <InputTitle title='First Name' level={4} type='text' value={firstName} onChangeValue={setFirstName} />
                        <InputTitle title='Last Name' level={4} type='text' value={lastName} onChangeValue={setLastName} />
                    </div>
                    <div className="inner-row">
                        <InputTitle title='Sex' level={4} type='text' value={sex} onChangeValue={setSex} />
                        <InputTitle title='Age' level={4} type='number' value={age} onChangeValue={setAge} />
                    </div>
                </div>
            </div>
            <div className="row address">
                <h2>Location Information</h2>
                <div className="info-section">
                    <div className="inner-row">
                        <InputTitle title='Address' level={4} type='text' value={address} onChangeValue={setAddress} />
                        <InputTitle title='Zip code' level={4} type='text' value={zip} onChangeValue={setZip} />
                    </div>
                    <div className="inner-row">
                        <InputTitle title='City' level={4} type='text' value={city} onChangeValue={setCity} />
                        <InputTitle title='Country' level={4} type='text' value={country} onChangeValue={setCountry} />
                    </div>
                </div>
                    
            </div>
            <div className="row contact">
                <h2>Contact Information</h2>
                <div className="info-section">
                    <div className="inner-row">
                        <InputTitle title='Phone' level={4} type='text' value={phone} onChangeValue={setPhone} />
                        <InputTitle title='Email' level={4} type='text' value={email} onChangeValue={setEmail} />
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

MemberForm.propTypes = {

}

