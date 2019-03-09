document.getElementsByClassName('homeIcon')[0].addEventListener('click', toHome)
document.getElementsByClassName('footerIcons')[0].addEventListener('click', toInns)
document.getElementsByClassName('footerIcons')[1].addEventListener('click', toMenu)

function toHome()
{
    window.location='/home.html';
}

function toInns()
{
    window.location='/phoneRest.html';
}

function toMenu()
{
    window.location='/phoneMenu.html';
}