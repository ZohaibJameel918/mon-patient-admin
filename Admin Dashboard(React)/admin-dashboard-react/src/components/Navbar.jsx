import  { useState } from 'react';
import PropTypes from 'prop-types';
const Navbar = ({ onMenuClick }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', !isDarkMode);
    };

    return (
        <nav>
            <i className='bx bx-menu' onClick={onMenuClick}></i>
            <form action="#">
                <div className="form-input">
                    <button style={{ display: 'none' }}></button>
                </div>
            </form>
            <input type="checkbox" id="theme-toggle" hidden />
            <label htmlFor="theme-toggle" className="theme-toggle" onClick={handleThemeToggle}></label>
            <a href="Chat.html" className="profile">
                <i className='bx bx-chat'></i>
            </a>
            <a href="#" className="notif">
                <i className='bx bx-bell'></i>
                <span className="count">12</span>
            </a>
            <a href="#" className="profile">
                <i className='bx bxs-user-circle'></i>
            </a>
        </nav>
    );
};

Navbar.propTypes = {
    onMenuClick: PropTypes.func.isRequired,
};
export default Navbar;
