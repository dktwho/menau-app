import {Headling} from "../../components/Headling/Headling.tsx";
import {Input} from "../../components/Input/Input.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";
import styles from './Login.module.css'
import {FormEvent} from "react";
import axios, {AxiosError} from "axios";
import {PREFIX} from "../../helpers/api.ts";

export type LoginFormType = {
    email: {
        value: string
    }
    password: {
        value: string
    }
}

export const Login = () => {


    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & LoginFormType;
        const {email, password} = target;
        await sendLogin(email.value, password.value)
    }

    const sendLogin = async(email: string, password: string) => {
        try {
            const { data } = await axios.post(`${PREFIX}/auth/login`, {
                email,
                password
            })
            console.log(data)
        } catch (e) {
            if(e instanceof AxiosError) {
                console.log(e.message)
            }
        }

    }

    return (
        <div className={styles['login']}>
            <Headling>Enter</Headling>
            <form className={styles['form']} onSubmit={onSubmitHandler}>
                <div className={styles['field']}>
                    <label htmlFor="">
                        Your email
                        <Input id={'email'} placeholder={'type here your email'} name={'email'}/>
                    </label>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="">
                        Your password
                        <Input id={'password'} type={'password'} name={'password'}
                               placeholder={'type here your password'}/>
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

