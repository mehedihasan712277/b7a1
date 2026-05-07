# `Pick` and `Omit` Type: Keep code DRY

## Introduction

`Pick` and `Omit` are two utiliy type in typescript. They allow users to inclue some specific types or exclude some specific types from a master type. This is how they prevent duplication and ensure code to be DRY.

## Description

Let's consider a type (master) of object having many properties. If we need to declare another type having some same property as master type, in this case, we can use `Pick` utilty property instead of defining new type. Similarly, if we need to declare another type having most of the property of master type, in this case, we can use `Omit` utility property instead of defining new type from scratch. Let's make it clear by an example:

```typescript
interface Product {
    id: number;
    name: string;
    price: number;
    instock: boolean;
    shortDescription: string;
    description: string;
    origin: string;
    category: string;
    brand: string;
    weight: number;
}

type ProductShortMeta = Pick<Product, "name" | "price" | "shortDescription">;
type ProductDetailsMeta = Omit<Product, "weight" | "origin">;

const productShortMetaInfo: ProductShortMeta = {
    name: "Bag",
    price: 123,
    shortDescription: "This is shortdescription",
};

const productDeatilsMetaInfo: ProductDetailsMeta = {
    id: 12,
    name: "bag",
    price: 123,
    instock: true,
    shortDescription: "short description",
    description: "this is description",
    category: "gadget",
    brand: "cat",
};

console.log(productShortMetaInfo);
console.log(productDeatilsMetaInfo);
```

Here, we can see that, two types - `ProductShortMeta` and `ProductDetailsMeta` have been created from the master tyope `Product`. The `ProductShortMeta` type includes some properties (name, price, shortDescription) of the `Product` type and the `ProductDetailsMeta` type excludes some properties (weight, origin) of `Product` type. Inboth case, we did not need to redefine the the types ( `ProductDetailsMeta`, `ProductShortMeta` ) from scratch as two utility types are used here.

This is how `Pick` and `Omit` prevent code duplication while creating specialized "slices" of a master interface and keep code DRY (Don't Repeat Yourself).

<br>

## Conclusion

The `Pick` & `Omit` utility types allow user to create new type by including and excluding some properties respectively. So, we dont need to redefine new type if we use those utilty type in relevant cases. Thus it keeps our code DRY
