function submitEmail(event) {
  const API_URL = "https://api.sendgrid.com/v3/marketing/contacts";
  const NEWSLETTER_ID = "328b3f49-b814-4379-b2e9-b54cd01138cc";
  const API_KEY = "";

  const prepSub = function (email) {
    return JSON.stringify({
      list_ids: [NEWSLETTER_ID],
      contacts: [
        {
          email,
        },
      ],
    });
  };

  const { value: email } = document.querySelector("#email2");
  const form = document.querySelector("form.subscribe-form");
  const loading = document.querySelector("#form-loader");
  const formLoaded = document.querySelector("#form-loaded");
  const formErrored = document.querySelector("#form-errored");

  form.classList.add("hidden");
  loading.classList.remove("hidden");

  const fetchCall = fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${API_KEY}`,
    },
    body: prepSub(email),
  });

  fetchCall
    .then(function (resp) {
      loading.classList.add("hidden");
      formLoaded.classList.remove("hidden");
      formErrored.classList.add("hidden");
    })
    .catch(function (rej) {
      form.classList.remove("hidden");
      loading.classList.add("hidden");
      formLoaded.classList.add("hidden");
      formLoaded.classList.remove("hidden");
    });

  return false;
}

function submitContactUs(event) {
  event.preventDefault();
  alert("The form was submitted");

  const API_URL = "https://api.sendgrid.com/v3/mail/send";
  const NEWSLETTER_ID = "328b3f49-b814-4379-b2e9-b54cd01138cc";
  const API_KEY =
    "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";

  const prepSub = function (email) {
    return JSON.stringify({
      to: [{ email: email }],
      from: { email: "test@example.com" },
      subject: "Sending with SendGrid is Fun",
      content: [
        {
          type: "text/plain",
          value: "and easy to do anywhere, even with cURL",
        },
      ],
    });
  };

  const { value: email } = document.querySelector("#email_address");
  const form = document.querySelector("form.contactus-form");
  const loading = document.querySelector("#form-loader");
  const formLoaded = document.querySelector("#form-loaded");
  const formErrored = document.querySelector("#form-errored");

  form.classList.add("hidden");
  loading.classList.remove("hidden");

  const fetchCall = fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    data: prepSub(email),
  });

  fetchCall
    .then(function (resp) {
      console.log("back from send grid");
      console.log(resp);
      loading.classList.add("hidden");
      formLoaded.classList.remove("hidden");
      formErrored.classList.add("hidden");
    })
    .catch(function (rej) {
      form.classList.remove("hidden");
      loading.classList.add("hidden");
      formLoaded.classList.add("hidden");
      formLoaded.classList.remove("hidden");
    });

  return false;
}
