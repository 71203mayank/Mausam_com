import React,{Component} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export class Navbar extends Component{
    render(){
        return(
            <div className="Navbar" >
                <div className="NavTitle" ><Link to='/' style={{color:'aliceblue',textDecoration:"none"}}>Mausam.com</Link></div>
                <div className="NavLinks" >
                    <Link to='/'  className='links'>Home</Link>
                    <Link to='/subscribe' className='links'>Subscribe</Link>
                </div>  
            </div>
        )
    }
}
export default Navbar;