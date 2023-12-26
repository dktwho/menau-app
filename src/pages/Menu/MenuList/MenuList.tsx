import {ProductCard} from "../../../components/ProductCard/ProductCard.tsx";
import {MenuListProps} from "./MenuList.props.ts";
import styles from './MenuList.module.css'

export const MenuList = ({products}: MenuListProps) => {
    return (
        <div className={styles['wrapper']}>
            {products.map(product => {
                return (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.ingredients.join(', ')}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}/>
                );
            })}
        </div>
    )
}


