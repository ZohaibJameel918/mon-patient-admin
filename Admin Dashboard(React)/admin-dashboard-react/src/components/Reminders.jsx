
const Reminders = () => {
    return (
        <div className="reminders">
            <div className="header">
                <i className='bx bx-receipt'></i>
                <h3>Support</h3>
                <i className='bx bx-show-alt pb-3'></i>
                <p><b>View All</b></p>
            </div>
            <ul className="task-list">
                <li className="">
                    <div className="task-title">
                        <img className="user-img" src="src/assets/profile-1.jpg" alt="User" />
                        <p><b>Nawal E.</b><br />typing...</p>
                    </div>
                    <p className="user-msg-time">3:45 pm</p>
                </li>
                <li className="">
                    <div className="task-title">
                        <img className="user-img" src="src/assets/profile-1.jpg" alt="User" />
                        <p><b>Rehab D.</b><br />typing...</p>
                    </div>
                    <p className="user-msg-time">12:36 am</p>
                </li>
                <li className="">
                    <div className="task-title">
                        <img className="user-img" src="src/assets/profile-1.jpg" alt="User" />
                        <p><b>Rehab D.</b><br />typing...</p>
                    </div>
                    <p className="user-msg-time">12:36 am</p>
                </li>
                <li className="">
                    <div className="task-title">
                        <img className="user-img" src="src/assets/profile-1.jpg" alt="User" />
                        <p><b>Rehab D.</b><br />typing...</p>
                    </div>
                    <p className="user-msg-time">12:36 am</p>
                </li>
            </ul>
        </div>
    );
};

export default Reminders;
