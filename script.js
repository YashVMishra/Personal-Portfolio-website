// console.log("Script running...")
// document.querySelector('.cross').style.display = 'none';
// document.querySelector('.hamburger').addEventListener("click", () => {
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     if(document.querySelector('.sidebar').classList.contains('sidebarGo')) {
//         document.querySelector('.ham').style.display = 'inline'
//         document.querySelector('.cross').style.display = 'none'
//     }
//     else {
//         document.querySelector('.cross').style.display = 'none'
//         setTimeout(() => {
//             document.querySelector('.ham').style.display = 'inline'
//         },300);  
//     }


// })

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const hamIcon = document.querySelector('.ham');
    const crossIcon = document.querySelector('.cross');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('hide');
        hamIcon.classList.toggle('hide');
        crossIcon.classList.toggle('hide');
    });
});
