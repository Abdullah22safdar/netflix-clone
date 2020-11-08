import React, {useState,useContext} from "react";
import {useHistory} from "react-router-dom";
import {FirebaseContext} from "../context/firebase";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from "../components";
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const {firebase} = useContext(FirebaseContext);
    const history  = useHistory();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || email === '' || password === '';

    const handleSignUp = (e)=>{
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result=>{
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random()*5)+1,
                    }).then(()=>{
                        history.push(ROUTES.BROWSE)
                })

            })
            .catch(err=>{
                setFirstName('');
                setEmail('');
                setPassword('');
                setError(err.message);
            })
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp}>
                        <Form.Input placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}/>
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
                        New to Netflix? <Form.Link to="/signin">Sign In now. </Form.Link>
                    </Form.Text>
                    <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.SmallText>
                </Form>
            </HeaderContainer>
            <FooterContainer/>

        </>
    )
}