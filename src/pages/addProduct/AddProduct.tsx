import React, { useEffect,useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonRouter,
  IonItemDivider,
  IonItem,
  IonInput,
  IonThumbnail,
  IonImg,
  IonIcon,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp,
  mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, 
  trashSharp, warningOutline, warningSharp, personSharp, personOutline, keyOutline, keySharp } from 'ionicons/icons';
// import { useAuthConnect } from "@ionic-enterprise/auth-react";
import { useParams } from 'react-router';
//interface LoginProps {}

const AddCustomer: React.FC = () => {
  const router = useIonRouter();
  const [description, setDescription] = useState<string>();
  const [prices, setPrices] = useState<string>();

  const handleRegister = () => {   	
     // window.location.href = "/page"
  };  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/page" />
          </IonButtons>
          <IonTitle>Registrar Producto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <br />
          <IonItem>
                <IonInput value={description} placeholder="Descripcion" onIonChange={e => setDescription(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <IonItem>
                <IonInput value={prices} placeholder="Precio" onIonChange={e => setPrices(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
              <br />
        <IonButton expand="block"  onClick={handleRegister}>
          Registra
        </IonButton>
        
        {/* {error && (
          <>
            <div>error</div>
            <div>{JSON.stringify(error)}</div>
          </>
        )} */}
      </IonContent>
    </IonPage>
  );
};

export default AddCustomer;

