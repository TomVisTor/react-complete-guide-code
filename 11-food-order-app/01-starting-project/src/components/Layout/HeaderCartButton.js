import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHightighted, setBtnIsHightighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const nbrOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${
    btnIsHightighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHightighted(true);

    const timer = setTimeout(() => {
      setBtnIsHightighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nbrOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
