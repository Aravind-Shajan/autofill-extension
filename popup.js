document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fillForm").addEventListener("click", async () => {
    console.log("Fill form button clicked");
    //prompt to ask for customerID
    const customerID = prompt("Please enter the Customer ID:");
    try {
      const user = await fetchUserData(customerID); 
      if (user) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: fillForm, 
            args: [user], 
          });
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
});

//function to fetch user data
async function fetchUserData(customerID) {
  console.log("$$$$$$$userID$$$$$$$ : ", customerID);
  const body = {
    sessionId: "e5f3459d-fab2-4550-aa7d-6b0f50ec9484",
    offset: "0",
    data: {
      id: customerID, 
    },
  };
  try {
    const response = await fetch(
      "https://creditor-dev-api.dynamatix.com/api/Customer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched from API:", data);

    return data.data[0];
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null; 
  }
}

function fillForm(user) {
  console.log("fillForm called with user:", user);

  // Function to convert API date format to YYYY-MM-DD
  function convertApiDateToInputFormat(apiDate) {
    const date = new Date(apiDate);

    // Get year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const apiDate = user.debtor1DateOfBirth;
  const formattedDate = convertApiDateToInputFormat(apiDate);

  const titleField = document.querySelector(
    `input[name="title"][value="${user.customerTitle}"]`
  );
  const nameField = document.getElementById("name");
  const maidenNameField = document.getElementById("maidenName");
  const dobField = document.getElementById("dob");
  const emailField = document.getElementById("email");
  const clientRefField = document.getElementById("clientRef");
  const applicationTypeField = document.querySelector(
    'input[name="applicationType"]'
  ); 
  const buildingNumberField = document.getElementById("buildingNumber");
  const buildingNameField = document.getElementById("buildingName");
  const streetNameField = document.getElementById("streetName");
  const townField = document.getElementById("town");
  const stateField = document.getElementById("state");
  const countryField = document.getElementById("country");

  if (titleField) titleField.checked = true;
  if (nameField)
    nameField.value = `${user.debtor1FirstName} ${user.debtor1LastName}` || "";
  if (maidenNameField) maidenNameField.value = user.maidenName || "";
  if (dobField) dobField.value = formattedDate || "";
  if (emailField) emailField.value = user.emailAddress || "";
  if (clientRefField) clientRefField.value = user.emailAddress || "";
  // Set Application Type based on jointAccount
  if (user.jointAccount === "Y") {
    document.querySelector(
      'input[name="applicationType"][value="Joint"]'
    ).checked = true;
  } else {
    document.querySelector(
      'input[name="applicationType"][value="Single"]'
    ).checked = true;
  }
  if (buildingNumberField)
    buildingNumberField.value = user.buildingNumber || "";
  if (buildingNameField) buildingNameField.value = user.age || "";
  if (streetNameField) streetNameField.value = user.streetName || "";
  if (townField) townField.value = user.postTown || "";
  if (stateField) stateField.value = user.state || "";
  if (countryField) countryField.value = user.country || "";
  if (applicationTypeField) applicationTypeField.value = user.age || "";
}

// Function to convert API date format to YYYY-MM-DD
function convertApiDateToInputFormat(apiDate) {
  const date = new Date(apiDate);

  // Get year, month, and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); 
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
