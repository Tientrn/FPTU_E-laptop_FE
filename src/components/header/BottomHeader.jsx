import React from "react";

function BottomHeader() {
  return (
    <div className="bottom-header">
      <div class="dropdown">
        <a
          class="btn dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Danh Mục Sản Phẩm
        </a>

        <ul class="dropdown-menu">
          <li>
            <div class="btn-group dropend">
              <a
                class="dropdown-item btn btn-secondary dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                LapTop
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <a href="">Trang Chủ</a>
      <a href="">Giới Thiệu</a>
      <div class="dropdown">
        <a
          class="btn dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dịch Vụ
        </a>

        <ul class="dropdown-menu">
          <li>
            <div class="btn-group dropend">
              <a
                class="dropdown-item btn btn-secondary dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                LapTop
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <a href="">Chính Sách</a>
    </div>
  );
}

export default BottomHeader;
