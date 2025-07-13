document.getElementById("userForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    id: form.id.value,
    email: form.email.value,
    phone: form.phone.value,
    age: form.age.value,
  };

  const response = await fetch("https://hr09cjakbc.execute-api.eu-north-1.amazonaws.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  alert("Submitted Successfully!");
});
