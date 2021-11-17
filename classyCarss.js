let car = new Car (
    "Honda",
    "CRV",
    "2016",
    "45000",
    "$10,000.00" );

      let carAddition = document.querySelector(".carOfTheDay");
      carAddition.textContent =  `Car Company: ${car.Make}, Type: ${car.Type}, Made: ${car.Year}, 
      Miles: ${car.Mileage}, Price: ${car.Cost}`;

    const otherCars = new Array();
    const carMake =["GMC","Chevy","BMW","Dodge","Chrysler","Toyota","Porsche"];
    const carType =["Sedan","Hybrid","Hatchback","Sport","Suv"];
    const carYear =[ "2007","2008","2009","2010","2011","2012","2013",
                 "2014","2015","2016","2017","2018","2019"];    
    const carMileage = [ "10000","75000 ","12345","46570","11249","34232","123424",
                "46000","450431"];
    const carCost = ["$112000.00","$15000","$27000","17520.00","$45395.00","$34534.00",
"$34234.00","$12345.00","$86506.00","$34203.00"];

// ``````````````````````````````````````````````````
const carNew = new Array();

for (let index = 1; index <= 10; index++){
    car = new Car( 
            carMake[Math.floor(Math.random()*carMake.length)],
           carType[Math.floor(Math.random()*carType.length)],
            carYear[Math.floor(Math.random()*carYear.length)],
            carMileage[Math.floor(Math.random()*carMileage.length)],
            carCost[Math.floor(Math.random()*carCost.length)]
             );
        carNew.push(car);
    }


    const carList = document.createElement("ul");

        carNew.forEach(element => {
        let str = `Car Company: ${element.Make}, Type: ${element.Type}, Made: ${element.Year}, 
        Miles: ${element.Mileage}, Price:${element.Cost}`;
     
        let carListItem = document.createElement("li");
        carListItem.textContent = str;
        carList.append(carListItem);
    }); 

let carArea = document.querySelector(".otherCarsList");
carArea.append(carList);