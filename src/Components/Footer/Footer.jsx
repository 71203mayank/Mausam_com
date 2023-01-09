import React,{Component} from 'react';
import './Footer.css';

export class Footer extends Component{
    render(){
        return(
            <div className='Footer'>
                <div className='leftFooter' style={{margin:'2vw'}}>
                    <div style={{textAlign:'center'}}><span style={{fontSize:'5vw'}}>Mausam.com</span><br/>
                    <span style={{fontSize:'1.5vw'}}>by</span><br/><span style={{fontSize:'2vw'}}>MG Creations</span></div>
                </div>
                <div className='rightFooter'>
                    <div>E-mail: askMausam@email.com</div>
                    <div>Phone : 123-456-7890</div>
                </div>
            </div>
        )
    }
}

export default Footer