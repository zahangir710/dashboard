import { VscFeedback } from "react-icons/vsc";
import { MdReport } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
export const recentData = [
  {
    id: 0,
    title: "Feedback Recieved",
    details: "Feature needs to be updated",
    icon: <VscFeedback />,
  },
  {
    id: 1,
    title: "Bug Reported",
    details: "Bug found in the app",
    icon: <MdReport />,
  },
  {
    id: 2,
    title: "Data Deleted",
    details: "Redundant data deleted",
    icon: <BsTrash />,
  },
];
