import { IonButton, IonIcon, IonInput, IonPopover } from "@ionic/react";
import { checkmarkCircle, chevronDown, chevronUp, closeCircle } from "ionicons/icons";
import React from "react";
import { Interface } from "readline";
import feed from "../../shared/services/feed";

class VotarAcao extends React.Component<{id:string}>{
    
    constructor(props:any){
        super(props)
    }
    myModel: any;
    state = {
        showResul: false,
        scroll: 0,
        votei: false,
        voto: '',
        justificativa: '',
        minhaNoticia: '',
        votos: [],
        votosFinal: {curtidas: [],dislikes: []}

    }
    async getAcoes(){
        return await feed.getAcaoNaoVeri(this.props.id)
    }
    async lideAcoes(){
        let curtidas:Array<string> = []
        let dislikes:Array<string> = []
        this.state.votos.forEach((v:any) => {
            if(v.curtida == '1'){
                curtidas.push(v)
            } else if(v.dislike == '1'){
                dislikes.push(v)
            }
        })
        await this.setState({votosFinal: {curtidas: curtidas,dislikes:dislikes}})
    }
    async componentDidMount(){
        var resultado:any = await this.getAcoes()
        console.log(resultado)
        if(resultado.data.linhas.length > 0){
            this.setState({showResul:true,votos:resultado.data.linhas})
            this.lideAcoes()
        }
    }
    async postarVoto(){
        let idUser = localStorage.getItem('id')
        let idNot = this.state.minhaNoticia
        let justi = this.state.justificativa
        let like:number = 0
        let dislike:number = 0
        if(this.state.voto.includes('success')){
            like = 1
        } else {
            dislike = 1
        }
        var resultado = await feed.postAcao(idNot,idUser,justi,like,dislike,1)
        if(resultado.data.status === 'ok'){
            var votos:any = await this.getAcoes()
            this.setState({votei:false,voto: '',justificativa: '',minhaNot: '',showResul: true,votos:votos.data.linhas})
            this.lideAcoes()
            
        }
    }
    render(){
        return(
            <div className="votarAcao">
                                <IonPopover
                className={this.state.voto}
                isOpen={this.state.votei}
                onDidDismiss={() => this.setState({votei:false,voto: '',justificativa: '',minhaNot: ''})}
                >
                    <h1>Finalize seu voto!</h1>
                    <IonIcon size='' icon={this.state.voto.includes('success') ? checkmarkCircle : closeCircle}></IonIcon>
                    <div className="enviar">
                        <IonInput placeholder='quer justificar seu voto?' 
                        value={this.state.justificativa}
                        onChange={(e:any) => this.setState({justificativa: e.target.value})}
                        onBlur={(e:any) => this.setState({justificativa: e.target.value})}></IonInput>
                        <IonButton color='light' expand="block" onClick={() => this.postarVoto()}>Enviar!</IonButton>
                    </div>
                    

                </IonPopover>
                {!this.state.showResul ?
                    <div className="votar">
                
                    <IonButton size='large' onClick={() => {
                    this.setState({votei: true,voto: 'meuPop success',minhaNoticia: this.props.id})
                }} color='success'>Fato!</IonButton>

                <IonButton size='large' onClick={() => {
                    this.setState({votei: true,voto: 'meuPop danger',minhaNoticia: this.props.id})
                }} color='danger'>Fake!</IonButton>
                </div>
                : 
                <div className="showVotos">
                    <h6>Resultado parcial da votação</h6>
                    <IonButton color="success" fill="outline" style={{marginRight: '0.75rem'}}>
                        <IonIcon icon={chevronUp}></IonIcon>
                        <b>fato: </b>
                        <span>{this.state.votosFinal.curtidas.length}</span>
                    </IonButton>
                    <IonButton color="danger" fill="outline">
                        <IonIcon icon={chevronDown}></IonIcon>
                        <b>fake: </b>
                        <span>{this.state.votosFinal.dislikes.length}</span>
                    </IonButton>


                </div>}
            </div>

        )
    }
}
export default VotarAcao