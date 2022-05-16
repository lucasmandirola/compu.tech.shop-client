import styles from "./CartItem.module.css"
import { Button } from "@mui/material";
import { style } from "@mui/system";
const CartItem = ({ data, delFromCart, addToCart }) => {
  let { name, id, price, quantity, image } = data;

  return (
    <div className={styles.container}>
      <div>{name}</div>
      <Button variant="outlined" onClick={() => delFromCart(id)}>-</Button>

      <Button variant="outlined" onClick={() => delFromCart(id, true)}>
        delete all</Button>

      <Button variant="outlined" onClick={() => addToCart(id)}>+</Button>
      <div>
        ${price} x {quantity} = ${quantity * price}
      </div>
      <div className={styles.containerImgBtn}>
        <img className={styles.cartImg} src={image} alt={name} />
      </div>
    </div>
  );
};

export default CartItem;
