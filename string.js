// const single='this is string';
// const doubal="this is string";
// const backtick=`this is string`;

// console.log(single);
// console.log(doubal);
// console.log(backtick);

// const sum=(a,b)=>   a+b;

// const Total=`Total Sum is${sum(10,10)}`
// console.log(Total);

// const greeting =`Hii I\`m jay`;
// console.log(greeting);

// const name="Jay Shah";
// console.log(name.length);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);
// console.log(name[7]);
// console.log(name[name.length/2]);
// console.log(

//     name.toLowerCase());
// console.log(name.toUpperCase());

const details="hello i am jay shah i am nothing to do";
const firstIndexOf =details.indexOf('jay');
const lastIndexOf =details.lastIndexOf('i');
const lncludes1 =details.includes('bye');

console.log(firstIndexOf);
console.log(lastIndexOf);
console.log(lncludes1);
console.log(details.startsWith("hello"));
console.log(details.endsWith("do"));

const hobbies="I Love  HTML";
// const index =hobbies.indexOf("Love");
// const index=hobbies.slice(0,2);
// split
// const index=hobbies.split("");
// console.log(index);
// Revers
// const index=hobbies.split("").reverse().join();
// console.log(index);
// repeat
// console.log(hobbies.repeat(5));
console.log(hobbies.trim());

const guestList='Our guests are: emma, jacob, isabella, ethan ';
const length=guestList.length
console.log(length);
const upparcaseGustList=guestList.toUpperCase();
console.log(upparcaseGustList);
const isEthanOntheList=upparcaseGustList.includes("ETHAN");
console.log(isEthanOntheList);
const subStringGuest=upparcaseGustList.slice("16");
console.log(subStringGuest);
const guest=subStringGuest.split(",");
console.log(guest)
const lowercasegustList=guestList.toLowerCase();
console.log(lowercasegustList);
