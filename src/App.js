import React,{Component} from "react";
import PageOne from "./Components/PageOne/PageOne";
import PageTwo from "./Components/PageTwo/PageTwo";
import Footer from "./Components/Footer/Footer";
import {Route,BrowserRouter,Routes} from "react-router-dom";

export class App extends Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageOne/>}/>
                <Route path='/subscribe' element={<PageTwo/>}/>
            </Routes>
            </BrowserRouter>
            <Footer/>
            </>
        )
    }
}
export default App;