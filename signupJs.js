const form = document.getElementById("signupForm");
const errorElement = document.getElementById("error");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorElement.textContent = "";

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Check if passwords match
    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match. Please try again.";
        return;
    }

    const data = {
        username: username,
        email: email,
        password: password,
    };

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            errorElement.textContent = errorData.message || "Signup failed!";
        } else {
            alert("Signup successful!");
            form.reset();
            window.location.href = "speechToText.html"; // Redirect to the next page
        }
    } catch (err) {
        errorElement.textContent = "Error connecting to the server.";
    }
});
