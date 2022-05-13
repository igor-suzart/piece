import React from 'react';
import {useState} from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonModal } from '@ionic/react';
import PieceLogo from '../../assets/logo/logo-horizontal.svg'
import './login.scss'
import ModalIn from './modal-in/modalIn'
import ModalUp from './modal-up/modalUp'
class Login extends React.Component{
    constructor(props:any){
        super(props)
        this.openInFalse =  this.openInFalse.bind(this)
        this.openUpFalse =  this.openUpFalse.bind(this)
    }
    state = {
        openIn:false,
        openUp:false
    }
    openInFalse(){      
        this.setState({
            openIn:false
        })
    }
    openUpFalse(){      
        this.setState({
            openUp:false
        })
    }
    // .setState({open:false})
    render(){
        return(
        <IonPage>
            <ModalIn open={this.state.openIn} openInFalse={this.openInFalse} />
            <ModalUp open={this.state.openUp} openUpFalse={this.openUpFalse}/>
            <div className="logo">
                <img src={PieceLogo} alt="logo" />
            </div>
            <div className="buttons">
                <IonTitle className='title'>Entre</IonTitle>
                <IonButton color='primary' expand="block" onClick={ () => {
                    this.setState({openIn:true})
                }}>Login</IonButton>
                <IonButton color='dark' expand="block" onClick={ () => {
                    this.setState({openUp:true})
                }}>Cadastre-se</IonButton>
                {/* <div className="sp">
                    <div className="button">
                        <img src="/assets/icons/google.png" alt="" />
                    </div>
                    <div className="button">
                        <img src="/assets/icons/facebook.png" alt="" />
                    </div> 
                </div> */}
            </div>

            
        </IonPage>

        )
    }
}
export default Login