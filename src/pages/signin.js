import React, {useState, useContext} from "react";
import {FirebaseContext} from "../context/firebase";
import { useHistory } from 'react-router-dom';
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from "../components";
import * as ROUTES from '../constants/routes';

export default function SignIn() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = email === '' || password === '';

    const handleSignIn = (e)=>{
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(()=>{
                //push to browse page
                history.push(ROUTES.BROWSE);
            })
            .catch(err=>{
                setEmail('');
                setPassword('');
                setError(err.message);
            })
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn}>
                        <Form.Input placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Input placeholder="Password"
                                    type="password"
                                    value={password}
                                    autoComplete="off"
                                    onChange={({target}) => setPassword(target.value)}/>
                                    <Form.SubmitButton type="submit" disabled={isInvalid}>Sign In</Form.SubmitButton>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now. </Form.Link>
                    </Form.Text>
                    <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.SmallText>
                </Form>
            </HeaderContainer>
            <FooterContainer/>

        </>
    )
}