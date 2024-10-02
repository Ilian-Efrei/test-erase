const student = {
    name: "Marie",
    age: 20,
    courses: [],
}
student.age=21
student.grade="A"
student.courses.push("Math","Physics","Chemistry")
const Physics= student.courses.indexOf("Physics")
const Coupe= student.courses.slice(0, 2);

console.log(student)
console.log("L'index est le " + Physics)
console.log("Les 2 premiers éléments de Courses sont : " +Coupe)
console.log(Coupe)
