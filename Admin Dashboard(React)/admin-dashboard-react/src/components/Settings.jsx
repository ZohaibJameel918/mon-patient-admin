import  { useState, useEffect } from 'react';

const Setting = () => {
  const [activeSection, setActiveSection] = useState('section1');

  useEffect(() => {
    // Default open section
    document.getElementById(activeSection).style.display = "block";
  }, [activeSection]);

  const showContent = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>Setting</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Setting/</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-data">
        <div className="orders">
          <div className="wrapper1">
            <div className="content-box1">
              <div className="menu1">
                <button
                  className={`menu-button1 ${activeSection === 'section1' ? 'active1' : ''}`}
                  onClick={() => showContent('section1')}
                >
                  Your Account
                </button>
                <button
                  className={`menu-button1 ${activeSection === 'section2' ? 'active1' : ''}`}
                  onClick={() => showContent('section2')}
                >
                  Login & Security
                </button>
                <button
                  className={`menu-button1 ${activeSection === 'section3' ? 'active1' : ''}`}
                  onClick={() => showContent('section3')}
                >
                  Language
                </button>
              </div>

              <div className="content1">
                <div id="section1" className="content-section1" style={{ display: activeSection === 'section1' ? 'block' : 'none' }}>
                  <h4 className='fw-bold'>Your Account</h4>
                  <table>
                    <tr>
                      <td>
                        <img
                          src="https://e1.pxfuel.com/desktop-wallpaper/233/393/desktop-wallpaper-mahira-khan-celebrity-hq-mahira-khan-maira-khan.jpg"
                          alt="Profile"
                        />
                      </td>
                    </tr>
                  </table>
                  <button className="completed">Change Profile Picture</button>

                  <table>
                    <tr className="table-label">
                      <td style={{ padding: '0px' }}>Name:</td>
                      <td style={{ padding: '0px' }}>Email:</td>
                    </tr>
                    <tr className="table-row">
                      <td style={{ padding: '0px' }}>
                        <input type="text" placeholder="Enter Your Name" />
                      </td>
                      <td style={{ padding: '0px' }}>
                        <input type="email" placeholder="Enter Your Email" />
                      </td>
                    </tr>
                  </table>

                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="search-container">
                    <div className="Pages">
                      <button>Save</button>
                    </div>
                  </div>
                </div>

                <div id="section2" className="content-section1" style={{ display: activeSection === 'section2' ? 'block' : 'none' }}>
                  <h2>Change Password</h2>

                  <table>
                    <tr className="table-label">
                      <td style={{ padding: '0px' }}>Password:</td>
                    </tr>
                    <tr className="table-row">
                      <td style={{ padding: '0px' }}>
                        <input type="text" placeholder="Enter Your Password" />
                      </td>
                    </tr>
                    <tr className="table-label">
                      <td style={{ padding: '0px' }}>New Password:</td>
                      <td style={{ padding: '0px' }}>Confirm New Password:</td>
                    </tr>
                    <tr className="table-row">
                      <td style={{ padding: '0px' }}>
                        <input type="text" placeholder="Enter Your New Password" />
                      </td>
                      <td style={{ padding: '0px' }}>
                        <input type="text" placeholder="Re-Enter Your New Password" />
                      </td>
                    </tr>
                  </table>

                  <div className="list-setting">
                    <h3>Password Requirements</h3>
                    <ul>
                      <li>Minimum 8 characters long - the more, the better</li>
                      <li>At least one lowercase letter</li>
                      <li>At least one number, symbol, or whitespace character</li>
                    </ul>
                  </div>

                  <div className="search-container">
                    <div className="Pages">
                      <button>Save</button>
                    </div>
                  </div>
                </div>

                <div id="section3" className="content-section1" style={{ display: activeSection === 'section3' ? 'block' : 'none' }}>
                  <h2>Language</h2>
                  <div className="search-container">
                    <select name="category1">
                      <option value="">English</option>
                      <option value="">Urdu</option>
                      <option value="">Arabic</option>
                      <option value="">Italian</option>
                      <option value="">Turkish</option>
                    </select>
                    <div className="Pages">
                      <button>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Setting;
