(() => {
  classHelpapp.mainGreeting();

  classHelpapp.module1.saySomething('sup');

  function myFunc() {
    var theHeading = documents.querySelector('h1');

    theHeading.textContent = classHelpapp.mainMessage;
  }

  myFunc();

})
