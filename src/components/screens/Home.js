import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MobileOnlyContainer from '../MobileOnlyContainer/MobileOnlyContainer';
import Modal from '../Modal/Modal';
import MobileSidebar from '../MobileSidebar/MobileSidebar';
import Feed from '../Feed/Feed';
import Widgets from '../Widgets/Widgets';
import { GlobalContext } from '../../App';
import { Route } from 'react-router-dom';
import Profile from '../Profile/Profile';

function Home(props) {
    const { isOpen, toggleModal } = useContext(GlobalContext);

    return (
        <div className="App">
            <Sidebar />
            <MobileOnlyContainer>
                <Modal isOpen={isOpen} clicked={toggleModal}>
                    <MobileSidebar />
                </Modal>
            </MobileOnlyContainer>
            <Route path="/home" exact>
                <Feed clicked={toggleModal} />
            </Route>
            <Route path="/home/profile">
                <Profile clicked={toggleModal} />
            </Route>

            <Widgets />
        </div>
    );
}

export default Home;
