const validEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validName = (name) => {
  var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

  return re.test(name);
};
const validPassword = (password) => {
  var re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
  return re.test(password);
};
const formFields = [
  {
    elem: document.querySelector("#first-name"),
    validate: validName,
    elError: document.querySelector(".errorfname"),
  },
  {
    elem: document.querySelector("#last-name"),
    validate: validName,
    elError: document.querySelector(".errorlname"),
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
  item.elem.addEventListener("change", (e) => {
    let valid = item.validate(e.target.value);

    if (!item.validate(e.target.value)) {
      item.elError.classList.remove("hide");
    } else {
      item.elError.classList.add("hide");
    }
  });
});

document.querySelector(".btn-signup").addEventListener("click", (e) => {
  e.preventDefault();

  formFields.forEach((item) => {
    if (!item.validate(item.elem.value)) {
      item.elError.classList.remove("hide");
    } else {
      item.elError.classList.add("hide");
    }
  });
});
