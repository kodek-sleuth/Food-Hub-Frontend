var i=0;
var time=3000;
var divs=[]
divs[0]=document.getElementById('firstOne');
divs[1]=document.getElementById('secondOne');
divs[2]=document.getElementById('thirdOne');

function changeDiv()
{
    document.restaurants.id= divs[i];
    if(i<divs.length-1)
    {
        i++;
    }
    else
    {
        i=0;
    }

    setTimeout("changeDiv()", time);
}

window.onload=changeDiv