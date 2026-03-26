const btn = document.getElementById("btn");
const original_text = " Click button ";
const clicked_text="Clicked !";

btn.addEventListener("click", function (){
    btn.classList.toggle('active_state');

    if(btn.textContent == original_text){
        btn.textContent = clicked_text;
    }
    else{
        btn.textContent = original_text;
    }
});