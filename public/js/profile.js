const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#employee-name').value.trim();
    const manager = document.querySelector('#employee-manager').value.trim();
    const description = document.querySelector('#role-description').value.trim();
    const salary = document.querySelector('#employee-salary').value.trim();

    if ( name && manager && description && salary) {
        const response = await fetch (`/models/user`, {
            method: 'POST',
            body: JSON.stringify({ name, manager, description, salary}),
            headers: { 'content-type': '', }, 
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert( ' Did not add employee');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id');

        const response = await fetch (`/model/user`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert (' Failed to remove employee');
        }
    }
};

document
    .querySelector('.new-employee-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.employee-list')
    .addEventListener('click', delButtonHandler);