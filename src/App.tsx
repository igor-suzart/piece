
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
import { useEffect } from 'react';

setupIonicReact();
const App: React.FC = (props) => {
  var local = window.location
  // useEffect(() => {
  //   console.log('====================================');
  //   console.log(local);
  //   console.log('====================================');
  // });
  // componentDidMount(){}
  return (
    <IonApp>
    <IonReactRouter>
        <Route exact path="/login">
          <Login />
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
    </IonReactRouter>
    {local.pathname !== '/login' && local.pathname != '/'
    ? 
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="feed" target='/feed'>
          <IonIcon icon={newspaperOutline}></IonIcon>
          {/* <IonLabel>Notícias</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="pesquisa">
          <IonIcon icon={searchOutline}></IonIcon>
          {/* <IonLabel>Pesquisa</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="add">
          <IonIcon icon={addCircle}></IonIcon>
          {/* <IonLabel>Adicionar</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="votar">
          <IonIcon icon={trailSignOutline}></IonIcon>
          {/* <IonLabel>votar</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="conf">
          <IonIcon icon={personCircle}></IonIcon>
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
