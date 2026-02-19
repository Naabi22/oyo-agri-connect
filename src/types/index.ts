export interface EquipmentItem {
  name: string;
  price: string;
  location?: string;
  dist?: string;
  rating: string;
  image?: string;
  available?: boolean;
}

export type NavItem = "home" | "search" | "bookings" | "equipment" | "profile";
