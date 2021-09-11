import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import { archiveOutline, archiveSharp, arrowRedoOutline, arrowRedoSharp,
   syncOutline, syncSharp, addCircleOutline, addCircleSharp, bagAddOutline, bagAddSharp } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

  const handleCreateCustomer = () => {
    window.location.href = "/customers"
  };

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
        <br/>
        <br/>
        <br/>
        <br/>
        <IonButton expand="block" size="large" onClick={handleCustomerList} >
        <IonIcon slot="start" ios={arrowRedoOutline} md={arrowRedoSharp} />
          TOMAR PEDIDO
        </IonButton>
        <IonButton expand="block" size="large" onClick={handleCreateCustomer}>
        <IonIcon slot="start" ios={addCircleOutline}  md={addCircleSharp} />
          CREAR CLIENTE
        </IonButton>
        <IonButton expand="block" size="large">
        <IonIcon slot="start" ios={bagAddOutline} md={bagAddSharp} />
          CREAR PRODUCTO
        </IonButton>
        <IonButton expand="block" size="large">
        <IonIcon slot="start" ios={archiveOutline} md={archiveSharp} />
          REPORTE
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
