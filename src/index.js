module.exports = function toReadable(number) {
    const result = Array.from(String(number));
    const num = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const nTy = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 20) {
        return num[number];
    } else if (number < 100) {
        if (number % 10 == 0) {
            return nTy[result[0] - 2];
        } else {
            return `${nTy[result[0] - 2]} ${num[result[1]]}`;
        }
    } else if (number >= 100 && number < 1000) {
        if (number == 100) return `one hundred`;
        if (number % 100 == 0) {
            return `${num[result[0]]} hundred`;
        } else {
            return `${num[result[0]]} hundred ${toReadable(
                result.slice(1).join("")
            )}`;
        }
    }
};

// console.log(toReadable(901))
