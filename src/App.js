import './App.css';
import TemporaryDrawer from './components/Sidebar/Sidebar';
import ColorToggleButton from './components/Toggle/Toggle'
// import GroupedButtons from './components/Inputbutton/Inputbutton';
// import LinearDeterminate from './components/ProgressBar/ProgressBar';
import CustomizedSwitches from './components/Switch/Switch'
function App() {
  return (
    <div className="App">
      {/* <TemporaryDrawer />                 */}
      {/* <LinearDeterminate className="progressbar" /> */}
      <ColorToggleButton />
      {/* <CustomizedSwitches /> */}
    </div>
  );
}

export default App;
