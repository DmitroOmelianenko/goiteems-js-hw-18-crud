import { getStudentsAPI } from "../api/getstudents.js";
import { addStudentAPI } from "../api/addstudent.js";
import { updateStudentAPI } from "../api/updatestudent.js";
import { deleteStudentAPI } from "../api/deletestudent.js";

const tableBody = document.querySelector("#students-table tbody");
const form = document.getElementById("add-student-form");
const getBtn = document.getElementById("get-students-btn");

let editId = null;

function showStudents(students) {
  tableBody.innerHTML = "";
  students.forEach(student => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills.join(", ")}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled ? "Так" : "Ні"}</td>
      <td>
        <button class="edit" data-id="${student.id}">Оновити</button>
        <button class="delete" data-id="${student.id}">Видалити</button>
      </td>
    `;

    tableBody.appendChild(tr);
  });
}

function loadStudents() {
  getStudentsAPI().then(showStudents);
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const student = {
    name: form.name.value,
    age: +form.age.value,
    course: form.course.value,
    skills: form.skills.value.split(",").map(s => s.trim()),
    email: form.email.value,
    isEnrolled: form.isEnrolled.checked
  };

  if (editId) {
    updateStudentAPI(editId, student).then(() => {
      editId = null;
      form.reset();
      loadStudents();
    });
  } else {
    addStudentAPI(student).then(() => {
      form.reset();
      loadStudents();
    });
  }
});

tableBody.addEventListener("click", e => {
  const id = e.target.dataset.id;
  if (!id) return;

  if (e.target.classList.contains("edit")) {
    getStudentsAPI().then(data => {
      const student = data.find(s => s.id == id);
      if (!student) return;

      form.name.value = student.name;
      form.age.value = student.age;
      form.course.value = student.course;
      form.skills.value = student.skills.join(", ");
      form.email.value = student.email;
      form.isEnrolled.checked = student.isEnrolled;

      editId = student.id;
    });
  }

  if (e.target.classList.contains("delete")) {
    deleteStudentAPI(id).then(() => {
      if (editId == id) {
        form.reset();
        editId = null;
      }
      loadStudents();
    });
  }
});

getBtn.addEventListener("click", loadStudents);
