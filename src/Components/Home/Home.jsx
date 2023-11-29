import React, { useContext, useState } from "react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import Card from "../Card/Card";
import { InfinitySpin } from "react-loader-spinner";
import "./Home.css";
import mianimags from "./images/mian-imags.jpg";
import book from "./images/book.jpg";
import bottomLowerLeft from "./images/bottom-lower-left.png";
import bottomLowerRight from "./images/bottom-lower-right.png";
import calculator from "./images/calculato.jpg";
import telegram from "./images/telegram_icon.png";
import watch from "./images/watch.jpg";
import whatsapp from "./images/WhatsApp_icon.png";
import axios from "axios";
import ItemCard from "../ItemCard/ItemCard";
import { SearchContext } from "../../Contexts/SearchContext";

axios.defaults.baseURL = "https://dark-gray-butterfly-yoke.cyclic.app";

const App = () => {
  useEffect(() => {
    gsap.from(".shopAndSave h1", {
      y: 30,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.4,
    });

    gsap.from(".left-writ-tex h3", {
      y: 30,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.4,
    });

    gsap.from(".studentEssentail h4", {
      y: 30,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.4,
    });
  }, []);
};

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedItems, setSearchedItems] = useState([]);
  const { currentSearch } = useContext(SearchContext);

  // Fetch all items from the database
  useEffect(() => {
    axios
      .get("/api/dashboard")
      .then((res) => {
        setItems(res.data);
        setSearchedItems(res.data);
        console.log("In Items rendered on dashboard : ", res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Filter items based on search query
  useEffect(() => {
    if (items) {
      const filteredItems = items.filter((item) => {
        return item.itemName
          .toLowerCase()
          .includes(currentSearch.value.toLowerCase());
      });
      setSearchedItems(filteredItems);
    }
  }, [currentSearch]);
  return (
    <>
      <div className="main">
        <div className="hero">
          <div className="main-left">
            <div className="shopAndSave">
              <h1> Buy & Sell</h1>
            </div>
            <div className="left-writ-tex">
              <h3>Your go to destination for budget-friendly </h3>
            </div>
            <div className="studentEssentail">
              <h4>student essentials</h4>
            </div>
            <div className="btn">
              <NavLink href="#">
                <span data-attr="Buy"> Buy</span>
                <span data-attr="Now">Now </span>
              </NavLink>
            </div>
          </div>

          <div className="main-right">
            <div className="right-image">
              <img src={mianimags} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-button">
        <div className="join-whatsapp-group">
          <button className="whatsapp-btn">
            <div className="wi35px">
              {" "}
              <img id="WhatsApp_icon_35px" src={whatsapp} alt="" />{" "}
            </div>
            <div className="wtext">
              <pre> JOIN WHATSAPP GROUP</pre>
            </div>
          </button>
        </div>

        <div className="join_telegram_channel">
          <button className="join-telegrma-btn">
            <div className="ti35px">
              {" "}
              <img id="telegram_icon_45px" src={telegram} alt="" />{" "}
            </div>
            <div className="tText">
              <pre> JOIN TELEGRAM GROUP</pre>
            </div>
          </button>
        </div>
      </div>

      <div className="text-below-btn">
        <h3>Available Listings :</h3>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-96">
          <InfinitySpin width="200" color="#424242" />
        </div>
      ) : (
        <div className="p-5 flex flex-wrap px-10 justify-center md:justify-start">
          {searchedItems.map((item) => (
            <ItemCard key={item._id} rest={item} />
          ))}
        </div>
      )}

      <div className="grid-wrapper">
        <div className="image-grid1">
          <img src={book} alt="" />
        </div>
        <div className="image-grid2">
          <div className="image-grid21">
            <img src={calculator} alt="" />
          </div>
          <div className="image-grid22">
            <img src={watch} alt="" />
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="bottom-div">
        <div className="left-bottom-div">
          <img src={bottomLowerLeft} alt="" />
          <div className="text-lower">
            <h2>Sell What You Don't Need,</h2>
            <h2>Buy What You Do</h2>
          </div>
        </div>

        <div className="right-bottom-div">
          <img src={bottomLowerRight} alt="" />
          <div className="text-lower-right">
            <h2>Join the Green Revolution,</h2>
            <h2>One Purchase at a Time</h2>
          </div>
        </div>
      </div>
    </>
  );
}
