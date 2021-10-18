import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom' // for look at route we're currently on, and for Add button to not show on /about

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    // const onClick = () => {
    //     console.log('Clicked')
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && 
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS, styling to use if needed in this file
// const headingStyle = {
//     color: 'white', 
//     backgroundColor: 'black'
// }

export default Header
