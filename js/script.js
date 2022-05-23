const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const headings = document.querySelectorAll(".heading1");
const buttons = document.querySelectorAll(".btns-group");
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const mobilenumber = document.getElementById('mobilenumber');
const donationamount = document.getElementById('amount');
const holdername = document.getElementById('holdername');
const cardnumber = document.getElementById('cardnumber');
const securitycode = document.getElementById('securitycode');
const date = document.getElementById('date');


let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
    updateButtons();
    updateHeading();
    validateInputs();
  });
});


prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
    updateButtons();
    updateHeading();
    validateInputs();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateButtons() {
  buttons.forEach((buttons) => {
    buttons.classList.contains("btns-active") &&
      buttons.classList.remove("btns-active");
  });
  buttons[formStepsNum].classList.add("btns-active");

}

function updateHeading() {
	headings.forEach((headings) => {
		headings.classList.contains("heading-active") &&
		headings.classList.remove("heading-active");
	});
	headings[formStepsNum].classList.add("heading-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

$(document).ready(function(){
    $(".paypal").prop('hidden',false);
    $(".credit_card").prop('hidden',true);
})

$("#paypal").on('click', function(){
    const title1 = document.getElementById('title1');
    title1.style.color = 'white ';
    title1.style.background = '#2DA8C9';
    const title2 = document.getElementById('title2');
    title2.style.color = '#2DA8C9';
    title2.style.background = '#fff';
    $(".paypal").prop('hidden',false);
    $(".credit_card").prop('hidden',true);
})
$("#creditcard").on('click',function(){
    const title1 = document.getElementById('title1');
    title1.style.color = '#2DA8C9 ';
    title1.style.background = '#fff';
    const title2 = document.getElementById('title2');
    title2.style.color = 'white';
    title2.style.background = '#2DA8C9';
    $(".paypal").prop('hidden',true);
    $(".credit_card").prop('hidden',false);
})

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const mobilenumberValue = mobilenumber.value.trim();
  const donationamountValue = amount.value.trim();
  const holdernameValue = holdername.value.trim();
  const cardnumberValue = cardnumber.value.trim();
  const securitycodeValue = securitycode.value.trim();
  const dateValue = date.value.trim();


  if(firstnameValue === '') {
      setError(firstname, 'First name is required');
  }else{
      setSuccess(firstname);
  }
  if(lastnameValue === '') {
    setError(lastname, 'Last name is required');
  } else {
      setSuccess(lastname);
  }

  if(emailValue === '') {
      setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
  }

  if(mobilenumberValue === '') {
      setError(mobilenumber, 'Mobile number is required');
  } else if (mobilenumberValue.length < 10 ) {
      setError(mobilenumber, 'Mobile number must be at least 11 character.')
  } else {
      setSuccess(mobilenumber);
  }

  if(donationamountValue === ''){
    setError(amount, 'Donation amount is required');
  } else{
    setSuccess(amount);
  }
  if(holdernameValue === '') {
    setError(holdername, 'Card holder name is required');
  }else{
    setSuccess(holdername);
  }

  if(cardnumberValue === ''){
    setError(cardnumber, 'Card number is required');
  }else if(cardnumberValue.length < 15 ){
    setError(cardnumber, 'Security code must be at least 15 characters')
  }else{
    setSuccess(cardnumber);
  }
  if(securitycodeValue === ''){
    setError(securitycode, 'Card security code is required');
  } else if(securitycodeValue.length < 8 ){
    setError(securitycode, 'Security code must be at least 8 characters')
  }
  else{
    setSuccess(securitycode);
  }
  if(dateValue === ''){
    setError(date, 'Expiry date is required');
  }else{
    setSuccess(date);
  }
}
