const form =
  document.getElementById("contact-form");

const successMessage =
  document.getElementById("success-message");

if(form) {

  form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const formData = new FormData(form);

    const object =
      Object.fromEntries(formData);

    const json =
      JSON.stringify(object);

    try {

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },

          body: json
        }
      );

      const result =
        await response.json();

      if(result.success) {

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

}

const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  }, {
    threshold: 0.2
  });

document
  .querySelectorAll(".fade-up, .feature-card")
  .forEach((el) => {

    observer.observe(el);

  });

window.addEventListener("load", () => {

  const reviewSlides =
    document.querySelectorAll(".review-slide");

  let currentReview = 0;

  setInterval(() => {

    reviewSlides[currentReview]
      .classList.remove("active");

    currentReview++;

    if(currentReview >= reviewSlides.length) {

      currentReview = 0;

    }

    reviewSlides[currentReview]
      .classList.add("active");

  }, 5000);

});

const codeButton =
  document.getElementById("code-button");

if(codeButton) {

  codeButton.addEventListener("click", () => {

    const code =
      document.getElementById("secret-code").value;

    if(code === "WESLEY") {

      window.location.href =
        "wesley.html";

    } else {

  document.getElementById("code-message")
    .innerText = "Invalid code";

}

  });

}
