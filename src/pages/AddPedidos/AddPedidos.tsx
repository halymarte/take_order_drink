import React, { useState } from 'react';
import {
    IonBackButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';

import Item from '../../components/Item';
import { arrowBack, backspace } from 'ionicons/icons';



const AddPedidos: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>

                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Add Pedigos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="6" >
                            <Item />
                        </IonCol>
                        <IonCol size="6" >
                            <Item />
                        </IonCol>
                        <IonCol size="6" >
                            <Item />
                        </IonCol>
                        <IonCol size="6" >
                            <Item />
                        </IonCol>
                        <IonCol size="6" >
                            <Item />
                        </IonCol>
                        <IonCol size="6" >
                            <Item />
                        </IonCol>
                        <IonCol size="6" >
                            <Item />
                        </IonCol>
                        <IonCol size="6" >
                            <Item />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>


        </IonPage>
    );
};

export default AddPedidos;