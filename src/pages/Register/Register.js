import React, {useState, useContext} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Section from '../../components/Section/Section';
import {
    Title,
    Form,
    FormRow,
    CheckboxWrapper,
    InputLabel,
    InputText,
    InputCheckbox,
    InputError,
    SuccessMessage
} from '../../lib/style/generalStyles';
import {Button} from '../../components/Button/ButtonStyle'
import DataLoader from '../../components/DataLoader/DataLoader'
import {registerUser} from '../../api/register';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isRequestFinished, setIsRequestFinished] = useState(false);
    const [successMessage, setSuccessMessage] = useState(''); 
    const { userLogin } = useContext(AuthContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordConfrimation: '',
            isAdmin: false
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('First name is required!'),
            lastName: Yup.string()
                .required('Last name is required!'),
            email: Yup.string()
                .email('Invalid email address!')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
            passwordConfrimation: Yup.string()
                .test(
                    'passwords-match',
                    'Passwords must match',
                    function(value){
                        return this.parent.password === value
                    }
                )
        }),
    onSubmit: (values, {resetForm}) => {
        setIsLoading(true);
        setIsRequestFinished(false);
        const user = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            isAdmin: values.isAdmin
        }
        registerUser(user)
            .then(res => {
                resetForm({});
                setIsLoading(false);
                setIsRequestFinished(true);
                setIsError(false);
                setSuccessMessage('User is registered successfully !');
                setTimeout(() => {
                    setIsRequestFinished(false);
                }, 4000);
            })
            .catch(err => {
                setIsLoading(false);
                setIsRequestFinished(true);
                setIsError(true);
                setSuccessMessage('User registration failed!');
            })
        setIsLoading(false);
        alert(JSON.stringify(values));
        
    },
    })
    return(
        <>
            <Title>Register</Title>
            <Section withoutTopPadding={true}>
                {isRequestFinished && <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>}
                    {!isLoading
                        ? (<Form onSubmit={formik.handleSubmit}>
                            <FormRow>
                                <InputLabel htmlFor='firstName'>First name</InputLabel>
                                <InputText
                                    id='firstName'
                                    type='text'
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.touched.firstName && formik.errors.firstName
                                    ?<InputError>{formik.errors.firstName}</InputError>
                                    : null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor='lastName'>Last name</InputLabel>
                                <InputText
                                    id='lastName'
                                    type='text'
                                    {...formik.getFieldProps('lastName')}
                                />
                                {formik.touched.lastName && formik.errors.lastName
                                    ?<InputError>{formik.errors.lastName}</InputError>
                                    : null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor='email'>E-mail</InputLabel>
                                <InputText
                                    id='email'
                                    type='email'
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
                                <InputLabel htmlFor='passwordConfrimation'>Confirm password</InputLabel>
                                <InputText
                                    id='passwordConfrimation'
                                    type='password'
                                    {...formik.getFieldProps('passwordConfrimation')}
                                />
                                {formik.touched.passwordConfrimation && formik.errors.passwordConfrimation
                                    ?<InputError>{formik.errors.passwordConfrimation}</InputError>
                                    : null
                                }
                            </FormRow>
                            <FormRow>
                                <CheckboxWrapper>
                                    <InputCheckbox  id="isAdmin" type="checkbox" {...formik.getFieldProps('isAdmin')}/>
                                    <InputLabel htmlFor='isAdmin' >Register as admin</InputLabel>
                                </CheckboxWrapper>
                            </FormRow>
                            <FormRow>
                                <Button type="submit">Register</Button>
                            </FormRow>
                        </Form>
                        )
                    : ( 
                        <DataLoader />
                          )
                          }
            </Section>
        </>
    );
}
export default Register;