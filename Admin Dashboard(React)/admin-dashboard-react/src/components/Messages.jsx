import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const ChatComponent = () => {
  return (
    <main className="main-wrapper">
      <div className="main-content">
        <div className="header">
          <div className="left">
            <h1>Messages</h1>
          </div>
        </div>
        <div className="chat-wrapper">
          <div className="chat-sidebar">
            <div className="chat-sidebar-content">
              <PerfectScrollbar>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-Chats">
                    <div className="chat-list">
                      <div className="list-group list-group-flush">
                        {["01", "02", "03", "04", "05", "06", "07", "09", "10", "11", "01" , "02" , "03"].map((avatar, index) => (
                          <a href="#" className={`list-group-item ${index === 1 ? 'active' : ''}`} key={index}>
                            <div className="d-flex">
                              <div className="chat-user-online">
                                <img
                                  src={`src/assets/avatars/${avatar}.png`}
                                  width="42"
                                  height="42"
                                  className="rounded-circle"
                                  alt=""
                                />
                              </div>
                              <div className="flex-grow-1 ms-2">
                                <h6 className="mb-0 chat-title">User {index + 1}</h6>
                                <p className="mb-0 chat-msg">You just got LITT-up, Mike.</p>
                              </div>
                              <div className="chat-time">Time</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          </div>

          <div className="chat-container d-flex flex-column">
            <div className="chat-header d-flex align-items-center">
              <div className="chat-toggle-btn"><i className='bx bx-menu-alt-left'></i></div>
              <div>
                <h4 className="mb-1 font-weight-bold">Harvey Inspector</h4>
                <div className="list-inline d-sm-flex mb-0 d-none">
                  <a href="#" className="list-inline-item d-flex align-items-center text-secondary">
                    <small className='bx bxs-circle me-1 chart-online'></small>Active Now
                  </a>
                  <a href="#" className="list-inline-item d-flex align-items-center text-secondary">|</a>
                  <a href="#" className="list-inline-item d-flex align-items-center text-secondary">
                    <i className='bx bx-images me-1'></i>Gallery
                  </a>
                  <a href="#" className="list-inline-item d-flex align-items-center text-secondary">|</a>
                  <a href="#" className="list-inline-item d-flex align-items-center text-secondary">
                    <i className='bx bx-search me-1'></i>Find
                  </a>
                </div>
              </div>
              <div className="chat-top-header-menu ms-auto">
                <a href="#"><i className='bx bx-video'></i></a>
                <a href="#"><i className='bx bx-phone'></i></a>
                <a href="#"><i className='bx bx-user-plus'></i></a>
              </div>
            </div>

            <div className="chat-content flex-grow-1">
              <PerfectScrollbar>
                <div className="chat-content-leftside">
                  <div className="d-flex">
                    <img
                      src="src/assets/avatars/03.png"
                      width="48"
                      height="48"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1 ms-2">
                      <p className="mb-0 chat-time">Harvey, 2:35 PM</p>
                      <p className="chat-left-msg">Hi, Harvey where are you nowadays?</p>
                    </div>
                  </div>
                </div>

                <div className="chat-content-rightside">
                  <div className="d-flex ms-auto">
                    <div className="flex-grow-1 me-2">
                      <p className="mb-0 chat-time text-end">You, 2:37 PM</p>
                      <p className="chat-right-msg">I am in USA</p>
                    </div>
                  </div>
                </div>

                <div className="chat-content-leftside">
                  <div className="d-flex">
                    <img
                      src="src/assets/avatars/03.png"
                      width="48"
                      height="48"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1 ms-2">
                      <p className="mb-0 chat-time">Harvey, 2:48 PM</p>
                      <p className="chat-left-msg">Okk, what about admin template?</p>
                    </div>
                  </div>
                </div>

                <div className="chat-content-rightside">
                  <div className="d-flex ms-auto">
                    <div className="flex-grow-1 me-2">
                      <p className="mb-0 chat-time text-end">You, 2:37 PM</p>
                      <p className="chat-right-msg">codervent is the author of this admin template</p>
                    </div>
                  </div>
                </div>

                <div className="chat-content-leftside">
                  <div className="d-flex">
                    <img
                      src="src/assets/avatars/03.png"
                      width="48"
                      height="48"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1 ms-2">
                      <p className="mb-0 chat-time">Harvey, 2:48 PM</p>
                      <p className="chat-left-msg">ohh i know about this author. he has good admin products in his portfolio.</p>
                    </div>
                  </div>
                </div>

                <div className="chat-content-rightside">
                  <div className="d-flex ms-auto">
                    <div className="flex-grow-1 me-2">
                      <p className="mb-0 chat-time text-end">You, 2:37 PM</p>
                      <p className="chat-right-msg">yes, codervent has multiple admin templates. also he is very supportive.</p>
                    </div>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>

            {/* Chat Footer */}
            <div className="chat-footer d-flex align-items-center">
              <div className="flex-grow-1 pe-2">
                <div className="input-group">
                  <span className="input-group-text"><i className='bx bx-smile'></i></span>
                  <input type="text" className="form-control" placeholder="Type a message" />
                </div>
              </div>
              <div className="chat-footer-menu">
                <a href="#"><i className='bx bx-file'></i></a>
                <a href="#"><i className='bx bxs-contact'></i></a>
                <a href="#"><i className='bx bx-microphone'></i></a>
                <a href="#"><i className='bx bx-dots-horizontal-rounded'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatComponent;
