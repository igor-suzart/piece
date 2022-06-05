import { IonAlert, IonButton, IonCard, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonToolbar } from "@ionic/react";
import React from "react";
import feed from "../../../shared/services/feed";
import "./post.scss"
interface props {

}
interface linkInfo{
    link: string,
    linkInfo: any,
    status: string,
    showAlerta: boolean
}

class Post extends React.Component<props,linkInfo>{
    constructor(props:props){
        super(props)
        this.state = {
            link: '',
            linkInfo: false,
            status: '',
            showAlerta: false
        }
        this.lideLink = this.lideLink.bind(this)
    }
    async postNot(){
        let data = {
            title: encodeURIComponent(this.state.linkInfo['openGraph'].title),
            description: encodeURIComponent(this.state.linkInfo['openGraph'].description),
            url: encodeURIComponent(this.state.linkInfo['openGraph'].url),
            image: encodeURIComponent(this.state.linkInfo['openGraph'].image.url) ,
            sourceUrl: encodeURIComponent(this.state.linkInfo['openGraph'].url),
            name: this.state.linkInfo['openGraph'].site_name ? encodeURIComponent(this.state.linkInfo['openGraph'].site_name) : this.state.linkInfo['hybridGraph'].site_name ? encodeURIComponent(this.state.linkInfo['hybridGraph'].site_name) : encodeURIComponent(this.state.linkInfo['htmlInferred'].site_name),
        }
        let resultado = await feed.noticias(JSON.stringify(data))
        console.log(resultado);
        
        
        if(resultado.data.status == 'falha'){
            if(resultado.data.erro.sqlMessage.includes('Duplicate entry')){
                this.setState({status: 'Notícia já cadastrada!',showAlerta: true})
            }
        } else if(!resultado){
            this.setState({status: 'Notícia invalida!',showAlerta: true})
        }
        else{
            this.setState({status: 'Notícia cadastrada com sucesso!',showAlerta: true})
        }
        
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
        <IonContent className="post" scrollEvents={true}>
            <IonHeader>
                <IonToolbar>
                    <h6>Publique uma notícia!</h6>
                </IonToolbar>
            </IonHeader>
            {this.state.status !== ''
            ? <IonAlert isOpen={this.state.showAlerta}
            header={this.state.status.includes('sucesso') ? 'Sucesso!' : 'Erro!'}
            message={this.state.status}
            buttons={[{
                text: 'Ok!',
                cssClass: 'primary',
                handler: e => {
                    this.setState({link: '',linkInfo: false,status: ''})
                }
            }]}></IonAlert>
            : ''}
            <div className="insira">
                <IonInput placeholder="Insira o link da noticia" value={this.state.link} 
                onChange={this.lideLink} onBlur={this.lideLink}></IonInput>
            </div>
            {this.state.linkInfo !== false && this.state.linkInfo['openGraph']
            ? <div className="previewNot">
                <IonCard>
                    <p className="title">{this.state.linkInfo['openGraph'].title}</p>
                    <img src={this.state.linkInfo['openGraph'].image.url} alt="" />
                    <small>{this.state.linkInfo['openGraph'].description}</small><br/>
                    <small><a href={this.state.linkInfo['openGraph'].url}>
                        {this.state.linkInfo['openGraph'].site_name 
                        ? this.state.linkInfo['openGraph'].site_name 
                        : this.state.linkInfo['hybridGraph'].site_name 
                        ? this.state.linkInfo['hybridGraph'].site_name 
                        : this.state.linkInfo['htmlInferred'].site_name}</a></small><br/>
                        <div className="flex">
                        <IonButton onClick={() => this.postNot()} color="primary" fill="outline">Publicar Notícia</IonButton>
                        </div>
                    
                </IonCard>
                
            </div>
            : <div className="nolink"><h6>Lembre-se: Insira um link válido</h6></div>}
        </IonContent>

        )
    }
}

export default Post