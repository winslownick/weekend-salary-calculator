document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("employee-form");
    const tableBody = document.getElementById("employee-list");
    const totalCostElement = document.getElementById("total-cost");
    const footer = document.getElementById("footer");
  
    let totalMonthlyCost = 0;
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const idNumber = document.getElementById("id-number").value;
      const jobTitle = document.getElementById("job-title").value;
      const annualSalary = parseFloat(document.getElementById("annual-salary").value);
  
      const monthlySalary = annualSalary / 12;
      totalMonthlyCost += monthlySalary;
  
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>$${annualSalary.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
      tableBody.appendChild(newRow);
  
      totalCostElement.textContent = `$${totalMonthlyCost.toFixed(2)}`;
  
      if (totalMonthlyCost > 20000) {
        footer.classList.add("over-budget");
      }
  
      form.reset();
    });
  
    tableBody.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-btn")) {
        const row = event.target.closest("tr");
        const salaryCell = row.querySelector("td:nth-child(5)");
        const salary = parseFloat(salaryCell.textContent.replace("$", ""));
        totalMonthlyCost -= salary / 12;
        totalCostElement.textContent = `$${totalMonthlyCost.toFixed(2)}`;
  
        if (totalMonthlyCost <= 20000) {
          footer.classList.remove("over-budget");
        }
  
        row.remove();
      }
    });
  });
