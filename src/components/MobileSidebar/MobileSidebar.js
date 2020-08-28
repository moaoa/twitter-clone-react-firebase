import React, { useContext } from 'react';
import './MobileSidebar.css';
import SidebarOption from './SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../App';

function MobileSidebar() {
    const { toggleModal } = useContext(GlobalContext);
    console.log(toggleModal);
    return (
        <div className="mobile_sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />
            <NavLink activeClassName="Active" exact to="/home">
                <SidebarOption
                    clicked={toggleModal}
                    Icon={HomeIcon}
                    text="Home"
                />
            </NavLink>
            <NavLink activeClassName="Active" to="/home/profile">
                <SidebarOption
                    clicked={toggleModal}
                    Icon={PersonIcon}
                    text="Profile"
                />
            </NavLink>
            <SidebarOption
                clicked={toggleModal}
                Icon={SearchIcon}
                text="Search"
            />
            <SidebarOption
                clicked={toggleModal}
                Icon={NotificationsIcon}
                text="Notifications"
            />
            <SidebarOption
                clicked={toggleModal}
                Icon={MailOutlineIcon}
                text="message"
            />
            <SidebarOption
                clicked={toggleModal}
                Icon={BookmarkIcon}
                text="bookmark"
            />
            <SidebarOption
                clicked={toggleModal}
                Icon={ListAltIcon}
                text="list"
            />
            <SidebarOption
                clicked={toggleModal}
                Icon={MoreHorizIcon}
                text="list"
            />
            <Button variant="outlined" fullWidth className="sidebar__tweet">
                Tweet
            </Button>
        </div>
    );
}

export default MobileSidebar;
