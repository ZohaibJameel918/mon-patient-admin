
const ManageAccounts = () => (
    <main>
        <div className="header">
            <div className="left">
                <h1>Manage Accounts</h1>
                <ul className="breadcrumb">
                    <li><a href="#">Manage Accounts/</a></li>
                </ul>
            </div>
        </div>

        <div className="search-container">
            <div className="search-box">
                <input type="search" name="query" placeholder="Search..." />
            </div>
        </div>

        <div className="bottom-data">
            <div className="orders">
                <div className="header">
                    <i className='bx bx-receipt'></i>
                    <h3>Pending Approvals</h3>
                    <i className='bx bx-show-alt'></i>
                    <p><b>View All</b></p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Contact</th>
                            <th>Speciality</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p><b>Haroon Malik</b><br />Doctor</p></td>
                            <td>212 612 345 678</td>
                            <td>Dermatology</td>
                            <td><span className="status completed">Approved</span></td>
                            <td><span className="status completed1">View</span></td>
                        </tr>
                        <tr>
                            <td><p><b>Rehbab Ben</b><br />Nurse</p></td>
                            <td>212 612 345 678</td>
                            <td>Nurse midwife</td>
                            <td><span className="status pending">Pending</span></td>
                            <td><span className="status completed1">View</span></td>
                        </tr>
                        <tr>
                            <td><p><b>Haroon Malik</b><br />Hospital</p></td>
                            <td>212 612 345 678</td>
                            <td>----</td>
                            <td><span className="status completed">Approved</span></td>
                            <td><span className="status completed1">View</span></td>
                        </tr>
                        <tr>
                            <td><p><b>Haroon Malik</b><br />Doctor</p></td>
                            <td>212 612 345 678</td>
                            <td>Dermatology</td>
                            <td><span className="status decline">Declined</span></td>
                            <td><span className="status completed1">View</span></td>
                        </tr>
                        <tr>
                            <td><p><b>Haroon Malik</b><br />Doctor</p></td>
                            <td>212 612 345 678</td>
                            <td>Dermatology</td>
                            <td><span className="status pending">Pending</span></td>
                            <td><span className="status completed1">View</span></td>
                        </tr>
                    </tbody>
                </table>

                <div className="search-container">
                    <select name="category1">
                        <option value="">20 rows</option>
                    </select>
                    <div className="Pages">
                        <a href="#"></a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default ManageAccounts;
