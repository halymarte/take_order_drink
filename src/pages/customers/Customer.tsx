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
} from "@ionic/react";
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp,
  mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, 
  trashSharp, warningOutline, warningSharp, personSharp, personOutline, keyOutline, keySharp } from 'ionicons/icons';
// import { useAuthConnect } from "@ionic-enterprise/auth-react";
import { useParams } from 'react-router';
//interface LoginProps {}

const RegisterCustomer: React.FC = () => {
  const router = useIonRouter();
  const [shopName, setShopName] = useState<string>();
  const [customerName, setCustomerName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [documentId, setDocumentId] = useState<string>();
  const [address, setAddress] = useState<string>();
  const handleRegister = () => {

    console.log(customerName);   	
     // window.location.href = "/page"
  };  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registrar Cliente</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <br />
          <IonItem>
                <IonInput value={shopName} placeholder="Nombre Comercial" onIonChange={e => setShopName(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <IonItem>
                <IonInput value={customerName} placeholder="Nombre" onIonChange={e => setCustomerName(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <IonItem>
                <IonInput value={lastName} placeholder="Apellido" onIonChange={e => setLastName(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <IonItem>
                <IonInput value={documentId} placeholder="Cédula" onIonChange={e => setDocumentId(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <IonItem>
                <IonInput value={address} placeholder="Dirección" onIonChange={e => setAddress(e.detail.value!)}></IonInput>
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

export default RegisterCustomer;

