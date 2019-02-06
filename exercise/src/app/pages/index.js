import App from "../components/App"
import "../statics/welcome.css"
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default ({ pathname }) =>
    <App>
        <p>Welcome Page</p>
        <div className="welcomeBTN">
            <AwesomeButton type="instagram" href="/mainpage">
                 <a className={pathname === "/mainpage" && "is-active"}>
                    Go to our service
                </a>
            </AwesomeButton>
        </div> 
    </App>
    