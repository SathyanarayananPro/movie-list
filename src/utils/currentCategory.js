export function currentCategory(data, pathIds) {
  // data- has whole movie array
  // pathIds- has current router paths in array

  // if no path is available then it will return same input
  if (pathIds.length === 0) {
    return data;
  }
  // Each pathIds are individually passed as id
  for (let id of pathIds) {
    // 1) checks if there is any submovies available
    // 2) If available then find matching id with our current id
    const currentMovie = data.submovies?.find(
      (sub) => sub.id.toString() === id
    );

    // If submovies or id is not found then it will return null
    if (!currentMovie) return null;

    // If id is found then current id data is assigned to current
    data = currentMovie;
  }
  // currentMovie will return as data
  return data;
}
