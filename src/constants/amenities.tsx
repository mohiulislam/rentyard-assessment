// --- Icon Imports from React-Icons ---
// Imports are now organized alphabetically for better readability.
import { AiFillCar } from "react-icons/ai";

import { BsArrowsExpand } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaFireExtinguisher } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import {
  GiForest,
  GiWoodPile,
  GiFireplace,
  GiFirstAidKit,
} from "react-icons/gi";
import { MdBalcony, MdLocalLaundryService, MdDeck } from "react-icons/md";
import { RiAlarmWarningLine } from "react-icons/ri";
import { TbAirConditioning, TbWind } from "react-icons/tb";

// --- Type Definition for a Single Amenity ---
// This ensures every amenity in our list has a consistent structure.
export interface Amenity {
  label: string;
  icon: React.ReactNode;
}

// --- Master List of All Available Amenities ---
// This array is exported so it can be used by any component that needs this data.
export const allAmenities: Amenity[] = [
  { label: "Air conditioning", icon: <TbAirConditioning size={20} /> },
  { label: "Cable ready", icon: <FiTv size={20} /> },
  { label: "Ceiling fan", icon: <TbWind size={20} /> },
  { label: "High ceilings", icon: <BsArrowsExpand size={20} /> },
  { label: "Private balcony", icon: <MdBalcony size={20} /> },
  { label: "Refrigerator", icon: <CgSmartHomeRefrigerator size={20} /> },
  { label: "Wooded views", icon: <GiForest size={20} /> },
  { label: "W/D hookup", icon: <MdLocalLaundryService size={20} /> },
  { label: "Hardwood Floor (home)", icon: <GiWoodPile size={20} /> },
  { label: "Fireplace (home)", icon: <GiFireplace size={20} /> },
  { label: "First aid kit", icon: <GiFirstAidKit size={20} /> },
  { label: "Carbon monoxide alarm", icon: <RiAlarmWarningLine size={20} /> },
  { label: "Expanded patios (home)", icon: <MdDeck size={20} /> },
  { label: "Free parking on premises", icon: <AiFillCar size={20} /> },
  { label: "Fire extinguisher", icon: <FaFireExtinguisher size={20} /> },
];
