export class Dictator {
  firstName: string;
  lastName: string;
  birthYear: number;
  deathYear: number;
  description: string;
  constructor(
    firstName: string,
    lastName: string,
    birthYear: number,
    deathYear: number,
    description: string,
  ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.deathYear = deathYear;
      this.description = description;
  }
}
