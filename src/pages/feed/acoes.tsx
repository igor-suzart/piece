import { IonIcon } from "@ionic/react";
import { banOutline, chatbox, heart } from "ionicons/icons";
import React from "react";
import feed from "../../shared/services/feed";
import Opiniao from "./opiniao/opiniao";
class FeedAcoes extends React.Component<{idNot:string,indice:number}>{
    state = {
        curti: false,
        nCurti: false,
        modal: false
    }
    constructor(props:any){
        super(props)
        this.modal = this.modal.bind(this)

    }
    modal(bool:boolean){
        this.setState({modal:bool})
    }
    async componentDidMount(){
        let id = localStorage.getItem('id')
        var tenhoAcoes = await feed.getAcoes(this.props.idNot,id)
        console.log(tenhoAcoes);
        if(tenhoAcoes.data.linhas.length > 0){
            tenhoAcoes.data.linhas.forEach((pc:any) => {
                if(pc.curtida == 1 || pc.curtida == '1'){
                    this.setState({curti:true})
                } else if(pc.dislike == 1 || pc.dislike == '1'){
                    this.setState({nCurti:true})
                }
            });
        }
        

    }
    
    async like(){
        if(this.state.curti == true || this.state.nCurti == true){
            return
        }
        let id = localStorage.getItem('id')
        var meuLike = await feed.postLike(this.props.idNot,id)
        console.log(meuLike);
        this.setState({curti:true})
        // var meuFeed:any = this.state.feed
        // meuFeed[indice]['like'] = true
        // this.setState({feed:meuFeed})
    }
    async dislike(){
        if(this.state.nCurti == true || this.state.curti == true){
            return
        }
        let id = localStorage.getItem('id')
        var meuDislike = await feed.postDislike(this.props.idNot,id)
        console.log(meuDislike);
        this.setState({nCurti:true})
        
        // var meuFeed:any = this.state.feed
        // meuFeed[indice]['dislike'] = true
        // this.setState({feed:meuFeed})
    }

    render(){
        return(
            <div className="acoes">
                <Opiniao open={this.state.modal} close={this.modal} id={this.props.idNot} />
                <div className="actions">
                    <IonIcon icon={heart} 
                    color={this.state.curti ? 'danger' : ''} 
                    onClick={() =>this.like()}>

                    </IonIcon>
                    <IonIcon icon={banOutline} 
                    color={this.state.nCurti ? 'warning' : ''} 
                    onClick={() =>this.dislike()}></IonIcon>
                    <IonIcon icon={chatbox} onClick={() => this.setState({modal:true})}></IonIcon>
                </div>
                <hr />
            </div>

        )
    }
}
export default FeedAcoes