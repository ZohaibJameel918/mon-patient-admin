import Insights from "./Insights.jsx";
import Orders from "./Orders.jsx";
import Reminders from "./Reminders.jsx";

const Home = () => {
  return (
    <>
    <div className="main">
      <div className="header">
        <div className="left ">
          <h1>Home</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Home/</a>
            </li>
          </ul>
        </div>
      </div>
      <Insights />
      <div className="bottom-data">
        <Orders />
        <Reminders />
      </div>
      </div>
    </>
  );
};

export default Home;
