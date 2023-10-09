import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { useNavigate } from "react-router-dom";
import { client } from "../client";
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = async (response) => {
    const decodedResponse = jwt_decode(response.credential);
    localStorage.setItem("user", JSON.stringify(decodedResponse));
    const { name, sub, picture } = decodedResponse;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div>
        <video
          src={shareVideo}
          type="video/mp4"
          autoPlay
          loop
          controls={false}
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
        <div className="p-5">
          <img src={logo} width="130px" alt="logo" />
        </div>
        <div className="shadow-2xl">
          <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Login;
