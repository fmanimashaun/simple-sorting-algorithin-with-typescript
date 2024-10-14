import { NumbersCollection } from './modules/NumbersCollection';
import { CharactersCollection } from './modules/CharactersCollection';
import { LinkedList } from './modules/LinkedList';


const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Xaayb');
const LinkedListCollection = new LinkedList();
LinkedListCollection.add(500);
LinkedListCollection.add(-10);
LinkedListCollection.add(-3);
LinkedListCollection.add(4);


numbersCollection.sort();
charactersCollection.sort();
LinkedListCollection.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
LinkedListCollection.print();