for(let i=1; i<11; i++){
    console.log("value",i);
}

let number_1 = 10;
let number_2 = 20;
let numbers = number_1 + number_2;
console.log("num",numbers);
while(numbers <= 50){
    number_1 ++;
    number_2 += 2;
    numbers = number_1 + number_2;
    console.log("num",numbers);
}

const person =
{
    label: "Box",
    dimension: "22x33x22"
}

// const box = {
//     label: "Box",
//     dimension: "22x33x22"
//   };

//   for (let key in box) {
//     console.log("key:" + key + "  value:" + box[key]);
//   }

const box = {
    label: "Box",
    dimension: "22x33x22"
  };
//   let key = "";
  for (let key in box) {
    
    console.log("key:" + key +" value:"+box[key])
    // console.log(key + ": " + box[key]);
  }
  
  const number = [10,20,30];

  for(let key in number){
    console.log("number", "index :"+key+" value:"+number[key])
  }


const num = [10,20,30,40,50];

for(let [index, value] of num.entries()){
    console.log("index: "+(index+" value:"+value));
}

