import { Link } from 'react-router-dom' // Link makes the page not reload and just shows

const Footer = () => {
    return (
        <footer>
            <p>Created on 18/10/2021</p>
            {/* <a href='/about'>About</a> */}
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
