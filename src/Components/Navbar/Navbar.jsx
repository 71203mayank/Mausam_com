import React,{Component} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export class Navbar extends Component{
    render(){
        return(
            <div className="Navbar" >
                <div className="NavTitle" style={{position:'relative',top:'1.5vw',fontSize:'2vw',marginLeft:"1.5vw"}}><Link to='/' style={{color:'aliceblue',textDecoration:"none"}}>Mausam.com</Link></div>
                <div className="NavLinks" >
                    <Link to='/' style={{color:"aliceblue", textDecoration:"none",position:'relative',top:'1.5vw',fontSize:'1.5vw',marginRight:"1.5vw"}}>Home</Link>
                    <Link to='/subscribe' style={{color:"aliceblue", textDecoration:"none",position:'relative',top:'1.5vw', fontSize:'1.5vw',marginRight:'1.5vw'}}>Subscribe</Link>
                </div>  
            </div>
        )
    }
}
export default Navbar;