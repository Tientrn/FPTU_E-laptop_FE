import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function Footer() {
  return (
    <footer className="py-5">
      <div className="row">
        {/* Section 1 */}
        <div className="col-6 col-md-2 mb-3">
          <h5>FPTU E-Laptop</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="https://www.bing.com/search?q=d%C4%91%E1%BB%8Ba+ch%E1%BB%89+tr%C6%B0%E1%BB%9Dng+fpt+hcm&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=d%C4%91%E1%BB%8Ba+ch%E1%BB%89+tr%C6%B0%E1%BB%9Dng+fpt+hcm&sc=8-23&sk=&cvid=56B7735746C24F14A735CD4534FC3C54&ghsh=0&ghacc=0&ghpl="
                className="nav-link p-0 text-color"
              >
                <LocationOnOutlinedIcon /> Địa Chỉ : Lô E2a-7, Đường D1, Khu
                Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="tel:0337496879" className="nav-link p-0 text-color">
                <PhoneOutlinedIcon /> Điện Thoại: 0337496879
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="tel:0337496879" className="nav-link p-0 text-color">
                <PhoneOutlinedIcon /> Hotline: 0337496879
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="mailto:elaptopfpt@gmail.com"
                className="nav-link p-0 text-color"
              >
                <AlternateEmailOutlinedIcon /> Email: elaptopfpt@gmail.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                <LanguageOutlinedIcon /> Website:
              </a>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="col-6 col-md-2 mb-3">
          <h5>Thông Tin</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                Trang Chủ
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                Giới Thiệu
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                Hướng dẫn đặt hàng & Thanh toán
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                Chính sách bảo hành và đổi trả
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                Chính sách bảo mật
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                Chính sách vận chuyển
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                Liên hệ & Góp ý
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-color">
                Tin tức
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i
                className="bi bi-twitter"
                style={{ fontSize: "24px", color: "white" }}
              ></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i
                className="bi bi-instagram"
                style={{ fontSize: "24px", color: "white" }}
              ></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i
                className="bi bi-facebook"
                style={{ fontSize: "24px", color: "white" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
