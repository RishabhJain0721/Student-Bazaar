import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.token);

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
            <form action="" className="abc">
              <input
                type="text"
                name="search"
                id="srch"
                placeholder="Search here..."
              />
            </form>
          </div>

          {/* <!-- side section of bar --> */}
          <div className="side-icons-section">
            <div className="search">
              <img src={SearchImg} alt="" />
              <div className="underline"></div>
            </div>

            {currentUser ? (
              <div className="Login">
                <img src={LoginImg} alt="" />
                <Link to="/profile" className="Login-text">
                  Profile
                </Link>
                <div className="Underline"></div>
              </div>
            ) : (
              <div className="Login">
                <img src={LoginImg} alt="" />
                <Link to="/login" className="Login-text">
                  Login
                </Link>
                <div className="Underline"></div>
              </div>
            )}

            <div className="Wish">
              <img src={HeartImg} alt="" />
              <Link to="#" className="Wish-text">
                Wish
              </Link>
              <div className="Underline"></div>
            </div>

            {currentUser &&
            currentUser.token ==
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIxMDA1MjE1MjAwNDFAaWV0bHVja25vdy5hYy5pbiIsImlhdCI6MTcwMDk0MTA3NSwiZXhwIjoxNzAxMDI3NDc1fQ.JgIEvCBgsgmzZBqc71kE3hF5vNKebHN-3KyPSjrpMsc" ? (
              <div className="Cart">
                <div className=" text-white font-bold text-4xl text-center">
                  +
                </div>
                <Link to="/sell" className="Cart-text">
                  Add
                </Link>
                <div className="Underline"></div>
              </div>
            ) : (
              <div className="Cart">
                {/* <img src={CartImg} alt="" />
                <Link to="#" className="Cart-text">
                  Cart
                </Link>
                <div className="Underline"></div> */}
              </div>
            )}
          </div>
        </div>
        <hr className="Break-section" />

        <div className="nav-bar-lower-section">
          <ul className="icons">
            <Link to="/" className="Home">
              Home
            </Link>
            <Link className="Home">Books</Link>
            <Link className="Home">Electronics</Link>
            <Link className="Home">Furniture</Link>
            <Link className="Home">Other</Link>
            <Link to="/contactus" className="Home">
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
