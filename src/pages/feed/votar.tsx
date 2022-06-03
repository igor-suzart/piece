import { IonButton, IonContent, IonIcon, IonInput, IonPage, IonPopover, IonProgressBar } from '@ionic/react'
import React from 'react'
import feed from '../../shared/services/feed'
import "./feed.scss"
import {heart,banOutline,chatbox, checkmarkCircle, closeCircle} from 'ionicons/icons/'

class Votar extends React.Component{
    state = {
        feed: [],
        scroll: 0,
        votei: false,
        voto: '',
        justificativa: '',
        minhaNoticia: ''

    }
    async componentDidMount(){
        var id = localStorage.getItem('id')
        if(!id){
            console.log('n to logado');
            
        }
        var meuFeed = await feed.GetNoticiasPublicas(1)
        this.setState({feed:meuFeed.data.articles})
        // var meuFeed:any = feed.offlineFeed
        // this.setState({feed:meuFeed})
        console.log(meuFeed);
             
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
        var resultado = await feed.postAcao(idNot,idUser,justi,like,dislike)
        if(resultado.data.status === 'ok'){
            this.setState({votei:false,voto: '',justificativa: '',minhaNot: ''})
        }
        console.log(resultado)
    }
    render(){
        return(
            <IonContent fullscreen={true} scrollEvents={true} onIonScrollStart={(event:any)=>{
                event.preventDefault()
                //console.log(event);

                // if(event.target.detail.deltaY > 0){
                //     this.state.scroll += 1
                // } else if(this.state.scroll > 0 && event.target.detail.deltaY < 0) {
                //     this.state.scroll -= 1
                // } else {
                //     this.state.scroll = 0
                // }
                // this.state.scroll += 1
                // console.log(this.state.scroll);
                
                // let proxNot:any = document.getElementById(`not${this.state.scroll}`)
                // proxNot.scrollIntoView({behavior:'smooth'});
                
                
            }}
            onIonScroll={(e:any) => e.preventDefault()} onIonScrollEnd={(e:any) => e.preventDefault()}>
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
                        <IonButton color='light' onClick={() => this.postarVoto()}>Enviar!</IonButton>
                    </div>
                    

                </IonPopover>
                {this.state.feed.length > 0 
                ?   this.state.feed.map((not:any,ind:number) =>{
                    return(
                        <div className='noticia' key={ind} id={'not'+ind}>
                            <div style={{overflow: 'hidden'}}>
                                <div className="main" onClick={()=> console.log('cliquei')}>
                                    <img src={not.image} alt={not.description} />
                                </div>
                                <div className="title">
                                    <h5>{not.title}</h5>
                                    
                                </div>
                            </div>
                            <div className="desc">
                            <p>{not.description}</p>
                            <p><a href={not.url}>{not.name}</a></p>
                            </div>
                            <hr/>
                            <div className="votar">
                                <IonButton size='large' onClick={() => {
                                    this.setState({votei: true,voto: 'meuPop success',minhaNoticia: not.url})
                                }} color='success'>Fato!</IonButton>

                                <IonButton size='large' onClick={() => {
                                    this.setState({votei: true,voto: 'meuPop danger',minhaNoticia: not.url})
                                }} color='danger'>Fake!</IonButton>
                            </div>

                            {/* <FeedAcoes idNot={not.url} indice={ind} /> */}

                        </div>

                                        )
                    }) 
                    : <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                        <h6>Carregando notícias</h6>
                        <IonProgressBar color='primary'></IonProgressBar>
                    </div>                            
                }
            </IonContent>

        )
    }
}

export default Votar