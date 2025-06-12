import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchparms, setSearchParams] = useSearchParams();
  const success = searchparms.get("success");
  const orderId = searchparms.get("orderId");

  const verifyPayment = async () => {};
  return <div></div>;
};

export default Verify;
