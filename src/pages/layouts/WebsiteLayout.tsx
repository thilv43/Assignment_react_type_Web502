import React from 'react'
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../../components/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
type Props = {}

function WebsiteLayout({}: Props) {
    return (
        <header>
            <div>
                <Header/>
                <Outlet/>
                <Footer />
            </div>
        </header>
    )
}

export default WebsiteLayout;