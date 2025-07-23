export function addStudentAPI(student) {
  return fetch("http://localhost:3000/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
}
