import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(user);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          AH Learning
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Dark Mood</span>
            <input
              type="checkbox"
              className="toggle toggle-primary mx-2"
              checked
            />
          </label>
        </div>
        <>
          {user ? (
            <>
              <span className="me-3 my-2">{user?.displayName}</span>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full mx-2">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <button onClick={handleLogOut} className="btn">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn mx-2">
                Sign In
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
