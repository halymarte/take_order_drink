import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonLabel } from '@ionic/react'
import React from 'react';
import { } from '@ionic/react';
import { bagAdd, heartCircleOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom';

const Item: React.FC = () => {
    return (
        <IonCard>
            <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px'
            }}>
                <Link to="/">
                    <IonIcon  size="large" ios={heartCircleOutline} color="danger" />
                </Link>
            </div>
            <IonCardHeader>
                <IonCardSubtitle>Wisky</IonCardSubtitle>
                <IonCardTitle >Blue Label</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSek8QmOZfL9onKk4jFo9LVFDrGfYadN4HLaA&usqp=CAU" alt="ron" />
                <IonLabel slot="center"><strong>Price: </strong>$15,000.00</IonLabel>
                <IonButton expand="block" size="default" shape="round" fill="outline">
                    <IonIcon ios={bagAdd} />
                </IonButton>
            </IonCardContent>
        </IonCard>
    )
}
export default Item;