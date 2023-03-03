import React,{Component} from 'react';
import './Footer.css';

export class Footer extends Component{
    render(){
        return(
            <div className='Footer'>
                <div className='leftFooter'>
                    <div style={{textAlign:'center'}}><span className='footerSpan1' >Mausam.com</span><br/>
                    <span className='footerSpan2'>by</span><br/><span className='footerSpan3'>MG Creations</span></div>
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