import { Header, MemberList, Button } from "./components";
import { useNavigate } from "react-router-dom";

import "./app.scss"

const items = [
  {id: 1, name :"pepe", age: 23},
  {id: 12, name :"alex", age: 21},
  {id: 13, name :"jose", age: 22},
  {id: 14, name :"asdf", age: 23},
  {id: 15, name :"cris", age: 22},
  {id: 16, name :"fdsa", age: 24},
  {id: 17, name :"dfdf", age: 25},
  {id: 18, name :"asa", age: 23},
  {id: 19, name :"fdss", age: 22},
  {id: 10, name :"peperere", age: 28},

]


function App() {
  const navigate = useNavigate();

  const handleAddMember = () => {
    navigate(`/new`);
  }

  return (
    <div className="App">
      <Header text="Members"/>
      <div className="content-container">
        <MemberList data={items}/>
        <div className="list-controls">
          <div className="paginate">

          </div>
        <Button text="Add member" onClick={() => handleAddMember()} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
