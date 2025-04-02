let mynumber = document.querySelectorAll(".number");
let myn = document.querySelectorAll(".c");
let myr = document.querySelector(".rr");
let myh1 = document.querySelector(".winning");
let gameNumber = document.querySelector(".gameNumber");
let myb = document.querySelector(".b");
let random = document.querySelectorAll(".random");
let x = [];
let y = [];
let z = [];
let count1 = 0;
let count = 0;
let myindex;
let result;

for (let i = 0; i < mynumber.length; i++) {
    mynumber[i].addEventListener("click", function () {
        let clickedNumber = mynumber[i].innerText;
        if (!y.includes(clickedNumber)) {
            if (count1 < 6) {
                y.push(clickedNumber);
                count1++;
                mynumber[i].style.border = "#2DF00C solid 6px";
            }
        } else {
            myindex = y.indexOf(clickedNumber);
            count1--;
            y.splice(myindex, 1);
            mynumber[i].style.border = "";
        }
    });
}

myb.addEventListener("click", function () {
    if (count1 == 6) {
        while (x.length < 6) {
            let randomNumber = Math.floor(Math.random() * 36);
            if (!x.includes(randomNumber) && randomNumber !== 0) {
                x.push(randomNumber);
            }
        }

        for (let i = 0; i < random.length; i++) {
            random[i].innerText = x[i];
        }

        result = y.map((y) => {
            return y * 1;
        });

        for (let i = 0; i < result.length; i++) {
            if (x.includes(result[i])) {
                z.push(mynumber[result[i] - 1].innerText);
                count++;
                mynumber[result[i] - 1].style.border = "5px solid #F0003E";
            }
        }

        for (let n of mynumber) {
            n.style.pointerEvents = "none";
        }
        myb.style.pointerEvents = "none";

        if (count == 6 || count == 5 || count == 4 || count == 2 || count == 1) {
            myh1.innerText = `Matches number: ${z}`;
            myh1.style.color = "#2DF00C";
        }
    }
});

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
    myh1.innerText = "";
    myb.style.pointerEvents = "auto";
    count = 0;
    count1 = 0;
    x = [];
    y = [];
    z = [];
})
;
