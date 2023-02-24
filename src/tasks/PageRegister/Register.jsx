import React, { useState } from "react";
import "./dk.css";
export default function Register() {
  const [showOut, setShowOut] = useState(true);
  function clickOut() {
    setShowOut(false);
  }
  return (
    <>
      <div className="bongmo">
        {showOut && (
          <>
            <div className="taskDangKi">
              <div className="navbarDK">
                <i onClick={clickOut} className="fa-solid fa-x"></i>
                <div style={ showOut=== !false ? { display: "block" }:{display:"none"}} className="title">
                Đăng nhập hoặc đăng ký{" "}
              </div>
              </div>
              
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
        )}
      </div>
    </>
  );
}
