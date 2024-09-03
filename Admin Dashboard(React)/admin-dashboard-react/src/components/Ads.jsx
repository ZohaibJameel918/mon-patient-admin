
const Ads = () => {
  return (
    <main >
      <div className="header">
        <div className="left">
          <h1>Ads</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Ads/</a>
            </li>
          </ul>
        </div>
      </div>
      <br />

      <div className="search-container">
        <select name="category1">
          <option value="">Profession</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <select name="category2">
          <option value="">Status</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <div className="search-box">
          <input type="search" name="query" placeholder="Search..." />
        </div>
      </div>
      <br />

      <div className="ads-card-container">
        {Array(6).fill(null).map((_, index) => (
          <div className="ads-card" key={index}>
            <div className="ads-card-header">
              <h2>Mahira Khan</h2>
              <div className="ads-dropdown">
                <button className="ads-dropbtn">Options</button>
                <div className="ads-dropdown-content">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </div>
              </div>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg"
              alt={`Mahira Khan ${index + 1}`}
            />
            <p className="ads-description">
              {index === 0 && "Mahira Khan looking stunning in her latest photo shoot."}
              {index === 1 && "A graceful and elegant pose by Mahira Khan."}
              {index === 2 && "Mahira Khan exudes charm in this captivating image."}
              {index === 3 && "Another beautiful look from Mahira Khan's latest shoot."}
              {index === 4 && "Mahira Khan's elegance and style in this captivating image."}
              {index === 5 && "A timeless pose by Mahira Khan, radiating confidence."}
            </p>
            <button className="ads-card-btn">Learn More</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Ads;
