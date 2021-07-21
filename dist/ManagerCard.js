const managerCard = (data) =>

// `<!-- Manager Card -->
    `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="name">${data.name}</h5>
          <p class="title">${data.role}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="ID">ID: ${data.id}</li>
          <li class="Office">Office: ${data.office}</li>
          <li class="Email">${data.email}</li>
        </ul>
      </div>`

module.exports = managerCard;