import React, { useEffect, useState } from "react";
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
  IonList,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp,
  mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, addCircleOutline, addCircleSharp,
  trashSharp, warningOutline, warningSharp, personSharp, personOutline, keyOutline, keySharp } from 'ionicons/icons';
// import { useAuthConnect } from "@ionic-enterprise/auth-react";
import { useParams } from 'react-router';
import './CustomerList.css';
import { Link } from "react-router-dom";
//interface LoginProps {}

interface LoginProps {
    id: string;
    name: string;
    last_name: string;
    address: string;
  }
const customers: LoginProps[] = [
    
    {id: '1', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '2', name: 'Cristopher', last_name: 'Almonte', address: 'Estancia Nueva'},
    {id: '3', name: 'Cristian', last_name: 'Santana', address: 'Estancia Nueva'},
    {id: '4', name: 'Jean', last_name: 'Luciano', address: 'Estancia Nueva'},
    {id: '5', name: 'Jose', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '6', name: 'Hancel', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '7', name: 'Marco', last_name: 'Mana', address: 'Estancia Nueva'},
  ];
const CustomerList: React.FC = () => {
  const router = useIonRouter();
  

  const handleTekeOrder = () => {
      window.location.href = "/page"
  };  

  const showCustomer = () => {
    window.location.href = "/page"
    };  

    const handleCreateCustomer = () => {
      window.location.href = "/customers"
    };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/page" />
          </IonButtons>
          <IonTitle>Listado de Clientes</IonTitle>
         
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand="block" size="large">
          <IonIcon slot="start" ios={addCircleOutline} md={addCircleSharp} />
          <Link style={{color: 'white', textDecoration:'none'}} to="/customers">Crear Cliente </Link>
          
        </IonButton>
        <IonList>

            {
                customers.map((item, index) => {
                    return (
                        <IonButton key={index} expand="block" size="large"   onClick={handleTekeOrder}> { item.name + ' ' + item.last_name} </IonButton>
                    );
                })
            }
            
        </IonList>
          <br />
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;

