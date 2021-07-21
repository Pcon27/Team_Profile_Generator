const engineerCard = (data) =>

`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="name">${data.employeeName}</h5>
  <p class="title">${data.employeeRole}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="ID">ID: ${data.employeeID}</li>
  <a href="${data.employeeEmail}" class="card-link">Another link</a>
  <a href="https://github.com/${data.office}" class="card-link">Card link</a>
  
</ul>
</div>`

module.exports = engineerCard;