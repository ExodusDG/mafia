var blockH = document.querySelector('.headerProductVisible').offsetHeight;
document.querySelector('.headerProductVisible').setAttribute('style', 'height: ' + 840 + 'px');

document.querySelector('.headerProductVisibleMask button').addEventListener("click", e=> {
    document.querySelector('.headerProductVisible').setAttribute('style', 'height: ' + blockH + 'px')
    document.querySelector('.headerProductVisibleMask').setAttribute('style', 'display: none')
})