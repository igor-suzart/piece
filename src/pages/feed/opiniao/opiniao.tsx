import { IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonList, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { chatbubbles, closeCircleOutline,send } from "ionicons/icons";
import React from "react";
import feed from "../../../shared/services/feed";
import login from "../../../shared/services/login";
class Opiniao extends React.Component<{id:any,open:boolean,close:any}>{
    state = {
        opns: [],
        minhaOpn: ''
    }
    async componentDidMount(){
        var opn = await feed.getPostComents(this.props.id,50)
        console.log(opn);
        this.setState({opns: opn.data.linhas})
        
    }
    async postOpn(){
        console.log(this.state.minhaOpn);
        var id = localStorage.getItem('id')
        var resultado = await feed.postComentario(this.props.id,id,this.state.minhaOpn)
        if(resultado.data.status == 'ok'){
            let meusDados = await login.getUsuario(localStorage.getItem('id'))
            let meuComentario:any = {
                nome:meusDados.data.linhas[0].nome,
                foto: meusDados.data.linhas[0].foto,
                id: meusDados.data.linhas[0].id,
                idComentario: resultado.data.id,
                comentario: this.state.minhaOpn,
                idNot: this.props.id
            };
            let opns:any = [...this.state.opns]
            opns.unshift(meuComentario)
            
            this.setState({opns})
            this.setState({minhaOpn: ''})
        }
        
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
                    {this.state.opns.length > 0
                    ? <div className="list">
                        <IonList>
                            {this.state.opns.map((op:any) =>{
                                return(
                                    <IonItem key={op.idComentario}>
                                        <div className="conteudo">
                                        <div className="header">
                                            <img src={`/assets/avatares/${op.foto}.svg`} alt={`foto do usuário: ${op.nome}`} />
                                            <h5>{op.nome}</h5>
                                        </div>
                                        <div className="desc">
                                            <p>{op.comentario}</p>
                                        </div>
                                        
                                        </div>
                                        
                                    </IonItem>
                                )
                            })}
                        </IonList>
                    </div>
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