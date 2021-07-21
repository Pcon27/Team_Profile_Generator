const internCard = (data) =>

// `<!-- Intern Card -->
`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="name">${data.employeeName}</h5>
  <p class="title">${data.role}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="ID">ID: ${data.employeeID}</li>
  <li class="Office">${data.school}</li>
  <li class="Email">${data.employeeEmail}</li>
</ul>
</div>`

module.exports = internCard;