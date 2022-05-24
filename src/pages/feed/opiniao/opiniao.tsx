import { IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import React from "react";

class Opiniao extends React.Component<{id:any,open:boolean,close:any}>{
    state = {}
    render(){
        return(
            <IonModal isOpen={this.props.open}>
                <IonContent>
                    <IonHeader>
                    <IonToolbar>
                    <IonIcon size='large' slot='start' className='headerIcon' onClick={()=> this.props.close(false)} icon={closeCircleOutline}></IonIcon>
                    <IonTitle size="large" className='pagName'>Opine!</IonTitle>
                    </IonToolbar>
                    </IonHeader>
                </IonContent>
            </IonModal>
        )
    }
}
export default Opiniao