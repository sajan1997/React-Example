import './App.css';
import Expenses from './components/expenses/Expenses';

function App() {
  const expenses = [
    {id:'e1', title:'Bike Service', amount:1500.23, date: new Date(2021,2,15)},
    {id:'e2', title:'Health Insurance', amount:600.15, date:new Date(2021,2,22)},
    {id:'e3', title:'Doctor', amount:300.55, date:new Date(2021,9,12)}
  ];
  
  return (
    <div >
      <h2>Expense-Tracker</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
