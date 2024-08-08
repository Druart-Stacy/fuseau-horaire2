import { useEffect } from 'preact/hooks';
import './perso.css';  

export function App() {
  useEffect(() => {
    // Your JavaScript code to update the date elements
    const updateDateElements = () => {
      const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
      const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

      const now = new Date();
      document.getElementById('weekday').innerText = daysOfWeek[now.getDay()];
      document.getElementById('dayOfMonth').innerText = now.getDate();
      document.getElementById('month').innerText = months[now.getMonth()];
    };

    // Call the function to set initial values
    updateDateElements();
    // Optionally, set an interval to update the values periodically
    const intervalId = setInterval(updateDateElements, 60000); // update every minute

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
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
