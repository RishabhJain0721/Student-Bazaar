import React, { useState } from "react";
import axios from "axios";
import Input from "../Input/Input";
import { BlueButton } from "../Buttons/Buttons";
import { Link, useNavigate } from "react-router-dom";

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = "https://dark-gray-butterfly-yoke.cyclic.app";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("New user signup");
    console.log("Name : ", name);
    console.log("Email : ", email);
    console.log("Phone : ", phone);
    console.log("Password : ", password);
    axios
      .post("/api/auth/signup", { name, email, phone, password })

      .then((res) => {
        alert(res.data.message);
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          // If the response status is 400, it's a duplicate user
          alert(err.response.data.message);
          setName("");
          setEmail("");
          setPhone("");
          setPassword("");
        } else if (err.response && err.response.status === 401) {
          alert("Invalid Email");
        } else {
          console.log(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Phone"
            type="number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center">
            <BlueButton val="Sign Up" loading={loading} />
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
