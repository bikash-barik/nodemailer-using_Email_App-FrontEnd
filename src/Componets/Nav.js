import React from "react";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();

  const EmailCountryName = () => {
    history.push("/DomainCountry");
  };

  const EmailValidator = () => {
    history.push("/EmailValidator");
  };
  const EmailSand = () => {
    history.push("/EmailSand");
  };

  const EmailExtract = () => {
    history.push("/EmailExtract");
  };
  return (
    <div style={{ background: "#091E3E" }}>
      <nav
        class="navbar navbar-expand-lg navbar  container bg-body-tertiary"
        style={{ background: "#091E3E" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="/">
            App
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li class="nav-item ml-5">
                <button
                  type="button"
                  onClick={EmailCountryName}
                  class="btn btn-light"
                >
                  {" "}
                  Domain Country Name
                </button>
              </li>

              <li class="nav-item ml-5">
                <button
                  type="button"
                  onClick={EmailExtract}
                  class="btn btn-light"
                >
                  {" "}
                  Extract Emails
                </button>
              </li>
              <li class="nav-item ml-5">
                <button
                  type="button"
                  onClick={EmailValidator}
                  class="btn btn-light"
                >
                  {" "}
                  Email Validate
                </button>
              </li>
              <li class="nav-item ml-5">
                <button type="button" onClick={EmailSand} class="btn btn-light">
                  {" "}
                  Sand Emails
                </button>
              </li>
              <li class="nav-item ml-5">
                <button type="button" class="btn btn-light">
                  Login
                </button>
              </li>
              <li class="nav-item ml-5">
                <button type="button" class="btn btn-light">
                  Signup
                </button>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
