import { IonHeader, IonInput, IonPage, IonTextarea, IonToolbar } from "@ionic/react";
import React from "react";
import feed from "../../../shared/services/feed";
<<<<<<< HEAD
import "./post.scss"
=======
interface props {
>>>>>>> ebf56be30e8a266a53f9a7fac52c8e2c7ab35d6f

}
interface linkInfo{
    link: string,
    linkInfo: any
}

class Post extends React.Component<props,linkInfo>{
    constructor(props:props){
        super(props)
        this.state = {
            link: '',
            linkInfo: false
        }
        this.lideLink = this.lideLink.bind(this)
    }
    async lideLink(e:any){
        //this.setState({link:e.target.value})
        if(e.target.value.includes('http')){
            console.log('link');
            var linkCont = await feed.getLinkConteudo(encodeURIComponent(e.target.value))
            console.log(linkCont);
            if(!linkCont.data){
                console.log('deu erro');
                this.setState({linkInfo:false})
            } else {
                this.setState({linkInfo:linkCont.data,link:e.target.value})

            }
        } else {
            console.log('n ser link');
            this.setState({linkInfo:false})
            
        }
    }
    render(){
        return(
        <IonPage style={{color: '#fff'}}>
            <IonHeader>
                <IonToolbar>
                    <h6>Publique uma notícia!</h6>
                </IonToolbar>
            </IonHeader>
<<<<<<< HEAD
            <IonInput className="ionInput" placeholder="Insira o link da noticia" value={this.state.link} 
=======
            <h6>{this.state.link}</h6>
            <IonInput placeholder="Insira o link da noticia" value={this.state.link} 
>>>>>>> ebf56be30e8a266a53f9a7fac52c8e2c7ab35d6f
            onChange={this.lideLink} onBlur={this.lideLink}></IonInput>
            {this.state.linkInfo !== false
            ? <div className="previewNot">
                <h6>{this.state.linkInfo['htmlInferred'].title}</h6>
            </div>
            : <div><h6>Insira um link válido</h6></div>}
        </IonPage>

        )
    }
}

export default Post