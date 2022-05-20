const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
})

function darkModeButton() {
    if (document.getElementById("darkMode").classList.contains("hidden")) 
    {
        darkModeFormat();

        document.getElementById("lightMode").classList.add("hidden");
        document.getElementById("darkMode").classList.remove("hidden");

        document.getElementById("switchButton").classList.remove("bg-sky-500", "border-black", "shadow-round-b-2");
        document.getElementById("switchButton").classList.add("bg-slate-800", "border-white", "shadow-round-w-2");
        
        darkModeFormat();
    }
    else 
    {
        document.getElementById("darkMode").classList.add("hidden");
        document.getElementById("lightMode").classList.remove("hidden");

        document.getElementById("switchButton").classList.remove("bg-slate-800", "border-white", "shadow-round-w-2");
        document.getElementById("switchButton").classList.add("bg-sky-500", "border-black", "shadow-round-b-2");

    }

}
// darkModeFormat();

function darkModeFormat() {
    if (document.getElementById("mainSection").classList.contains("bg-gray-200"))
    {
        document.getElementById("navMenu").classList.remove("bg-white");
        document.getElementById("navMenu").classList.add("bg-gray-800");
        
        document.getElementById("menuOne").classList.add("card-3");
        document.getElementById("menuTwo").classList.add("card-3");
        document.getElementById("menuThree").classList.add("card-3");
        
        document.getElementById("mainSection").classList.remove("bg-gray-200");
        document.getElementById("mainSection").classList.add("bg-gray-800");
        
        document.getElementById("mainTitle").classList.add("text-green-400");
        document.getElementById("mainSubTitle").classList.add("text-white");
        
        document.querySelector("h4").classList.add("text-white", "border-white");
        document.getElementById("headFour").classList.add("text-white", "border-white");

    }
    else
    {
        document.getElementById("mainSection").classList.remove("bg-gray-800");
        document.getElementById("mainSection").classList.add("bg-gray-200");

    }
}