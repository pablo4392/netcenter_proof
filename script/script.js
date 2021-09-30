const showMessage = () => {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const mail = document.getElementById('mail').value

    if (name === "" || phone ==="" || mail === "") {
        swal({
            title: "Please complete all fields required",
            icon: "warning"
        })
    } else {
        swal({
            title: "Thanks for your preference",
            text: `Hello ${name}, in the next few days we will contact you at ${phone}, and you will receive a confirmation email at ${mail}`,
            button: "Continue",
            icon: "success"
        });
        document.getElementById('contactUsForm').reset()
    }
}
