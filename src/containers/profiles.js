import React from 'react';
import {Header} from "../components";
import {HOME} from "../constants/routes";
import {Profiles} from "../components";


export function SelectProfileContainer({user, setProfile}) {
    const logo = '/images/logo/logo.svg';
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={HOME} src={logo} alt="Netflix"/>
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {
                        setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL})
                    }}>
                        <Profiles.Picture src={user?.photoURL}/>
                        <Profiles.Name>{user?.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}