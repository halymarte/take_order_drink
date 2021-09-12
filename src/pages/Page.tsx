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
import { archiveOutline, archiveSharp, arrowRedoOutline, arrowRedoSharp, syncOutline, syncSharp } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { Link } from 'react-router-dom';
const Page: React.FC = () => {
  const { name } = useParams<{ name: string; }>();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
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
        <br />
        <br />
        <br />
        <IonButton expand="block" size="large">
          <IonIcon slot="start" ios={arrowRedoOutline} md={arrowRedoSharp} />
            <Link style={{color: 'white', textDecoration:'none'}} to="/addpedidos"> TOMAR PEDIDO </Link> 
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
