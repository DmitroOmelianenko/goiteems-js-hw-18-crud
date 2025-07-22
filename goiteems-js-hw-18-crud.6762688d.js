function t(){return fetch("http://localhost:3000/students").then(t=>t.json())}const e=document.querySelector("#students-table tbody"),n=document.getElementById("add-student-form"),l=document.getElementById("get-students-btn");let d=null;function s(t){e.innerHTML="",t.forEach(t=>{let n=document.createElement("tr");n.innerHTML=`
      <td>${t.id}</td>
      <td>${t.name}</td>
      <td>${t.age}</td>
      <td>${t.course}</td>
      <td>${t.skills.join(", ")}</td>
      <td>${t.email}</td>
      <td>${t.isEnrolled?"Так":"Ні"}</td>
      <td>
        <button class="edit" data-id="${t.id}">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button>
        <button class="delete" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
      </td>
    `,e.appendChild(n)})}function a(){t().then(s)}n.addEventListener("submit",t=>{t.preventDefault();let e={name:n.name.value,age:+n.age.value,course:n.course.value,skills:n.skills.value.split(",").map(t=>t.trim()),email:n.email.value,isEnrolled:n.isEnrolled.checked};if(d){var l;(l=d,fetch(`http://localhost:3000/students/${l}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).then(()=>{d=null,n.reset(),a()})}else fetch("http://localhost:3000/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(()=>{n.reset(),a()})}),e.addEventListener("click",e=>{let l=e.target.dataset.id;l&&(e.target.classList.contains("edit")&&t().then(t=>{let e=t.find(t=>t.id==l);e&&(n.name.value=e.name,n.age.value=e.age,n.course.value=e.course,n.skills.value=e.skills.join(", "),n.email.value=e.email,n.isEnrolled.checked=e.isEnrolled,d=e.id)}),e.target.classList.contains("delete")&&fetch(`http://localhost:3000/students/${l}`,{method:"DELETE"}).then(()=>{d==l&&(n.reset(),d=null),a()}))}),l.addEventListener("click",a);
//# sourceMappingURL=goiteems-js-hw-18-crud.6762688d.js.map
