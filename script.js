const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
    if(e.target.classList.contains('fa-delete-left') || e.target.value=='delete'){
        display.value=display.value.slice(0,-1);    
    }
    else if (e.target.value == "clear") {
      display.value = "";
    } else if (e.target.value == "=") {
      try {
        if(display.value==''){
        }else{
          const result = eval(display.value);
          display.value = result;
        }

      } catch {
        display.value = "Error!";
        setTimeout(()=>{
          display.value=''
        },1000)
      }
    }else {
      display.value += e.target.value;
    }
  });
});


