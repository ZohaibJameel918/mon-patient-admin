// App.jsx
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ApprovalList from './components/ApprovalList';
import Messages from './components/Messages';
import ManageAccounts from './components/ManageAccounts';
import History from './components/History';
import Ads from './components/Ads';
import Settings from './components/Settings';
import MyStaff from './components/MyStaff';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './styles/style.css';
import 'boxicons/css/boxicons.min.css';
import './styles/sass/main.css';
import './styles/sass/blue-theme.css';
import './styles/sass/bordered-theme.css';
import './styles/sass/responsive.css';
// import './styles/sass/semi-dark.css';

const Content = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const activeTab = queryParams.get('tab') || 'home';

    switch (activeTab) {
        case 'approval-list':
            return <ApprovalList />;
        case 'messages':
            return <Messages />;
        case 'team':
            return <MyStaff />;
        case 'manage-accounts':
            return <ManageAccounts />;
        case 'history':
            return <History />;
        case 'ads':
            return <Ads />;
        case 'settings':
            return <Settings />;
        default:
            return <Home />;
    }
};

function App() {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarClosed(true);
            } else {
                setIsSidebarClosed(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuClick = () => {
        setIsSidebarClosed(!isSidebarClosed);
    };

  

    return (
        <Router>
            <div className={`App ${isSidebarClosed ? 'close' : ''}`}>
                <Sidebar isSidebarClosed={isSidebarClosed} />
                <div className="content">
                    <Navbar onMenuClick={handleMenuClick}  />
                    <main>
                        <Content />
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
