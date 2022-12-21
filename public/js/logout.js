const logout = async () => {
    const response = await fetch ('/model/user', {
        method: 'POST',
        headers: { 'Content-Type': ''},
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);

