import db from "./firebase";

function Student(props) {
  //   db.collection("students").doc(props.student.studentName);
  return (
    <div>
      <li>{props.studentName}</li>
    </div>
  );
}

export default Student;
