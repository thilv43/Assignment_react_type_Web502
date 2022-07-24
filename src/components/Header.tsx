import React from 'react'
import Navbar from './layout/Navbar';
import FormSearch from "../components/layout/FormSearch";



type Props = {}

const Header = (props: Props) => {
    return (
    <header className=''>
    <div className="justify-between grid grid-cols-3 gap-4 flex items-center">
        <div className="mt-2">
            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg"  className="max-w-full h-auto rounded-full w-[20%] h-[20%] ml-[5rem]" alt=""  />
        </div>
        <div>
            <FormSearch />
        </div>
        <div className="flex justify-end items-center">
        <div className="mr-[2rem] text-2xl"> 
            <i className="fa fa-shopping-basket " />
        </div>
        <div className='mr-6'>
            <a href="/signin">
            <button type="button" className="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Đăng nhập</button>
            </a>
        </div>  
        </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse flex" id="navbarSupportedContent">
                    <Navbar/>
                </div>
            </div>
    </nav>
    </header>
)
}

export default Header;