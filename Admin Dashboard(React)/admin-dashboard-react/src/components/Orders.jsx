
const Orders = () => {
    return (
        <div className="orders">
            <div className="header">
                <i className='bx bx-receipt'></i>
                <h3>Pending Approvals</h3>
                <i className='bx bx-show-alt pb-3'></i>
                <p><b>View All</b></p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Asked On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Haroon Malik</td>
                        <td>14-08-2023</td>
                        <td><span className="status completed1">View</span></td>
                    </tr>
                    <tr>
                        <td>Zohaib Jameel</td>
                        <td>14-08-2023</td>
                        <td><span className="status completed1">View</span></td>
                    </tr>
                    <tr>
                        <td>Shahnoor Altaf</td>
                        <td>14-08-2023</td>
                        <td><span className="status completed1">View</span></td>
                    </tr>
                    <tr>
                        <td>Shahnoor Altaf</td>
                        <td>14-08-2023</td>
                        <td><span className="status completed1">View</span></td>
                    </tr><tr>
                        <td>Shahnoor Altaf</td>
                        <td>14-08-2023</td>
                        <td><span className="status completed1">View</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
