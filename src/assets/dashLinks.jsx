import { BiLogOutCircle } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { GiHelp } from "react-icons/gi";
import {
  AiFillFolderOpen,
  AiFillFileText,
  AiFillSetting,
} from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
export const DashLink = [
  {
    path: "/Dashboard",
    display: "Dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    path: "/Orders",
    display: "Orders",
    icon: <AiFillFolderOpen />,
  },
  {
    path: "/Products",
    display: "Products",
    icon: <BsFillBagFill />,
  },
  {
    path: "/Customers",
    display: "Customers",
    icon: <IoIosPeople />,
  },
  {
    path: "/Reports",
    display: "Reports",
    icon: <AiFillFileText />,
  },
  {
    path: "/GetHelp",
    display: "Get Help",
    icon: <GiHelp />,
  },
  {
    path: "/Settings",
    display: "Settings",
    icon: <AiFillSetting />,
  },
  {
    path: "/Logout",
    display: "Logout",
    icon: <BiLogOutCircle />,
  },
];

export default DashLink;
