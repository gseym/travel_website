import PropTypes from 'prop-types'

const Button = ({ onClick, color, text }) => {
    return (
        <button
        onClick={onClick}
        style={{ backgroundColor: color}}
        className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Continent X',
    color: 'red',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}



export default Button
