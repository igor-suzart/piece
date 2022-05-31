import { IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { closeCircleOutline,send } from "ionicons/icons";
import React from "react";

class Opiniao extends React.Component<{id:any,open:boolean,close:any}>{
    state = {
        opinoes: []
    }
    async componentDidMount(){

    }
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
                <IonFooter>
                        <IonToolbar style={{paddingRight: 12}}>
                            <IonInput placeholder="Opine sobre essa notícia!"></IonInput>
                            <IonIcon slot="end" icon={send}></IonIcon>
                        </IonToolbar>
                    </IonFooter>
            </IonModal>
        )
    }
}
export default Opiniao