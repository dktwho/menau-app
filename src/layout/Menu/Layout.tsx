import {NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.css'
import {Button} from "../../components/Button/Button.tsx";
import cn from 'classnames'

export const Layout = () => {
    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img className={styles['avatar']} src="/Intersect.png" alt="avatar user"/>
                    <div className={styles['name']}>User Name</div>
                    <div className={styles['email']}>user@mail.com</div>
                </div>
                <div className={styles['menu']}>
                    <NavLink to="/" className={({isActive}) => cn(styles['link'], {
                        [styles.active]: isActive
                    })}>
                        <img src="/menu-icon.svg" alt="menu"/>Menu</NavLink>
                    <NavLink to="/card" className={({isActive})=> cn(styles['link'], {
                        [styles.active]: isActive
                    })}>
                        <img src="/cart-icon.svg" alt="cart"/>Card</NavLink>
                </div>
                <Button className={styles['exit']}>
                    <img src="/exit-icon.svg" alt="exit-menu"/>Exit
                </Button>
            </div>
            <div className={styles['content']}>
                <Outlet/>
            </div>
        </div>
    );
};
