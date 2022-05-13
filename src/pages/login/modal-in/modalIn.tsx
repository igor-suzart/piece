import React, {useState} from 'react';
import { IonModal, IonButton, IonContent, IonInput, IonTitle, IonCheckbox } from '@ionic/react';
import './modalIn.scss'
import PieceLogo from '../../../assets/logo/logo-horizontal.svg'
class ModalIn extends React.Component<{open:boolean,openInFalse:any}> {
    open =  this.props.open 
    //setText = useState<string>();
    //text = useState<string>();
    state = {
        text: '',
        password: '',
        checked: '',
    }
    render(){
        return(
            <IonModal isOpen={this.props.open}>
                <IonContent>
                <div className="logo">
                     <img src={PieceLogo} alt="logo" />
                     <h1 className='pagName'>Login</h1>
                </div>
                    <IonTitle className="inputTitle">E-mail:</IonTitle>
                    <IonTitle className="passTitle">Senha:</IonTitle>
                <div >
                  
                    <IonInput className="ionInput" value={this.state.text} placeholder="Ex: IgorBraboDev@gmail.com"> </IonInput>
                    <IonInput className="Pass" type="password" value={this.state.password} placeholder="Password"></IonInput>
                    <IonCheckbox className='checkBox'>Manter login</IonCheckbox>
                    <IonButton className="ascessButton">Acessar</IonButton>
                    <IonButton className="close" onClick={()=>this.props.openInFalse()}>X</IonButton>
                </div>
                </IonContent>
            </IonModal>
        )
    }
}
export default ModalIn