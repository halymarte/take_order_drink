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
//import './CustomerList.css';
import { Link } from "react-router-dom";
//interface LoginProps {}

interface LoginProps {
    id: string;
    description: string;
    prices: string;
  }
const productList: LoginProps[] = [
    
    {id: '1', description: 'Budweiser', prices: '100'},
    {id: '2', description: 'Heineken', prices: '150'},
    {id: '3', description: 'Cristian', prices: '200'},
    {id: '4', description: 'Yanjing', prices: '120'},
    {id: '5', description: 'Skol', prices: '100'},
    {id: '6', description: 'Snow', prices: '130'},
    {id: '7', description: 'Tsingtao', prices: '250'},
  ];
const ProductList: React.FC = () => {
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
          <IonTitle>Listado de Producto</IonTitle>
         
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton expand="block" size="large">
          <IonIcon slot="start" ios={addCircleOutline} md={addCircleSharp} />
          <Link style={{color: 'white', textDecoration:'none'}} to="/addProduct">Crear Producto </Link>
          
        </IonButton>
        <IonList>

            {
                productList.map((item, index) => {
                    return (
                        <IonButton key={index} expand="block" size="large"   onClick={handleTekeOrder}> { item.description + ' ' + item.prices} </IonButton>
                    );
                })
            }
            
        </IonList>
          <br />
      </IonContent>
    </IonPage>
  );
};

export default ProductList;

