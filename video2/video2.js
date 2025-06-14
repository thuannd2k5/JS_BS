console.log("Hello world from HTML")

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr = [
    { name: 'thuan', age: 19 },
    { name: 'tuan', age: 20 },
    { name: 'thanh', age: 20 },
    { name: 'minh', age: 20 }
]

let filter = arr.filter((item, index) => {
    // console.log(">>> check filter : item : ", item, "index : ", index);
    return item && item.age === 20;
});

console.log(filter);

