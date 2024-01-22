import {Headling} from "../../components/Headling/Headling.tsx";
import {Input} from "../../components/Input/Input.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import styles from './Login.module.css'
import {FormEvent, useEffect} from "react";
import {AppDispatch, RootState} from "../../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {login, userActions} from "../../store/userSlice.ts";

export type LoginFormType = {
    email: {
        value: string
    }
    password: {
        value: string
    }
}

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const {jwt, loginErrorMessage} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (jwt) {
            navigate('/')
        }
    }, [jwt, navigate])
    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault()
        dispatch(userActions.clearLoginError())
        const target = e.target as typeof e.target & LoginFormType;
        const {email, password} = target;
        await sendLogin(email.value, password.value)
    }

    const sendLogin = async (email: string, password: string) => {
        dispatch(login({email, password}))
    }

    return (
        <div className={styles['login']}>
            <Headling>Вход</Headling>
            {loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
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
                               placeholder={'type here your password'} autocomplete="on"/>
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

