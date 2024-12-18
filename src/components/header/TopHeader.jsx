import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
function TopHeader() {
  return (
    <div className="top-bar">
      <div className="top-phone">
        <ul>
          <li>
            <CallIcon />
            <span>Hotline:</span>
            <a href="tel:0337496879" title="0337496879">
              <strong>0337496879</strong>
            </a>
          </li>
          <li>
            <EmailIcon />
            <span>Email:</span>
            <a href="mailto:elaptopfpt@gmail.com" title="0337496879">
              <strong>elaptopfpt@gmail.com</strong>
            </a>
          </li>
        </ul>
      </div>
      <div className="top-menu">
        <ul>
          <li>
            <a href="">Tin Tức</a>
          </li>
          <li>
            <a href="">Liên Hệ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopHeader;
