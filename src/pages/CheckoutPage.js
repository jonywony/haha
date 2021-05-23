import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";

import LabelContainer from "../components/LabelContainer";
import CheckoutItem from "../components/CheckoutItem";

import {
  selectCartItemsChecked,
  selectCartItemsTotal,
  selectDeliveryType,
} from "../redux/cart/cart.selectors";
import { setDeliveryType } from "../redux/cart/cart.actions";

const CheckoutPage = ({ history }) => {
  const [paymentType, setPaymentType] = useState("");
  const deliveryType = useSelector((state) => selectDeliveryType(state));
  console.log(paymentType);
  const dispatch = useDispatch();

  const convert = {
    type: 0,
    price: 1,
  };
  const { price } = convert;

  const cartItems = useSelector((state) => selectCartItemsChecked(state));
  const cartItemsTotal = useSelector((state) => selectCartItemsTotal(state));
  const checkoutItemsTotal = cartItemsTotal + Number(deliveryType[price]);

  const handleCheckRadio = (e) => {
    const { value } = e.target;
    dispatch(setDeliveryType(value.split(",")));
  };

  const handlePaymentMethod = (e) => {
    const { innerHTML } = e.target;
    setPaymentType(innerHTML);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post("api/signup", {  }).then((res) => {
    //   console.log(res.data);
    //   if ("User Already Exist!" === res.data) {
    //     console.log("USER_EXIST");
    //   }
    // });

    history.push("/state/inpaid");
  };

  return (
    <div className="flex flex-1 flex-col justify-between">
      <LabelContainer onClick={() => history.push("/cart")}>
        <span className="mb-2 mr-2">&larr;</span>
        <span>Check Out</span>
      </LabelContainer>

      <LabelContainer>ALAMAT</LabelContainer>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex-col justify-center items-center space-y-4"
      >
        <LabelContainer>
          <div className="flex flex-auto flex-col justify-between space-y-2">
            <div className="flex space-x-4">
              <div>Logo</div>
              <div>Daftar Items</div>
            </div>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.pid} item={cartItem} />
            ))}
          </div>
        </LabelContainer>

        <LabelContainer>
          <div className="flex flex-auto flex-col justify-between space-y-2">
            <div className="flex space-x-4">
              <div>Logo</div>
              <div>Pilih Pengiriman</div>
            </div>
            <div className="bg-gray-300 h-36 p-2">
              <div className="flex flex-col justify-between h-full space-y-2">
                <div>
                  <input
                    className="h-8 w-8"
                    type="radio"
                    name="delivery_type"
                    value={["JNE", 8]}
                    onChange={handleCheckRadio}
                  />
                  <span className="ml-4 text-center text-2xl text-gray-700">
                    J&T Express
                  </span>
                </div>
                <div>
                  <input
                    className="h-8 w-8"
                    type="radio"
                    name="delivery_type"
                    value={["J&T", 10]}
                    onChange={handleCheckRadio}
                  />
                  <span className="ml-4 text-center text-2xl text-gray-700">
                    JNE Regular (Cashless)
                  </span>
                </div>
                <div>
                  <input
                    className="h-8 w-8"
                    type="radio"
                    name="delivery_type"
                    value={["ID", 12]}
                    onChange={handleCheckRadio}
                  />
                  <span className="ml-4 text-center text-2xl text-gray-700">
                    ID Express
                  </span>
                </div>
              </div>
            </div>
          </div>
        </LabelContainer>

        <LabelContainer>
          <div className="flex flex-col flex-auto space-y-4 justify-between">
            <div className="flex flex-auto  space-x-2">
              <div className="w-1/6">Logo</div>
              <div className="w-2/3">Pilih Pembayaran</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div
                className="flex justify-center items-center bg-blue-600 h-64"
                value="DANA"
                onClick={handlePaymentMethod}
              >
                DANA
              </div>
              <div
                className="flex justify-center items-center bg-blue-600 h-64"
                value="OVO"
                onClick={handlePaymentMethod}
              >
                OVO
              </div>
              <div
                className="flex justify-center items-center bg-blue-600 h-64"
                value="GOPAY"
                onClick={handlePaymentMethod}
              >
                GOPAY
              </div>
              <div
                className="flex justify-center items-center bg-blue-600 h-64"
                value="COD"
                onClick={handlePaymentMethod}
              >
                COD
              </div>
            </div>
          </div>
        </LabelContainer>

        <LabelContainer>
          <div className="flex flex-auto space-x-2 justify-between">
            <div className="flex flex-auto  space-x-2">
              <div className="w-1/6">Logo</div>
              <div className="w-2/3">Total pesanan</div>
            </div>
            <div className="flex justify-end w-1/4">
              {Number(deliveryType[price])
                ? `Rp ${checkoutItemsTotal}.000`
                : `Rp ${cartItemsTotal}.000`}
            </div>
          </div>
        </LabelContainer>

        <LabelContainer>
          <div className="flex flex-auto justify-end items-center space-x-4">
            <button
              className="w-1/4 px-6 py-4 bg-green-700 text-white"
              onClick={() => history.push("/state/unpaid")}
            >
              Bayar Nanti
            </button>
            <button
              type="submit"
              value="submit form"
              className="w-1/4 px-6 py-4 bg-green-700 text-white"
            >
              Bayar Sekarang
            </button>
          </div>
        </LabelContainer>
      </form>
    </div>
  );
};

export default withRouter(CheckoutPage);
