# Form Autofiller Extension

## Overview

**Form Autofiller** is a browser extension that automates the process of filling forms using data retrieved from the IE Hub API. The extension prompts the user for a `Customer ID`, fetches data from the API, and populates fields in the active form. This tool is particularly useful for users handling customer information and forms in the IE Hub creditor portal.

## Features

- Automatically retrieves customer data using a `Customer ID`.
- Requires a valid `session ID`, obtained from logging into the IE Hub creditor portal, to authenticate API requests.
- Fills form fields on any webpage with matching input fields.

## How It Works

1. **Session ID**: To access customer data, the extension requires a valid `session ID`. This session ID is obtained by logging into the IE Hub creditor portal. It is used to authenticate API requests.
2. **Popup Interaction**: In the extension popup, click the **Fill Form** button. You will be prompted to enter a `Customer ID`.
3. **API Request**: The extension sends a request to the API with the `Customer ID` and the `session ID` to retrieve the customer data.
4. **Autofill**: The data fetched from the API is used to automatically populate the form fields in the current active tab.

## Prerequisites

- **Session ID**: You need a valid `session ID` to access the customer data. Log in to the [IE Hub creditor portal](https://www.iehubportal.com/) to get this session ID.
- **Form Fields**: The target form must have input fields with matching IDs or names for the autofill to work correctly.

## Installation

1. Clone or download this repository:
    ```bash
    git clone https://github.com/your-repo/form-autofiller-extension.git
    ```
2. Open your browser and navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the extension's folder.

## Configuration

### `manifest.json`

```json
{
  "manifest_version": 3,
  "name": "Form Autofiller",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "action": {
    "default_popup": "popup.html"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"], 
      "js": ["content.js"]
    }
  ]
}


Step 1: Obtain a Session ID

    Log in to the IE Hub creditor portal.
    Open your browser's Developer Tools (usually accessible via F12 or right-click > "Inspect").
    Go to the Network tab and log in to the portal.
    Find a request made to the API and look for the sessionId in the request headers or body.
    Copy the sessionId.

Step 2: Update the Session ID in the Extension

    Open the popup.js file.
    Locate the following line:

    javascript

    const sessionID = "YOUR_SESSION_ID_HERE";

    Replace "YOUR_SESSION_ID_HERE" with the session ID you copied from the IE Hub portal.

Step 3: Use the Extension

    Click on the extension icon in the browser and press Fill Form.
    Enter the Customer ID when prompted.
    The form fields on the active tab will automatically be filled with the customer's data.

License

This project is licensed under the MIT License.