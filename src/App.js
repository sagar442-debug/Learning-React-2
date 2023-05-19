// import axios from "axios";
// import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import './App.css'
import Comp1 from "./Component/Comp1";
import Comp3 from './Component/Comp3';





function App() {
  const name = useSelector(state=> state.app.name)
  // const perPageItem = 5;
  // const [todos, settodos] = useState([]);
  // const [page, setPage] = useState(1)

  // const handleShowMore = (type) => {
  //   if (type === "prev") {
  //     setPage((prevState) => prevState - 1)
  //   } else {
  //     setPage((prevState) => prevState + 1)

  //   }
  // }

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/")
  //     .then((success) => {
  //       settodos(success.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, []);


  return (
    <div className="app" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px'
    }}>
      {/* <p>{name}</p> */}
      {/* <div className="please">
        {todos.slice((page - 1) * perPageItem, perPageItem * page).map(todo => {
          return (
            <Card className="" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{todo.id}</Card.Title>
                <Card.Text>
                  {todo.body}
                </Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          )
        })}

        <div style={{
          marginTop: "20px",
        }}>
          <Button disabled={page === 1} onClick={()=>handleShowMore("prev")}>Prev</Button>
          <Button disabled={page=== 20} onClick={()=>handleShowMore("next")}>Next</Button>
        </div>


      </div> */}

      <Comp3/>

    </div>
  );
}

export default App;
