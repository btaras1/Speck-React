import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../../components/Section/Section';
import {
    Title,
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
    SuccessMessage
} from '../../lib/style/generalStyles';
import {Button} from '../../components/Button/ButtonStyle'
import DataLoader from '../../components/DataLoader/DataLoader'
import {loginUser} from '../../api/login'
import {getAllUsers} from '../../api/user'

const Login = ({userLogin}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isRequestFinished, setIsRequestFinished] = useState(false);
    const [successMessage, setSuccessMessage] = useState(''); 

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            isAdmin: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address!')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
        }),
    onSubmit: async (values, {resetForm}) => {

        setIsLoading(true);
        setIsRequestFinished(false);
        try {
            console.log(values);
            const response = await loginUser({
                email: values.email,
                password: values.password
            });
            console.log(response.token);
            const users = await getAllUsers(response.token);
            console.log(users);
            const isAdmin = users.find(user => user.email === values.email).isAdmin;
            console.log(isAdmin);

            localStorage.setItem('authToken', response.token);
            localStorage.setItem('isAdmin', isAdmin);
            resetForm({});
            setIsLoading(false);
            setIsRequestFinished(true);
            setIsError(false);
            setSuccessMessage('User login successfully !');
            setTimeout(() => {
                setIsRequestFinished(false);
                userLogin(response.token, isAdmin);
            }, 4000);
            
        } catch (error) {
            setIsLoading(false);
            setIsRequestFinished(true);
            setIsError(true);
            setSuccessMessage('User login failed!');
        }
        setIsLoading(false);

    }
    })
    return(
        <>
            <Title>Login</Title>
            <Section withoutTopPadding={true}>
            {isRequestFinished && <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>}
                    {!isLoading
                        ? <Form onSubmit={formik.handleSubmit}>
                            <FormRow>
                                <InputLabel htmlFor='email'>E-mail</InputLabel>
                                <InputText
                                    id='email'
                                    type='text'
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email
                                    ?<InputError>{formik.errors.email}</InputError>
                                    : null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor='password'>Password</InputLabel>
                                <InputText
                                    id='password'
                                    type='password'
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password
                                    ?<InputError>{formik.errors.password}</InputError>
                                    : null
                                }
                            </FormRow>
                            <FormRow>
                            <Button type="submit">Login</Button>
                            </FormRow>
                        </Form>
                    :
                    ( 
                        <DataLoader /> ) }
            </Section>
        </>
    );
}
export default Login;