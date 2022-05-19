import { IonPage } from '@ionic/react'
import React from 'react'
import feed from '../../shared/services/feed'
class Feed extends React.Component{
    state = {
        feed: []
    }
    async componentDidMount(){
        var meuFeed = await feed.getMainFeed(1)
        this.setState({feed:meuFeed.data.articles})
        console.log('====================================');
        console.log(this.state.feed);
        console.log('====================================');
             
    }
    render(){
        return(
            <IonPage>
                {this.state.feed.length > 0 ?
                    this.state.feed.map(function(not:any,ind:number){
                    return(
                    <h1>{not.title}</h1>
                                        )
                    }) : ''
                
                }
                <h1>feed será aqui!</h1>
            </IonPage>

        )
    }
}
export default Feed