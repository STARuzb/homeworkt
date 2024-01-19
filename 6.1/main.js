///15
// function hisoblash(likelar, dislikelar) {
//     let natija = likelar - dislikelar;
//     return natija;
// }
// let test1 = { like: 13, dislike: 0 };
// let test2 = { like: 2, dislike: 33 };
// let test3 = { like: 123, dislike: 123 };
// let test4 = { like: 2, dislike: 33 };
// console.log("Test 1 natijasi: " + hisoblash(test1.like, test1.dislike));
// console.log("Test 2 natijasi: " + hisoblash(test2.like, test2.dislike));
// console.log("Test 3 natijasi: " + hisoblash(test3.like, test3.dislike));
// console.log("Test 4 natijasi: " + hisoblash(test4.like, test4.dislike));


///16
// function oshirish(arr) {
//     return arr.map(element => element + 1);
// }
// let test1 = [12, 1323131, 4124124];
// let test2 = [312123214, 32121, 1323131];
// console.log("natija: " + (oshirish(test1)));
// console.log("natija: " + (oshirish(test2)));


///17
// function tekshirish(array, element) {
//     return array.includes(element);
// }
// let test1 = ['a', 4, 's', true];
// let test2 = [2, 1, 3, 4];
// console.log("Test 1 natijasi: " + tekshirish(test1, 's'));
// console.log("Test 2 natijasi: " + tekshirish(test2, 'a'));


///19
// function toNumberArray(arr) {
//     try {
//         return arr.map(item => {
//             let num = parseFloat(item);
//             if (isNaN(num)) {
//                 throw new Error("Xarflarni number tipiga o'tkazib bo'lmaydi");
//             }
//             return num;
//         });
//     } catch (error) {
//         return "Error: " + error.message;
//     }
// }
// let test1 = ["1", "1", "4"];
// let test2 = ["9.4", "4.2"];
// let test3 = ["91", "44"];
// let test4 = ["9.5", "с"];

// console.log("Test 1 natijasi: " + (toNumberArray(test1)));
// console.log("Test 2 natijasi: " + (toNumberArray(test2)));
// console.log("Test 3 natijasi: " + (toNumberArray(test3)));
// console.log("Test 4 natijasi: " + (toNumberArray(test4)));


///20
function natijalar(daromat) {
    let soliqlar = daromat * 0.5;
    let sugurta = daromat * 0.3;
    let jamgarma = daromat * 0.2;

    return {
        "soliqlar": soliqlar,
        "sugurta": sugurta,
        "jamgarma": jamgarma
    };
}

let test1 = natijalar(1000000);
let test2 = natijalar(5000000);

console.log("Test 1 natijasi: " + JSON.stringify(test1));
console.log("Test 2 natijasi: " + JSON.stringify(test2));
