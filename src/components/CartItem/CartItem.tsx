import styles from './CartItem.module.css'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {cartActions} from "../../store/cartSlice.ts";
import {MouseEvent} from "react";
import {CartItemProps} from "./CartItem.props.ts";

export const CartItem = ({id, name, price, image, count}: CartItemProps) => {
    const dispatch = useDispatch<AppDispatch>()
    const increase = (e: MouseEvent) => {
        e.preventDefault()
        dispatch(cartActions.add(id))
    }

    const removeItem = () => {
        dispatch(cartActions.add(id))
    }
    const decrease = () => {
    }

    return (

        <div className={styles['item']}>
            <div className={styles['image']} style={{backgroundImage: `url('${image}')`}}></div>
            <div className={styles['description']}>
                <div className={styles['name']}>{name}</div>
                <div className={styles['currency']}>{price}&nbsp; ₽</div>
            </div>

            <div className={styles['actions']}>
                <button className={styles['button']} onClick={increase}>
                    <img src="/add-to-cart-icon.svg" alt="increase-to-cart"/>+
                </button>
                <div>
                    {count}
                </div>
                <button className={styles['button']} onClick={decrease}>
                    <img src="/add-to-cart-icon.svg" alt="decrease-from-cart"/>-
                </button>

                <button className={styles['remove']} onClick={removeItem}>
                    <img src="/add-to-cart-icon.svg" alt="remove-all-cart"/>X
                </button>
            </div>
        </div>
    );
};
