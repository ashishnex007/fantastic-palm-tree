import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [students, setStudents] = useState([]);

  useEffect(()=>{
      async function getAllStudents(){
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/student/");
          setStudents(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getAllStudents();
  },[]);

  return (
    <>
      {
        students.map((student: any, i)=>{
          return (
            <div key={i}>
              <h1>{student.id}</h1>
              <p>{student.name}</p>
              <p>{student.email}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
