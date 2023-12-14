import {Link, Outlet, useLocation} from "react-router-dom";
import styles from './Layout.module.css'
import {Button} from "../../components/Button/Button.tsx";
import {useEffect} from "react";
import cn from 'classnames'

export const Layout = () => {
    const location = useLocation()

    useEffect(() => {
        console.log(location)
    }, [location])

    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img className={styles['avatar']} src="/Intersect.png" alt="avatar user"/>
                    <div className={styles['name']}>User Name</div>
                    <div className={styles['email']}>user@mail.com</div>
                </div>
                <div className={styles['menu']}>
                    <Link to="/" className={cn(styles['link'], {
                        [styles.active]: location.pathname === '/'
                    })}>
                        <img src="/menu-icon.svg" alt="menu"/>Menu</Link>
                    <Link to="/card" className={styles['link']}>
                        <img src="/cart-icon.svg" alt="cart"/>Card</Link>
                </div>
                <Button className={styles['exit']}>
                    <img src="/exit-icon.svg" alt="exit-menu"/>Exit
                </Button>
            </div>
            Menu

            <div>
                <Outlet/>
            </div>
        </div>
    );
};
