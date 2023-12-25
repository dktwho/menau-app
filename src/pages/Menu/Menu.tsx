import {Headling} from "../../components/Headling/Headling.tsx";
import {Search} from "../../components/Search/Search.tsx";
import styles from './Menu.module.css'
import {ProductCard} from "../../components/ProductCard/ProductCard.tsx";
import {PREFIX} from "../../helpers/api.ts";
import {Product} from "../../interfaces/product.interface.ts";
import {useEffect, useState} from "react";
import axios from "axios";

export const Menu = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getMenu = async () => {
        try {
            setIsLoading(true)
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 2000)
            })
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`)
            setProducts(data)
            setIsLoading(false)
        } catch (e) {
            console.error(e)
            setIsLoading(false)
            return;
        }
    }

    useEffect(() => {
        getMenu()
    }, [])
    return (
        <>
            <div className={styles['head']}>
                <Headling>Menu</Headling>
                <Search placeholder={'Введите блюдо или состав'}></Search>
            </div>
            <div>
                {!isLoading && products.map(product => {
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
                {isLoading && <>loading...</>}
            </div>
        </>
    );
};
