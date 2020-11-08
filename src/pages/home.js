import JumbotronContainer from "../containers/jumbotron";
import {FaqsContainer} from "../containers/faq";
import {FooterContainer} from "../containers/footer";
import React from "react";
import {HeaderContainer} from "../containers/header";
import OptForm from "../components/opt-form";
import {Feature} from "../components";


export default function Home() {

    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows, and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptForm.Text>
                        <OptForm.Break/>
                        <OptForm.Input placeholder="Email Address"/>
                        <OptForm.Button>GET STARTED</OptForm.Button>
                    </OptForm>

                </Feature>

            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>

        </>
    )
}