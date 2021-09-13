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
import './login.css';
//interface LoginProps {}

const Login: React.FC = () => {
  const router = useIonRouter();
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleLogin = () => {
      window.location.href = "/page"
  };  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br/>
        <div className="vertical-center">
          <div className="center">
           <img src="../assets/imagen/login.png" width={'30%'}/>
          </div>   
        </div>
      
          <br />
          <IonItem>
          <IonIcon slot="start" ios={personOutline} md={personSharp} />
            <IonInput value={user} placeholder="Nombre de usuario" onIonChange={e => setUser(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <IonItem>
          <IonIcon slot="start" ios={keyOutline} md={keySharp} />
            <IonInput value={password} type="password" placeholder="**********" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <br />
        <IonButton expand="block"  onClick={handleLogin}>
          Login
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

export default Login;

