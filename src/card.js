const card = (employee) => {
  let info = "";
  switch (employee.getRole()) {
    case "Manager":
      info = "Office Number: " + employee.officeNumber;
      break;

    case "Engineer":
      info = `GitHub: <a href= "https://github.com/${employee.github}"> Github: ${employee.github} </a> `;
      break;

    case "Intern":
      info = "School: " + employee.school;
      break;
  }
  return `
  <div class="col-md-6 col-lg-4">
  <div class="card">
    <div class="card-header">
      <h2>${employee.name}</h2>
      <h3><i class="fas"></i> ${employee.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${employee.email}">${
    employee.email
  }</a></li>
      <li class="list-group-item"> ${info}
      </li>
    </ul>
  </div>
</div>
  `;
};

module.exports = card;
