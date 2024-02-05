const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      fisrtName: "Harshit",
      lastName: "Satya",
    },
  },
};

// console.log(regularUser.fullName?.userFullName.fisrtName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj21 = { 5: "a", 6: "b" };
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2, obj21);
// console.log(obj3);
// console.log(obj4);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "s@gmail.com",
  },
];

// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// for (let user of users) {
//   console.log(user);
// }

// for (let obj in obj1) {
//   console.log(obj1[obj]);
// }

const course = {
  coursename: "js in hindi",
  price: "999",
  courseIntructor: "hitesh",
};

// course.courseIntructor

const { courseIntructor: instructor } = course;
// console.log(instructor);

// {
//   "name": "Harshit",
//   "courseName": "js in hindi",
//   "price": "free",
// }
