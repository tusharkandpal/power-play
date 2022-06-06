import { Link } from "react-router-dom";
import { getViews } from "../../utils/utils";
import { MdLabel } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";

export const VideoCard = ({
  _id,
  title,
  releaseYear,
  singers,
  thumbnail,
  categoryName,
  duration,
  language,
  views,
}) => {
  return (
    <article className="md:w-[18rem] lg:w-[20.5rem] hover:shadow-md hover:shadow-violet-700/50">
      <Link to={`/video/${_id}`} className="relative">
        <img src={thumbnail} loading="lazy" className="rounded-t-md" alt={title} />
        <small className="absolute top-3 p-2 bg-violet-800">
          {getViews(views)}
        </small>
        <small className="absolute right-0 bottom-3 p-2 bg-violet-800">
          {duration}
        </small>
      </Link>
      <div className="bg-neutral-800 p-2 rounded-b-md">
        <h3>{title}</h3>
        <h4 className="text-slate-300 flex items-center py-1">
          <GiMicrophone className="mr-1"/> {singers.join(", ")}
        </h4>
        <small className="text-slate-300 flex items-center pt-1">
          <MdLabel className="mr-1"/> {categoryName} • {language} • {releaseYear}
        </small>
      </div>
    </article>
  );
};
