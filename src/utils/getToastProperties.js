import { v4 as uuid } from "uuid";
import { MdCheckCircle, MdInfo, MdWarning } from "react-icons/md";

export const getToastProperties = ({ type, desc }) => {
  switch (type) {
    case "SUCCESS":
      return {
        id: uuid(),
        title: "Success",
        desc,
        bgColor: "bg-[#5cb85c]",
        Icon: MdCheckCircle,
      };

    case "INFO":
      return {
        id: uuid(),
        title: "Info",
        desc,
        bgColor: "bg-[#ffb703]",
        Icon: MdInfo,
      };

    case "WARNING":
      return {
        id: uuid(),
        title: "Warning",
        desc,
        bgColor: "bg-[#ef233c]",
        Icon: MdWarning,
      };
  }
};
