async function signUpFormHandler(event) {
    event.prevetDefault();

    const username = $('#username-signup').value.trim()
    const email = $('#email-signup').value.trim();
    const password = $('#password-signup').value.trim()

    if (username && email && password) {
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response);
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText)
        }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();

    const email = $('#email-login').value.trim();
    const password = $('#password-login').value.trim();

    if (email && password) {
        const response = await fetch(('/api/users/login'), {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response);

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

$('.login-form').addEventListener('submit', loginFormHandler);