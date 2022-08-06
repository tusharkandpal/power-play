import { useSelector, useDispatch } from "react-redux";
import {
  addToast,
  setShowModal,
  postToPlaylists,
  postVideoToPlaylist,
  deleteVideoFromPlaylist,
} from "../../features/features";

export function Modal(video) {
  const { showModal } = useSelector((store) => store.displayTimeline);
  const { playlists } = useSelector((store) => store.playlistTimeline);
  const dispatch = useDispatch();

  const createPlaylist = (e) => {
    const playlistName = e.target.value.trim();
    if (e.key === "Enter") {
      if (playlistName === "")
        dispatch(
          addToast({
            type: "INFO",
            desc: "Please enter a playlist name !",
          })
        );
      else if (
        playlists.some(
          (playlist) =>
            playlist.title.toLowerCase() === playlistName.toLowerCase()
        )
      )
        dispatch(
          addToast({
            type: "INFO",
            desc: "Playlist already exists !",
          })
        );
      else dispatch(postToPlaylists({ title: playlistName }));

      e.target.value = "";
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="flex items-center justify-center fixed inset-0 z-10 p-2"
          onClick={() => dispatch(setShowModal(false))}
        >
          <div
            className="flex flex-col w-96 min-h-[18rem] rounded-lg bg-neutral-800 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-2xl">Create a playlist</p>
            <input
              type="text"
              className="my-2 bg-neutral-700 outline-0 rounded-md p-1 border-2 border-neutral-800 focus:border-violet-600"
              onKeyPress={createPlaylist}
            />
            <small className="ml-1 text-neutral-600">
              (Press ENTER to add)
            </small>
            {playlists.length !== 0 && (
              <div className="my-3">
                <p className="text-xl">Select any playlist(s): </p>
                <div className="flex flex-col">
                  {playlists.map((playlist) => (
                    <div key={playlist._id}>
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={playlist.videos.some(
                          (playlistVideo) => playlistVideo._id === video._id
                        )}
                        id={playlist.title}
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            dispatch(
                              postVideoToPlaylist({
                                playlistId: playlist._id,
                                video,
                              })
                            );
                          } else {
                            dispatch(
                              deleteVideoFromPlaylist({
                                playlistId: playlist._id,
                                videoId: video._id,
                              })
                            );
                          }
                        }}
                      />
                      <label
                        className="cursor-pointer my-1"
                        key={playlist._id}
                        htmlFor={playlist.title}
                      >
                        {playlist.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <button
              className="mt-auto p-2 bg-red-600 rounded-md"
              type="button"
              onClick={() => dispatch(setShowModal(false))}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
