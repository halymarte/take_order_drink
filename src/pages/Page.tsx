import { 
  IonButton, 
  IonButtons, 
  IonContent,
  IonHeader, 
  IonIcon, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import { archiveOutline, archiveSharp, arrowRedoOutline, arrowRedoSharp, listOutline, listSharp,
   syncOutline, syncSharp, addCircleOutline, addCircleSharp, bagAddOutline, bagAddSharp } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';

import { Link } from 'react-router-dom';
import './Page.css';


const Page: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

  const handleCustomerList = () => {
    window.location.href = "/customerList"
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton  />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br />
        <IonButton expand="block" size="large">
          <IonIcon slot="start" ios={arrowRedoOutline} md={arrowRedoSharp} />
            <Link style={{color: 'white', textDecoration:'none'}} to="/addpedidos"> TOMAR PEDIDO </Link> 
        </IonButton>
        <IonButton expand="block" size="large" onClick={handleCustomerList}>
        <IonIcon slot="start" ios={listOutline}  md={listSharp} />
           CLIENTES
        </IonButton>
        <IonButton expand="block" size="large">
          <IonIcon slot="start" ios={listOutline} md={listSharp} />
            <Link style={{color: 'white', textDecoration:'none'}} to="/productList"> PRODUCTOS </Link> 
        </IonButton>
        <IonButton expand="block" size="large">
          <IonIcon slot="start" ios={archiveOutline} md={archiveSharp} />
          REPORTE
        </IonButton>
        <IonButton expand="block" size="large">
          <IonIcon slot="start" ios={syncOutline} md={syncSharp} />
          SINCRONIZAR
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
