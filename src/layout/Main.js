import React from 'react';
import Header from '../Shere/Header/Header';
import LeftSideNav from '../Shere/LeftSideNav/LeftSideNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-12'>
                <div className='lg:col-span-3 lg:bg-gray-700 lg:block md:hidden max-sm:hidden'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-9 md:col-span-12  max-sm:col-12'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;