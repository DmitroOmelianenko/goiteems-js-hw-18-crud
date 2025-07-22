export function deleteStudentAPI(id) {
  return fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE"
  });
}
