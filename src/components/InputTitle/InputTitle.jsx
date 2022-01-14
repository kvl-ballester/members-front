
import PropTypes from 'prop-types'
import "./inputTitle.scss"

export const InputTitle = ({title, level, placeholder, type, value, onChangeValue}) => {

    let Title;
    
    if (level === 1) {
        Title = <h1>{title}</h1>
    } else if (level === 2) {
        Title = <h2>{title}</h2>
    } else if (level === 3) {
        Title = <h3>{title}</h3>
    } else if (level === 4) {
        Title = <h4>{title}</h4>
    } else {
        Title = <h5>{title}</h5>
    }

    return (
        <div className='input-title'>
            {Title}
            <div className='input-container'>
                <input type={type} value={value} placeholder={placeholder ? placeholder : title.toLowerCase()} onChange={(event) => onChangeValue(event)} />                
            </div>
            
        </div>
    )
}

InputTitle.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired, 
    placeholder: PropTypes.string,
    onChangeValue: PropTypes.func

}

