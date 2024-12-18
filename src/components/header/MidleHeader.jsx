import React from "react";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import { Link } from "react-router-dom";
function MidleHeader() {
  return (
    <div className="midle-header">
      <div>
        <h1>
          <LaptopChromebookRoundedIcon fontSize="" />
          FPTU E-Laptop
        </h1>
      </div>

      <div className="search-bar flex-grow-1 px-3">
        <form class="w-100 me-3" role="search">
          <input
            type="search"
            class="form-control"
            placeholder="Bạn đang tìm kiếm sản phẩm gì?"
            aria-label="Search"
          />
        </form>
      </div>

      <div className="">
        <ul>
          <li>
            <Link to="/login">
              <PersonRoundedIcon />
              <span>Tài Khoản</span>
            </Link>
          </li>
          <li>
            <a href="">
              <ShoppingCartCheckoutRoundedIcon />
              <span>Giỏ hàng</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MidleHeader;
