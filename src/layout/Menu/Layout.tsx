import {Link, Outlet} from "react-router-dom";
import styles from './Layout.module.css'
import {Button} from "../../components/Button/Button.tsx";

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
                    <Link to="/" className={styles['link']}>
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
