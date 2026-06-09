const student = {
    name: "varun",
    age: 20,
    id:520
};
function displayStudentInfo() {
    console.log("Student Name: " + student.name);
    console.log("Student Age: " + student.age);
    console.log("Student ID: " + student.id);
}
displayStudentInfo();
const displayInfoArrow = () => {
    console.log("Student Name: " + student.name);
    console.log("Student Age: " + student.age);
    console.log("Student ID: " + student.id );
};
displayInfoArrow();
