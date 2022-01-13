
import PropTypes from 'prop-types'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./backTo.scss"

export const BackTo = ({path, text}) => {

    const navigate = useNavigate();

    const handleRedirection = () => {
        navigate(path);
    }

    return (
        <div className='backTo' onClick={() => handleRedirection()}>
            <div className="arrow">
                <BsArrowLeft />
            </div>
            <div className='text'>
                {text}
            </div>
        </div>
    )
}

BackTo.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string
}

