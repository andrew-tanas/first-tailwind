let checkMode = true;

setMode();

if(localStorage.theme === "dark" ||(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)){
    document.getElementById('dark-button').innerHTML = 'light mode'
    checkMode = false;
}


document.getElementById('dark-button').addEventListener('click',function(){
    if(checkMode){
        //dark mode
        localStorage.theme = 'dark';
        this.innerHTML = 'light mode'
        checkMode = false;
    }
    else{
        //light mode
        localStorage.theme = 'light';
        this.innerHTML = 'dark mode'
        checkMode = true
    }
    setMode();

})

function setMode(){
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
          (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
      );
}