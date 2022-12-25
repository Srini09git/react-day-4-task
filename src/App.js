import './App.css';
import { ColoredCardsList } from './ColoredCards';
import { OverviewChart } from './OverviewChart';
import { ProjectsList } from './Projects';
import { StatusCardsList } from './StatusCards';

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
