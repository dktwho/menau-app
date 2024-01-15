import {Headling} from "../../components/Headling/Headling.tsx";
import {Input} from "../../components/Input/Input.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";
import styles from './Login.module.css'
import {FormEvent} from "react";

export const Login = () => {
    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className={styles['login']} onSubmit={onSubmitHandler}>
            <Headling>Enter</Headling>
            <form className={styles['form']}>
                <div className={styles['field']}>
                    <label htmlFor="">
                        Your email
                        <Input id={'email'} placeholder={'type here your email'}/>
                    </label>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="">
                        Your password
                        <Input id={'password'} type={'password'} placeholder={'type here your password'}/>
                    </label>
                </div>
                <Button appearance={'big'}>Enter</Button>
            </form>
            <div className={styles['links']}>
                <div>Do you have account ?</div>
                <Link to={'/auth/register'}>Register now</Link>
            </div>
        </div>
    );
};

