import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className='link'>home</Link></li>
                    <li><Link to="/projects" className='link'>projects</Link></li>
                    <li><Link to="/contact" className='link'>contact</Link></li>
                </ul>
        </nav>
        </header>
    )
}

export default Header;