import React from "react";

export default function Register() {
  return (
    <div className="container">
      <nav class="nav">
        <img class="hamburger" alt="filter button" />
        <h1 class="page-name">INVADR</h1>
        <img class="sign-up" alt="Sign Up" />
      </nav>
      {/* -------- NAV is the same accross all pages -------- */}

      <div className="body-title">
        <div className="textcontainer">
          <p>Sign In</p>
        </div>

        <div className="sign-in text">
          <p>Don't have an account? Create one!</p>
        </div>
      </div>

      <form className="form-card">
        <div class="form-group">
          <label for="exampleInputEmail1">
            <b>Email address</b>
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="email@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </div>

        <div class="container-cancel">
          <button type="button" class="cancelbtn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
