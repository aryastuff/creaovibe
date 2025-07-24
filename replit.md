# Creaovibe Buildathon Application

## Overview

This is a full-stack React application for the Creaovibe Buildathon 0.1 event. The application serves as a landing page and registration platform for a buildathon focused on Healthtech, Sustainability, and Fintech themes scheduled for August 2025.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with `/api` prefix
- **Development**: Hot reload with Vite integration in development mode
- **Build**: esbuild for production bundling

### Database & ORM
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Database**: PostgreSQL (configured but not yet implemented)
- **Connection**: Neon Database serverless PostgreSQL
- **Schema**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for schema management

## Key Components

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/           # Express backend
├── shared/           # Shared types and schemas
└── migrations/       # Database migration files
```

### UI Components
- **Component Library**: shadcn/ui providing pre-built, accessible components
- **Design System**: "New York" style variant with neutral base colors
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### API Layer
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user CRUD operations (currently in-memory)
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Automatic API request/response logging

### Authentication & Authorization
- **Current State**: Basic user schema defined but not implemented
- **Planned**: Session-based authentication with PostgreSQL session store
- **Security**: Password hashing and session management (to be implemented)

## Data Flow

### Client-Server Communication
1. **API Requests**: Frontend makes HTTP requests to `/api` endpoints
2. **Query Management**: TanStack Query handles caching, background updates, and error states
3. **Error Handling**: Centralized error handling with toast notifications
4. **State Synchronization**: Automatic refetching and cache invalidation

### Data Storage
1. **Schema Definition**: Shared Drizzle schemas between client and server
2. **Type Safety**: End-to-end TypeScript types from database to UI
3. **Validation**: Zod schemas for runtime validation
4. **Current Implementation**: In-memory storage for development

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI & Styling**: Tailwind CSS, Radix UI primitives, class-variance-authority
- **Development**: Vite, TypeScript, esbuild
- **Backend**: Express, Drizzle ORM, Neon Database client
- **Utilities**: date-fns, clsx, nanoid

### Development Tools
- **Type Checking**: TypeScript compiler
- **CSS Processing**: PostCSS with Tailwind and Autoprefixer
- **Hot Reload**: Vite HMR with error overlay
- **Code Quality**: ESLint configuration (to be added)

### Database Tools
- **Drizzle Kit**: Schema management and migrations
- **Connection Pooling**: Neon serverless client with connection pooling
- **Session Store**: connect-pg-simple for PostgreSQL sessions

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production
4. **Environment**: NODE_ENV-based configuration

### Development Workflow
- **Local Development**: `npm run dev` starts Express with Vite middleware
- **Type Checking**: `npm run check` for TypeScript validation
- **Database**: `npm run db:push` for schema synchronization
- **Hot Reload**: Automatic restart on server changes, HMR for client

### Production Considerations
- **Database**: Requires PostgreSQL connection via DATABASE_URL
- **Static Serving**: Express serves built frontend assets
- **Process Management**: Single Node.js process handling both API and static files
- **Security**: HTTPS, secure headers, and input validation needed

### Scaling Architecture
- **Database**: PostgreSQL with connection pooling via Neon
- **Caching**: TanStack Query provides client-side caching
- **CDN**: Static assets can be served via CDN
- **Monitoring**: Request logging and error tracking integration points available