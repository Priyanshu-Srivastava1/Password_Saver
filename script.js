document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('password-form');
    const passwordList = document.getElementById('password-list');

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const website = document.getElementById('website').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        addPassword(website, username, password);
        alert('Password saved successfully!'); // Pop-up confirmation
        passwordForm.reset();
    });

    function addPassword(website, username, password) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${website}</strong> (${username}) <span>${password}</span>
                        <button class="delete-btn">Delete</button>`;

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this password?')) { // Confirmation pop-up
                li.remove();
            }
        });

        passwordList.appendChild(li);
    }
});
