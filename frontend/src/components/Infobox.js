import PropTypes from 'prop-types'

const Infobox = ({ text, title, picture }) => {
    return (
        <div className='textbox'>
            <h3 className='textbox-content'>{title}</h3>
            <p className='textbox-content'>{text}</p>
        </div>
    )
}


Infobox.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string
}

export default Infobox
