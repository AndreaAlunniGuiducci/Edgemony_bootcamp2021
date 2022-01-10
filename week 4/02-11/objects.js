const movie = {
    title: 'free guy',
    year: 2021,
    cast: ['Ryan Reinolds', 'Jodie Comer'],
    details: {
        cameos: true,
        isFunny: true,
        realistic: false
    }
};
movie.director = 'shawn levy';
console.log(movie);
console.log(movie.title);
console.log(movie.cast);
console.log(movie.details.cameos);
