import {Button} from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import styles from './Success.module.css'

export const Success = () => {
    const navigate = useNavigate()
    return (
        <div className={styles['success']}>
            <img src="/success-order.png" alt="succes-order"/>
            <div className={styles['text']}>Ваш заказ успешно оформлен</div>
            <Button onClick={() => navigate('/')} appearance={'big'}>Сделать новый</Button>
        </div>
    );
};
