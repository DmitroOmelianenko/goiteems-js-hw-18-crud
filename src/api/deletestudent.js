// export function deleteStudentAPI(id) {
//   return fetch(`http://localhost:3000/students/${id}`, {
//     method: "DELETE"
//   });
// }


export async function deleteStudentAPI(id) {
  try {
    const response = await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE"
    });
    return await response.json();
  } catch (error) {
    console.error("Помилка при видаленні студента:", error);
  }
}
