// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name="Sally") {
 const newlist=drivers.filter(function (names) {
     return names.toLowerCase()===name.toLowerCase();
 })  
 
 return newlist; 
 
}
function fuzzyMatch(drivers,letter="Sa") {
    const filterstring=drivers.filter(element=>element.toLowerCase().indexOf(letter.toLowerCase())===0)
    return filterstring;
}

const drivers1= [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers1,drivername="Sally") {
     const property=drivers1.filter(fil=>fil.name===drivername)
     return property;
}