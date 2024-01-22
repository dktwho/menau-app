import {Headling} from "../../components/Headling/Headling.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {CartItem} from "../../components/CartItem/CartItem.tsx";
import {useEffect, useState} from "react";
import {ProductInterface} from "../../interfaces/product.interface.ts";
import {PREFIX} from "../../helpers/api.ts";
import axios from "axios";
import styles from './Card.module.css';
import {Button} from "../../components/Button/Button.tsx";

const DELIVERY_FEE = 169

export const Card = () => {
    const [cartProducts, setCartproducts] = useState<ProductInterface[]>([])
    const items = useSelector((state: RootState) => state.cart.items)
    const total = items.map(i => {
        const product = cartProducts.find(product => product.id === i.id)
        if (!product) {
            return 0;
        }
        return i.count * product.price
    }).reduce((acc, i) => acc += i, 0)


    const getItem = async (id: number) => {
        const {data} = await axios.get<ProductInterface>(`${PREFIX}/products/${id}`)
        return data;
    }

    const loadAllItems = async () => {
        const res = await Promise.all(items.map(i => getItem(i.id)))
        setCartproducts(res)
    }

    useEffect(() => {
        loadAllItems()
    }, [items])
    return (
        <>
            <Headling className={styles['headling']}>Cart</Headling>
            {items.map(i => {
                const product = cartProducts.find(product => product.id === i.id)
                if (!product) {
                    return;
                }
                return <CartItem key={product.id} count={i.count}  {...product}/>
            })}
            <div className={styles['line']}>
                <div className={styles['text']}>Итог</div>
                <div className={styles['price']}>{total}&nbsp;<span>₽</span></div>
            </div>
            <hr className={styles['hr']}/>
            <div className={styles['line']}>
                <div className={styles['text']}>Доставка</div>
                <div className={styles['price']}>{DELIVERY_FEE}&nbsp;<span>₽</span></div>
            </div>
            <hr className={styles['hr']}/>
            <div className={styles['line']}>
                <div className={styles['text']}>Итог <span className={styles['totalCount']}>({items.length})</span></div>
                <div className={styles['price']}>{total + DELIVERY_FEE}&nbsp;<span>₽</span></div>
            </div>
            <div className={styles['checkout']}>
                <Button appearance={'big'}>Оформить</Button>
            </div>
        </>

    );
};
