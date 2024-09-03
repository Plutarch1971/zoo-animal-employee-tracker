import ZooAnimals from "../interfaces/ZooAnimals";

class Animal implements ZooAnimals{
    species :string;
    hungry : boolean;
    weight :number;
    amount: number;

    constructor(
        species: string,
        hungry: boolean, 
        weight: number, 
        amount: number
    ){
        this.species = species;
        this.hungry = hungry;
        this.weight = weight;
        this.amount = amount;
    }



makeRollCall() {
    return `${this.amount} ${this.species}`;
} // a method that returns how many animals of that species are in the zoo and 
}
