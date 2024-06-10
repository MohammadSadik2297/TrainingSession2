function submitForm() {
  var form = document.getElementById("registrationForm");
  var formData = new FormData(form);
  var formValues = {};
  formData.forEach(function (value, key) {
    formValues[key] = value;
  });
  console.log(formValues);
}
