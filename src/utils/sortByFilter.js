export const sortByFilter = (videos, filters) => {

  switch (filters.sortBy) {
    case "MOST_VIEWED":
      return [...videos].sort(
        (videoOne, videoTwo) => videoTwo.views - videoOne.views
      );

    case "MOST_RECENT":
      return [...videos].sort(
        (videoOne, videoTwo) => videoTwo.releaseYear - videoOne.releaseYear
      );

    default:
      return videos;
  }
};
