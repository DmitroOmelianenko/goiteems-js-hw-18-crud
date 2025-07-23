// export function updateStudentAPI(id, student) {
//   return fetch(`http://localhost:3000/students/${id}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(student)
//   });
// }


export async function updateStudentAPI(id, student) {
  try {
    const response = await fetch(`http://localhost:3000/students/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    });
    return await response.json();
  } catch (error) {
    console.error("Помилка при оновленні студента:", error);
  }
}