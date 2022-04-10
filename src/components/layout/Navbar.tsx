import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
    return (
            <div className="text-center ml-[29%]">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex">
                    <li className="nav-item px-[1rem]">
                        <Link className="nav-link active fs-6 text-uppercase " aria-current="page" to={"/"}>Trang chủ</Link>
                    </li>
                    <li className="nav-item px-[1rem]">
                        <Link className="nav-link active  fs-6 text-uppercase" aria-current="page" to={"blogs"}>Giới thiệu</Link>
                    </li>
                    <li className="nav-item px-[1rem]">
                        <Link className="nav-link active  fs-6 text-uppercase" aria-current="page" to={"products"}>Sản phẩm</Link>
                    </li>
                    <li className="nav-item px-[1rem]">
                        <Link className="nav-link active fs-6 text-uppercase" aria-current="page" to={"introduce"}>Tin tức</Link>
                    </li>
                    <li className="nav-item px-[1rem]">
                        <Link className="nav-link active  fs-6 text-uppercase" aria-current="page" to={"contact"}>Liên hệ</Link>
                    </li>
                </ul>
            </div>
                
            
    )
}

export default Navbar;