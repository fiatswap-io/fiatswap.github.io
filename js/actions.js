function submitEmail(event) {
  const API_URL = "https://api.sendgrid.com/v3/marketing/contacts";
  const NEWSLETTER_ID = "328b3f49-b814-4379-b2e9-b54cd01138cc";
  const API_KEY =
    "Bearer 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";

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
      authorization: API_KEY,
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
