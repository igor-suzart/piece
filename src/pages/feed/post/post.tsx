import { IonHeader, IonInput, IonPage, IonToolbar, IonText } from "@ionic/react";
import React from "react";
import feed from "../../../shared/services/feed";
import "./post.scss"

class Post extends React.Component{
    state= {
        link: ''
    }
    async lideLink(e:any){
        console.log('eu rodo')
        if(e.target.value.includes('http')){
            console.log('link');
            var linkCont = await feed.getLinkConteudo(e.target.value)
            console.log(linkCont);
            
        } else {
            console.log('n ser link');
            
        }
    }
    render(){
        return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <h6>Publique uma notícia!</h6>
                </IonToolbar>
            </IonHeader>
           <div>
            <IonText color='primary'>
                <p>Insira o Link</p>
            </IonText>
            <IonInput className="ionInput" placeholder="Insira o link da noticia" value={this.state.link} 
            onChange={this.lideLink} onBlur={this.lideLink}></IonInput>
            </div>
        </IonPage>

        )
    }
}

export default Post