// export function addStudentAPI(student) {
//   return fetch("http://localhost:3000/students", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(student)
//   });
// }


export async function addStudentAPI(student) {
  try {
    const response = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    });
    return await response.json();
  } catch (error) {
    console.error("Помилка при додаванні студента:", error);
  }
}