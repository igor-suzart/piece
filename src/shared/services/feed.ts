import ambiente from "../ambiente"
import axios from 'axios'

export default{
    async getMainFeed(page:number){
        return await axios.get(`${ambiente.gnews}/top-headlines?token=${ambiente.gnewsKey}
        &lang=pt&country=br&page=${page}`)
    }
}