import React from 'react';
import AppComponent from './app/app';
import FooterComponent from './layout/footer';
import NavbarComponent from './layout/navbar';

const Main = () => {
    return (
        <>
            <NavbarComponent />
            <AppComponent />
            {/* <FooterComponent /> */}
        </>
    );
}

export default Main;