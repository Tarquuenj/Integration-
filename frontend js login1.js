function validateFormData(data) {
    return data.username && data.password; 
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!validateFormData(data)) {
        alert('Please fill in all required fields.');
        return;
    }

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    alert((await response.json()).message);
});
