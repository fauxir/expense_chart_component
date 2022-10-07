import './App.css';
import MainComp from './Components/MainComp';
import TopComp from './Components/TopComp';

function App() {
  return (
    <div className='bg-linen-500 h-screen w-screen flex flex-col items-center justify-center'>
      <TopComp />
      <MainComp />
    </div>
  );
}

export default App;
