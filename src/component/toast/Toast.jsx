import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToast } from "../../features/features";

export const Toast = () => {
  const { toastList } = useSelector((store) => store.displayTimeline);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        dispatch(removeToast(toastList[0].id));
      }
    }, 1800);
    return () => {
      clearInterval(interval);
    };
  }, [toastList]);

  return (
    <div className="absolute bottom-3 right-3 flex flex-col gap-2">
      {toastList.length !== 0 &&
        toastList.map(({ id, title, desc, bgColor, Icon }) => (
          <span
            title={title}
            className={`w-72 text-center ${bgColor} text-neutral-800 bottom-right p-2 rounded-md`}
            key={id}
          >
            <Icon className="inline-block" size={20} />{" "}
            <span dangerouslySetInnerHTML={{ __html: desc }}></span>
          </span>
        ))}
    </div>
  );
};
