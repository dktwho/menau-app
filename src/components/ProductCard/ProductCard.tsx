import styles from './ProductCard.module.css'
import {ProductCardProps} from "./ProductCard.props.ts";

export const ProductCard = ({id, title, price, rating, image, description}: ProductCardProps) => {
    return (
        <div className={styles['card']}>
            <div className={styles['head']}>
                <div className={styles['price']}>
                    {price}
                </div>
                <button className={styles['add-to-cart']}>
                    <img src="/add-to-cart-icon.svg" alt="add-to-cart"/>
                </button>
                <div className={styles['rating']}>
                    {rating}
                    <img src="/rating-star.svg" alt="rating-star"/>
                </div>
            </div>
            <div className={styles['footer']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['description']}>{description}</div>
            </div>
        </div>
    );
};
