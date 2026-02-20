import { EquipmentItem } from "../types";

export const categories = ["All", "Tractors", "Plows", "Pumps", "Harvesters", "Sprayers"];

export const equipment: EquipmentItem[] = [
    {
        name: "Massey Ferguson 375",
        price: "25,000",
        location: "Ogbomoso North",
        dist: "2.4 km",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1594913785162-e678563c4583?auto=format&fit=crop&q=80&w=1000",
        available: true
    },
    {
        name: "John Deere W150",
        price: "45,000",
        location: "Iseyin",
        dist: "4.1 km",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1530268577195-2661858c2a9c?auto=format&fit=crop&q=80&w=1000",
        available: true
    },
    {
        name: "Honda GX160 Pump",
        price: "5,500",
        location: "Oyo East",
        dist: "1.2 km",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
        available: true
    },
    {
        name: "Falcon Disc Plow",
        price: "12,000",
        location: "Ogbomoso South",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1592985188544-7738bc865a7d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "Manual Sprayer",
        price: "2,000",
        location: "Moniya",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "Rice Harvester",
        price: "55,000",
        location: "Fiditi",
        rating: "5.0",
        image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=1000"
    },
];
