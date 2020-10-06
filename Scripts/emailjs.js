const btn = document.getElementById('button');


document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        //let name = document.getElementById('name').value;
        //let email = document.getElementById('email').value;
        //let phone = document.getElementById('phone').value;
        //let message = document.getElementById('message').value;

        //if (name == "" || email == "" || phone == "" || message == "") {
        //    alert("You must fill out the entire form.");
        //    return false;
        //} else {
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
        // }            
        //}
    })

