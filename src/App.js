import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'





function App() {
  const perPageItem = 5;
  const [todos, settodos] = useState([]);
  const [page, setPage] = useState(1)

  const handleShowMore = (type) => {
    if (type === "prev") {
      setPage((prevState) => prevState - 1)
    } else {
      setPage((prevState) => prevState + 1)

    }
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((success) => {
        settodos(success.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);


  return (
    <div className="app">
      <div className="please">
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


      </div>



    </div>
  );
}

export default App;
