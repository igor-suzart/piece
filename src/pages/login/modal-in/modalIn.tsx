import React, {useState} from 'react';
import { IonModal, IonButton, IonContent, IonInput, IonTitle, IonCheckbox,IonHeader, IonToolbar,IonIcon,IonText,IonAlert } from '@ionic/react';
import '../modal.scss'
import PieceLogo from '../../../assets/logo/logo-horizontal.svg'
import {closeCircleOutline} from 'ionicons/icons/'
import login from '../../../shared/services/login';
import  { Redirect } from 'react-router-dom' 
class ModalIn extends React.Component<{open:boolean,openInFalse:any,vaPara:any}> {
    open =  this.props.open 
    //setText = useState<string>();
    //text = useState<string>();
    state = {
        email: '',
        senha: '',
        checked: '',
        resultado: '',
        msgErro: ''
    }
    async login(event:any){
        event.preventDefault();
        let email = this.state.email
        let senha = this.state.senha
        if(email == '' || senha == ''){
            this.setState({resultado:'falha',msgErro: 'campos vazios'})
            return
        }
        var resultado = await login.login(email,senha)
        console.log('====================================');
        console.log(resultado);
        console.log('====================================');
        if(resultado.data.status === 'falha'){
            this.setState({resultado:'falha',msgErro: resultado.data.erro})
        } else{
            this.props.openInFalse()
            localStorage.setItem('id',resultado.data.linhas[0].id)
            this.props.vaPara('/avatar')
            //this.setState({resultado: 'ok'})
            
            //window.location('/avatar')
        }
    }
    render(){
        // if(this.state.resultado === 'ok'){
        //     return <Redirect to="/avatar" />
        // }
        return(
            <IonModal isOpen={this.props.open}>
                <IonContent>
                {/* <div className="logo">
                     <h1 className='pagName'>Login</h1>
                </div> */}
                <IonAlert
                    isOpen={this.state.resultado == 'falha'}
                    onDidDismiss={() => this.setState({resultado: ''})}
                    cssClass='my-custom-class'
                    header={'Erro'}
                    message={this.state.msgErro}
                    buttons={['ok']}
        />
                
                <IonHeader>
                    <IonToolbar>
                    <IonIcon size='large' slot='start' className='headerIcon' onClick={()=>this.props.openInFalse()} icon={closeCircleOutline}></IonIcon>
                    <IonTitle size="large" className='pagName'>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div></div>
                    
                    
                <div className='content'>
                    <form onSubmit={this.login.bind(this)}>
                    <IonText color='primary'>
                        <p>Email:</p>
                    </IonText>
                    <IonInput className="ionInput" value={this.state.email} onChange={(e:any) => this.setState({email:e.target.value})} onBlur={(e:any) => this.setState({email:e.target.value})} placeholder="Digite seu email"> </IonInput>
                    <IonText color='primary'>
                        <p>Senha:</p>
                    </IonText>
                    <IonInput className="ionInput" type="password" value={this.state.senha} onChange={(e:any) => this.setState({senha: e.target.value}) } onBlur={(e:any) => this.setState({senha: e.target.value}) } placeholder="Password"></IonInput>
                    <div className="check">
                    <IonCheckbox className='checkBox'></IonCheckbox>
                    <IonText color='primary'>Manter Login?</IonText>
                    </div>
                    
                    <IonButton type='submit' color='primary' expand="block">Acessar</IonButton>
                    </form>
                </div>
                </IonContent>
            </IonModal>
        )
    }
}
export default ModalIn