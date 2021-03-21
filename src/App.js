import { AiFillGithub } from "react-icons/ai";
import { Fragment } from 'react';
import  SideBar from './SideBar';


const App = () => {
  return (
    <Fragment>

        <nav className="nav">
          <div>
              <h1 className="press-start-2p title-shadow"> KUNAHUI BLOG </h1>
              <p>You see see you.</p>
          </div>
        </nav>

        <div className="main-body">
          <div className="sidebar bg-blue"><SideBar /></div>
          <div className="content bg-red">content content</div>
        </div>

        <footer className="footer">
            <div className="footer-github">
                <a href="https://github.com/kkuanhui" 
                  target="_blank" 
                  rel="noreferrer">
                    <AiFillGithub />
                </a>
            </div>
            <div className="footer-name">Developed by KunaHui</div>
        </footer>

    </Fragment>

  );
}

export default App;
