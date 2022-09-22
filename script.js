// .slice >> სლაისი არის ფუნქცია რომელიც აბრუნებს მასივის კონკრეტულ ელემენტებს პარამეტრების მიხედვით
// მას აქვს 2 პარამეტრი დაწყების და დასრულების, ანუ საიდან დაიწყოს და სად დამთავრდეს ელემენტების ამოღება
// სლაისი არ ცვლის არსებულ ერეის ის გიბრუნებს ახალ ერეის პარამეტრების მიხედვით
const slice = ['gurama', 'zaura', 'eldara', 'jemala'];
const newSlice = slice.slice(0)
const newSlice1 = slice.slice(3)
const newSlice2 = slice.slice(0,3)
const newSlice3 = slice.slice(-3)
// console.log(newSlice, 'newSlice',newSlice1, 'newSlice1',newSlice2,'newSlice2', newSlice3, 'newSlice3');


// .splice
// სფლაისი არის ფუნქცია რომელიც ცვლის არსებულ მასივს და გაძლევს ასევე ახალ მასივს პარამეტრების მიხედვით,
// მას აქვს საწყისი პარამეტრი და დამამთავრებელი პარამეტრი ელემენტის ამოხლეჩვის,
// პირველ პარამეტრად ვუთითებთ საიდან უნდა დაიწყოს მასივში ცვლილება მეორე კი დამამთავრებელი პარამეტრია,
// მაგალითად თუ გადავცემთ let days = months.splice(2, 0, "March", "April", 'may', 'june'); 
// ეს ნიშნავს რომ პირველი ორი ელემენტის შემდეგ ჩაამატებს ახალ ელემენტებს და მასივში ძველ ელემენტებს არ ამოაკლებს 
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(1,1, 'ჯიმბო');
// let days = months.splice(2, 2, "March", "April", 'may', 'june');
console.log(months); 

// .substring
// სუბსტრინგი არის ფუნქცია რომელიც  სტრინგს ყოფს პარამეტრების მიხედვით მასაც აქვს საწყილი და ბოლო პარამეტრი
// თუ გადავაწვდით მხოლოდ 1 პარამეტრს იმ პარამეტრის იქით ამოიღებს მთელ სტრინგს
// თუ გადავცემთ პირველ და ბოლო პარამეტრს პირველი პარამეტრიდან დაწყებული მეორე პარამეტრამდე ამოიღებს სტრინგს 
let str = 'gurama';
// let newStr = str.substring(3)
let newStr = str.substring(0,4)
// console.log(newStr);



// .split
// სპლიტი არის ფუნქცია რომლის საშუალებითაც შეგვიძლია სიტყვა ან წინადადება ვაქციოთ ერეიდ  მაგალითები არის ქვემოთ
const string = 'გურამა კარგი ბიჭია, ვენაცვალე გურამას';
// console.log(string);

const words = string.split(' '); // ეს დამიბრუნებს სიტყვების ერეის საიდანაც შემიძლია ამოვიღო ნებისმიერი ინდექსი
// console.log(words);
// expected output: "fox"

const chars = string.split(''); // ეს დამიბრუნებს ასოების ერეის საიდანაც შემიძლია ამოვიღო ნებისმიერი ინდექსი რომელიც იქნება ასო
// console.log(chars);
// expected output: "k"

const strCopy = string.split(); // ეს დამიბრუნებს იგივე სტრინგს უბრალოდ ერეიში
// console.log(strCopy);



// .join
// ჯოინ არის ფუნქცია რომლის საშუალებითაც შეგვიძლია ერეი გადავიყვანოთ სტრინგად '' < ბრჭყალებში ჩააწერილი მინიშნებების მიხედვით
// თუ ბრჭყალებს ექნება სფეისი სიტყვები გამოიყოფა სფეისით, თუ წერტილი წერტილით და ესე,
// თუ () < არ ჩავუწერთ ბრჭყალებს ავტომატურად ყველა სიტყვის მერე იქნება მძიმე
let array = ['gurama','midis','mdinareze','satevzaod'];
// console.log(array.join(' '));
// console.log(array.join(''));
// console.log(array.join('_'));
// console.log(array.join());


// .sort
//  სორტი არის არაიში რაღაც ლოგიკით ელემენტების გადალაგების ფუნქცია
// რომელსაც უნდა გადავცეთ ლოგიკა რის მიხედვით დაგვილაგოს

const names = [ 'juxo', 'gurama', 'kalduna', 'tabagara'];
names.sort();
// console.log(names);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
// console.log(numbers);

const numbers1 = [4, 2, 5, 1, 3];
numbers1.sort((a,b) => a - b) 
console.log(numbers1);

const numbers2 = [4, 2, 5, 1, 3];
numbers2.sort((a, b) => b - a);
console.log(numbers2);

// .pop
// პოპი არის ფუნქცია რომელიც შილის ერეის ბოლო ელემენტს და ცვლის არსებულ ერეის 
const names1 = [ 'juxo', 'gurama', 'kalduna', 'tabagara'];
let saxeli = names1.pop();
// console.log(saxeli);
// console.log(names1);


// .shift
// shift არის ფუნქცია რომელიც შილის ერეის პირველ ელემენტს და ცვლის არსებულ ერეის 
const names2 = [ 'juxo', 'gurama', 'kalduna', 'tabagara'];
let saxeli1 = names2.shift();
// console.log(saxeli1);
// console.log(names2);



// .unshift
// ანშიფთ არის ფუნქცია რომელიც ერეიში წინ ამატებს მითითებულ ელემენტებს 
let numbers4 = [11,13,14,15];
numbers4.unshift(2,3,5);
// console.log(numbers4);


// .push
// ფუშ ფუნქცია ამატებს ერეიში ბოლოში ელემენტებს 
let numbers5 = [11,13,14,15];
numbers5.push(2,3,5);
// console.log(numbers5);



// .concat
// ქონქათ ფუნქცია აერთიანებს  გადაცემულ მასივებს ის არ ცვლის არსებულ მასივებს გიბრუნებს ახალს 
let numbers6 = [11,13,14,15];
let numbers7 = [1,3,4,1];
let newNumbers = numbers6.concat(numbers7,numbers5, numbers4, months);
// console.log(newNumbers)
// console.log(numbers6);



// .find
// ფინდ არის ფუნქცია რომელსაც გადავაწვდით რაიმე ლოგიკას რის მიხედვით უნდა დაგვიბრუნოს ელემენტი და იმ ლოგიკის შესაბამის პირველივე ელემენტს გვიბრუნებს
// თუ ვერ იპოვნა შესაბამისი ელემენტი დააბრუნებს ანდეფაინდს
const array3 = [1,14,55,4423,250];
let found = array3.find(item => item > 200);
console.log(found);



// .filter
// ფილტრი არის ფუნქცია რომელსაც უნდა გადავაწოდოთ  რაიმე სახის ლოგიკა თუ რის მეშვეობით უნდა დაფილტროს ელემენტები და 
//  დაგვიბრუნებს ახალ ერეის იმ ლოგიკის მიხედვით ამორჩეული ელემენტებით, თუ ლოგიკის მიხედვით ვერ იპვონის ვერაფერს დაბრუნებს ცარიელ ერეის
const array4 = [1,14,55,333,4423];
// let found1 = array3.filter(item => item <= 14);
let found1 = array3.filter(item => item < 1);
// console.log(found1)



// .map
// მეფი არის ფუნქცია რასაც გადავაწვდით ლოგიკას და იმ ლოგიკის მიხედვით დაგვიბრუნებს ახალ ერეის იმ ლოგიკის მიხედვით დალაგებული ელემენტებით
const array5 = [1,14,55,333,4423];
// let found1 = array3.filter(item => item <= 14);
let found2= array3.map(item => item / 3);
// console.log(found2)



// .every
// ევრი არის ფუნქცია რომელიც გარბის მთელ მასივს და რა ლოგიკასაც ჩააწვდი იმ ლოგიკის მიხედვით ადარებს თითოეულ ელემენტს 
// ევრი გიბრუნებს თრუ ან ფოლს, შესაბამისად თუ მასივში რომელიმე ელემენტი არ დაემთხვა ლოგიკას  დააბრუნებს ფოლს თუ ყველა დდაემთხვა თრუს
const array6 = [1,14,55,333,4423];
const boolean = array6.every(x => x < 5555);
// console.log(boolean);



// .forEach
// ფორ იჩ არის იგივე ფორ ლუპი  რომელსაც გამოიყენებ ერეიზე და გარბის მთელ ერეის ელემენტებს
const array7 = [1,14,55,333,4423];
let array8 = [];
array7.forEach((item) => {
  array8.push(item);
})
// console.log(array8);



// .some
// სომ არის ფუნქცია რომელიც გიბრუნებს თრუ ან ფოლს, ლოგიკა უნდა ჩააწოდო რის მიხედვით გინდა დაგიბრუნოს პასუხი
// თუ ერთმა მაინც დააკმაყოფილა დაგიბრუნებს თრუს თუ არადა ფოლს
const array9 = [1,55,333,4423];
let odd = array9.some((item) => item % 2 === 0);
console.log(odd);



// .reduce
//  რედიუსი არის ფუნქცია რომელსაც აქვს პარამეტრები, პირველი არის საწყისი ცვლადი რომელსაც ფუნქციის ბოლოში უნდა მივანიჭოთ მნიშვნელობა
//  მეორე არის ინდექსი, შეგვიძლია ამ ფუნქციის საშუალებით გავაკეთოთ სხვა და სხვა სახის მათემატიკური გამოთვლები 
const numbers11 = [1, 13, 43, 11];
const sum = numbers11.reduce((initialNumber, currentValue) => {
  console.log(initialNumber, ' initialNumber');
  console.log(currentValue,' value ');
    return initialNumber * currentValue;
}, 1);
console.log(sum, ' sum');

