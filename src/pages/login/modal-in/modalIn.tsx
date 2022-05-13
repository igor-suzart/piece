import React from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
class ModalIn extends React.Component<{open:boolean,openInFalse:any}> {
    open =  this.props.open
    componentDidMount(){

    }
    render(){
        return(
            <IonModal isOpen={this.props.open}>
                <IonContent>
                    <h1 onClick={()=>this.props.openInFalse()}>fechar</h1>
                    <h1>abri Login!</h1>
                </IonContent>
            </IonModal>
        )
    }
}
export default ModalIn