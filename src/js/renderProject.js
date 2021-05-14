import styles from './styles.js';
import checkStocksAvailability from './checkStocks.js';
import renderApp from './elements.js';
import eventInit from './events.js';

export default function renderProject() {


   getProjects().catch(error => {
         console.error(error);
      });

      async function getProjects() {
      const response = await fetch('projects.json');
      const json = await response.json();

      json.projects.map(project => {
         renderApp(project);
         styles();
         eventInit(project);
         checkStocksAvailability();
      });
   }
}