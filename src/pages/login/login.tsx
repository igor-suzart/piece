import React from 'react';
import {useState} from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonModal } from '@ionic/react';
import PieceLogo from '../../assets/logo/logo-piece.svg'
import './login.scss'
import ModalIn from './modal-in/modalIn'
import ModalUp from './modal-up/modalUp'
import  { Redirect } from 'react-router-dom' 
class Login extends React.Component{
    constructor(props:any){
        super(props)
        this.openInFalse =  this.openInFalse.bind(this)
        this.openUpFalse =  this.openUpFalse.bind(this)
        this.vaPara = this.vaPara.bind(this)
    }
    state = {
        openIn:false,
        openUp:false,
        ir: ''
    }
    vaPara(rota:string){      
        this.setState({
            ir:rota
        })
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
        if(this.state.ir != ''){
            return <Redirect to={this.state.ir} />
        }
        return(
        <IonPage className='login'>
            <ModalIn open={this.state.openIn} openInFalse={this.openInFalse} vaPara={this.vaPara} />
            <ModalUp open={this.state.openUp} openUpFalse={this.openUpFalse} vaPara={this.vaPara}/>
            <div className="logo">
                <img src={PieceLogo} alt="logo" />
            </div>
            <div className="buttons">
                <IonTitle className='title'>Entre</IonTitle>
                {/* <IonButton color='success' expand="block" onClick={ () => {
                    this.setState({ir:'feed'})
                }}>Feed</IonButton> */}
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