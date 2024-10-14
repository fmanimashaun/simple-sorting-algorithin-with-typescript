# Simple Sorting Algorithm with TypeScript

## Overview

This project demonstrates the implementation of the bubble sort algorithm using abstract classes in TypeScript. The abstract class `Sorter` defines the structure for various collections (like numbers, characters, and linked lists) to implement their own sorting logic while sharing the common sorting algorithm.

## Table of Contents

- [Bubble Sort Algorithm](#bubble-sort-algorithm)
- [Abstract Classes vs. Interfaces](#abstract-classes-vs-interfaces)
- [Linked List Data Structure](#linked-list-data-structure)
- [Project Structure](#project-structure)
- [Classes and Their Responsibilities](#classes-and-their-responsibilities)
- [Usage](#usage)
- [License](#license)

## Bubble Sort Algorithm

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. 

### How It Works

1. Start at the beginning of the list.
2. Compare the first two elements.
3. If the first element is greater than the second, swap them.
4. Move to the next pair of adjacent elements and repeat steps 2 and 3 until the end of the list is reached.
5. Repeat the entire process for the list until no swaps are needed, indicating that the list is sorted.

### Bubble Sort Diagram

Here’s a visual representation of how bubble sort works:

```
Initial Array: [5, 3, 8, 4, 2]

Pass 1:
[5, 3, 8, 4, 2] → Compare 5 and 3 → Swap → [3, 5, 8, 4, 2]
[3, 5, 8, 4, 2] → Compare 5 and 8 → No Swap
[3, 5, 8, 4, 2] → Compare 8 and 4 → Swap → [3, 5, 4, 8, 2]
[3, 5, 4, 8, 2] → Compare 8 and 2 → Swap → [3, 5, 4, 2, 8]

Pass 2:
[3, 5, 4, 2, 8] → Compare 3 and 5 → No Swap
[3, 5, 4, 2, 8] → Compare 5 and 4 → Swap → [3, 4, 5, 2, 8]
[3, 4, 5, 2, 8] → Compare 5 and 2 → Swap → [3, 4, 2, 5, 8]

Pass 3:
[3, 4, 2, 5, 8] → Compare 3 and 4 → No Swap
[3, 4, 2, 5, 8] → Compare 4 and 2 → Swap → [3, 2, 4, 5, 8]

Pass 4:
[3, 2, 4, 5, 8] → Compare 3 and 2 → Swap → [2, 3, 4, 5, 8]

Final Sorted Array: [2, 3, 4, 5, 8]
```

## Abstract Classes vs. Interfaces

### When to Use Abstract Classes

Abstract classes are used when you want to define a common base class for a group of related classes. They allow you to provide default behavior and shared functionality while requiring subclasses to implement specific methods. Use abstract classes when:

- You want to share code among multiple classes.
- You need to define common properties and methods.
- You want to provide a partial implementation of a class that can be extended by subclasses.

### Differences from Interfaces

- **Implementation**: 
  - **Abstract Classes** can have both abstract methods (without implementation) and concrete methods (with implementation). This allows you to provide some default functionality that can be reused by subclasses.
  - **Interfaces** can only define method signatures and cannot provide any implementation.

- **Inheritance**: 
  - A class can extend only one abstract class (single inheritance), but it can implement multiple interfaces (multiple inheritance).
  
- **Fields**: 
  - Abstract classes can have fields and constructors, allowing you to store state. Interfaces cannot have fields; they only define contracts for methods.

### When to Use Interfaces

Use interfaces when you want to define a contract that multiple classes can implement. This is especially useful in the following scenarios:

- You want to enforce a contract for classes without imposing any class hierarchy.
- You want to define polymorphic behavior across different classes that do not share a common base class.
- You need to support multiple implementations without worrying about shared code.

## Linked List Data Structure

A linked list is a linear data structure where each element (node) points to the next one, forming a chain. Unlike arrays, linked lists do not store elements in contiguous memory locations, which allows for efficient insertion and deletion operations.

### Structure of a Linked List

Each node in a linked list contains two components:

1. **Data**: The value stored in the node.
2. **Next**: A pointer/reference to the next node in the sequence.

### Diagram of a Linked List

Here’s a visual representation of a linked list containing three nodes:

```
    +-------+    +-------+    +-------+
    |  Data |    |  Data |    |  Data |
    |   10  |    |   20  |    |   30  |
    +-------+    +-------+    +-------+
        |            |            |
        |            |            |
    +-------+    +-------+    +-------+
    |  Next |    |  Next |    |  Next |
    |  Node |    |  Node |    |  Node |
    +-------+    +-------+    +-------+
        |            |            |
       null        null         null
```

### Advantages of Linked Lists

- **Dynamic Size**: Linked lists can grow and shrink in size, allowing for efficient memory usage.
- **Ease of Insertion/Deletion**: Inserting or deleting nodes does not require shifting elements, making these operations faster compared to arrays.

### Disadvantages of Linked Lists

- **Memory Overhead**: Each node requires additional memory for storing the pointer/reference.
- **Sequential Access**: Accessing elements is slower than arrays since linked lists do not allow direct indexing; you must traverse from the head node.

## Project Structure

```
/simple-sorting-algorithm-with-typescript
│
├── src
│   ├── modules
│   │   ├── CharactersCollection.ts
│   │   ├── LinkedList.ts
│   │   └── NumbersCollection.ts
│   └── Sorter.ts
├── index.ts
├── package.json
└── README.md
```

### Classes and Their Responsibilities

- **Sorter (Abstract Class)**: 
  - Defines the abstract properties and methods that all collections must implement, such as `length`, `compare`, and `swap`.
  - Contains the `sort` method that implements the bubble sort algorithm.

- **NumbersCollection (Class)**: 
  - Implements the `Sorter` class for sorting an array of numbers.
  - Provides specific implementations for `compare` and `swap`.

- **CharactersCollection (Class)**: 
  - Implements the `Sorter` class for sorting a string of characters.
  - Provides specific implementations for `compare` and `swap`.

- **LinkedList (Class)**: 
  - Implements the `Sorter` class for sorting a linked list of numbers.
  - Provides specific implementations for `compare` and `swap`, as well as methods to add nodes and retrieve the length of the list.

## Usage

To run the project:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd simple-sorting-algorithm-with-typescript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project:
   ```bash
   npm run start
   ```

This command will build the TypeScript files and run the compiled code simultaneously, creating instances of the collections, sorting them, and printing the sorted results to the console.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.