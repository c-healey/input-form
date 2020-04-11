const validEmail = (email) => {
  console.log("validEmail");
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validName = (name) => {
  console.log("validName");
  var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  return re.test(name);
};
const validPassword = (password) => {
  var re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
  return re.test(password);
};
document.querySelector("#email").addEventListener("change", (e) => {
  if (!validEmail(e.value)) {
    document.querySelector(".erroremail").classList.toggle("hide");
  }
});
document.querySelector("#password").addEventListener("change", (e) => {
  if (!validPassword(e.value)) {
    document.querySelector(".errorpassword").classList.toggle("hide");
  }
});
document.querySelector(".btn-signup").addEventListener("click", (e) => {
  e.preventDefault();
  const formFields = [
    {
      elem: document.querySelector("#first-name"),
      validate: validName,
      elError: document.querySelector(".errorfname"),
    },
    {
      elem: document.querySelector("#last-name"),
      validate: validName,
      elError: document.querySelector(".errorfname"),
    },
    {
      elem: document.querySelector("#email"),
      validate: validEmail,
      elError: document.querySelector(".erroremail"),
    },
    {
      elem: document.querySelector("#password"),
      validate: validPassword,
      elError: document.querySelector(".errorpassword"),
    },
  ];
  formFields.forEach((item) => {
    if (!item.validate(item.elem.value)) {
      item.elError.classList.toggle("hide");
    }
  });
});
