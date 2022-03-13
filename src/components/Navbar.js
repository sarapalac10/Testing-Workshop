import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/actionLogin';
import { useNavigate } from 'react-router-dom';
import { Search } from './Search';

const Nav = styled.nav`
    background-color: #db7093;
`
export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    return (
        <div>
            <Nav className="navbar navbar-light #db7093">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img
                        alt=""
                        src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png"
                        width="80" /></a>
                    <Search />
                    <button
                    onClick = {() => handleLogout()}
                        className="navbar-toggler-icon" to=""></button>
                </div>
            </Nav>

        </div>
    )
}
