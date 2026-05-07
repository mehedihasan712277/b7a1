// problem 1
const filterEvenNumbers = (numbers: number[]): number[] => numbers.filter((num) => num % 2 === 0);

// problem 2
const reverseString = (str: string): string => str.split("").reverse().join("");

// problem 3
type StringOrNumber = string | number;

const checkType = (param: StringOrNumber): string => {
    if (typeof param === "string") {
        return "String";
    } else if (typeof param === "number") {
        return "Number";
    } else {
        return "Invalid input";
    }
};

// problem 4
const getProperty = <T>(obj: T, prop: keyof T) => obj[prop];

// problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) => ({ ...book, isRead: true });

// problem 6
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const student = new Student("Alice", 20, "A");
student.getDetails();

// problem 7
const getIntersection = (arr1: number[], arr2: number[]) => [...new Set(arr1)].filter((ele) => new Set(arr2).has(ele));
