import { AiFillHome } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { BsBriefcase } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export const sidebarData = [
  {
    id: 0,
    title: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 1,
    title: "Graph",
    icon: <BsGraphUp />,
  },
  {
    id: 2,
    title: "Analytics",
    icon: <AiOutlineRise />,
  },
  {
    id: 3,
    title: "Manage",
    icon: <BsBriefcase />,
  },
  {
    id: 4,
    title: "Feedback",
    icon: <VscFeedback />,
  },
  {
    id: 5,
    title: "Report",
    icon: <MdReport />,
  },
  {
    id: 6,
    title: "Logout",
    icon: <FiLogOut />,
  },
];
