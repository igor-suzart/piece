import ambiente from "../ambiente"
import axios from 'axios'

export default{
    async getMainFeed(page:number){
        return await axios.get(`${ambiente.gnews}/top-headlines?token=${ambiente.gnewsKey}
        &lang=pt&country=br&page=${page}`)
    },
    offlineFeed:  [
        {
          "title": "Após recusar Real Madrid e renovar com PSG, Mbappé diz: \"Não tenho problema com a pressão\"",
          "description": "Atacante recusou proposta dos espanhóis e permanece até 2025. Presidente do Paris, sobre reclamação da LaLiga a respeito do fair play financeiro: \"Medo de que a Ligue 1 fique melhor\"",
          "content": "Após anunciar renovação de contrato com o PSG , Kylian Mbappé falou com a imprensa na manhã desta segunda-feira. O atacante francês, que recusou proposta do Real Madrid, permanecerá no Paris Saint-Germain até 2025.\n- Claro que foi uma decisão muito d... [2430 chars]",
          "url": "https://ge.globo.com/futebol/futebol-internacional/futebol-frances/noticia/2022/05/23/apos-recusar-real-madrid-e-renovar-com-psg-mbappe-diz-nao-tenho-problema-com-a-pressao.ghtml",
          "image": "https://s2.glbimg.com/tSVG4jUF_AHv3tjgNNNj5-_8oa8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/1/V/qxNH4GT6CIGZQs6epCuQ/mbappe.png",
          "publishedAt": "2022-05-23T13:13:43Z",
          "source": {
            "name": "Globo",
            "url": "https://ge.globo.com"
          }
        },
        {
          "title": "Missão: Impossível - Acerto De Contas Parte 1 revela primeiro trailer",
          "description": "Missão: Impossível – Acerto De Contas Parte 1 revela primeiro trailer; veja",
          "content": "A Paramount Pictures revelou o primeiro teaser de Missão: Impossível – Acerto De Contas Parte 1 e, ao que tudo indica, Ethan Hunt (Tom Cruise) se arriscará ainda mais nessa aventura; confira acima.\nMissão: Impossível 7 contará com o retorno de Simon ... [667 chars]",
          "url": "https://www.omelete.com.br/filmes/tom-cruise-missao-impossivel-acerto-contas-parte-1-trailer",
          "image": "https://cdn.ome.lt/F0ILDW-ycMauM9ulLekNLe3i6uE=/1200x630/smart/extras/conteudos/missao-impossivel-7.PNG",
          "publishedAt": "2022-05-23T13:10:00Z",
          "source": {
            "name": "Omelete",
            "url": "https://www.omelete.com.br"
          }
        },
        {
          "title": "Madri confirma 30 casos de varíola do macaco; 39 estão sob suspeita",
          "description": "Pessoas infectadas terão que se isolar em casa e só poderão sair para consulta médica",
          "content": "Madri confirma 30 casos de varíola do macaco; 39 estão sob suspeita Pessoas infectadas terão que se isolar em casa e só poderão sair para consulta médica\nA- A+\nVírus precisa de muito mais tempo para ser sequenciado do que outros como o Sars-CoV-2 OMS... [2072 chars]",
          "url": "https://noticias.r7.com/saude/madri-confirma-30-casos-de-variola-do-macaco-39-estao-sob-suspeita-23052022",
          "image": "https://img.r7.com/images/variola-macaco-18052022101415711?dimensions=771x420&",
          "publishedAt": "2022-05-23T13:06:00Z",
          "source": {
            "name": "R7",
            "url": "https://noticias.r7.com"
          }
        },
        {
          "title": "'Nunca tive tanta vergonha do meu país', diz representante da Rússia que renunciou ao cargo na ONU",
          "description": "Observatório das Nações Unidas pede que outros diplomatas russos pelo mundo façam o mesmo.",
          "content": "O conselheiro da Rússia nas Nações Unidas em Genebra, Boris Bondarev, renunciou ao cargo nesta segunda-feira (23). Em sua carta de despedida, Bondarev disse que nunca se sentiu tão envergonhado com o próprio país.\n\"Durante vinte anos de minha carreir... [3356 chars]",
          "url": "https://g1.globo.com/mundo/ucrania-russia/noticia/2022/05/23/nunca-tive-tanta-vergonha-do-meu-pais-diz-representante-da-russia-que-renunciou-ao-cargo-na-onu.ghtml",
          "image": "https://s2.glbimg.com/DprACZUNZH_Wa_NATPtLsIyP_u8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/j/c/dBHWKZTgmJMXmN51vPTA/2022-03-31t211521z-1073989661-rc2pdt9suf97-rtrmadp-3-ukraine-crisis-mariupol.jpg",
          "publishedAt": "2022-05-23T12:45:25Z",
          "source": {
            "name": "Globo.com",
            "url": "https://g1.globo.com"
          }
        },
        {
          "title": "Doria fará pronunciamento nesta segunda em SP",
          "description": "Ex-governador de SP deve falar com a imprensa às 12h. Antes do pronunciamento, ele receberá a cúpula tucana para debater a sucessão presidencial e a definição do candidato da legenda.",
          "content": "1 de 1 O ex-governador João Doria, que pretende ser candidato à Presidência — Foto: Vinicius Nunes/Agência F8/Estadão Conteúdo\nO ex-governador de São Paulo João Doria , pré-candidato do PSDB à Presidência, fará um pronunciamento nesta segunda-feira (... [2170 chars]",
          "url": "https://g1.globo.com/politica/eleicoes/2022/noticia/2022/05/23/doria-pronunciamento.ghtml",
          "image": "https://s2.glbimg.com/fL7zN7pyrFwiTHkAvzTR08A6H90=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/p/b/m7ih5ETamf8EGr8wnqsw/af820220401007.jpg",
          "publishedAt": "2022-05-23T12:31:14Z",
          "source": {
            "name": "Globo",
            "url": "https://g1.globo.com"
          }
        },
        {
          "title": "Clássicos do novo PS Plus têm recursos divulgados por portal",
          "description": "Os clássicos do novo PS Plus começaram a aparecer na PSN da Malásia e os assinantes já detalharam os recursos dos jogos. Veja!",
          "content": "Os clássicos do novo PS Plus ainda não foram lançados oficialmente, no entanto, como o serviço fará sua estreia na Ásia nas próximas horas, alguns títulos de PS1 começaram a aparecer na PSN da Malásia — e os assinantes já trataram de testá-los. Uma s... [1781 chars]",
          "url": "https://meups.com.br/noticias/classicos-do-novo-ps-plus-malasia-psn/",
          "image": "https://meups.com.br/wp-content/uploads/2022/05/Classicos-do-novo-PS-Plus-detalhes.jpg",
          "publishedAt": "2022-05-23T12:08:17Z",
          "source": {
            "name": "MeuPlayStation",
            "url": "https://meups.com.br"
          }
        },
        {
          "title": "Dólar cai pelo 3° pregão seguido e chega a R$ 4,80",
          "description": "Na sexta-feira (20), a moeda norte-americana fechou a R$ 4,8729, acumulando queda de 3,64% na semana.",
          "content": "Cédulas de dólar e real nas mãos de uma pessoa — Foto: Sergio Moraes/Reuters\n1 de 1 Cédulas de dólar e real nas mãos de uma pessoa — Foto: Sergio Moraes/Reuters\nO dólar caía pela terceira sessão consecutiva frente ao real nesta segunda-feira (23), ne... [1799 chars]",
          "url": "https://g1.globo.com/economia/noticia/2022/05/23/dolar.ghtml",
          "image": "https://s2.glbimg.com/ep5Mg2JE8vITz5x8CunZioPPDCA=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/jo/g1/f/original/2015/11/30/sergio_moraes_reuters.jpg",
          "publishedAt": "2022-05-23T12:01:57Z",
          "source": {
            "name": "Globo",
            "url": "https://g1.globo.com"
          }
        },
        {
          "title": "Argentina registra primeiro caso suspeito de varíola do macaco",
          "description": "Governo argentino informou que paciente tem sintomas compatíveis aos da doença e esteve na Espanha nos últimos dias",
          "content": "Argentina registra primeiro caso suspeito de varíola do macaco Governo argentino informou que paciente tem sintomas compatíveis aos da doença e esteve na Espanha nos últimos dias\nA- A+\nVaríola símia causa pústulas pelo corpo e febre Wikimedia Commons... [1093 chars]",
          "url": "https://noticias.r7.com/saude/argentina-registra-primeiro-caso-suspeito-de-variola-do-macaco-23052022",
          "image": "https://img.r7.com/images/variola-macaco-19052022094903884?dimensions=677x369&",
          "publishedAt": "2022-05-23T11:16:00Z",
          "source": {
            "name": "R7",
            "url": "https://noticias.r7.com"
          }
        },
        {
          "title": "Primeiro soldado russo julgado na Ucrânia por crimes de guerra é condenado à prisão perpétua",
          "description": "Vadim Shishimarin, de 21 anos, admitiu em julgamento que matou um civil de 62 anos em meio à invasão russa no nordeste ucraniano",
          "content": "Primeiro soldado russo julgado na Ucrânia por crimes de guerra é condenado à prisão perpétua Vadim Shishimarin, de 21 anos, admitiu em julgamento que matou um civil de 62 anos em meio à invasão russa no nordeste ucraniano Primeiro soldado russo julga... [3949 chars]",
          "url": "https://noticias.r7.com/internacional/primeiro-soldado-russo-julgado-na-ucrania-por-crimes-de-guerra-e-condenado-a-prisao-perpetua-23052022",
          "image": "https://img.r7.com/images/soldado-russo-prisao-23052022074459640?dimensions=771x420&&&&&&&&&resize=771x420&crop=1280x697+0+91",
          "publishedAt": "2022-05-23T10:48:00Z",
          "source": {
            "name": "R7",
            "url": "https://noticias.r7.com"
          }
        },
        {
          "title": "Biden promete defender Taiwan militarmente de ataque da China",
          "description": "Presidente dos EUA compara eventual investida contra Taiwan à invasão da Ucrânia pela Rússia. Dissuadir a China de um ataque é uma das razões por que é importante que Putin \"pague um preço caro por sua barbárie\", diz.",
          "content": "1 de 4 Presidente americano, Joe Biden, durante evento em Tóquio nesta segunda (23) — Foto: Jonathan Ernst/REUTERS\nO presidente americano, Joe Biden , afirmou nesta segunda-feira (23), durante visita ao Japão, que os Estados Unidos interviriam milita... [4103 chars]",
          "url": "https://g1.globo.com/mundo/noticia/2022/05/23/biden-promete-defender-taiwan-militarmente-de-ataque-da-china.ghtml",
          "image": "https://s2.glbimg.com/17WEBuMG-q2W9o84iOiQdfl_uyI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/U/i/Mkcon5R6Krh8k6SBrFBg/2022-05-23t081411z-1437314447-rc2vcu9dx5hy-rtrmadp-3-usa-biden-asia-economy.jpg",
          "publishedAt": "2022-05-23T10:41:15Z",
          "source": {
            "name": "Globo",
            "url": "https://g1.globo.com"
          }
        }
    ],
    async postLike(idNot:string,idUser:any){
      return await axios.post(`${ambiente.apiUrl}/feed/acao?idNot=${idNot}&idUser=${idUser}&like=1`)
    },
    async postDislike(idNot:string,idUser:any){
      return await axios.post(`${ambiente.apiUrl}/feed/acao?idNot=${idNot}&idUser=${idUser}&dislike=1`)
    },
    async getAcoes(idNot:string,idUser:any){
      return await axios.get(`${ambiente.apiUrl}/feed/getAcao?idNot=${idNot}&idUser=${idUser}`)
    }
}