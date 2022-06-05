export const filterBySearch = (videos, filters) => {
    
  if (filters.searchTerm) {
    return videos.filter((video) =>
      video.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
    );
  }

  return videos;
};
