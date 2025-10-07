import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from "react-router";
import Container from '../Components/Container';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Root;