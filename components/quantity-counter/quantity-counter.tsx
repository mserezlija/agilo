import React, { useState, useRef } from "react";
import styles from "@/components/quantity-counter/quantity-counter.module.css";

interface QuantityCounterProps {
  minValue: number;
  maxValue: number;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  minValue,
  maxValue,
}) => {
  const [quantity, setQuantity] = useState(minValue);
  const quantityRef = useRef<HTMLSpanElement>(null);

  const handleIncrement = () => {
    if (quantity < maxValue) {
      setQuantity(quantity + 1);
      if (quantityRef.current) {
        quantityRef.current.textContent = (quantity + 1).toString();
      }
    }
  };

  const handleDecrement = () => {
    if (quantity > minValue) {
      setQuantity(quantity - 1);
      if (quantityRef.current) {
        quantityRef.current.textContent = (quantity - 1).toString();
      }
    }
  };

  return (
    <div className={styles.counter}>
      <button
        onClick={handleDecrement}
        disabled={quantity === minValue}
        className={`${styles.button} ${styles.buttonLeft}`}
      >
        -
      </button>
      <span ref={quantityRef} className={styles.quantity}>
        {quantity}
      </span>
      <button
        onClick={handleIncrement}
        disabled={quantity === maxValue}
        className={`${styles.button} ${styles.buttonRight}`}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
