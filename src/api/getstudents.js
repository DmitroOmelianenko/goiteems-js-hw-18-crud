// export function getStudentsAPI() {
//   return fetch("http://localhost:3000/students")
//     .then(res => res.json());
// }


export async function getStudentsAPI() {
  try {
    const response = await fetch("http://localhost:3000/students");
    return await response.json();
  } catch (error) {
    console.error("Помилка при отриманні студентів:", error);
    return [];
  }
}