// let value = 0;
// while(true){
//     value +=1
//     if(value > 10){
//     break;
//     }
// console.log("value",value)
// }

// let city = [
//                 "Bangalore",
//                 "Kolkata",
//                 "chennai",
//                 "Ahemdabad",
//                 "Hyderabad",
//                 "Pune",
//                 "Delhi",
//                 "Mumbai",
//                 "Madurai",
//                 "Indore",
//                 "eeeeee"
//            ];

// const push = city.push("sivakasi");
// console.log("city",push);

// const unshift = city.unshift("coimbatore");
// console.log("kolkata",unshift);

// const slice = city.slice(0, 5);
// console.log("slice",slice)

// const des = city.sort((a,b) => b.localeCompare(a))
// console.log("sort",des)


// const li1 = city.filter(city => city.length < 5)
// console.log("check",li1)

class Car {
    constructor(name, model) {
      this.name = name;
      this.model = model;
    }
  
    getModel() {
      return this.model;
    }
  
    setModel(model) {
      this.model = model;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
  }

  const myCar = new Car("Toyota", "Corolla");
  console.log(myCar.getModel()); 
//   const myCar = new Car()
  console.log(myCar.getName()); 
  
  myCar.setModel("Camry","Bonbon");
  console.log(myCar.getModel()); 
  
//   myCar.setName("Bonbon");
  console.log(myCar.getName())