import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography'
import { LineChart } from './LineChart';

function App() {
  return (
    <div className="App">
    <Typography variant="h2" color="initial">Example Line Chart</Typography>
    <div style={{
      width:'80vw',
      height:'30vh'
    }}>
    <LineChart/>
    </div>
    </div>
  );
}

export default App;
