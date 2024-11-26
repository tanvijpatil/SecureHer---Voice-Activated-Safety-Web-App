// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support Speech Recognition.');
} else {
    // Initialize SpeechRecognition API
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    // DOM elements
    const recordBtn = document.getElementById('record-btn');
    const stopBtn = document.getElementById('stop-btn');
    const submitBtn = document.getElementById('submit-btn');
    const recognizedTextElement = document.getElementById('recognized-text');

    // Start recognition
    recordBtn.addEventListener('click', function () {
        recognition.start();
        recordBtn.disabled = true;
        stopBtn.disabled = false;
        submitBtn.disabled = true;
        recognizedTextElement.textContent = 'Listening...';
    });

    // Stop recognition
    stopBtn.addEventListener('click', function () {
        recognition.stop();
        recordBtn.disabled = false;
        stopBtn.disabled = true;
        // Enable the submit button if some text is recognized
        if (recognizedTextElement.textContent && recognizedTextElement.textContent !== 'Listening...') {
            submitBtn.disabled = false;
        }
    });

    // Handle speech recognition results
    recognition.onresult = function (event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        recognizedTextElement.textContent = transcript.trim();
    };

    // Handle errors
    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
        recognizedTextElement.textContent = 'Error: ' + event.error;
    };

    submitBtn.addEventListener('click', function () {
        const confirmed = confirm('Do you want to submit the command?');
        if (confirmed) {
            alert('Command submitted successfully!');
            window.location.href = 'contact.html';
        } else {
            alert('Please input the command again.');
            recognizedTextElement.textContent = 'Recognized text will appear here...';
            submitBtn.disabled = true;
        }
    });
}
