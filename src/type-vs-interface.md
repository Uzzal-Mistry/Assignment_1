# TypeScript: Type Aliases vs. Interfaces

## Introduction

In TypeScript types alias and interface are two different ways to describe data structure. They look like almost similar in raw objects. Understanding what is the different between them helps use in right situation.

## Key Differences

### 1. Declaration merging

Interfaces with the same name are merged automatically. Type alias can not.

```ts
interface Laptop {
  name: string;
}

interface Laptop {
  color: string;
  price: number;
}

const laptop: Laptop = {
  name: "ThinkPad",
  color: "black",
  price: 75,
};
```

### 2. Extension Syntax
Interface use `extends`, while types combine with intersection (`&`).


```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Rex",
  breed: "Labrador",
};

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
};
```

### 3. Flexibility
A type can name unions, tuples, and primitives. An interface only describe objects.

```ts
type ID = string | number;
type Role = "admin" | "user" | "guest";
type Point = [number, number];
```

## When to use each

- Use an **interface** for object shapes, especially when you want declaration merging or expect the interface to be extended.
- Use a **type alias** for unions, tuples, primitives, and other types that cannot be expressed with an interface.

## Conclusion

Neither is better. Interface for objects, and reach for type when need its extra expressive power.