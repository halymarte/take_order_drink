import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp,
   mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, 
   trashSharp, logOutSharp, logOutOutline, personSharp, personOutline, keyOutline, keySharp } from 'ionicons/icons';
import './Menu.css';
import React from 'react';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Perfil',
    url: '/page/Inbox',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Cambiar contraseña',
    url: '/page/Outbox',
    iosIcon: keyOutline,
    mdIcon: keySharp
  },
  {
    title: 'Log out',
    url: '/login',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp
  },
  
];


const Menu: React.FC = () => {
  const location = useLocation();

  const handleCreateCustomer = () => {

    console.log('hello');
    window.location.href = "./login"
  };
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>HandyBusiness</IonListHeader>
          <IonNote>Haly Marte</IonNote>
          {/* {appPages.map((appPage, index) => {
            return ( */}
              <IonMenuToggle  autoHide={false}>
                {/* {console.log(appPage.url)} */}
                {/* <a href="#" onClick={handleCreateCustomer}> log out</a>
                <IonItem  routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem> */}

<IonItem> 
  <IonButton expand="block" size="large" onClick={handleCreateCustomer}>
              <IonIcon slot="start"  />
                CREAR CLIENTE
              </IonButton>
              </IonItem>
               
              </IonMenuToggle>
            {/* );
          })} */}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
