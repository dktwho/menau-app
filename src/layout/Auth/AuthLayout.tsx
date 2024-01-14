import {Outlet} from "react-router-dom";
import styles from './AuthLayout.module.css'

export const AuthLayout = () => {
    return (
        <div className={styles['layout']}>
            <div className={styles['logo']}>
                <img src="/GroupLogo.svg" alt="Loginlogo"/>
            </div>
            <div className={styles['content']}>
                <Outlet/>
            </div>
        </div>
    );
};
