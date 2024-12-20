// Function to fetch GitHub profile based on username
function fetchProfile() {
    const username = document.getElementById("username").value; // Get the username input value
    const profileElement = document.getElementById('profile'); // Where the profile will be displayed

    // Check if username is entered
    if (!username) {
        alert('Please enter a username');
        return;
    }

    // Fetch the GitHub user profile using GitHub API
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json(); // Parse the response JSON
        })
        .then(profileData => {
            // Call the function to display the profile data
            displayProfile(profileData);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            profileElement.innerHTML = `<p style="color:red;">User not found or an error occurred. Please try again.</p>`;
        });
}

// Function to display the fetched GitHub profile
function displayProfile(profileData) {
    const profileElement = document.getElementById('profile');
    profileElement.innerHTML = `
        <h2>${profileData.login}</h2>
        <img src="${profileData.avatar_url}" alt="${profileData.login}'s Avatar" style="width:100px; height:100px; border-radius:50%">
        <p><strong>Name:</strong> ${profileData.name || 'N/A'}</p>
        <p><strong>Location:</strong> ${profileData.location || 'N/A'}</p>
        <p><strong>Bio:</strong> ${profileData.bio || 'N/A'}</p>
        <p><strong>Followers:</strong> ${profileData.followers}</p>
        <p><strong>Following:</strong> ${profileData.following}</p>
        <p><strong>Public Repos:</strong> ${profileData.public_repos}</p>
        <p><a href="${profileData.html_url}" target="_blank">View Profile on GitHub</a></p>
    `;
}
