import {Headling} from "../../components/Headling/Headling.tsx";
import {Input} from "../../components/Input/Input.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <div>
            <Headling>Enter</Headling>
            <form>
                <div>
                    <label htmlFor="">
                        Your email
                        <Input id={'email'} placeholder={'type here your email'} />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Your password
                        <Input id={'password'} type={'password'} placeholder={'type here your password'}  />
                    </label>
                </div>
                <Button appearance={'big'}>Enter</Button>
                <div>Do you have account ?</div>
                <div>
                    <Link to={'/auth/register'}></Link>
                </div>
            </form>
        </div>
    );
};

