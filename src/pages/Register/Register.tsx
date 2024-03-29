import {Headling} from "../../components/Headling/Headling.tsx";
import {Input} from "../../components/Input/Input.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import styles from './Register.module.css'
import {FormEvent, useEffect} from "react";
import {AppDispatch, RootState} from "../../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import { register, userActions} from "../../store/userSlice.ts";

export type RegisterFormType = {
    email: {
        value: string
    }
    password: {
        value: string
    }
    name: {
        value: string
    }
}

export const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const {jwt, registerErrorMessage} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (jwt) {
            navigate('/')
        }
    }, [jwt, navigate])
    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault()
        dispatch(userActions.clearRegisterError())
        const target = e.target as typeof e.target & RegisterFormType;
        const {email, password, name} = target;
        dispatch(register({email: email.value, password: password.value, name: name.value}))
    }

    return (
        <div className={styles['login']}>
            <p>Для регистрации можно указать любую почту с валидацией, например <b>b@mail.com</b> и любой пароль</p>
            <Headling>Регистрация</Headling>
            {registerErrorMessage && <div className={styles['error']}>{registerErrorMessage}</div>}
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
                <div className={styles['field']}>
                    <label htmlFor="">
                        Your name
                        <Input id={'name'} name={'name'} placeholder={'type here your name'}
                        />
                    </label>
                </div>
                <Button appearance={'big'}>Register</Button>
            </form>
            <div className={styles['links']}>
                <div>Do you have account ?</div>
                <Link to={'/auth/login'}>Enter</Link>
            </div>
        </div>
    );
};

