async function e(){try{let e=await fetch("http://localhost:3000/students");return await e.json()}catch(e){return console.error("Помилка при отриманні студентів:",e),[]}}async function t(e){try{let t=await fetch("http://localhost:3000/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()}catch(e){console.error("Помилка при додаванні студента:",e)}}async function n(e,t){try{let n=await fetch(`http://localhost:3000/students/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return await n.json()}catch(e){console.error("Помилка при оновленні студента:",e)}}async function l(e){try{let t=await fetch(`http://localhost:3000/students/${e}`,{method:"DELETE"});return await t.json()}catch(e){console.error("Помилка при видаленні студента:",e)}}const s=document.querySelector("#students-table tbody"),a=document.getElementById("add-student-form"),d=document.getElementById("get-students-btn");let o=null;function i(e){s.innerHTML="",e.forEach(e=>{let t=document.createElement("tr");t.innerHTML=`
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
    `,s.appendChild(t)})}function r(){e().then(i)}a.addEventListener("submit",e=>{e.preventDefault();let l={name:a.elements.name.value,age:Number(a.elements.age.value),course:a.elements.course.value,skills:a.elements.skills.value.split(",").map(e=>e.trim()),email:a.elements.email.value,isEnrolled:a.elements.isEnrolled?.checked||!1};o?n(o,l).then(()=>{o=null,a.reset(),r()}):t(l).then(()=>{a.reset(),r()})}),s.addEventListener("click",t=>{let n=t.target.dataset.id;t.target.classList.contains("edit")&&e().then(e=>{let t=e.find(e=>e.id==n);a.elements.name.value=t.name,a.elements.age.value=t.age,a.elements.course.value=t.course,a.elements.skills.value=t.skills.join(", "),a.elements.email.value=t.email,a.elements.isEnrolled.checked=t.isEnrolled,o=t.id}),t.target.classList.contains("delete")&&l(n).then(()=>{o==n&&(a.reset(),o=null),r()})}),d.addEventListener("click",r);
//# sourceMappingURL=goiteems-js-hw-18-crud.b685d9dc.js.map
