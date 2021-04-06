/**
 * Person object that will be used in different functions
 */
interface Person {
  firstName: string;
  // middleName?: string = "kumar"; //! interface cannot have an initialiser
  lastName: string;
}
/**
 * Interfaces implementation for the TS
 */
export function interfaceDemo(person: Person) {
  console.log(
    "🚀 ~ file: interfaces.ts ~ line 12 ~ interfaceDemo ~ person",
    person
  );
}

/**
 * ? This is using the person Object but with inline declaration of the object type
 * ? problem here could be that if we are going to add more attributes this will become a non-extendible solution.
 * ? and if there are multiple functions like this, It will be nightmare
 * @param person
 */
export function nonInterfaceDemo(person: {
  firstName: string;
  // middleName?: string = "kumar"; //! type cannot have an value
  middleName?: string;
  lastName: string;
}) {
  console.log(`${person.firstName} ${person.lastName}`);
}
