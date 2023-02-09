module.exports = function toReadable (number) {
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let b = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (0 <= number && number < 20){
        return a[number];
    } else if (20 <= number && number < 100 && number % 10 === 0){
        return b[number / 10 - 2]
    } else if(20 < number && number < 100){
        return b[Math.trunc(number/10) - 2] +' '+ a[number % 10]
    } else if (100 <= number && number < 1000 && number % 100 === 0){
        return a[number/100] + ' ' + 'hundred'
    } else if(100 < number && number < 120 || 200 < number && number < 220 || 300 < number && number < 320 || 400 < number && number < 420 || 500 < number && number < 520 || 600 < number && number < 620 || 700 < number && number < 720 || 800 < number && number < 820 || 900 < number && number < 920){
        return a[Math.trunc(number/100)] + ' ' + 'hundred' + ' ' + a[number % 100]
    } else if (110 <= number && number <= 990 && number % 10 === 0){
        console.log(number % 100 / 10 - 2)
        return a[Math.trunc(number/100)] + ' ' + 'hundred' + ' ' + b[number % 100 / 10 - 2]
    } else if(120 <= number && number < 1000){    
        return a[Math.trunc(number/100)] + ' ' + 'hundred' + ' ' + b[Math.trunc(number % 100/10) - 2] +' '+ a[number % 10]
   }
 }






