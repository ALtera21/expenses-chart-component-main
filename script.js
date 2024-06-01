fetch("./data.json")
.then(res => res.json())
.then(data =>{
    const barOne = document.querySelector(".bar-1");
    const barTwo = document.querySelector(".bar-2");
    const barThree = document.querySelector(".bar-3");
    const barFour = document.querySelector(".bar-4");
    const barFive = document.querySelector(".bar-5");
    const barSix = document.querySelector(".bar-6");
    const barSeven = document.querySelector(".bar-7");

    const mon = data[0].day;
    const tue = data[1].day;
    const wed = data[2].day;
    const thu = data[3].day;
    const fri = data[4].day;
    const sat = data[5].day;
    const sun = data[6].day;

    const monXpense = data[0].amount;
    const tueXpense = data[1].amount;
    const wedXpense = data[2].amount;
    const thuXpense = data[3].amount;
    const friXpense = data[4].amount;
    const satXpense = data[5].amount;
    const sunXpense = data[6].amount;

    const largest = Math.max(monXpense, tueXpense, wedXpense, thuXpense, friXpense, satXpense, sunXpense);

    const barOneHeight = monXpense / largest * 70;
    const barTwoHeight = tueXpense / largest * 70;
    const barThreeHeight = wedXpense / largest * 70;
    const barFourHeight = thuXpense / largest * 70;
    const barFiveHeight = friXpense / largest * 70;
    const barSixHeight = satXpense / largest * 70;
    const barSevenHeight = sunXpense / largest * 70;
    
    barOne.style.height = (monXpense / largest * 70 + "%");
    barTwo.style.height = (tueXpense / largest * 70 + "%");
    barThree.style.height = (wedXpense / largest * 70 + "%");
    barFour.style.height = (thuXpense / largest * 70 + "%");
    barFive.style.height = (friXpense / largest * 70 + "%");
    barSix.style.height = (satXpense / largest * 70 + "%");
    barSeven.style.height = (sunXpense / largest * 70 + "%");

    if(barOneHeight == 70){
        barOne.style.backgroundColor = "hsl(186, 34%, 60%)"
    }
    else if(barTwoHeight == 70){
        barTwo.style.backgroundColor = "hsl(186, 34%, 60%)"
    }
    else if(barThreeHeight == 70){
        barThree.style.backgroundColor = "hsl(186, 34%, 60%)"
    }
    else if(barFourHeight == 70){
        barFour.style.backgroundColor = "hsl(186, 34%, 60%)"
    }
    else if(barFiveHeight == 70){
        barFive.style.backgroundColor = "hsl(186, 34%, 60%)"
    }
    else if(barSixHeight == 70){
        barSix.style.backgroundColor = "hsl(186, 34%, 60%)"
    }
    else if(barSevenHeight == 70){
        barSeven.style.backgroundColor = "hsl(186, 34%, 60%)"
    }
    
    document.querySelector(".amount-1").innerHTML = "$" + monXpense;
    document.querySelector(".amount-2").innerHTML = "$" + tueXpense;
    document.querySelector(".amount-3").innerHTML = "$" + wedXpense;
    document.querySelector(".amount-4").innerHTML = "$" + thuXpense;
    document.querySelector(".amount-5").innerHTML = "$" + friXpense;
    document.querySelector(".amount-6").innerHTML = "$" + satXpense;
    document.querySelector(".amount-7").innerHTML = "$" + sunXpense;

    const spendingAmount = document.querySelector(".spending-amount");
    const totalSpending = monXpense + tueXpense + wedXpense + thuXpense + friXpense + satXpense + sunXpense;

    spendingAmount.innerHTML = totalSpending;

    const balance = document.querySelector(".balance");
    balance.innerHTML = data[7].balance - totalSpending;
})