let mynumber = document.querySelectorAll(".number");
let myn = document.querySelectorAll(".c");
let myr = document.querySelector(".rr");
let myh1 = document.querySelector(".winning");
let gameNumber = document.querySelector(".gameNumber");
let myb = document.querySelector(".b");
let random = document.querySelectorAll(".random");
let x = [];
let y = [];
let z = []
let count1 = 0;
let count = 0;
let myindex;
let result; 

// ლუპი მიდევს 36 ღილაკზე, რომ გავიგო სად დაიკლიკა დაცვლადში შევინახო კლიკი
for (let i = 0; i < mynumber.length; i++) {
  mynumber[i].addEventListener("click", function () {
    let clickedNumber = mynumber[i].innerText;
    // აქ წერია რომელიც არ დაემთხვევა დაიფუშოს y ში
    if (!y.includes(clickedNumber)) {
      if (count1 < 6) {
        y.push(clickedNumber);
        count1++;
        mynumber[i].style.border = "#2DF00C solid 6px";
      }
    } else {
      // აქ განმეორებით კლიკზე წაიშალოს არცჩეული რიცხვი
      myindex = y.indexOf(clickedNumber);
      count1--;
      y.splice(myindex, 1);
      mynumber[i].style.border = "";
    }
  });
}

// ეს არის თამაშის ღილაკი
myb.addEventListener("click", function () {
  if (count1 == 6) {
    // სანამ არჩეულების მთვლელი 6 არ გადება თამაშს ვერ დაიწყებ
    while (x.length < 6) {
      // სანამ 6 რიცხვს არ შემოიტანს
      let randomNumber = Math.floor(Math.random() * 36);

      // აქ წერია რანდომათ შემოიტანოს რიცხვები
      if (!x.includes(randomNumber) && randomNumber !== 0) {
        x.push(randomNumber);
      }
    }

    for (let i = 0; i < random.length; i++) {
      random[i].innerText = x[i];
    }

    result = y.map((y) => {
      // რიცხვებად ვაქცევ არაის
      return y * 1;
    });

    console.log(result);

    // დამთხვევის შემთხვევაში მთვლელი ითვლის და თან ფერს იცვლის დამთხვეული რიცხვი

    for (let i = 0; i < result.length; i++) {
      if (x.includes(result[i])) {
        z.push(mynumber[result[i] - 1].innerText)
        console.log(z);
      
     
        console.log(z);
        count++;
        mynumber[result[i] - 1].style.border = "5px solid #F0003E";
      }
    }

    for (let n of mynumber) {
      n.style.pointerEvents = "none";
    }
    myb.style.pointerEvents = "none";

    // მოგების ლოგიკები
    if (count == 6) {
      myh1.innerText = `Matches number: ${z}`;
      myh1.style.color = "#2DF00C";
    } else if (count == 5) {
      myh1.innerText = `Matches number: ${z}`;
      myh1.style.color = "#2DF00C";
    } else if (count == 4) {
      myh1.innerText = `Matches number: ${z}`;
      myh1.style.color = "#2DF00C";
    } else if (count == 2) {
      myh1.innerText = `Matches number: ${z}`;
      myh1.style.color = "#2DF00C";
    } else if (count == 1) {
      myh1.innerText = `Match number: ${z}`;
      myh1.style.color = "#2DF00C";
    }
  }
});

// რესეტის ღილაკი 
myr.addEventListener("click", function () {
  for (let i = 0; i < mynumber.length; i++) {
    mynumber[i].style.border = "";
  }
  
  for (let i = 0; i < random.length; i++) {
    random[i].innerText = "";
  }

  for (let n of mynumber) {
    n.style.pointerEvents = "auto";
  }
  myh1.innerText =""
  myb.style.pointerEvents = "auto";
  count = 0; 
  count1 = 0;
  x = []; 
  y = []; 
  z = []
});
