$(function()
{
    $('#specialTwo').hide();
    $('#specialImgTwo').hide();
}
);

var img=document.getElementsByClassName('foodMenuPiece');
img[1].style.display='none';
img[2].style.display='none';
img[3].style.display='none';
img[4].style.display='none';
img[5].style.display='none';

var hideMenu=document.getElementById('viewMenu');
hideMenu.style.display='none';

var showForm=document.getElementsByClassName('orderFoodMenu');
showForm[0].addEventListener('click', showOrderForm)
showForm[1].addEventListener('click', showOrderForm)
showForm[2].addEventListener('click', showOrderForm)
showForm[3].addEventListener('click', showOrderForm)
showForm[4].addEventListener('click', showOrderForm)
showForm[5].addEventListener('click', showOrderForm)

function showOrderForm()
{
    window.location='/order.html'
}


function getRiceMeal()
{
    let outputName = '';
    let outputPrice= '';
    let drinkName='';
    let drinkPrice='';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Rice and Vegies')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<h2>${meal.Price}</h2>`
            }

            else if(meal.Name=='Fanta and Capsekes')
            {
                drinkName += `<h2>${meal.Name}</h2>
                `;

                drinkPrice += `<h2>${meal.Price}</h2>`
            }
           
            
        });
        document.getElementById('sauceName').innerHTML=outputName;
        document.getElementById('saucePrice').innerHTML=outputPrice;
        document.getElementById('drinkName').innerHTML=drinkName;
        document.getElementById('drinkPrice').innerHTML=drinkPrice;

    })
}

getRiceMeal();

function getBreakfastMeal()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Eggs, Sausage and Toast')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<h2>${meal.Price}</h2>`
            }       
        });
        document.getElementById('sauceOneName').innerHTML=outputName;
        document.getElementById('sauceOnePrice').innerHTML=outputPrice;
    })
}

getBreakfastMeal();

function getBreakfastMeal2()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Breakfast Combo')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<h2>${meal.Price}</h2>`
            }            
        });
        document.getElementById('sauceTwoName').innerHTML=outputName;
        document.getElementById('sauceTwoPrice').innerHTML=outputPrice;
    })
}

getBreakfastMeal2();

function getLunchMeal()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Meat Burger')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<h2>${meal.Price}</h2>`
            }            
        });
        document.getElementById('sauceThreeName').innerHTML=outputName;
        document.getElementById('sauceThreePrice').innerHTML=outputPrice;
    })
}

getLunchMeal();

function getLunchMeal2()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Chips masala and Chicken')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<h2>${meal.Price}</h2>`
            }
        });
        document.getElementById('sauceFourName').innerHTML=outputName;
        document.getElementById('sauceFourPrice').innerHTML=outputPrice;
    })
}

getLunchMeal2();

function getSalads()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Mexican Salad')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<h2>${meal.Price}</h2>`
            }    
        });
        document.getElementById('sauceFiveName').innerHTML=outputName;
        document.getElementById('sauceFivePrice').innerHTML=outputPrice;
    })
}

getSalads();


function getDrinks()
{
    let outputName = '';
    let outputPrice= '';
    fetch('http://127.0.0.1:3000/menu',{
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((data)=>{
        data.forEach(meal => {
            if(meal.Name=='Mixed Sodas')
            {
                outputName += `<h2>${meal.Name}</h2>
                `;

                outputPrice += `<h2>${meal.Price}</h2>`
            }    
        });
        document.getElementById('sauceSixName').innerHTML=outputName;
        document.getElementById('sauceSixPrice').innerHTML=outputPrice;
    })
}

getDrinks();

var clickImgTwo=document.getElementById('sauceTwoName');
clickImgTwo.addEventListener('click', changeImg);

function changeImg()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodTwo').show(500);

        }
    )
}

var onMouseLeave=document.getElementById('sauceTwoName');
onMouseLeave.addEventListener('mouseleave', changeBackImg);

function changeBackImg()
{
    $(function()
        {
            $('#menuFoodTwo').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

var clickImgThree=document.getElementById('sauceThreeName');
clickImgThree.addEventListener('click', changeImg2);

function changeImg2()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodThree').show(500);

        }
    )
}

var onMouseLeave2=document.getElementById('sauceThreeName');
onMouseLeave2.addEventListener('mouseleave', changeBackImg2);

function changeBackImg2()
{
    $(function()
        {
            $('#menuFoodThree').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

var clickImgFour=document.getElementById('sauceFourName');
clickImgFour.addEventListener('click', changeImg3);

function changeImg3()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodFour').show(500);

        }
    )
}

var onMouseLeave3=document.getElementById('sauceFourName');
onMouseLeave3.addEventListener('mouseleave', changeBackImg3);

function changeBackImg3()
{
    $(function()
        {
            $('#menuFoodFour').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

var clickImgFive=document.getElementById('sauceFiveName');
clickImgFive.addEventListener('click', changeImg4);

function changeImg4()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodFive').show(500);

        }
    )
}

var onMouseLeave4=document.getElementById('sauceFiveName');
onMouseLeave4.addEventListener('mouseleave', changeBackImg4);

function changeBackImg4()
{
    $(function()
        {
            $('#menuFoodFive').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

var clickImgSix=document.getElementById('sauceSixName');
clickImgSix.addEventListener('click', changeImg5);

function changeImg5()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodSix').show(500);

        }
    )
}

var onMouseLeave5= document.getElementById('sauceSixName');
onMouseLeave5.addEventListener('mouseleave', changeBackImg5);

function changeBackImg5()
{
    $(function()
        {
            $('#menuFoodSix').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

