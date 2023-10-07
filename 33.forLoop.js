console.log("for each loop ");
const number=[1,2,4,12,43]
for (const num of number) {
    console.log(num);
}

for (const index in number) {
    console.log(index);
}
for (const index in number) {
    console.log(number[index]);
}