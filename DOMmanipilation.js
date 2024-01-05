let nameErrEl= document.getElementById("nameErrMsg");
let nameEl=document.getElementById("name");

let emailErrEl=document.getElementById("emailErrMsg");
let emailEl=document.getElementById("email");

let numberErrEl=document.getElementById("numberErrMSg");
let numberEl=document.getElementById("number");

let fromMsgEl=document.getElementById("formEl");

let formData = {
    name: "",
    email: "",
    number:"",
  };

nameEl.addEventListener("change" , function(event){
    if (event.target.value === "") {
        nameErrEl.textContent = "Required*";
      } else {
        nameErrEl.textContent = "";
      }
    
      formData.name = event.target.value;
});
emailEl.addEventListener("change" , function(event){
    if (event.target.value === "") {
        emailErrEl.textContent = "Required*";
      } else {
        emailErrEl.textContent = "";
      }
    
      formData.email = event.target.value;
});

function validateFormData(formData) {
    let {name, email, number} = formData;
    if (name === "") {
      nameErrMsgEl.textContent = "Required*";
    }
    if (email === ""){
      emailErrMsgEl.textContent = "Required*";
    }
    if(number === ""){
        numberErrEl.textContent="Required*";
    }
  }
  
function submitFormData(formData) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
      },
      body: JSON.stringify(formData)
    }
};
fromMsgEl.addEventListener("submit", function(event){
    validateFormData(formData);
    submitFormData(formData);
  });