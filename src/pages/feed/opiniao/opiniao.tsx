import { IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { chatbubbles, closeCircleOutline,send } from "ionicons/icons";
import React from "react";
import feed from "../../../shared/services/feed";
class Opiniao extends React.Component<{id:any,open:boolean,close:any}>{
    state = {
        opns: {data:{linhas:[]}},
        minhaOpn: ''
    }
    async componentDidMount(){
        var opn = await feed.getPostComents(this.props.id,50)
        console.log(opn);
        this.setState({opns: opn})
        
    }
    postOpn(){
        console.log(this.state.minhaOpn);
        
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
                    {this.state.opns.data.linhas.length > 0
                    ? <div className="list"></div>
                    : <div className="sem-not">
                    <h6>Sem comentários nessa notícia</h6>
                    <IonIcon icon={chatbubbles}></IonIcon>
                </div>}
                </IonContent>
                <IonFooter>
                        <IonToolbar style={{paddingRight: 12}}>
                            <IonInput placeholder="Opine sobre essa notícia!"
                            value={this.state.minhaOpn} 
                            onChange={(e:any) => this.setState({minhaOpn: e.target.value})} 
                            onBlur={(e:any) => this.setState({minhaOpn: e.target.value})}></IonInput>
                            <IonIcon slot="end" onClick={() => this.postOpn()} icon={send}></IonIcon>
                        </IonToolbar>
                    </IonFooter>
            </IonModal>
        )
    }
}
export default Opiniao