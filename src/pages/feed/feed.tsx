import { IonContent, IonIcon, IonPage } from '@ionic/react'
import React from 'react'
import feed from '../../shared/services/feed'
import "./feed.scss"
import {heart,banOutline,chatbox} from 'ionicons/icons/'
import FeedAcoes from './acoes'
import Abas from './abas'
class Feed extends React.Component{
    state = {
        feed: [],
        scroll: 0,
    }
    height = window.screen.height;
    async componentDidMount(){
        // var meuFeed = await feed.getMainFeed(1)
        // this.setState({feed:meuFeed.data.articles})
        var meuFeed:any = feed.offlineFeed
        this.setState({feed:meuFeed})
        console.log(meuFeed);
             
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
                {this.state.feed.length > 0 
                ?   this.state.feed.map((not:any,ind:number) =>{
                    return(
                        <div className='noticia' key={ind} id={'not'+ind}>
                            <div className="main">
                                <img src={not.image} alt={not.description} />
                            </div>
                            <div className="title">
                                <h5>{not.title}</h5>
                                
                            </div>
                            <div className="desc">
                            <p>{not.description}</p>
                            <p><a href={not.source.url}>{not.source.name}</a></p>
                            </div>
                            <FeedAcoes idNot={not.url} indice={ind} />

                        </div>

                                        )
                    }) 
                    : <div>
                        <h4>Nenhuma Noticia carregada</h4>
                    </div>                            
                }
                <Abas />
            </IonContent>

        )
    }
}
export default Feed