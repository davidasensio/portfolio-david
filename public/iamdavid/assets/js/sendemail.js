// Function for send form data to email
function sendEmail(formData) {
    console.log("Sending email...")

    var name = formData.name.value
    var from = formData.email.value
    var subject = formData.subject.value
    var body = formData.message.value

    /*Email.send({
        Host: "smtp.mailtrap.io",
        Username: "<Mailtrap username>",
        Password: "<Mailtrap password>",
        To: 'davidasensio81@gmail.com',
        From: from,
        Subject: subject,
        Body: subject + ' - ' + body
    }).then(
        message => alert(message)
    );*/

    // Token version (Encrypt data at https://www.smtpjs.com/)
    // Enable less secure apps at https://myaccount.google.com/u/0/lesssecureapps?pli=1
    // Token of handysp...@gmail.com is 34029381-1dac-45d7-9eef-3355080b3607
    Email.send({
        SecureToken: "34029381-1dac-45d7-9eef-3355080b3607",
        To: 'davidasensio81@gmail.com',
        From: from,
        Subject: subject,
        Body: subject + ' - ' + body
    }).then(
        message => alert(message)
    );

}