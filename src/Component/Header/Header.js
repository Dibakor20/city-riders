import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [,,,,,,,,loggedInUser, setLoggedInUser, user, setUser] = useContext(UserContext);
    console.log(loggedInUser)
    const history = useHistory();
    const signOut = () => {
        const logout = window.confirm('Are you sure you want to Log Out?');
        if (logout) {
            const updateUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                success: false,
                error: '',
                newUser: false
            }
            setLoggedInUser(updateUser);
            setUser(updateUser);
            history.push('/');
        }
    }
    return (
        <>
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
           <a class="navbar-brand" href="#">City <span className="city-riders ml-2">Riders</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link class="nav-link mr-4" to="/home">Home </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link mr-4" to="/destination">Destination</Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link mr-4 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Riders
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Bike</a>
                    <a class="dropdown-item" href="#">Car</a>
                    <div class="dropdown-item">Bus</div>
                    <a class="dropdown-item" href="#">Train</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-4" href="#">Contact</a>
                </li>
                <li class="nav-item">
                {
                loggedInUser.email ? <button title="Click to LogOut" className="btn log mt-2" onClick={signOut}>{loggedInUser.email}</button> : <Link className="btn log mt-2" to="/login">LogIn</Link>
                    }
                </li>
                
                </ul>
            </div>
        </nav>
        </div>
        </>
    );
};

export default Header;