const mongoose = require("mongoose");

const Movie = require("./movies");

const URI = "mongodb+srv://teasmi:IlinBistra6@cluster06.25ug7.mongodb.net/gr-4007?retryWrites=true&w=majority&appName=Cluster06";

mongoose
  .connect(URI)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

async function movie1() {
    try {
        const movie = new Movie({
            title: "The Brutalist",
            director: "Brady Corbet",
            releaseDate: "20.12.2024",
            genre: "historical drama",
            oscars: 3
        });
        await movie.save();
        console.log("Movie 1 created!")
    } catch (err) {
        console.log(err);
    };
};

//movie1();

async function movie2() {
    try {
        const movie = new Movie({
            title: "Anora",
            director: "Sean Baker",
            releaseDate: "18.10.2024",
            genre: "romance",
            oscars: 5
        });
        await movie.save();
        console.log("Movie 2 created!")
    } catch (err) {
        console.log(err);
    };
};

//movie2();

async function movie3() {
    try {
        const movie = new Movie({
            title: "A Complete Unknown",
            director: "James Mangold",
            releaseDate: "25.12.2024",
            genre: "music drama",
            oscars: 1
        });
        await movie.save();
        console.log("Movie 3 created!")
    } catch (err) {
        console.log(err);
    };
};

//movie3();

async function movie4() {
    try {
        const movie = new Movie({
            title: "Emilia Pérez",
            director: "Jacques Audiard",
            releaseDate: "21.08.2024",
            genre: "musical/crime",
            oscars: 2
        });
        await movie.save();
        console.log("Movie 4 created!")
    } catch (err) {
        console.log(err);
    };
};

//movie4();

async function movie5() {
    try {
        const movie = new Movie({
            title: "The Substance",
            director: "Coralie Fargeat",
            releaseDate: "20.09.2024",
            genre: "horror/sci-fi",
            oscars: 1
        });
        await movie.save();
        console.log("Movie 5 created!")
    } catch (err) {
        console.log(err);
    };
};

//movie5();

async function movie6() {
    try {
        const movie = new Movie({
            title: "Conclave",
            director: "Edward Berger",
            releaseDate: "25.10.2024",
            genre: "thriller",
            oscars: 1
        });
        await movie.save();
        console.log("Movie 6 created!")
    } catch (err) {
        console.log(err);
    };
};

//movie6();

async function movie7() {
    try {
        const movie = new Movie({
            title: "Wicked",
            director: "Jon M. Chu",
            releaseDate: "22.11.2024",
            genre: "musical/fantasy",
            oscars: 2
        });
        await movie.save();
        console.log("Movie 7 created!")
    } catch (err) {
        console.log(err);
    };
};

//movie7();

async function movie8() {
    try {
        const movie = new Movie({
            title: "Dune: Part Two",
            director: "Denis Villeneuve",
            releaseDate: "28.02.2024",
            genre: "sci-fi/adventure",
            oscars: 2
        });
        await movie.save();
        console.log("Movie 8 created!")
    } catch (err) {
        console.log(err);
    };
};

// movie8();

//9

async function readMovie() {
    try {
const foundMovie = await Movie.findOne({
    director: "Jon M. Chu",
    genre: "musical/fantasy"
});

console.log("Found movie", foundMovie);
    } catch (err) {
        console.log(err);
    };
};

//readMovie()


// //10 

async function sortedMovies() {
    try {
const sortedMoviesByOscarsWon = await Movie.find().sort({
    oscars: -1, 
});

console.log("The list complies in the next order: ", sortedMoviesByOscarsWon);
    } catch (err) {
        console.log(err);
    };
};

//sortedMovies()


// //11

async function updateMovie() {
    try {
const updateOscarsNum = await Movie.updateOne(
    {title: "A Complete Unknown"}, 
    { $set: { oscars: 0 } } );

console.log("The updated movie list is: ", updateOscarsNum);
    } catch (err) {
        console.log(err);
    };
};

//updateMovie()


// //12

async function removeMovie() {
    try {
const removeMovieWithoutOscars = await Movie.deleteOne({
    _id: "67d213bc078089e645a3463b" 
});

console.log("Movie deleted", removeMovieWithoutOscars);
    } catch (err) {
        console.log(err);
    };
};

//removeMovie()


// //13

async function movieList() {
    try {
const consolidatedMovieList = await Movie.find().sort({
    oscars: -1, 
});

console.log("Consolidated movie list: ", consolidatedMovieList);
    } catch (err) {
        console.log(err);
    };
};

//movieList()

