let isDOBOpen = false;

const settingsCogEl = document.getElementById('settings-icon');
const settingContentEl = document.getElementById('settingContent');
const toggleDateOfBirth = () =>{

    if (isDOBOpen){
        settingContentEl.classList.add("hide");
    }else{
        settingContentEl.classList.remove("hide");
    }

    isDOBOpen = !isDOBOpen;
};

settingsCogEl.addEventListener("click", toggleDateOfBirth);