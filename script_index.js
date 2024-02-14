const submit = document.getElementById("Submit_name");
const changename = document.getElementById("changename");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const feedback = document.getElementById("feedback");
const timeBtn = document.getElementById("timeBtn");
const time_label = document.getElementById("time_label");
submit.onclick = function(event){
  event.preventDefault();
  name1_value = name1.value;
  email_value = email.value;
  feedback_value = feedback.value;
  document.getElementById("changename").textContent = "Welcome " + name1_value + ", This is where I store all my projects.";
  console.log(name1_value);
  console.log(email_value);
  console.log(feedback_value);
}
