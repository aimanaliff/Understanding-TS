// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tuple: fixed-length array with fixed type
// } = {
//     name: 'Aliff',
//     age: 21,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR = 200 }; //can store anything

const person = {
    name: 'Aliff',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin'); //.push is an exception in ts
// person.role[1] = 10; //assigned wrong value

// person.role = [0, 'admin', 'user']; //error because fixed array length

let favouriteactivities: string[];
favouriteactivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

if(person.role === Role.AUTHOR){
    console.log('is author');
}