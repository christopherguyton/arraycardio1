const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1687, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Hanna', last: 'Hammarstrom', year: 1829, passed: 1909},
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Beneson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steven', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk',
'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const fightingGames = [
    {title: 'Street Fighter 2', releaseYear: 1991, homeConsole: 'Super Nintendo'},
    {title: 'Mortal Kombat', releaseYear: 1993, homeConsole: 'Sega Genesis'},
    {title: 'Tekken 3', releaseYear: 1997, homeConsole: 'Sony Playstation'},
    {title: 'Fatal Fury 2', releaseYear: 1993, homeConsole: 'Super Nintendo'},
    {title: 'Art of Fighting', releaseYear: 1992, homeConsole: 'Sega Genesis'},
    {title: 'Battle Arena Toshinden', releaseYear: 1996, homeConsole: 'Sony Playstation'}
]

//Array.prototype.filter()

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599))



const Genesis = fightingGames.filter(fightinggame => (fightinggame.homeConsole == 'Sega Genesis'))


console.table(fifteen)
console.table(Genesis)

//Array.protoype.map()

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last)
console.table(fullNames)

//Array.protoype.sort()

/*const birthDates = inventors.sort(function(a, b) {
 if(a.year > b.year){
     return 1;
 } else {
     return -1;
 }
});*/

const birthDates = inventors.sort((a, b ) => a.year > b.year ? 1 : -1)

console.table(birthDates)


//Array.prototype.reduce()

const totalYearsLived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYearsLived);

//Sort by years lived

const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
   return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest)

//sort people alphabetically by last name

const peopleNames = people.sort(function(lastOne, nextOne){
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1;
})

console.log(peopleNames)

//Sum up the instances of each item in data array

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportation);