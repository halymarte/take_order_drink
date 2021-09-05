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
// import { useAuthConnect } from "@ionic-enterprise/auth-react";
import { useParams } from 'react-router';
import './login.css';
//interface LoginProps {}

const Login: React.FC = () => {
  const router = useIonRouter();
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleLogin = () => {
    //login();
  };  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="vertical-center">
          <div className="center">
           <img src="../assets/imagen/login.png" width={'20%'}/>
          </div>   
        </div>
      
          <br />
          <IonItem>
            <IonInput value={user} placeholder="Nombre de usuario" onIonChange={e => setUser(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <IonItem>
            <IonInput value={password} placeholder="**********" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <br />
          <br />
        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Login;

