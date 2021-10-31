import { Card, Form, H1, P, A } from './styles/Signup.styles';
import InputField from './InputField';
import Button from './Button';

const Login = () => {
    return (
        <Card>
            <H1>Login</H1>
            <Form>
                <InputField type="email" name="email" placeholder="Email..." labelName="Email"  />
                <InputField type="password" name="password" placeholder="Password..." labelName="Password"  />
                <Button btnType="submit">Submit</Button>
                <P>Don't have any account? <A to="/signup">Register</A></P>
            </Form>
        </Card>
    );
};

export default Login;
