import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton,IonModal, IonGrid, IonRow, IonCol } from '@ionic/react'
import './avatar.scss'
import login from '../../shared/services/login';
import  { Redirect } from 'react-router-dom' 
class Avatar extends React.Component{
    avatarList:Array<number> = [];
    state = {
        avatarList: this.avatarList,
        myImg: 20,
        ir: ''
    }
    

    async componentDidMount(){
        let myList:any = []
        for (let i = 0; i < 14; i++) {
            myList.push(i)
        }
        await this.setState({avatarList: myList})
        console.log(this.state.avatarList)
    }
    async postAvatar(){
        let avatar = this.state.myImg
        let idUser = localStorage.getItem('id')
        var resultado = await login.postAvatar(idUser,avatar)
        console.log(resultado);
        
        if(resultado.data.status === 'ok'){
            this.setState({ir: '/feed'})
        } else {
            console.log('lide que deu erro!');
            
        }
    }
    render(){
        if(this.state.ir !== ''){
            return <Redirect to={this.state.ir} />
        }
        return(
            <IonPage className='avatar'>
                <IonContent>
                    <IonHeader>
                        <IonToolbar>
                            <h4>Escolha seu avatar</h4>
                        </IonToolbar>
                    </IonHeader>
                    <IonGrid>
                        <IonRow>
                            {this.state.avatarList !== []
                            ? this.state.avatarList.map((ind:number) => {
                                return(
                                <IonCol size='6' key={ind + 1} style={{textAlign: 'center'}}>
                                    <input type='checkbox' id={`${ind + 1}`} />
                                    <label htmlFor={`${ind + 1}`}>
                                        <img src={`/assets/avatares/${ind + 1}.svg`} 
                                        onClick={() => {
                                            if(this.state.myImg == ind + 1)
                                            this.setState({myImg: 20})
                                            else
                                            this.setState({myImg: ind + 1})

                                        }} alt="avatar" />
                                    </label>

                                </IonCol>
                                )

                            })
                        : ''}
                        </IonRow>
                    </IonGrid>
                    <div className="enviar">
                        <IonButton color='primary' disabled={this.state.myImg === 20 ? true : false} expand='block'
                        onClick={() => this.postAvatar()}>Escolher Avatar!</IonButton>
                    </div>
                    
                </IonContent>
            </IonPage>
            
        )
    }
}

export default Avatar