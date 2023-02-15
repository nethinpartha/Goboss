import config from "./config";

export const stripecheckoutservice = {
  stripeservice,
};

async function stripeservice(headers, body) {
  return fetch(`http://localhost:8282/payment`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then((response) => {
      const { status } = response;
      response.json().then((data) => {
        alert(`Your purchase was successful, ${data.email}`);
      });
    })
    .catch((error) => console.log(error));
}
