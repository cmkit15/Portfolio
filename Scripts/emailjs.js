const btn = document.getElementById('sendButton');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'sending...';

    const serviceID = 'service_p4f9gf5';
    const templateID = 'template_l9ns9kh';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            Swal.fire(
                'Good news',
                'Your email has been sent',
                'success'
            )
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('message').value = "";
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
})