const managerCard = (data) =>

// `<!-- Manager Card -->
    `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="name">${data.employeeName}</h5>
          <p class="title">${data.role}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="ID">ID: ${data.employeeID}</li>
          <li class="Office">Office: ${data.office}</li>
          <a href="${data.employeeEmail}" class="card-link">${data.employeeEmail}</a>
        </ul>
      </div>`

module.exports = managerCard;