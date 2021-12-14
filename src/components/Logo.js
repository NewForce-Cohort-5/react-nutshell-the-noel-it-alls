//purpose: to display a logo
import './Logo.css';
import {logo} from './logo.svg';

function Logo () {
    return (
      
        <div className="Logo">
            <header className="Logo-header">
                <img src={logo} className="Logo-pic" alt="logo"></img>
            </header>
        </div>
       
    )
}