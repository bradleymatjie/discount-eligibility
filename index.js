function checkEligibility() {
  let age = document.getElementById("age").value;
  let isMember = document.getElementById("member");

  if (Number(age) >= 65) {
    document.getElementById("output").innerHTML = 'You qualify for senior Discount';  
    document.getElementById("output").style.color = "green";
  } else if ((Number(age) >= 18) && (isMember.checked)) {
    document.getElementById("output").innerHTML = 'You qualify for Member Discount';
    document.getElementById("output").style.color = "green";
  } else {
    document.getElementById("output").innerHTML = 'You do not qualify for any Discount';
    document.getElementById("output").style.color = "red";
  }
  

}

const form = document.getElementById("form");

// prevents form reload
form.addEventListener("submit", (e) => {
  e.preventDefault();
})