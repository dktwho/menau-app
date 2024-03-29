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

    useEffect(() => {
        getMenu(filter)
    }, [filter])

    const getMenu = async (name?: string) => {
        try {
            setIsLoading(true)
            const {data} = await axios.get<ProductInterface[]>(`${PREFIX}/products`, {
                params: {
                    name
                }
            })
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


    return (
        <>
            <div className={styles['head']}>
                <Headling>Menu</Headling>
                <Search placeholder={'Введите блюдо или состав'} onChange={updateFilter}></Search>
            </div>
            <div>
                {error && <>{error}</>}
                {!isLoading && products.length > 0 &&  <MenuList products={products}/>}
                {isLoading && <>loading...</>}
                {!isLoading && products.length === 0 &&  <>Блюдо по запросу не найдено</>}

            </div>
        </>
    );
}

export default Menu