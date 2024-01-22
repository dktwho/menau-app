import {Await, useLoaderData, useParams} from "react-router-dom";
import {ProductInterface} from "../../interfaces/product.interface.ts";
import {MouseEvent, Suspense} from "react";
import styles from './Product.module.css'
import {Button} from "../../components/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {cartActions} from "../../store/cartSlice.ts";

export const Product = () => {
    const data = useLoaderData() as { data: ProductInterface };
    const params = useParams();
    const dispatch = useDispatch<AppDispatch>()
    const addItem = (e: MouseEvent) => {
        e.preventDefault()
        dispatch(cartActions.add(Number(params.id)))
    }

    return (
        <div>
            <Suspense fallback={'Loading'}>
                <Await resolve={data.data}>
                    {({data}: { data: ProductInterface }) => (
                        <>
                            <div className={styles['productContainer']}>
                                <h1>{data.name} </h1>
                                <Button className={styles['button']} appearance={'small'} onClick={addItem}> В
                                    корзину</Button>
                            </div>
                            <img className={styles['productImage']} src={data.image} alt=""/>
                            <div className={styles['productDescription']}>
                                <div className={styles['productPrice']}>Цена: {data.price} <span>₽</span></div>
                                <div className={styles['productRating']}>Рейтинг: <span>{data.rating} </span><img
                                    src="/rating-star.svg" alt=""/></div>
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
