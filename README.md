# Video Library - Power Play 📺

Power Play is a video library with full-on entertaining music videos.

👉 [Live Link](https://power-play.netlify.app/)

## **Features**

- ### **Home Page**

  - Landing page has two fixed `Navbar`, `Sidebar` & one dynamic `Home` sections.
  - Navbar consists of `Brand Icon`, `Searchbar` & `Login/Logout` button.
  - Sidebar consists of Home & other pages available.
  - Home includes a `Play Here` call-to-action button which redirects to `Trending` page.
  - Throughout the app, `Toasts` are shown based on user actions, divided into `SUCCESS`, `INFO` & `WARNING` toast types.

- ### **Trending Page**

  - Trending page consists of a `category chips` + `sort-by dropdown`, & all videos available.
  - Sorting can be done based on `MOST VIEWED` & `MOST RECENT`. Additional option `Clear All` to clear all applied filters (includes `Search` also).
  - A Video Card has thumbnail, title, duration, category & other details along with two buttons to `Like/Dislike` & `Add/Remove WatchLater`.

- ### **Video Page**

  - A single video page basically contains a video player & right side contains other videos to explore.
  - At the top, video title & singers are mentioned.
  - Below the video player, the other video details are mentioned such as views, duration, category, language, release year.
  - Plus, 3 buttons : `Like/Dislike`, `Add/Remove WatchLater` & `Add to Playlist`
  - Clicking on `Add to playlist` opens up a modal to create a new playlist, and add/remove any video to a specific playlist.

- ### **Likes Page**

  - Likes page lists all the liked videos of the user.
  - Video Card has two buttons `Dislike` & `Add/Remove WatchLater`.

- ### **Watch Later Page**

  - Watch Later page lists all the videos added to watch later by the user.
  - Video Card again has the same two buttons `Like/Dislike` & `Add/Remove WatchLater`.

- ### **Playlists Page**

  - Playlists page lists all the playlists containing videos added by the user.
  - Video Card has two buttons `Like/Dislike` & `Remove from Playlist`.
  - Additionally, each playlist has a `Delete Playlist` button present.

- ### **History Page**

  - History page lists all the videos played by the user atleast once.
  - Video Card has two buttons `Like/Dislike` & `Remove from History`.
  - Additionally, a `Clear History` button is present.

- ### **Auth Page: Sign-up & Login**

  - User can switch between `Sign-Up` & `Login` tabs.
  - One can signup with new credentials or login via existing one.
  - `Guest Login` is also available.

- ### **Responsive**

## **Tech Stack**

### CSS Framework - Tailwind CSS

### JS Library - ⚛️

### State Management - Redux-Toolkit

## **Acknowledgements**

- [MockBee](https://mockbee.netlify.app/)
