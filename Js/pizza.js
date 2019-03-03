var grabMenu=document.getElementById('theRealMenu');
grabMenu.style.display='none'

var onClickMenu=document.getElementById('kfcMenuIcon');
onClickMenu.addEventListener('click', showMenu)

function showMenu()
{
    $(function()
        {
            $('#logo').slideUp(500);
            $('.theFoods').slideUp(500);
            $('#search').slideUp(500);
            $('#theRealMenu').slideDown(1000);

        }
    )

}

var onClickClose=document.getElementById('realMenuClear');
onClickClose.addEventListener('click', hideMenu)

function hideMenu()
{
    $(function()
        {
            $('#theRealMenu').slideUp(500);
            $('#logo').slideDown(1000);
            $('.theFoods').slideDown(1000);
            $('#search').slideDown(500);
        }
    )

}


function getKfcMeal()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Chicken Pizza')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<div>${meal.Price}</div>`
            }            
        });
        document.getElementById('firstOrder').innerHTML=outputName;
        document.getElementById('firstPrice').innerHTML=outputPrice;
    })
}

getKfcMeal();

function getThighsMeal()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Meat Pizza')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<div>${meal.Price}</div>`
            }            
        });
        document.getElementById('secondOrder').innerHTML=outputName;
        document.getElementById('secondPrice').innerHTML=outputPrice;
    })
}

getThighsMeal();

function getStreetMeal()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='BBQ Pizza')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<div>${meal.Price}</div>`
            }            
        });
        document.getElementById('thirdOrder').innerHTML=outputName;
        document.getElementById('thirdPrice').innerHTML=outputPrice;
    })
}

getStreetMeal();

function getStreet2Meal()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Tomato Pizza')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<div>${meal.Price}</div>`
            }            
        });
        document.getElementById('fourthOrder').innerHTML=outputName;
        document.getElementById('fourthPrice').innerHTML=outputPrice;
    })
}

getStreet2Meal();

var OrderBtns=document.getElementsByClassName('foodOrder');
OrderBtns[0].addEventListener('click', showOrderDetails)
OrderBtns[1].addEventListener('click', showOrderDetails)
OrderBtns[2].addEventListener('click', showOrderDetails)
OrderBtns[3].addEventListener('click', showOrderDetails)

function showOrderDetails()
{
    window.location='/order.html'
}
