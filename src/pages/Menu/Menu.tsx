import {Headling} from "../../components/Headling/Headling.tsx";
import {Search} from "../../components/Search/Search.tsx";
import styles from './Menu.module.css'
import {PREFIX} from "../../helpers/api.ts";
import {ProductInterface} from "../../interfaces/product.interface.ts";
import {ChangeEvent, useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {MenuList} from "./MenuList/MenuList.tsx";

const Menu = () => {
    const [products, setProducts] = useState<ProductInterface[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>()
    const [filter, setFilter] = useState<string>()

    const getMenu = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.get<ProductInterface[]>(`${PREFIX}/products`)
            setProducts(data)
            setIsLoading(false)
        } catch (e) {
            console.error(e)
            if (e instanceof AxiosError) {
                setError(e.message)
            }
            setIsLoading(false)
            return;
        }
    }
    const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value)
    }

    useEffect(() => {
        getMenu()
    }, [])
    return (
        <>
            <div className={styles['head']}>
                <Headling>Menu</Headling>
                <Search placeholder={'Введите блюдо или состав'} onChange={updateFilter}></Search>
            </div>
            <div>
                {error && <>{error}</>}
                {!isLoading && <MenuList products={products}/>}
                {isLoading && <>loading...</>}
            </div>
        </>
    );
}

export default Menu