import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Menu from './components/Menu';
import Page from './pages/Page';
import AddPedidos from './pages/AddPedidos/AddPedidos';

import RegisterCustomer from './pages/customers/Customer';
import CustomerList from './pages/customerList/CustomerList';
import ProductList from './pages/productList/ProductList';
import AddProduct from './pages/addProduct/AddProduct';
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
import './theme/variables.css';


const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/Login" component={Login} exact={true} />
          <Route path='/addpedidos' component={AddPedidos} exact={true} />
          <Redirect to="/Login" />
          <IonSplitPane contentId="main">
            <Menu />
            <Route path="/page" exact={true} />
                <Route path="/login" component={Login} exact />
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                < Menu />
                <Route path="/page" component={Page} exact>
                </Route>
          </IonSplitPane>
          
              <Route path="/customers" component={RegisterCustomer} exact />
              <Route path="/customerList" component={CustomerList} exact />
              <Route path="/productList" component={ProductList} exact />
              <Route path="/addProduct" component={AddProduct} exact />
              {/* <Route path="/page/:name"> */}
              {/* <Login /> */}
              {/* </Route> */}

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
