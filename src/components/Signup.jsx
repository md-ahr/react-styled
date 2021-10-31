import { useState } from 'react'
import { Card, Form, H1, P, A } from './styles/Signup.styles';
import InputField from './InputField';
import Button from './Button';

const Signup = () => {

    const [data, setData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <Card>
            <H1>Join with us</H1>
            <Form onSubmit={handleSubmit}>
                <InputField type="text" name="fullName" value={data.fullName} onChange={handleChange} placeholder="Full Name..." labelName="Full Name"  />
                <InputField type="text" name="username" value={data.username} onChange={handleChange} placeholder="Username..." labelName="Username"  />
                <InputField type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email..." labelName="Email"  />
                <InputField type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password..." labelName="Password"  />
                <InputField type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} placeholder="Confirm Password..." labelName="Confirm Password"  />
                <Button btnType="submit">Submit</Button>
                <P>Already have an account? <A to="/login">Login</A></P>
            </Form>
        </Card>
    );
};

export default Signup;
