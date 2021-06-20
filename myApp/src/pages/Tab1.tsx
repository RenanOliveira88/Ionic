import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Meu App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Primeira tab do app</IonTitle>
          </IonToolbar>
        </IonHeader>
        Aqui posso editar como se fosse uma página HTML
        <ExploreContainer name="Pagina 1 do app" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
