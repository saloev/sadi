(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzyKlIvHTtnuf1y0yPptfqaRNZ0q6CSe0",
    authDomain: "saloev-66689.firebaseapp.com",
    databaseURL: "https://saloev-66689.firebaseio.com",
    projectId: "saloev-66689",
    storageBucket: "saloev-66689.appspot.com",
    messagingSenderId: "1006300627793"
  };
  firebase.initializeApp(config);


  const db = firebase.firestore();

  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });

  const getForm = document.querySelector('form');
  const allInputs = document.querySelectorAll('input[autocomplete="on"], textarea');
  const status = document.querySelector('.form__status__message');

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      firstName: allInputs[0].value,
      email: allInputs[1].value,
      message: allInputs[2].value,
    }).then(function(docRef) {
      status.textContent = 'Message send';
      status.classList.remove('hidden');
      setTimeout(() => status.classList.add('hidden'), 3000);
    })
    .catch(function(error) {
      status.innerHTML = 'Message don\'t send <br> try again';
      status.classList.remove('hidden');
      setTimeout(() => status.classList.add('hidden'), 3000);
      console.error("Error adding document: ", error);
    });

   _.forEach(allInputs, node => node.value = '');
  };


  getForm.addEventListener('submit', sendMessage);
}());