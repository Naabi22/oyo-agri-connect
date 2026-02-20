# Oyo Agri Connect

**Oyo Agri Connect** is a modern, peer-to-peer agricultural equipment marketplace designed specifically for farmers in Oyo State, Nigeria. It facilitates the renting and listing of essential farming machinery, bridging the gap between equipment owners and those in need of tools to grow their operations.

---

## Key Features

- **Localized Marketplace**: Find tractors, harvesters, irrigation pumps, and more, sorted by proximity to your farm.
- **Farmer Dashboard**: A central hub to track current rentals, manage listings, and discover nearby equipment.
- **Visual Booking Flow**: A streamlined, multi-step booking process including duration selection, location pinning, and transport options.
- **Mobile-First Design**: Optimized for use in the field with a clean, high-contrast UI and intuitive navigation.
- **Shared Component Architecture**: Optimized for maintainability with reusable UI patterns.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Fonts**: Geist Sans & Geist Mono

---

## Project Architecture

The project follows a modular structure to ensure scalability and ease of maintenance:

- **`src/app/`**: Contains the page routes and layout logic.
- **`src/components/`**: Houses reusable UI components like `Header`, `BottomNav`, and `StepIndicator`.
- **`src/lib/`**: Centralized logic and data, including `mockData.ts`.
- **`src/types/`**: Shared TypeScript interfaces for consistent data handling.
- **`public/`**: Static assets and icons.

---

## Getting Started

To get the project running locally, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### 2. Installation
Clone the repository and install the dependencies:

```bash
npm install
```

### 3. Run Development Server
Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Essential Commands

- `npm run dev`: Starts the development server.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

---

## Contributing

This project is currently in active development. Feedback and contributions are welcome to help improve the agricultural ecosystem in Oyo State.

---
Built for the farmers of Oyo State.
