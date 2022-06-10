import { IonContent, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonPage, IonProgressBar } from '@ionic/react'
import React from 'react'
import feed from '../../shared/services/feed'
import "./feed.scss"
import {heart,banOutline,chatbox} from 'ionicons/icons/'
import FeedAcoes from './acoes'
import FullNot from './fullNot/fullNot'
class Feed extends React.Component{
    state = {
        feed: [],
        scroll: 0,
        page: 1,
        cancel: false,
        verNot: false,

    }
    constructor(props:any){
        super(props)
        this.fecharNot = this.fecharNot.bind(this)
    }
    async componentDidMount(){
        let local = window.location
        var id = localStorage.getItem('id')
        if(!id){
            console.log('n to logado');
            
        }
        var meuFeed = await feed.getMainFeed(1)
        this.setState({feed:meuFeed.data.articles})
        // var meuFeed:any = feed.offlineFeed
        // this.setState({feed:meuFeed})
        console.log(meuFeed);
             
    }
    fecharNot(){
        this.setState({verNot:false})
    }
    async loadPage(event:any){
        console.log(event)
        this.setState({page: this.state.page += 1})
        var meuFeed = await feed.getMainFeed(this.state.page)
        console.log(this.state.page)
        let novoFeed:any = this.state.feed.concat(meuFeed.data.articles) 
        this.setState({feed: novoFeed,cancel:true})
        console.log(novoFeed)
        event.target.complete()
    }
    render(){
        return(

            <IonContent style={{paddingBottom: '5rem'}}>
                <IonInfiniteScroll position='bottom' onIonInfinite={(e:any) => this.loadPage(e)}>
                    <IonInfiniteScrollContent>
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
                                    <div className="desktop">
                                        <p>{not.description}</p>
                                        <p><a href={not.source.url}>{not.source.name}</a></p>

                                    </div>
                                    
                                </div>
                            </div>
                            <div className="desc">
                            <p>{not.description}</p>
                            <p><a href={not.source.url}>{not.source.name}</a></p>
                            </div>
                            <FeedAcoes idNot={not.url} indice={ind} />

                        </div>

                                        )
                    }) 
                    : <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                        <h6>Carregando notícias</h6>
                        <IonProgressBar color='primary'></IonProgressBar>
                    </div>                            
                }
                </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>

        )
    }
}
export default Feed