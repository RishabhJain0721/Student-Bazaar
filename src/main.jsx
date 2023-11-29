import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import AboutSection from "./Components/About/About.jsx";
import ContactSection from "./Components/Contact/Contact.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Verification from "./Components/VerificationPage/VerificationPage.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Seller from "./Components/Seller/Seller.jsx";
import ItemInfo from "./Components/ItemInfo/ItemInfo.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import MyOrders from "./Components/MyOrders/MyOrders.jsx";
import OrderInfo from "./Components/OrderInfo/OrderInfo.jsx";
import { AuthContextProvider } from "./Contexts/AuthContext.jsx";
import { ItemContextProvider } from "./Contexts/ItemContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutSection />} />
      <Route path="contactus" element={<ContactSection />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="verification" element={<Verification />} />
      <Route path="profile" element={<Profile />} />
      <Route path="sell" element={<Seller />} />
      <Route path="item/:id" element={<ItemInfo />} />
      <Route path="showOrders" element={<Orders />} />
      <Route path="showMyOrders" element={<MyOrders />} />
      <Route path="myOrderDetails/:id" element={<OrderInfo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ItemContextProvider>
        <RouterProvider router={router} />
      </ItemContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
