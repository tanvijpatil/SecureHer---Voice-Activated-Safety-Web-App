// Function to dynamically add a new contact input field
function addContact() {
    const contactList = document.getElementById("contactList");

    // Create a new contact input group
    const contactGroup = document.createElement("div");
    contactGroup.classList.add("personal-contact");

    // Create "+" button
    const addButton = document.createElement("button");
    addButton.classList.add("add-btn");
    addButton.type = "button";
    addButton.textContent = "+";
    addButton.onclick = addContact;

    // Create input field
    const inputField = document.createElement("input");
    inputField.type = "tel";
    inputField.classList.add("contact-input");
    inputField.placeholder = "+91";

    // Append the button and input to the new contact group
    contactGroup.appendChild(addButton);
    contactGroup.appendChild(inputField);

    // Add the new contact group to the list
    contactList.appendChild(contactGroup);
}

// Form submission event
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Get input values
    const policeContact = document.getElementById("policeContact").value;
    const nirbhayaContact = document.getElementById("nirbhayaContact").value;
    const personalContacts = Array.from(document.querySelectorAll(".contact-input"))
        .map((input) => input.value)
        .filter((value) => value !== ""); // Exclude empty inputs

    console.log({
        policeContact,
        nirbhayaContact,
        personalContacts,
    });

    alert("Contacts saved successfully!");
});
