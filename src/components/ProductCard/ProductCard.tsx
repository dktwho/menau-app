import styles from './ProductCard.module.css'
import {ProductCardProps} from "./ProductCard.props.ts";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {cartActions} from "../../store/cartSlice.ts";

export const ProductCard = ({id, name, price, rating, image, description}: ProductCardProps) => {
    const dispatch = useDispatch<AppDispatch>()
    const addItem = (e: MouseEvent) => {
        e.preventDefault()
        dispatch(cartActions.add(id))
    }
    return (
        <Link to={`/product/${id}`} className={styles['link']}>
            <div className={styles['card']}>
                <div className={styles['head']} style={{backgroundImage: `url('${image}')`}}>
                    <div className={styles['price']}>
                        {price}&nbsp;
                        <span className={styles['currency']}>₽</span>
                    </div>
                    <button className={styles['add-to-cart']} onClick={addItem}>
                        <img src="/add-to-cart-icon.svg" alt="add-to-cart"/>
                    </button>
                    <div className={styles['rating']}>
                        {rating}&nbsp;
                        <img src="/rating-star.svg" alt="rating-star"/>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{name}</div>
                    <div className={styles['description']}>{description}</div>
                </div>
            </div>
        </Link>

    );
};
