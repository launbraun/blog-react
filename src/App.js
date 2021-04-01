import './App.scss';
import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import {Route} from "react-router-dom";
import FullPost from "./components/FullPost";
import Works from "./components/Works";
import Profile from "./components/Profile";
import Modal from "./components/Modal";


function App() {

    const [modalActive, setModalActive] = useState(false)
    const [sidebarActive, setSidebarActive] = useState(false)

    const showSidebar = () => {
        setSidebarActive(true)
        document.body.classList.add('show-sidebar', 'no-scroll')
    }

    const closeSidebar = () => {
        document.body.classList.remove('show-sidebar', 'no-scroll')
        setSidebarActive(false)
    }


  return (
    <div className={'App page'}>
      <Sidebar setActive={setModalActive} closeSidebar={closeSidebar}/>
      <Header sidebarActive={sidebarActive} showSidebar={showSidebar} closeSidebar={closeSidebar}/>
        <main className={'main'}>
            <div className={'container'}>
     <Route exact path={'/'}  render={() => <Main />} />
     <Route path={'/post-1'} render={() => <FullPost number={0}/>} />
     <Route path={'/post-2'} render={() => <FullPost number={1}/>} />
     <Route path={'/post-3'} render={() => <FullPost number={2}/>} />
     <Route path={'/post-4'} render={() => <FullPost number={3}/>} />
     <Route path={'/works'} render={() => <Works/>} />
     <Route path={'/profile'} render={() => <Profile />} />
            </div>
        </main>
        <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
