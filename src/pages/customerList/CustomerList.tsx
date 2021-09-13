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
} from "@ionic/react";
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp,
  mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, 
  trashSharp, warningOutline, warningSharp, personSharp, personOutline, keyOutline, keySharp } from 'ionicons/icons';
// import { useAuthConnect } from "@ionic-enterprise/auth-react";
import { useParams } from 'react-router';
import './CustomerList.css';
//interface LoginProps {}

interface LoginProps {
    id: string;
    name: string;
    last_name: string;
    address: string;
  }
const customers: LoginProps[] = [
    
    {id: '1', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '2', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '3', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '4', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '5', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '6', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '7', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '8', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '9', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '10', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
    {id: '11', name: 'haly', last_name: 'Marte', address: 'Estancia Nueva'},
  
  ];
const CustomerList: React.FC = () => {
  const router = useIonRouter();
  

  const handleTekeOrder = () => {
      window.location.href = "/page"
  };  

  const showCustomer = () => {
    window.location.href = "/page"
    };  
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listado de Clientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>

            {
                customers.map((val, index) => {
                    return (
                    <IonItem key={index}>
                        <IonButton expand="block" size="large"  onClick={handleTekeOrder}>Here there is customers </IonButton>
                    </IonItem>
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

