import ambiente from "../ambiente"
import axios from 'axios'
export default{
    async login(email:string,senha:string){
       return await axios.get(`${ambiente.apiUrl}/user/login?email=${email}&senha=${senha}`)
    },
    async cadastro(nome:string,email:string,senha:string,niver:any,genero:any){
        return await axios.post(`${ambiente.apiUrl}/user/post?nome=${nome}&senha=${senha}
        &email=${email}&niver=${niver}&genero=${genero}`)
    },
    async postAvatar(idUser:any,avatar:number){
        return await axios.post(`${ambiente.apiUrl}/user/postAvatar?idUser=${idUser}&avatar=${avatar}`)
    },
    async getUsuario(idUser:any){
        return await axios.get(`${ambiente.apiUrl}/user/getUsuario?idUser=${idUser}`)
    }
}