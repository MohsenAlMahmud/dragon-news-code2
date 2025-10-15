import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header';
import LatestNews from '../../components/LatestNews';
import Navbar from '../../components/Navbar';
import LeftAside from './LeftAside';
import RightAside from './RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                    <nav>
                        <Navbar></Navbar>
                    </nav>
                </section>
            </header>
            <main className='w-11/12 gap-5 mx-auto my-3 grid grid-cols-12'>
                
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;