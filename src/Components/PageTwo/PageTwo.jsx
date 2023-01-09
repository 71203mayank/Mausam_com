import React,{Component} from 'react';
import Navbar from '../Navbar/Navbar';
import './PageTwo.css';
export class PageTwo extends Component{
    render(){
        return(
            <>
            
            <div className='PageTwo' style={{backgroundImage:'url(/Assets/pagetwoBG.jpg)',backgroundAttachment:"fixed"}}>
                <Navbar/>
                <div className='pgTwoContainer'>
                    <div className='pgTwoTitle'>
                        Don't let weather ruin your day!
                    </div>
                    <div className='pgTwoFeatures'>
                        <div className='pgTwoTitle2'>Subscribe us and be one step ahead of Weather</div>
                        <div className="featureContainer">
                            <div className="feature"><div className='featureHead'>Feature 1</div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt similique cum expedita debitis reprehenderit sequi magni fugiat saepe vitae minus recusandae consectetur voluptate ipsam, nesciunt, ipsum natus odit animi quaerat!</div>
                            <div className="feature"><div className='featureHead'>Feature 2</div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure? Officiis, dolore blanditiis sunt, ut porro maiores ipsum illum ab labore ducimus consequatur, odit illo eaque! Unde maxime culpa sit.</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="subscribe">
                <div className="offer">
                    <div className='suboffer offer1'>
                        <div style={{textAlign:'center',fontSize:'2vw'}}>Plan A<br></br>Rs 7/ day</div>
                        <div style={{padding:'0.5vw'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum fugit voluptatum autem, eligendi quas quod maxime cum tenetur quaerat aspernatur facere quis ipsa nihil voluptate consectetur dolore corrupti dicta?
                        </div>
                    </div>
                    <div className='suboffer offer2'>
                        <div style={{textAlign:'center',fontSize:'2vw'}}>Plan B<br></br>Rs 12/ day</div>
                        <div style={{padding:'0.5vw'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum fugit voluptatum autem, eligendi quas quod maxime cum tenetur quaerat aspernatur facere quis ipsa nihil voluptate consectetur dolore corrupti dicta?
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div style={{margin:'auto',width:'40vw'}}>
                        <form action='/'>
                            <div className='formContainer'>
                                <label for='name'>Name *</label><br/>
                                <input type='text' id='name' required style={{width:"30vw",height:"1.5vw"}}></input><br/>
                            </div>
                            <div className='formContainer'>
                                <label for='email'>E-mail (NITC Mail) *</label><br/>
                                <input type='email' pattern='.+@nitc.ac.in' id='email' required style={{width:"30vw",height:"1.5vw"}}></input><br/>
                            </div>
                            <div className='formContainer'>
                                <label for='phone'>Phone no *</label><br/>
                                <input type='tel' pattern='[1-9]{1}[0-9]{9}' id='phone' required style={{width:"15vw",height:"1.5vw"}}></input><br/>
                            </div>
                            <div className='formContainer'>
                                <span style={{marginRight:"2vw"}}>

                                    <lable for='planA' name='whichPlan' value='planA'>Plan A</lable>
                                    <input type='radio' id='planA' ></input>
                                </span>
                                <span style={{marginRight:"2vw"}}>

                                    <lable for='planB' name='whichPlan' value='planB'>Plan B</lable>
                                    <input type='radio' id='planB'></input><br/>
                                </span>
                            </div>
                            <div className='formContainer'>
                                <input type='checkbox' style={{height:'1.5vw',width:'1.5vw'}}></input>Get weather report on your phone via SMS
                            </div>
                            <div style={{width:'40vw',display:'flex'}}><input type="submit" placeholder='Submit' value="Submit" className='submit_Btn' ></input></div>

                            
                        </form>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default PageTwo;