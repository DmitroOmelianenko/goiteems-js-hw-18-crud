export function updateStudentAPI(id, student) {
  return fetch(`http://localhost:3000/students/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
}
