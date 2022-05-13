import React from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
class ModalUp extends React.Component<{open:boolean,openUpFalse:any}> {
    
    render(){
        return(
            <IonModal isOpen={this.props.open}>
                <IonContent>
                <h1 onClick={()=>this.props.openUpFalse()}>fechar</h1>
                    <h1>abri Cadastro!</h1>
                </IonContent>
            </IonModal>
        )
    }
}
export default ModalUp