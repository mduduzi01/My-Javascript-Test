let people = [
    { name: 'hardy', age: 10, favouriteColor: 'blue', hairStyle: 'dread lock' },
    { name: 'vusumuzi', age: 21, favouriteColor: 'red', hairStyle: 'chiskop' },
    { name: 'wandile', age: 65, favouriteColor: 'blue', hairStyle: 'chiskop' },
    { name: 'precious', age: 17, favouriteColor: 'pink', hairStyle: 'braid' },
    { name: 'andisiwe', age: 90, favouriteColor: 'green', hairStyle: 'afro' },
    { name: 'mmapaseka', age: 30, favouriteColor: 'black', hairStyle: 'braid' },
    { name: 'mhlonipheni', age: 20, favouriteColor: 'yellow', hairStyle: 'afro' },
    { name: 'khumbulani', age: 30, favouriteColor: 'blue', hairStyle: 'afro' },
    { name: 'sophie', age: 18, favouriteColor: 'grey', hairStyle: 'braid' },
    { name: 'lucky', age: 32, favouriteColor: 'grey', hairStyle: 'chiskop' },
    { name: 'sithembiso', age: 32, favouriteColor: 'blue', hairStyle: 'chiskop' },
    { name: 'happy', age: 18, favouriteColor: 'white', hairStyle: 'twist' },
    { name: 'selina', age: 26, favouriteColor: 'green', hairStyle: 'chiskop' },
    { name: 'nkosiphendule', age: 30, favouriteColor: 'white', hairStyle: 'chiskop' },
    { name: 'mduduzi', age: 30, favouriteColor: 'green', hairStyle: 'chiskop' },
];

auto.innerHTML=" ";

/* displaying data */

for(let i = 0; i < people.length; i++) {
 document.getElementById("auto").innerHTML += '<li><b>Name: </b>' + people[i].name + ', ' + ' Age: ' + people[i].age + '</li>';
}