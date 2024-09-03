// Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import LogoImg from "../assets/logo.png";

const Sidebar = ({ isSidebarClosed }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const activeTab = queryParams.get('tab') || 'home';

    return (
        <div className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
            <div className="logo-div">
                <Link to="/">
                    <img className="logo-img" src={LogoImg} alt="Logo" />
                </Link>
                <Link to="/" className="logo">
                    <div className="logo-name"><span>Mon</span>Patient</div>
                </Link>
            </div>
            <ul className="side-menu ps-0 ">
                <li><Link to="/?tab=home" className={activeTab === 'home' ? 'active active-menu' : ''}><i className='bx bxs-dashboard'></i>Home</Link></li>
                <li><Link to="/?tab=approval-list" className={activeTab === 'approval-list' ? 'active active-menu' : ''}><i className='bx bx-file'></i>Approval List</Link></li>
                <li><Link to="/?tab=messages" className={activeTab === 'messages' ? 'active active-menu' : ''}><i className='bx bxs-check-shield'></i>Messages</Link></li>
                <li><Link to="/?tab=team" className={activeTab === 'team' ? 'active active-menu' : ''}><i className='bx bx-group'></i>Team</Link></li>
                <li><Link to="/?tab=manage-accounts" className={activeTab === 'manage-accounts' ? 'active active-menu' : ''}><i className='bx bx-edit-alt'></i>Manage Accounts</Link></li>
                <li><Link to="/?tab=history" className={activeTab === 'history' ? 'active active-menu' : ''}><i className='bx bx-history'></i>History</Link></li>
                <li><Link to="/?tab=ads" className={activeTab === 'ads' ? 'active active-menu' : ''}><i className='bx bx-tv'></i>Ads</Link></li>
                <li><Link to="/?tab=settings" className={activeTab === 'settings' ? 'active active-menu' : ''}><i className='bx bx-cog'></i>Settings</Link></li>
            </ul>
            <ul className="side-menu ps-0">
                <li>
                    <Link to="/?tab=logout" className="logout">
                        <i className='bx bx-log-out-circle'></i>
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
