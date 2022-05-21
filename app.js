// ! המחשבון הזה סתם נחמד אז למה לא

// let a = +prompt('מה הגיל שלך');
// alert(':הגיל שלך בימים' + a * 365.242199);
// alert(':הגיל שלך בשבועות' + a * 52);
// alert(':הגיל שלך בחודשים' + a * 12);

// alert('ברוך הבא לחישוב ציון לבית הספר' + '😊' );
// alert('הכניסו מספרים מ-1 עד-100');
// let num40 = +prompt('בכמה לחלק' + '?' + 'מספרים בין-5 ל-24');
// while ( num40 > 24 || num40 < 5 || isNaN(num40)) {
//     num40 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'חלקו בין-5 ל-24');
// }


//כאן זה בין הקודים הראשונים לי אחרי שלמדתי על
// while
//היום אני כבר יודע שאפר לעשות את זה הרבה הרבה יותר יעיל אבל אין לי כוח
//אם אתם רוצים לראות איפו כתבתי את הקוד ולנסות שם
// --> https://course-ide-staging.s3.eu-central-1.amazonaws.com/index.html

// (?איך היה לי כוח)

// מחלק ב-5
if(num40 == 5){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 ||  isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// מחלק ב-6
if(num40 == 6){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// מחלק ב-7
if(num40 == 7){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 );
const result2 = ( result3 / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-8
if(num40 == 8){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו מספר 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}







// // מתחלק ב-9
if(num40 == 9){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9 );
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-10
if(num40 == 10){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו מספר 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num9)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-11
if(num40 == 11){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו מספר 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-12
if(num40 == 12){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-13
if(num40 == 13){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 );
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}







// // מתחלק ב-14
if(num40 == 14){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}







// // מחלק ב-15
if(num40 == 15){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 );
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-16
if(num40 == 16){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 ||  num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 ||  num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 ||   num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 ||  num4 < 1 ||  isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 ||  num5 < 1 ||  isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 ||   num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 ||   num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 ||   num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 ||   num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 ||   num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 ||   num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 ||   num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 ||  num13 < 1 ||  isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 ||  num14 < 1 ||  isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 ||   num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 ||   num16 < 1 || isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 );
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // 1מחלק ב-7
if(num40 == 17){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 ||  isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 || num16 < 1 || isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num17 = +prompt('הכניסו מספר 17');
while ( num17 > 100 || num17 < 1 || isNaN(num17)) {
    num17 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 );
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-18
if(num40 == 18){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 ||  isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 || num16 < 1 || isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num17 = +prompt('הכניסו מספר 17');
while ( num17 > 100 || num17 < 1 || isNaN(num17)) {
    num17 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num18 = +prompt('הכניסו מספר 18');
while ( num18 > 100 || num18 < 1 || isNaN(num18)) {
    num18 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17
+num18);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}







// // מתחלק ב-19
if(num40 == 19){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 ||  num16 < 1 ||  isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num17 = +prompt('הכניסו מספר 17');
while ( num17 > 100 || num17 < 1 || isNaN(num17)) {
    num17 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num18 = +prompt('הכניסו מספר 18');
while ( num18 > 100 ||   num18 < 1 || isNaN(num18)) {
    num18 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num19 = +prompt('הכניסו מספר 19');
while ( num19 > 100 ||   num19 < 1 || isNaN(num19)) {
    num19 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17
+num18 + num19);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}







// // מחלק ב-20
if(num40 == 20){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 ||   num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 ||   num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 ||   num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 || num16 < 1 || isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num17 = +prompt('הכניסו מספר 17');
while ( num17 > 100 || num17 < 1 || isNaN(num17)) {
    num17 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num18 = +prompt('הכניסו מספר 18');
while ( num18 > 100 || num18 < 1 || isNaN(num18)) {
    num18 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num19 = +prompt('הכניסו מספר 19');
while ( num19 > 100 || num19 < 1 || isNaN(num19)) {
    num19 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num20 = +prompt('הכניסו מספר 20');
while ( num20 > 100 || num20 < 1 || isNaN(num20)) {
    num20 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17
+num18 + num19+ num20);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-21
if(num40 == 21){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num22 < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 || num16 < 1 || isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num17 = +prompt('הכניסו מספר 17');
while ( num17 > 100 || num17 < 1 || isNaN(num17)) {
    num17 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num18 = +prompt('הכניסו מספר 18');
while ( num18 > 100 || num18 < 1 || isNaN(num18)) {
    num18 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num19 = +prompt('הכניסו מספר 19');
while ( num19 > 100 || num19 < 1 || isNaN(num19)) {
    num19 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num20 = +prompt('הכניסו מספר 20');
while ( num20 > 100 || num20 < 1 || isNaN(num20)) {
    num20 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num21 = +prompt('הכניסו מספר 21');
while ( num21 > 100 || num21 < 1 || isNaN(num21)) {
    num21 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17
+num18 + num19+ num20 + num21);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// // מחלק ב-22
if(num40 == 22){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || num < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 || num16 < 1 || isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num17 = +prompt('הכניסו מספר 17');
while ( num17 > 100 || num17 < 1 || isNaN(num17)) {
    num17 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num18 = +prompt('הכניסו מספר 18');
while ( num18 > 100 || num18 < 1 || isNaN(num18)) {
    num18 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num19 = +prompt('הכניסו מספר 19');
while ( num19 > 100 || num19 < 1 || isNaN(num19)) {
    num19 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num20 = +prompt('הכניסו מספר 20');
while ( num20 > 100 || num20 < 1 || isNaN(num20)) {
    num20 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num21 = +prompt('הכניסו מספר 21');
while ( num21 > 100 || num21 < 1 || isNaN(num21)) {
    num21 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num22 = +prompt('הכניסו מספר 22');
while ( num22 > 100 || num22 < 1 || isNaN(num22)) {
    num22 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17
+num18 + num19+ num20 + num21 + num22);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}






// מחלק ב-23
if(num40 == 23){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num6 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 || num16 < 1 || isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num17 = +prompt('הכניסו מספר 17');
while ( num17 > 100 || num17 < 1 || isNaN(num17)) {
    num17 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num18 = +prompt('הכניסו מספר 18');
while ( num18 > 100 || num18 < 1 || isNaN(num18)) {
    num18 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num19 = +prompt('הכניסו מספר 19');
while ( num19 > 100 || num19 < 1 || isNaN(num19)) {
    num19 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num20 = +prompt('הכניסו מספר 20');
while ( num20 > 100 || num20 < 1 || isNaN(num20)) {
    num20 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num21 = +prompt('הכניסו מספר 21');
while ( num21 > 100 || num21 < 1 || isNaN(num21)) {
    num21 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num22 = +prompt('הכניסו מספר 22');
while ( num22 > 100 || num22 < 1 || isNaN(num22)) {
    num22 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num23 = +prompt('הכניסו מספר 23');
while ( num23 > 100 || num23 < 1 || isNaN(num23)) {
    num23 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17
+num18 + num19+ num20 + num21 + num22 + num23);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}







// מתחלק ב-24
if(num40 == 24){
      let num = +prompt('הכניסו מספר');
 while ( num > 100 || num < 1 || isNaN(num)) {
     num = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
 }
 let num2 = +prompt('הכניסו מספר 2');
while ( num2 > 100 || num2 < 1 || isNaN(num2)) {
     num2 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num3 = +prompt('הכניסו מספר 3');
while ( num3 > 100 || num3 < 1 || isNaN(num3)) {
    num3 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num4 = +prompt('הכניסו מספר 4');
while ( num4 > 100 || num4 < 1 || isNaN(num4)) {
    num4 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num5 = +prompt('הכניסו מספר 5');
while ( num5 > 100 || num5 < 1 || isNaN(num5)) {
    num5 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num6 = +prompt('הכניסו מספר 6');
while ( num6 > 100 || num7 < 1 || isNaN(num6)) {
    num6 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num7 = +prompt('הכניסו מספר 7');
while ( num7 > 100 || num7 < 1 || isNaN(num7)) {
    num7 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num8 = +prompt('הכניסו 8');
while ( num8 > 100 || num8 < 1 || isNaN(num8)) {
    num8 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num9 = +prompt('הכניסו מספר 9');
while ( num9 > 100 || num9 < 1 || isNaN(num9)) {
    num9 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num10 = +prompt('הכניסו מספר 10');
while ( num10 > 100 || num10 < 1 || isNaN(num10)) {
    num10 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num11 = +prompt('הכניסו מספר 11');
while ( num11 > 100 || num11 < 1 || isNaN(num11)) {
    num11 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num12 = +prompt('הכניסו מספר 12 ');
while ( num12 > 100 || num12 < 1 || isNaN(num12)) {
    num12 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num13 = +prompt('הכניסו מספר 13');
while ( num13 > 100 || num13 < 1 || isNaN(num13)) {
    num13 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num14 = +prompt('הכניסו מספר 14');
while ( num14 > 100 || num14 < 1 || isNaN(num14)) {
    num14 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num15 = +prompt('הכניסו מספר 15');
while ( num15 > 100 || num15 < 1 || isNaN(num15)) {
    num15 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num16 = +prompt('הכניסו מספר 16');
while ( num16 > 100 || num16 < 1 || isNaN(num16)) {
    num16 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num17 = +prompt('הכניסו מספר 17');
while ( num17 > 100 || num17 < 1 || isNaN(num17)) {
    num17 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num18 = +prompt('הכניסו מספר 18');
while ( num18 > 100 || num18 < 1 || isNaN(num18)) {
    num18 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num19 = +prompt('הכניסו מספר 19');
while ( num19 > 100 || num19 < 1 || isNaN(num19)) {
    num19 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num20 = +prompt('הכניסו מספר 20');
while ( num20 > 100 || num20 < 1 || isNaN(num20)) {
    num20 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num21 = +prompt('הכניסו מספר 21');
while ( num21 > 100 || num21 < 1 || isNaN(num21)) {
    num21 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num22 = +prompt('הכניסו מספר 22');
while ( num22 > 100 || num22 < 1 || isNaN(num22)) {
    num22 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num23 = +prompt('הכניסו מספר 23');
while ( num23 > 100 || num23 < 1 || isNaN(num23)) {
    num23 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
let num24 = +prompt('הכניסו מספר 24 ');
while ( num24 > 100 || num24 < 1 || isNaN(num24)) {
    num24 = +prompt('קלט לא תקין! נסו שוב' + ' ' + 'כתבו מספר' );
}
const result = ( num + num2 + num3 + num4 + num5 + num6 + num7 +num8
+ num9+ num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17
+num18 + num19+ num20 + num21 + num22 + num23 + num24);
const result2 = ( result / num40 );
if( result2 == '100'){
    alert("מציון" + ' ' + "😊" +  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '90'){
alert("מעולה" + ' ' + "😁"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '80'){
alert("טוב מאוד" + ' ' + "😃"+  ' ' +  'התוצאה היא:' + ' ' + result2)
}
else if(  result2 >= '70'){
    alert("טוב" + ' ' + "🙂"+  ' ' +  'התוצאה היא:' + ' ' + result2);
}
else if(  result2 >= '60'){
    alert("מספיק" + ' ' + "😐"+  ' ' + 'התוצאה היא:' + ' ' + result2)
}
else if(  result2 <= '60'){
    alert(" לא מספיק חבל יכולתה יותר" + ' ' + "🙁"+ ' ' + 'התוצאה היא:' + ' ' + result2)
}
console.log('סכום המספרים' + ':' + ' ' + result2 );
}