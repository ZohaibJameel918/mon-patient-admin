
const Insights = () => {
    return (
        <ul className="insights ps-0">
            <li>
                <i className='bx bxs-user-account'></i>
                <span className="info">
                    <h3>1,074</h3>
                    <p>Total Users</p>
                </span>
            </li>
            <li>
                <i className='bx bx-user-plus'></i>
                <span className="info">
                    <h3>944</h3>
                    <p>New Accounts</p>
                </span>
            </li>
            <li>
                <i className='bx bx-show-alt'></i>
                <span className="info">
                    <h3>721</h3>
                    <p>Total Visits</p>
                </span>
            </li>
            <li>
                <i className='bx bx-line-chart'></i>
                <span className="info">
                    <h3>Analysis</h3>
                </span>
            </li>
        </ul>
    );
};

export default Insights;
