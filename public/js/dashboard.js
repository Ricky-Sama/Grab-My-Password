// dashboard.js
const addWebsiteForm = document.getElementById('add-website-form');

addWebsiteForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        websiteName: document.getElementById('website_name').value.trim(),
        websiteURL: document.getElementById('website_url').value.trim(),
        username: document.getElementById('username').value.trim(),
        password: document.getElementById('password').value.trim()
    };

    const response = await fetch('/api/websites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        // Refresh the page to see the updated list or navigate somewhere
        location.reload();
    } else {
        alert('Failed to add the website.');
    }
});
