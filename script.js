const rating = document.querySelector(".content");
const comment = document.querySelector(".thank-you");
const submit = document.querySelector(".submit");
submit.addEventListener("click", function(){
  const rate = document.querySelector("input[type='radio']:checked").value;
  const spanRate = document.querySelector(".rate-score");
  rating.style.display = "none";
  comment.classList.remove("visible");
  console.log("It is working");
  spanRate.innerHTML = rate;   
});  

