import { IonButton, IonContent, IonIcon, IonInput, IonLoading, IonSpinner } from "@ionic/react";
import { send } from "ionicons/icons";
import React from "react";
import feed from "../../../shared/services/feed";
import FeedAcoes from "../acoes";
import "./search.scss"

class Search extends React.Component{
    state = {
        tema: '',
        nots: [],
        loading: false
    }
    async pegarNots(){
            var resultado = await feed.pesquisarNot(this.state.tema)
            console.log(resultado)
            this.setState({nots:resultado.data.articles,loading:true})
    }
    render(){
        return (
            <IonContent className="pesquisa">
                <div className="insira">
                    <IonInput placeholder="pesquise um tema"
                    value={this.state.tema} 
                    onChange={(e:any) => this.setState({tema:e.target.value})}
                    onBlur={(e:any) => {
                        this.setState({tema: e.target.value})
                        
                        }}></IonInput>
                        <IonButton onClick={() => this.pegarNots()}><IonIcon icon={send}></IonIcon></IonButton>
                </div>
                {this.state.nots !== []
                ? this.state.nots.map((not:any,ind:any) =>{
                    return (
                        <div className="noticia" key={ind}>
                    <div className="main">
                        <img src={not.image} alt={not.description} />
                    </div>
                        <div className="title">
                            <h5>{not.title}</h5>
                            <div className="desktop">
                                <p>{not.description}</p>
                                <p><a href={not.source.url}>{not.source.name}</a></p>

                            </div>
                                        
                        </div>
                        <div className="desc">
                            <p>{not.description}</p>
                            <p><a href={not.source.url}>{not.source.name}</a></p>
                            </div>
                            <FeedAcoes idNot={not.url} indice={ind} />
                    </div>
                    )
                }) : 
                this.state.loading 
                ? <IonSpinner name="crescent"/>
                : <h6>Notícias carregarão aqui!</h6>}
                
            </IonContent>
        )
    }
}
export default Search