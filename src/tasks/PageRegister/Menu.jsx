import React, { useState } from "react";
import Register from "./Register";
import "./dk.css"
export default function () {
  const [showCon, setShowCon] = useState(false);
  const [showOut, setShowOut] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  function clickOut() {
    setShowOut(false);
  }
  function handleClick() {
    setShowCon(!showCon);
  }
  function handleClickRGT() {
    setShowRegister(true);
    
  }
  return (
    <>
      <div className="container1">
        <div className="navbar">
          <i onClick={handleClick} className="fa-solid fa-bars">
            {showCon && (
              <div
                style={
                  showCon === true ? { display: "block" } : { display: "none" }
                }
                className="tblUser" >
                <pre>
                  <div onClick={handleClickRGT}> đăng kí {}</div>
                  <div> đăng nhập</div>
                  <div
                    style={{ borderBottom: "1px solid black", width: "250px" }}
                  >
                    {" "}
                  </div>
                  <div>cho thuê chỗ ở ở aribnb </div>
                  <div> tổ chức trải nghiệm </div>
                  <div> trợ giúp</div>
                </pre>
              </div>
            )}
          </i>
        </div>

        <div className="bongmo">
        
          <>
            <div className="taskDangKi">
              <div className="navbarDK">
                <i onClick={clickOut} className="fa-solid fa-x"></i>
                <div style={ showOut=== !false ? { display: "block" }:{display:"none"}} className="title">
                Đăng nhập hoặc đăng ký{" "}
              </div>
              </div>
              
               {}
              <div className="formDK">
                <h3 style={{ marginTop: "10px" }}>
                  {" "}
                  Chào mừng bạn đến với Airbnb
                </h3>
                <form className="formInput">
                  <div className="Input">
                    <div>
                      <input
                        className="Number"
                        type="number"
                        placeholder="Số điện thoại"
                      />
                    </div>
                    <div>
                      <input
                        className="password"
                        type="text"
                        placeholder="Mật khẩu"
                      />
                    </div>
                  </div>
                  <div className="titleNote">
                    {" "}
                    Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số
                    điện thoại. Có áp dụng phí dữ liệu và phí tin nhắn tiêu
                    chuẩn.{" "}
                    <a href="" className="theA">
                      {" "}
                      Chính sách về quyền riêng tư
                    </a>
                  </div>
                  <div className="tieptuc"> Tiếp tục </div>
                </form>
                <div className="titleHoac">
                  ―――――――――――――――――hoặc―――――――――――――――――{" "}
                </div>
                <div className="optionDangki">
                  <div className="tieptucvoi">
                    {" "}
                    <img
                      style={{ width: "25px" }}
                      src="../2021_Facebook_icon.svg.png"
                      alt=""
                    />
                    <p>Tiếp tục với Facebook</p>
                  </div>
                  <div className="tieptucvoi">
                    {" "}
                    <img
                      style={{ width: "25px" }}
                      src="../icon-gg__login.webp"
                      alt=""
                    />
                    <p>Tiếp tục với Google</p>
                  </div>
                  <div className="tieptucvoi">
                    {" "}
                    <img
                      style={{ width: "25px" }}
                      src="../Instagram_icon.png.webp"
                      alt=""
                    />
                    <p>Tiếp tục với Instagram</p>
                  </div>
                  <div className="tieptucvoi">
                    {" "}
                    <img style={{ width: "25px" }} src="../561188.png" alt="" />
                    <p>Tiếp tục với Email</p>
                  </div>
                </div>
              </div>

            </div>
          </>
       
      </div>
      </div>
    </>
  );
}
