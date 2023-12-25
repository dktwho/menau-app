import {Headling} from "../../components/Headling/Headling.tsx";
import {Search} from "../../components/Search/Search.tsx";
import styles from './Menu.module.css'
import {ProductCard} from "../../components/ProductCard/ProductCard.tsx";
import {PREFIX} from "../../helpers/api.ts";
import {Product} from "../../interfaces/product.interface.ts";
import {useState} from "react";

export const Menu = () => {
    const [products, setProducts] = useState<Product[]>([])

    const getMenu = async () => {
        try {
            const res = await fetch(`${PREFIX}/products`)
            if (!res.ok) {
                return;
            }
            const data = await res.json() as Product[]
            setProducts(data)
        } catch (e) {
            console.error(e)
        }


    }
    return (
        <>
            <div className={styles['head']}>
                <Headling>Menu</Headling>
                <Search placeholder={'Введите блюдо или состав'}></Search>
            </div>
            <div>
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
                    )
                })}
                <ProductCard id={1} name={'Наслаждение'} description={'Салями, руккола, помидоры, оливки'}
                             image='/product-demo.png' price={300} rating={4.5}/>
            </div>

        </>
    );
};
