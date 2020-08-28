import React from 'react';
import { Input, Button, Card, CardContent } from '@material-ui/core';
import { Formik, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import './AuthPage.css';
import { signInUser } from '../../firebase';
function SignInPage() {
    return (
        <div className="AuthPage">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={(values) => {
                    console.log('validate');
                    const errors = {};

                    if (!values.email) errors.email = 'required';
                    if (!values.password) errors.password = 'required';
                    if (values.password <= 6)
                        errors.password = 'must be 6 characters or more';
                    console.log(errors);
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                    signInUser(values.email, values.password)
                        .then((userData) => {
                            console.log(userData);
                        })
                        .catch(console.log);
                }}
            >
                {({ handleChange, handleBlur, values, handleSubmit }) => (
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <h3>Sign In</h3>

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

                                <Button
                                    className="submitButton"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    submit
                                </Button>
                                <NavLink
                                    to="/signup"
                                    activeClassName="activeLink"
                                >
                                    don't have an account ?
                                </NavLink>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </Formik>
        </div>
    );
}

export default SignInPage;
