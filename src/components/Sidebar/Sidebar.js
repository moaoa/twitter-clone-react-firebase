import React from 'react';
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
import './Sidebar.css';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__box">
                <TwitterIcon className="sidebar__twitterIcon" />{' '}
            </div>

            <NavLink activeClassName="Active" exact to="/home">
                <SidebarOption Icon={HomeIcon} text="Home" />
            </NavLink>
            <NavLink activeClassName="Active" to="/home/profile">
                <SidebarOption Icon={PersonIcon} text="Profile" />
            </NavLink>
            <SidebarOption Icon={SearchIcon} text="Search" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="message" />
            <SidebarOption Icon={BookmarkIcon} text="bookmark" />
            <SidebarOption Icon={ListAltIcon} text="list" />
            <SidebarOption Icon={MoreHorizIcon} text="list" />
            <Button variant="outlined" fullWidth className="sidebar__tweet">
                Tweet
            </Button>
        </div>
    );
}
