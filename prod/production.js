var classHelpapp = {
  mainMessage : "welcome to the app!",

  mainGreeting() {
    console.log('hello! what is life?');
  }
}

classHelpapp.module1 = {
  saySomething(message) {
    console.log(classHelpapp.mainMessage, message, "I'm the second question of life");
  },

  doSomething() {
    console.log("called module1 doSomething function");
  }
}

classHelpapp.module2 = {
  doSomething() {
    console.log('called module1 doSomething function, ye');
  }
}

(() => {
  classHelpapp.mainGreeting();

  classHelpapp.module1.saySomething('sup');

  function myFunc() {
    var theHeading = documents.querySelector('h1');

    theHeading.textContent = classHelpapp.mainMessage;
  }

  myFunc();

})
