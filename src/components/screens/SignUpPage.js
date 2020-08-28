import React from 'react';
import { Input, Button, Card, CardContent } from '@material-ui/core';
import { Formik, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import './AuthPage.css';
import { signUpUser } from '../../firebase';

function SignUpPage() {
    return (
        <div className="AuthPage">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    imageUrl: '',
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) errors.name = 'required';
                    if (!values.email) errors.email = 'required';

                    if (!values.password) errors.password = 'required';
                    if (values.password <= 6)
                        errors.password = 'must be 6 characters or more';
                    if (values.confirmPassword !== values.password)
                        errors.confirmPassword = 'passwords must match';
                    if (!values.confirmPassword)
                        errors.confirmPassword = 'required';
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                    signUpUser(
                        values.email,
                        values.password,
                        values.name,
                        values.imageUrl
                    )
                        .then((userData) => {
                            console.log(userData);
                            userData.user
                                .updateProfile({
                                    displayName: values.name,
                                    photoURL: values.imageUrl,
                                })
                                .then(() => console.log('success'))
                                .catch(console.log);
                        })
                        .catch(console.log);
                }}
            >
                {({ handleChange, handleBlur, values, handleSubmit }) => (
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <h3>Sign Up</h3>

                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className="customInput"
                                    name="name"
                                    placeholder="enter your name"
                                />
                                <ErrorMessage component="div" name="name" />
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className="customInput"
                                    name="email"
                                    placeholder="enter your Email"
                                />
                                <ErrorMessage component="div" name="email" />
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="customInput"
                                    name="password"
                                    type="password"
                                    placeholder="enter your password"
                                />
                                <ErrorMessage component="div" name="password" />
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    className="customInput"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="enter your password again"
                                />
                                <ErrorMessage
                                    component="div"
                                    name="confirmPassword"
                                />
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.imageUrl}
                                    className="customInput"
                                    name="imageUrl"
                                    placeholder="enter your image url"
                                />
                                <ErrorMessage component="div" name="imageUrl" />
                                <Button
                                    className="submitButton"
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    submit
                                </Button>
                                <NavLink
                                    to="/signin"
                                    activeClassName="activeLink"
                                >
                                    already have an account ?{' '}
                                </NavLink>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </Formik>
        </div>
    );
}

export default SignUpPage;
