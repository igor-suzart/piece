import ambiente from "../ambiente"
import axios from 'axios'


export default{
    async getMainFeed(page:number){
        return await axios.get(`${ambiente.gnews}/top-headlines?token=${ambiente.gnewsKey}
        &lang=pt&country=br&page=${page}&max=25`)
    },
    async postLike(idNot:string,idUser:any){
      return await axios.post(`${ambiente.apiUrl}/feed/acao?idNot=${idNot}&idUser=${idUser}&like=1`)
    },
    async postDislike(idNot:string,idUser:any){
      return await axios.post(`${ambiente.apiUrl}/feed/acao?idNot=${idNot}&idUser=${idUser}&dislike=1`)
    },
    async postComentario(idNot:string,idUser:any,comentario:string){
      return await axios.post(`${ambiente.apiUrl}/feed/acao?idNot=${idNot}&idUser=${idUser}&comentario=${comentario}`)
    },
    async postAcao(idNot:string,idUser:any,comentario?:string,like?:number,dislike?:number,nVeri?:number){
      return await axios.post(`${ambiente.apiUrl}/feed/acao?idNot=${idNot}&idUser=${idUser}&comentario=${comentario}&like=${like}&dislike=${dislike}&naoVerificada=${nVeri}`)
    },
    async getAcoes(idNot:string,idUser:any){
      return await axios.get(`${ambiente.apiUrl}/feed/getAcao?idNot=${idNot}&idUser=${idUser}`)
    },
    async getPostComents(idNot:string,limit:number){
      return await axios.get(`${ambiente.apiUrl}/feed/getNotComents?idNot=${idNot}&limit=${limit}`)
    },
    async getLinkConteudo(link:string){
      return await axios.get(`https://opengraph.io/api/1.1/site/${link}?app_id=b8ad8db6-d4b2-4121-81ae-f636b7283ed5`)
    },
    async noticias(data:string){
      
      return await axios.post(`${ambiente.apiUrl}/feed/postNoticia?data=${data}`)
    },
    async GetNoticiasPublicas(page:number){
      return await axios.get(`${ambiente.apiUrl}/feed/getNotPubli?page=${page}`)
    },
    async getAcaoNaoVeri(idNot:string){
      return await axios.get(`${ambiente.apiUrl}/feed/getAcaoNaoVeri?idNot=${idNot}`)
    },
    async pesquisarNot(tema:string){
      return await axios.get(`${ambiente.gnews}search?token=${ambiente.gnewsKey}
      &lang=pt&country=br&max=25&q=${tema}&in=title`)
    }
}