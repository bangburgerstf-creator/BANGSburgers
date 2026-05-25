const form =
  document.getElementById("contact-form");

const successMessage =
  document.getElementById("success-message") || {
    innerText: ""
  };

if(form) {

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

      if(response.status === 200) {

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
