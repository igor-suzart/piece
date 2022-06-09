import { IonContent, IonIcon, IonItem, IonText } from "@ionic/react";
import { exitOutline } from "ionicons/icons";
import React from "react";
import login from "../../shared/services/login";
import "./perfil.scss"
class Perfil extends React.Component{
    meuTipo:any = []
    state = {
        usuario: this.meuTipo
    }
    async componentDidMount(){
        var resultado:any = await (await login.getUsuario(localStorage.getItem('id'))).data.linhas[0]
        console.log(resultado)
        this.setState({usuario: resultado})
    }
    render(){
        return (
            <IonContent className="perfil">
                <div className="title">
                    <IonText color="primary">
                        <h1>{`Bem Vind${
                        this.state.usuario.genero == 'm' ? 'o'
                        : this.state.usuario.genero == 'f' ? 'a' : 'x'}!`}</h1>
                    </IonText>
                    <h5>{this.state.usuario.nome}</h5>
                    <img src={`/assets/avatares/${this.state.usuario.foto}.svg`} alt={`Foto de Perfil de ${this.state.usuario.nome}`} />
                </div>
                <IonItem detail={true}>
                    <h6>Perfil</h6>
                </IonItem>
                <IonItem detail={true}>
                    <h6>Sobre o Projeto</h6>
                </IonItem>
                <IonItem detail={true}>
                    <h6>Próximos passos</h6>
                </IonItem>
                <IonItem detail={true}>
                    <IonIcon icon={exitOutline}></IonIcon>
                    <h6 style={{marginLeft: '0.8rem'}}>Sair</h6>
                </IonItem>
            </IonContent>
        )
    }
}
export default Perfil