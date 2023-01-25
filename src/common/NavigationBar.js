import { useEffect, useState } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { IoMdCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AccountLogout } from '../services/AccountService';
function NavigationBar() {
    const data = JSON.parse(localStorage.getItem('data'))
    return (
        <div className="w-100">
            <nav className="d-flex justify-content-between p-3 navbar navbar-expand-lg navbar-light bg-primary text-light">
                <div>
                    <FaMoneyBillAlt size={40} />
                    <a className="m-3 navbar-brand text-light">
                        {data ?
                            <>
                                Welcome {data.firstname + " " + data.lastname}!
                            </>
                            :
                            <>
                                Welcome!
                            </>
                        }
                    </a>
                </div>
                {
                    data ?
                        <Link to="/logout">
                            <a className="ml-auto text-light">
                                <FiLogOut />
                                Logout
                            </a>
                        </Link>


                        :
                        <div className="ml-auto text-light">
                            <Link to="/signup" className='text-light'>
                                <IoMdCreate />
                                Sign up
                            </Link >
                            <Link to="/login" className='m-3 text-light'>
                                <FiLogIn />
                                Log in
                            </Link>
                        </div>
                }
            </nav>
        </div>
    );
}

export default NavigationBar;