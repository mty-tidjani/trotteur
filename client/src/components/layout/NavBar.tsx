import React from 'react'
import StorageManager from '../../_utils/storage.manager'
import Lnk from '../Lnk'
import './NavBar.scss';
const NavBar: React.FC = () => {
    return (
        <div id="navbar">
            <Lnk onClick={() => {
                StorageManager.logoutUser()
            }}>Log out</Lnk>
        </div>
    )
}

export default NavBar;

