import { IonHeader, IonInput, IonPage, IonToolbar } from "@ionic/react";
import React from "react";
import feed from "../../../shared/services/feed";

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
            <IonInput placeholder="Insira o link da noticia" value={this.state.link} 
            onChange={this.lideLink} onBlur={this.lideLink}></IonInput>
        </IonPage>

        )
    }
}

export default Post