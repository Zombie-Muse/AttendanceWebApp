import { useEffect, useState } from "react";
import Student from "./Student";
// import db from "./firebase";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   db.collection("students").onSnapshot((snapshot) => {
  //     setStudents(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         student: doc.data().student,
  //       }))
  //     );
  //   });
  // }, []);

  // click button to add a student
  const addStudentForm = () => {
    setIsOpen(!isOpen);
  };

  // after button is clicked, show a form to add student info
  const addStudent = () => {
    setStudents([...students, input]);
    setInput("");
  };
  // take student info and save it to db

  return (
    <div className="flex-1 p-10 text-2xl font-bold">
      <h1>Students</h1>
      <div>
        <p>Click to add student</p>
        <button
          onClick={addStudentForm}
          className={
            isOpen
              ? "bg-gray-300 hover:bg-gray-700 font-bold py-2 px-4 rounded-full"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          }>
          {isOpen ? "Close" : "Add Student"}
        </button>
        <div className={isOpen ? " items-center" : " items-center hidden"}>
          <form>
            <label>Student Name</label>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              disabled={!input}
              onClick={addStudent}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add
            </button>
          </form>
        </div>
        <div className=" items-center">
          <ul>
            {students.map((student) => (
              <li>
                <Student key={student.id} studentName={student.studentName} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Students;
