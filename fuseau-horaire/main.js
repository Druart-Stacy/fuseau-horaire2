import {  useEffect } from 'preact/hooks';
import './style.scss';  // Assurez-vous d'importer le fichier SCSS ici

export function App() {
  useEffect(() => {
    // Votre code JavaScript
  }, []);

  return (
    <>
      <h1>Fuseau Horaire v2</h1>
      <div>
        <h2>Heures actuelles</h2>
        <p>USA : {new Date(Date.now() - 7 * 60 * 60 * 1000).toLocaleString()}</p>
        <p>Islande : {new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleString()}</p>
        <p>Russie : {new Date(Date.now() + 1 * 60 * 60 * 1000).toLocaleString()}</p>
        <p>Bruxelles : {new Date(Date.now()).toLocaleString()}</p>
        <p>Tokyo : {new Date(Date.now() + 9 * 60 * 60 * 1000).toLocaleString()}</p>
      </div>
      <div>
        <h2>Date actuelle</h2>
        <p>Jour de la semaine : <span id="weekday"></span></p>
        <p>Jour du mois : <span id="dayOfMonth"></span></p>
        <p>Mois : <span id="month"></span></p>
      </div>
      <p>
        <a href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app" target="_blank">
          create-preact
        </a>
      </p>
    </>
  );
}
