const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const oldAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
        return oldAge < personAge ? person : oldest;
    });
};

const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
    {
      name: 'Bob',
      yearOfBirth: 1920,
      yearOfDeath: 2000
    },
    {
      name: 'Chris',
      yearOfBirth: 1980
    }
  ];
  
  console.log(findTheOldest(people)); 

// Do not edit below this line
module.exports = findTheOldest;
