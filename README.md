# Supabase + Prisma Todo App

This is a simple Todo application built with Supabase and Prisma.

## Features
- Add and delete todos
- Uses Supabase for authentication and database
- Prisma as the ORM

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn
- Supabase account

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd supabase-prisma-todo
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in your Supabase credentials.

4. Run database migrations (if using Prisma):
   ```sh
   npx prisma migrate dev
   ```

5. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## Project Structure
- `app/` - Main application code
- `components/` - React components
- `prisma/` - Prisma schema and migrations
- `generated/` - Auto-generated files (ignored by git)

## License
MIT
