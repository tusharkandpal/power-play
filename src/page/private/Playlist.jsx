import { Fragment, useEffect } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { loadPlaylists, deleteFromPlaylists } from "../../features/features";
import { VideoCard } from "../../component/component";

export const Playlist = () => {
  const { sidebarToggle } = useSelector((store) => store.displayTimeline);
  const { playlists, status } = useSelector((store) => store.playlistTimeline);
  const dispatch = useDispatch();

  useEffect(() => {
    if (playlists.length === 0 && status === "idle") {
      dispatch(loadPlaylists());
    }
  }, [dispatch, status]);

  const isVideosInPlaylistsNone = playlists.every(
    (playlist) => playlist.videos.length === 0
  );

  return (
    <div
      className={`${
        sidebarToggle && "hidden"
      } md:block grow p-3 overflow-y-auto bg-neutral-700`}
    >
      <p className="text-3xl pb-4">Playlists</p>
      <div className="flex flex-col flex-wrap items-start justify-center md:justify-start gap-2">
        {status === "loading" ? (
          <span>Loading...Please wait</span>
        ) : playlists.length === 0 ? (
          <p className="text-lg pl-2">No playlist yet ! 🥺</p>
        ) : isVideosInPlaylistsNone ? (
          <p className="text-lg pl-2">No video in existing playlists ! 🥺</p>
        ) : (
          playlists.map(
            (playlist) =>
              playlist.videos.length !== 0 && (
                <Fragment key={playlist._id}>
                  <div className="flex justify-between w-full">
                    <p className="text-2xl pl-2">{playlist.title}</p>
                    <MdDeleteSweep
                      size={40}
                      className="text-red-700 bg-neutral-800 p-2 rounded-md cursor-pointer"
                      title="Delete Playlist"
                      onClick={() =>
                        dispatch(deleteFromPlaylists(playlist._id))
                      }
                    />
                  </div>
                  <div className="flex items-start flex-wrap gap-3 mb-3">
                    {playlist.videos.map((playlistVideo) => (
                      <VideoCard
                        key={playlistVideo._id}
                        {...playlistVideo}
                        playlistId={playlist._id}
                      />
                    ))}
                  </div>
                </Fragment>
              )
          )
        )}
      </div>
    </div>
  );
};
