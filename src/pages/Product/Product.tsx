import {Await, useLoaderData} from "react-router-dom";
import {ProductInterface} from "../../interfaces/product.interface.ts";
import {Suspense} from "react";
import styles from './Product.module.css'
import {Button} from "../../components/Button/Button.tsx";

export const Product = () => {
    const data = useLoaderData() as { data: ProductInterface };
    return (
        <div>
            <Suspense fallback={'Loading'}>
                <Await resolve={data.data}>
                    {({data}: { data: ProductInterface }) => (
                        <>
                            <div className={styles['productContainer']}>
                                <h1>{data.name} </h1>
                                <Button className={styles['button']} appearance={'small'}>В
                                    корзину</Button>
                            </div>

                            <img className={styles['productImage']} src={data.image} alt=""/>

                            <div className={styles['productDescription']}>
                                <div className={styles['productPrice']}>Цена: {data.price} <span>₽</span> </div>
                                <div className={styles['productRating']}>Рейтинг: <span>{data.rating} </span><img src="/rating-star.svg" alt=""/></div>
                                <div className={styles['productItems']}>Состав: {data.ingredients.map((el) => {
                                    return (
                                        <li className={styles['productItem']} key={el + 1}>{el}</li>
                                    )
                                })}
                                </div>
                            </div>

                        </>
                    )}
                </Await>
            </Suspense>
        </div>
    );
};
