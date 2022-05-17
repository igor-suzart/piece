import React from 'react';
import { IonModal, IonButton, IonContent, IonInput, IonTitle, IonCheckbox,IonHeader, IonToolbar,IonIcon,IonText,IonSelect, IonSelectOption,IonAlert  } from '@ionic/react';
import {closeCircleOutline} from 'ionicons/icons/'
import '../modal.scss'
import validator from '../../../shared/validator';
import login from '../../../shared/services/login';
class ModalUp extends React.Component<{open:boolean,openUpFalse:any}> {
    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRep: '',
        niver: '',
        emailOk: true,
        senhaSize: true,
        senhaIgual: true,
        genero: '',
        finalErro: false,
        finalMsgErro: ''
    }
    componentDidMount(){
        //this.setState({email:event?.target.value})
    }
    lideNome(e:any){
        this.setState({nome:e.target.value})
    }
    lideEmail(e:any){
        this.setState({email:e.target.value})
    }
    lideSenha(e:any){
        this.setState({senha:e.target.value})
    }
    lideSenhaRep(e:any){
        this.setState({senhaRep:e.target.value})
    }
    lideNiver(e:any){
        this.setState({niver:e.target.value})
    }
    async post(event:any){
        event.preventDefault()
        if(!this.state.emailOk || !this.state.senhaIgual || !this.state.senhaSize || this.state.nome == ''
        || this.state.genero == '' || this.state.niver == ''){
            this.setState({finalErro: true,finalMsgErro: 'Campos inválidos'})
        } else {
            let nome = this.state.nome
            let email = this.state.email
            let senha = this.state.senha
            let niver = this.state.niver
            let genero = this.state.genero
            var resultado = await login.cadastro(nome,email,senha,niver,genero)
            if(resultado.data.status === 'falha'){
                this.setState({finalErro: true,finalMsgErro: 'Email já cadastrado'})
            } else {
                //aqui eu vou mudar a rota
            }
            console.log(resultado);
            
        }

    }
    render(){
        return(
            <IonModal isOpen={this.props.open}>
                <IonContent>
                {/* <h1 onClick={()=>this.props.openUpFalse()}>fechar</h1>
                    <h1>abri Cadastro!</h1> */}
                    <IonAlert
                        isOpen={this.state.finalErro == true}
                        onDidDismiss={() => this.setState({finalErro: false})}
                        cssClass='my-custom-class'
                        header={'Erro'}
                        message={this.state.finalMsgErro}
                        buttons={['Entendi']}
                    />
                    <IonHeader>
                        <IonToolbar>
                        <IonIcon size='large' slot='start' className='headerIcon' onClick={()=>this.props.openUpFalse()} icon={closeCircleOutline}></IonIcon>
                        <IonTitle size="large" className='pagName'>Cadastre-se</IonTitle>
                        </IonToolbar>
                </IonHeader>
                <div className='content'>
                    <form onSubmit={this.post.bind(this)}>
                <IonText color='primary'>
                        <p>Qual seu nome?</p>
                    </IonText>
                    <IonInput type='text' className="ionInput"
                    onChange={(e:any) => this.lideNome(e)} onBlur={(e:any) => this.lideNome(e)} value={this.state.nome}  placeholder="nome: "> </IonInput>
                    <IonText color={this.state.emailOk ? 'primary' : 'danger'}>
                        <p>Email:</p>
                    </IonText>
                    <IonInput type='email' className="ionInput" placeholder="digite seu email"
                    onChange={this.lideEmail} value={this.state.email} onBlur={ (e) => {
                        this.setState({emailOk: validator.checkEmail(e.target.value)})
                        this.lideEmail(e)
                    }}></IonInput>

                    <IonText color={this.state.senhaSize ? 'primary' : 'danger'}>
                        <p>Senha:</p>
                    </IonText>
                    <IonInput type='password' className="ionInput" value={this.state.senha} placeholder="minimo de 8 caracteres"
                    onChange={this.lideSenha} onBlur={(e) => {
                        this.setState({senhaSize: validator.checkSenhaSize(e.target.value)})
                        this.lideSenha(e)
                    }}></IonInput>

                    <IonText color={this.state.senhaIgual ? 'primary' : 'danger'}>
                        <p>Repita a senha:</p>
                    </IonText>
                    <IonInput type='password' className="ionInput" value={this.state.senhaRep} placeholder="Repita a senha"
                    onChange={this.lideSenhaRep}  onBlur={(e) => {
                        this.setState({senhaIgual: validator.checkIgual(this.state.senha,e.target.value)})
                        this.lideSenhaRep(e)
                    }}></IonInput>
                    <IonText color='primary'>
                        <p>Data de nascimento:</p>
                    </IonText>
                    <IonInput type='date' className="ionInput" value={this.state.niver}  placeholder="Data de nascimento" onChange={(e:any) => this.setState({niver: e.target.value})}
                    onBlur={(e:any) => this.setState({niver: e.target.value})}
                    ></IonInput>
                    <div className="check">
                    <IonSelect value={this.state.genero} placeholder='selecione seu genero' onChange={(e:any) => this.setState({genero: e.target.value})}
                    onBlur={(e:any) => this.setState({genero: e.target.value})}>
                        <IonSelectOption value='m'>Masculino</IonSelectOption>
                        <IonSelectOption value='f'>Feminino</IonSelectOption>
                        <IonSelectOption value='o'>Outros</IonSelectOption>
                        <IonSelectOption value='p'>Prefiro não informar</IonSelectOption>
                    </IonSelect>
                    </div>
                    
                    <IonButton type='submit' color='primary' expand="block">Acessar</IonButton>
                    </form>
                </div>
                </IonContent>
            </IonModal>
        )
    }
}
export default ModalUp