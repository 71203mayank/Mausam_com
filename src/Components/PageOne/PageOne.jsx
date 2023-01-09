import React,{Component} from "react";
import Navbar from "../Navbar/Navbar";
import "./PageOne.css";


export class PageOne extends Component{
    constructor(props){    
        super(props);
        this.state={
            weather:[], 
            location:[],
            place:"New Delhi"

        };
    }

    async componentDidMount(){
        let url=`https://api.weatherapi.com/v1/current.json?key=f5acb358b5db4d2fbf2182503230201&q=${this.state.place}&days=1&aqi=no&alerts=no`;
        
        let data = await fetch(url);
        let myData= await data.json();
        const [date,time]= myData.location.localtime.split(' ');
        const [hrs,min]=time.split(':');
        const[year,month,day]=date.split('-');
        this.setState({
            location:myData.location,
            weather:myData.current,
            forecast:myData.forecast,
            currTime:time,
            currHrs:hrs,
            currMin:min,
            currDay:day,
            currYear:year,
            currMonth:month,
            Icon:myData.current.condition.icon,
            discription:myData.current.condition.text, 

        }) 

    }

    handleOnClick =async()=>{
        this.setState({place:document.getElementById('searchIt').value});
        let url=`https://api.weatherapi.com/v1/current.json?key=f5acb358b5db4d2fbf2182503230201&q=${this.state.place}&days=1&aqi=no&alerts=no`;
        let data = await fetch(url);
        let myData= await data.json();
        const [date,time]= myData.location.localtime.split(' ');
        const [hrs,min]=time.split(':');
        const[year,month,day]=date.split('-');
        this.setState({
            location:myData.location,
            weather:myData.current,
            forecast:myData.forecast,
            currTime:time,
            currHrs:hrs,
            currMin:min,
            currDay:day,
            currYear:year,
            currMonth:month,
            Icon:myData.current.condition.icon,
            discription:myData.current.condition.text, 

        }) 

    }

    render(){

        
        let str;
        if(this.state.weather.is_day===1){ 
            str="url(/Assets/morning2.jpg)"
        }
        else{
            str="url(/Assets/night.jpg)"            

        }
        return(
            <div className="PageOne" style={{backgroundImage:str}}>
                <Navbar/>
                <div className="searchContainer" style={{width:'100%',display:"flex"}}>
                    <div style={{margin:"auto"}}>

                        <form>
                            <input type="search" className="searchText" id="searchIt" ></input>
                                <button type="button" className="searchBtn" onClick={this.handleOnClick} >Double click to Search</button>
                        </form>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div className="containerOne">
                        <div style={{margin:"30% 0 0 0"}}>
                        <div style={{fontSize:"5vw"}}>{this.state.weather.temp_c} <sup>o</sup>C <img alt='loading' src={this.state.Icon} style={{height:"5vw", width:"5vw"}}></img></div>
                        <div style={{fontSize:"2vw"}}>{this.state.discription}</div>        
                        <div style={{fontSize:"2vw"}}>Feels Like: {this.state.weather.feelslike_c} <sup>o</sup>C</div>
                        <div style={{fontSize:"2vw"}}>Humidity: {this.state.weather.humidity}%</div>
                        <div style={{fontSize:"2vw"}}>Precipitation: {this.state.weather.precip_mm} mm</div>
                        <div style={{fontSize:"2vw"}}>Wind: {this.state.weather.wind_kph} kph </div>
                        </div>

                    </div>
                    
                    <div className="containertwo" style={{display:"flex",justifyContent:"right"}}>
                        <div style={{margin:"30% 5% 0 0"}}>
                            
                            <div className="city ">
                                {this.state.location.name}
                            </div>
                            <div className="region subcontainer">Region: {this.state.location.region}</div>
                            <div className="country subcontainer">Country: {this.state.location.country}</div>
                            <div className="time subcontainer">{this.state.currDay}/{this.state.currMonth}/{this.state.currYear}, {this.state.currHrs}:{this.state.currMin}</div>
                            <div className="tz_id subcontainer">time-zone ID: {this.state.location.tz_id}</div>
                        </div>
                    </div>
                </div>
                
                
                    

            </div>
                
        )
    }
}
export default PageOne;

