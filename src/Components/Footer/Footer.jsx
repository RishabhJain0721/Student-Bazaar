import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer1">
          <hr className="border-t-2 border-red-600" />

          <div className=" text-xl md:text-5xl text-center font-bold bg-white p-2">
            Contact Details
          </div>
          <hr className="border-t-2 border-red-600" />
          <div className="names">
            <div className="logo2">
              Student <span style={{ color: "white" }}>Bazaar</span>
            </div>

            <div className="content1">
              <div className="item10">
                <div className="text-red-500">Categories</div>
                <div>
                  <Link
                    to="books"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Books
                  </Link>
                </div>
                <div>
                  <Link
                    to="electronics"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Electronics
                  </Link>
                </div>
                <div>
                  <Link
                    to="furniture"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Furniture
                  </Link>
                </div>
                <div>
                  <Link
                    to="other"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Other
                  </Link>
                </div>
              </div>
              <div className="item10">
                <div className="text-red-500">Contact no.</div>
                <div>5656254152</div>
                <div>5256412555</div>
                <div className="text-red-500">Email</div>
                <div>abc@gmail.com</div>
                <div className="text-red-500">Location</div>
                <div>Near IET college,</div>
                <div>Lucknow University</div>
              </div>
            </div>
          </div>

          <div className="line-lower-footer">
            <hr id="line" />
          </div>

          <div className="LinksBelow">
            <div className="copyrights">
              <h1>&copy;Copyright_student_bazaar</h1>
            </div>

            <div className="handles">
              <Link
                to="https://www.whatsapp.com/"
                className="fa fa-whatsapp"
              ></Link>
              <Link
                to="https://web.telegram.org/"
                className="fa fa-telegram"
              ></Link>
              <Link
                to="https://www.facebook.com/"
                className="fa fa-facebook"
              ></Link>
              <Link
                to="https://www.instagram.com/"
                className="fa fa-instagram"
              ></Link>
              <Link
                to="https://www.Linkedin.com/"
                className="fa fa-Linkedin"
              ></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
