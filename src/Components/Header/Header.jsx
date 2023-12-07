import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import CartImg from "./images/cart.png";
import ManuImg from "./images/menu.png";
import HeartImg from "./images/heart.png";
import LoginImg from "./images/login.png";
import SearchImg from "./images/search-line.png";
import { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./Sidebar";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.token);

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    window.location.reload();
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-bar-upper-section">
          {/* <!-- student bazaar logo --> */}

          <div className="menu-upper">
            <div className="navbar-seactiom">
              {/* <img src={ManuImg} alt=""/> */}
              <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                  <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                  </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                  <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                      <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                      </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </IconContext.Provider>
            </div>

            <div className="student-bazaar-logo">
              <h2 className="student-bazaar-logo-left">Student </h2>
              <h2 className="student-bazaar-logo-right">
                <pre> Bazaar</pre>
              </h2>
            </div>
          </div>

          {/* <!-- search bar  --> */}
          <div className="search-box">
            <form action="" className="abc flex flex-row ">
              <input
                type="text"
                name="search"
                id="srch"
                placeholder="Search here..."
                value={search}
                onChange={(e) => {setSearch(e.target.value);
                console.log(search)}}
              />
              <button
                type="submit"
                className="search-btn"
                onClick={searchHandler}
              >
                <i className="fa-solid fa-search"></i>
              </button>
            </form>
          </div>

          {/* <!-- side section of bar --> */}
          <div className="side-icons-section">
            <div className="search">
              <img src={SearchImg} alt="" />
              <div className="underline"></div>
            </div>

            {currentUser ? (
              <Link to="/profile" className="Login">
                <img src={LoginImg} className="pb-1" alt="" />
                <div className="Login-text">Profile</div>
                <div className="Underline"></div>
              </Link>
            ) : (
              <>
                <Link to="/login" className="Login">
                  <img src={LoginImg} alt="" />
                  <div className="Login-text">Login</div>
                  <div className="Underline"></div>
                </Link>
                <Link to="/signup" className="Login">
                  <i className="fa-solid fa-right-to-bracket text-white text-2xl pb-2"></i>
                  <div className="Login-text">Sign Up</div>
                  <div className="Underline"></div>
                </Link>
              </>
            )}

            {currentUser &&
              currentUser.token ===
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIxMDA1MjE1MjAwNDFAaWV0bHVja25vdy5hYy5pbiIsImlhdCI6MTcwMTEwODc5MiwiZXhwIjoxNzAxMTk1MTkyfQ.tuoLoyp6HZLgUTqtQy1QTTA5P4Qlc_1uKGO0RRwYtzM" && (
                <Link to="/showOrders" className="Wish">
                  <i className="fa-solid fa-clipboard-list text-white text-3xl pb-2 mt-1"></i>
                  <div className="Wish-text">Orders</div>
                  <div className="Underline"></div>
                </Link>
              )}

            {currentUser &&
              currentUser.token ===
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIxMDA1MjE1MjAwNDFAaWV0bHVja25vdy5hYy5pbiIsImlhdCI6MTcwMTEwODc5MiwiZXhwIjoxNzAxMTk1MTkyfQ.tuoLoyp6HZLgUTqtQy1QTTA5P4Qlc_1uKGO0RRwYtzM" && (
                <Link to="/sell" className="Cart">
                  <div className=" text-white font-bold text-4xl text-center">
                    +
                  </div>
                  <div className="Cart-text">Add</div>
                </Link>
              )}

            {currentUser &&
              currentUser.token !==
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIxMDA1MjE1MjAwNDFAaWV0bHVja25vdy5hYy5pbiIsImlhdCI6MTcwMTEwODc5MiwiZXhwIjoxNzAxMTk1MTkyfQ.tuoLoyp6HZLgUTqtQy1QTTA5P4Qlc_1uKGO0RRwYtzM" && (
                <Link to="/showMyOrders" className="Cart">
                  <i class="fa-solid fa-list-ol text-white text-3xl pb-1"></i>
                  <div className="Cart-text">My Orders</div>
                  <div className="Underline"></div>
                </Link>
              )}
          </div>
        </div>
        <hr className="Break-section" />

        <div className="nav-bar-lower-section">
          <ul className="icons">
            <Link to="/" className="Home">
              Home
            </Link>
            <Link to="/books" className="Home">
              Books
            </Link>
            <Link to="/electronics" className="Home">
              Electronics
            </Link>
            <Link to="/furniture" className="Home">
              Furniture
            </Link>
            <Link to="/other" className="Home">
              Other
            </Link>
            <Link
              className="Home"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Contact us
            </Link>
            <Link to="/about" className="Home">
              About us
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
