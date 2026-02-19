import { EquipmentItem } from "../types";

export const categories = ["All", "Tractors", "Plows", "Pumps", "Harvesters", "Sprayers"];

export const equipment: EquipmentItem[] = [
    { name: "Massey Ferguson 375", price: "25,000", location: "Ogbomoso North", dist: "2.4 km", rating: "4.9", image: "🚜", available: true },
    { name: "John Deere W150", price: "45,000", location: "Iseyin", dist: "4.1 km", rating: "4.7", image: "🚜", available: true },
    { name: "Honda GX160 Pump", price: "5,500", location: "Oyo East", dist: "1.2 km", rating: "4.8", image: "💧", available: true },
    { name: "Falcon Disc Plow", price: "12,000", location: "Ogbomoso South", rating: "4.6", image: "🛠️" },
    { name: "Manual Sprayer", price: "2,000", location: "Moniya", rating: "4.5", image: "🎒" },
    { name: "Rice Harvester", price: "55,000", location: "Fiditi", rating: "5.0", image: "🌾" },
];
