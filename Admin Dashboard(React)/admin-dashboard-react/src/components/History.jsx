
const History = () => {
  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>History</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">History/</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-data">
        <div className="orders">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Admin</th>
                <th>Task</th>
                <th>Timing</th>
              </tr>
            </thead>
            <tbody>
              {Array(9).fill(null).map((_, index) => (
                <tr key={index}>
                  <td><p>#124</p></td>
                  <td>Saadia B.</td>
                  <td>Approved doctor Nawal E.</td>
                  <td>Today at 11:45 PM</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="search-container">
            <select name="category1">
              <option value="">20 rows</option>
            </select>
            <div className="Pages">
              <a href="#">&lt;&lt;</a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">&gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default History;
