import './App.css';
import { ColoredCardsList } from './ColoredCards';
import { OverviewChart } from './OverviewChart';
import { ProjectsList } from './Projects';
import { StatusCardsList } from './StatusCards';


//admin dashboard - day4 task
//preview link - https://startbootstrap.com/previews/sb-admin-2

function App() {
  return (
    <div className="App">
      <h1 className='title'>Dashboard</h1>
      <StatusCardsList />
      <OverviewChart />
      <ProjectsList />
      <ColoredCardsList />
    </div>
  );
}

export default App;
