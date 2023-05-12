import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import Pagination from 'react-bootstrap/Pagination';



function App() {

  const [todos, settodos] = useState([]);

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
        {todos.slice(0, 10).map(todo => {
          return (
            <Card className="" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text>
                  {todo.body}
                </Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          )
        })}
        <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
      </div>



    </div>
  );
}

export default App;
