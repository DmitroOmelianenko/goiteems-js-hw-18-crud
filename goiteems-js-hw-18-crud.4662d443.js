function e(){return fetch("http://localhost:3000/students").then(e=>e.json())}const t=document.querySelector("#students-table tbody"),n=document.getElementById("add-student-form"),l=document.getElementById("get-students-btn");let s=null;function d(e){t.innerHTML="",e.forEach(e=>{let n=document.createElement("tr");n.innerHTML=`
      <td>${e.id}</td>
      <td>${e.name}</td>
      <td>${e.age}</td>
      <td>${e.course}</td>
      <td>${e.skills.join(", ")}</td>
      <td>${e.email}</td>
      <td>${e.isEnrolled?"Так":"Ні"}</td>
      <td>
        <button class="edit" data-id="${e.id}">\u{270F}\u{FE0F}</button>
        <button class="delete" data-id="${e.id}">\u{1F5D1}\u{FE0F}</button>
      </td>
    `,t.appendChild(n)})}function a(){e().then(d)}n.addEventListener("submit",e=>{e.preventDefault();let t={name:n.elements.name.value,age:Number(n.elements.age.value),course:n.elements.course.value,skills:n.elements.skills.value.split(",").map(e=>e.trim()),email:n.elements.email.value,isEnrolled:n.elements.isEnrolled?.checked||!1};if(s){var l;(l=s,fetch(`http://localhost:3000/students/${l}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).then(()=>{s=null,n.reset(),a()})}else fetch("http://localhost:3000/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(()=>{n.reset(),a()})}),t.addEventListener("click",t=>{let l=t.target.dataset.id;t.target.classList.contains("edit")&&e().then(e=>{let t=e.find(e=>e.id==l);n.elements.name.value=t.name,n.elements.age.value=t.age,n.elements.course.value=t.course,n.elements.skills.value=t.skills.join(", "),n.elements.email.value=t.email,n.elements.isEnrolled.checked=t.isEnrolled,s=t.id}),t.target.classList.contains("delete")&&fetch(`http://localhost:3000/students/${l}`,{method:"DELETE"}).then(()=>{s==l&&(n.reset(),s=null),a()})}),l.addEventListener("click",a);
//# sourceMappingURL=goiteems-js-hw-18-crud.4662d443.js.map
