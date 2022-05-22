
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const headings = document.querySelectorAll(".heading1");
const buttons = document.querySelectorAll(".btns-group");


let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
    updateButtons();
    updateHeading();
  });
});


prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
    updateButtons();
    updateHeading();
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
