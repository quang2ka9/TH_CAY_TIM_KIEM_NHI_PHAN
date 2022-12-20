let findItemMiss = (arr: number[]) => {
    let i: number = 1;
    let result: number[] = [];

    while (i <= 10) {
        if (arr.indexOf(i) == -1) {
            result.push(i);
        }
        i++;
    }
    return result;
}
console.log(findItemMiss([1, 2, 5, 6, 7, 10]))