let affirmation = document.querySelector("#button");
affirmation.addEventListener("click", showAffirmation);

function showAffirmation() {
  let apiKey = "334ff5a8425o317bf171aa4a1a6b3b0t";
  let context = "My name is Cecilia. Be short! And be nice and anticapitalist";
  let prompt = "I am trying to be accepted into medical school: Generate a short positive affirmation to help me study and face the exams and long years of studying.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //affirmation.innerHTML = "Generating a joke for you.. please wait";
  axios.get(apiUrl).then(displayAffirmation);
}

function displayAffirmation(response) {
  console.log(response.data.answer);

  new Typewriter("#the-affirmation", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
