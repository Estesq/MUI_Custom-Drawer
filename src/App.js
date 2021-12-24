import './App.css';
import TemporaryDrawer from './components/Sidebar/Sidebar';
import ColorToggleButton from './components/Toggle/Toggle'
import GroupedButtons from './components/Inputbutton/Inputbutton';
import LinearDeterminate from './components/ProgressBar/ProgressBar';
import CustomizedSwitches from './components/Switch/Switch'
import PieChartComp from './components/Donut/Donut'

import DonutChart from 'react-donut-chart';
//things I would never do:

function App() {
  return (
    <div className="App">
      {/* <TemporaryDrawer />                 */}
      {/* <LinearDeterminate className="progressbar" /> */}
      {/* <ColorToggleButton /> */}
      {/* <CustomizedSwitches11 /> */}
      {/* <GroupedButtons /> */}
    <PieChartComp />
    </div>
  );
}

export default App;
