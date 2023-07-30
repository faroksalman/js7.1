1

function calculateAverageRatings(movies) {
    const averageRatings = [];
  
    for (const movie of movies) {
      const totalRatings = movie.ratings.reduce((sum, rating) => sum + rating, 0);
      const averageRating = totalRatings / movie.ratings.length;
      averageRatings.push(averageRating.toFixed(2));
    }
  
    return averageRatings;
  }
  
  // Example usage:
  const movies = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] },
    { title: "Movie 3", ratings: [9, 9, 10] }
  ];
  
  const averageRatings = calculateAverageRatings(movies);
  console.log(averageRatings); // Output: [8.00, 7.67, 9.33]
  



2

cd
  3


  function createRatingMatrix(movies) {
    const ratingMatrix = [];
  
    for (const movie of movies) {
      ratingMatrix.push(movie.ratings);
    }
  
    return ratingMatrix;
  }
  
  // Example usage:
  const movies = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] }
  ];
  

  4

  
  function countMoviesAboveThreshold(movies, threshold) {
    let count = 0;
    let index = 0;
  
    while (index < movies.length) {
      if (movies[index].rating > threshold) {
        count++;
      }
      index++;
    }
  
    return count;
  }
  
  // Example usage:
  const movies = [
    { title: "Movie 1", rating: 8 },
    { title: "Movie 2", rating: 7 },
    { title: "Movie 3", rating: 9 }
  ];
  
  const ratingThreshold = 8;
  const numberOfMoviesAboveThreshold = countMoviesAboveThreshold(movies, ratingThreshold);
  console.log(numberOfMoviesAboveThreshold); // Output: 2

  