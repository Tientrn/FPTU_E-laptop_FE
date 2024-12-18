import React from "react";

function Login() {
  return (
    <div>
      <h1>Đăng Nhập</h1>
      <form>
        <input type="text" placeholder="Tên đăng nhập" />
        <input type="password" placeholder="Mật khẩu" />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
