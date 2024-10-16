function fillForm(user) {
  console.log("fillForm called with user:", user);

  const titleField = document.querySelector('input[name="title"]:checked'); // For the selected title (radio button)
  const nameField = document.getElementById("name");
  const maidenNameField = document.getElementById("maidenName");
  const dobField = document.getElementById("dob");
  const emailField = document.getElementById("email");
  const clientRefField = document.getElementById("clientRef");
  const applicationField = document.getElementById("application");
  const buildingNumberField = document.getElementById("buildingNumber");
  const buildingNameField = document.getElementById("buildingName");
  const streetNameField = document.getElementById("streetName");
  const townField = document.getElementById("town");
  const stateField = document.getElementById("state");
  const countryField = document.getElementById("country");
  const applicationTypeField = document.querySelector(
    'input[name="applicationType"]:checked'
  );

  if (nameField) nameField.value = `${user.firstName} ${user.lastName}` || "";
  if (maidenNameField) maidenNameField.value = user.maidenName || "";
  if (dobField) dobField.value = user.debtor1DateOfBirth || "";
  if (emailField) emailField.value = user.emailAddress || "";
  if (clientRefField) clientRefField.value = user.emailAddress || "";
  if (applicationField) applicationField.value = user.age || "";
  if (buildingNumberField) buildingNumberField.value = user.buildingNumber || "";
  if (buildingNameField) buildingNameField.value = user.age || "";
  if (streetNameField) streetNameField.value = user.streetName || "";
  if (townField) townField.value = user.postTown || "";
  if (stateField) stateField.value = user.state || "";
  if (countryField) countryField.value = user.country || "";
  if (applicationTypeField) applicationTypeField.value = user.age || "";
}

window.fillForm = fillForm;
