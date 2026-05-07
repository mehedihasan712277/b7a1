# Diference between `any` and `unknown` type in Typescript and a short description about the term - type narrowing

---

<br>

## Introduction

In typescript, `any` and `unknown` are two flexible type. Both allow users to set any value but there are some differences also. If we use `any`, then it comes out of the boundary of typescript and starts to behave like javascript but in case of using `unknown`, there exist some typescript also which are discussed in description part.

Type narrowing refers to minimizing the scope of type by applying some rules or condition.

<br>

## Description

**Difference between `any` & `unknown`:**
In a word, `any` does not care about typescript but `unknown` does. Let's see an example:

```typescript
let x: any;
let y: unknown;

x.length; // show error during runtime
y.length; // show error during compilation
```

So, it is clear that, if we dont know the type of any variable in our code, we should use `unknown` because it is safer because if anything wrong in the code, it shows error before runtime, so user experiance is not hampered. But in the same case, if we use type `any`, the errors may be caught before runtime which may affect the user experiance.

**Type narrowing:** Let's break it down using an example :

```typescript
type Alphanumeric = number | string;

const add = (num1: Alpjanumeric, num2: Alpjanumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2; // type of num1 & num2 is narrowed to number
    } else {
        return num1.toString() + num2.toString(); // type num1 & num2 is narrowed to string
    }
};

console.log(add(12, "12"));
```

In the example, we can see that, the function `add()` has two parameters of type `number` or `string`. But in the `if` block, only parameters (num1 & num2) of `number` type is allowed. This is called type narrowing - though both `number` and `string` type can be passed but using a condition, the type of the parameters are narrowed to `number` in if block and `string` to else block.

We can narrow the type in another way - using `in` keyword. Here is an example:

```typescript
type User = {
    name: string;
};

type Admin = {
    name: string;
    role: "admin";
};

const getInfo = (obj: User | Admin) => {
    if ("role" in obj) {
        console.log(`Name is  ${obj.name}. Role is ${obj.role}`);
    } else {
        console.log(`Name is  ${obj.name}`);
    }
};

getInfo({ name: "Mehedi" }); // type is narrowed here
getInfo({ name: "Hasan", role: "admin" });
```

<br>

## Conclusion

Though we can set any value to a variable having type - `any` or `unknown`, `unknown` is a safer version of `any` because `unknown` holds some typescript features. It is good practice to choose `unknown` type over `any`.

Type narrowing can be defined as detting limit within type. It can be done using `typeof` keyword or `in` keyword.
