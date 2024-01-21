import {Headling} from "../../components/Headling/Headling.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {CartItem} from "../../components/CartItem/CartItem.tsx";
import {useEffect, useState} from "react";
import {ProductInterface} from "../../interfaces/product.interface.ts";
import {PREFIX} from "../../helpers/api.ts";
import axios from "axios";
import styles from './Card.module.css';

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
            <div>
                <div>Итог</div>
                <div>{total}</div>
            </div>
            <hr/>
            <div>
                <div>Доставка</div>
                <div>{DELIVERY_FEE}</div>
            </div>
            <hr/>
            <div>
                <div>Итог {items.length}</div>
                <div>{total + DELIVERY_FEE}</div>
            </div>
        </>

    );
};
