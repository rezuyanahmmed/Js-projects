const developer = { name: 'Rizuyan', age: 20, kingdom: 'Cumilla' }
Object.freeze(developer) // ekdom 1st e frezze kora mane,er pore oporer object er kichui amra frezze korar pore change korte parbo na...

Object.seal(developer);

delete developer.age; // kono ek property delete korar jonno...
console.log(developer);
