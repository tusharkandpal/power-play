export const filterByCategory = (videos, filters) => {
    
  if (filters.categoryName === "All") return videos;
  
  return videos.filter((video) => video.categoryName === filters.categoryName);
};
