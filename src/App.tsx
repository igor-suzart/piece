
import { Redirect, Route, useLocation  } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact,IonTabBar, IonTabButton, IonTabs,IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {newspaperOutline,searchOutline,addCircle,trailSignOutline,personCircle} from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import "./tabs.scss"
import './theme/variables.css';
import Home from './pages/Home';
import Login from './pages/login/login'
import Avatar from './pages/avatar/avatar';
import Feed from './pages/feed/feed';
import Post from './pages/feed/post/post'
import Votar from './pages/feed/votar'
import Perfil from './pages/perfil/perfil'
import { useEffect, useState } from 'react';
import login from './shared/services/login';
import Search from './pages/feed/search/search';

setupIonicReact();
const App: React.FC = (props) => {
  //var local = window.location
  var [local,setLocal] = useState(window.location)
  var [userData,setUD] = useState({id: '',foto: '',nome: ''})
  var [showBar,setSB] = useState(false)
  const mudeLocal = (meuBool:any) =>{
    setSB(showBar = meuBool)
  }
   useEffect( () => {
     console.log(local)
     if(local.pathname !== '/login' && local.pathname !== '/' && local.pathname !== '/avatar'){
       setSB(showBar = true)
     } else {
       setSB(showBar = false)
     }
    if(userData['id'] == ''){
      const func = async () => {
        let id = localStorage.getItem('id')
        let resultado = await login.getUsuario(id)
        setUD(userData = resultado.data.linhas[0]) 
      }
      func()
    } else {
    }
  },[local]);
  // componentDidMount(){}
  return (
    <IonApp>
    <IonReactRouter>
        <Route exact path="/login">
          <Login changeRoute={mudeLocal} />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/avatar'>
          <Avatar />
        </Route>
        <Route exact path='/feed'>
          <Feed />
        </Route>
        <Route exact path='/post'>
          <Post />
        </Route>
        <Route exact path='/votar'>
          <Votar />
        </Route>
        <Route exact path='/perfil'>
          <Perfil />
        </Route>
        <Route exact path='/pesquisa'>
          <Search />
        </Route>
    </IonReactRouter>
    {(local.pathname !== '/login' && local.pathname != '/' && local.pathname != '/avatar') || showBar
    ? 
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar slot="bottom" color="primary">
        <IonTabButton tab="feed" href='/feed'>
          <IonIcon icon={newspaperOutline}></IonIcon>
          {/* <IonLabel>Notícias</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="pesquisa" href='/pesquisa'>
          <IonIcon icon={searchOutline}></IonIcon>
          {/* <IonLabel>Pesquisa</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="add" href='/post'>
          <IonIcon icon={addCircle}></IonIcon>
          {/* <IonLabel>Adicionar</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="votar" href='/votar'>
          <IonIcon icon={trailSignOutline}></IonIcon>
          {/* <IonLabel>votar</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="conf" href='/perfil'>
          
          {userData["id"] !== ''
          ? <img style={{width: 28,height: 28}} src={`/assets/avatares/${userData["foto"]}.svg`} alt="user img" /> 
          : <IonIcon icon={personCircle}></IonIcon>}
          
          {/* <IonLabel>conf</IonLabel> */}
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
    : 
    ''} 
  </IonApp>
  )

};

export default App;
