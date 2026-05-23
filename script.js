const form = document.getElementById("contact-form");

const successMessage =
  document.getElementById("success-message");

form.addEventListener("submit", async function(e) {

  e.preventDefault();

  const formData = new FormData(form);

  formData.append("_captcha", "false");

  try {

    const response = await fetch(
      "https://formsubmit.co/ajax/bangburgerstf@gmail.com",
      {
        method: "POST",
        body: formData
      }
    );

    if(response.ok) {

      successMessage.innerText =
        "🍔 Message sent successfully!";

      form.reset();

    } else {

      successMessage.innerText =
        "Something went wrong.";

    }

  } catch(error) {

    successMessage.innerText =
      "Error sending message.";

  }

});
