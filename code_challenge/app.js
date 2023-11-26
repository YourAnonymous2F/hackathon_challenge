function notificationPopUp() {
    const popup = document.getElementById("notification-m");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
function openAdminPopUp() {
    const popup = document.getElementById("adminpopup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
function toggleArrow() {
    const infodrop = document.getElementById("register-drop");
    const arrowButton = document.querySelector('.arrow');
    infodrop.classList.toggle('show')
    arrowButton.style.transform = arrowButton.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
}

const setup = document.querySelectorAll('.setup')
const itemshow = document.querySelectorAll(".info")

setup.forEach((element, index) => {
    element.addEventListener('click', () => {
    itemshow.forEach(item => {
        item.classList.remove('info-visible')
    })
    setup.forEach(item => {
        item.classList.remove('active')
    })
    itemshow[index].classList.add('info-visible') 
    setup[index].classList.add('active') 
    })
})
// function showItem(){
//     itemshow.forEach((element, index) => {
//         itemshow[index].classList.add('info-visible')
//     });
// }