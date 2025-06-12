# JSONPlaceholder API Clone

This project consists of two parts: a Backend API that mimics JSONPlaceholder functionality and a Frontend application for user management.

## Project Structure

```
.
├── Backend/           # Spring Boot application
│   ├── src/          # Source code
│   ├── pom.xml       # Maven configuration
│   └── Dockerfile    # Backend container configuration
│
└── Frontend/         # React application
    ├── src/          # Source code
    ├── package.json  # NPM configuration
    └── public/       # Static files
```

## Prerequisites

- Java 11 or later
- Node.js 14 or later
- Docker and Docker Compose
- Maven
- npm

## Backend Setup

The Backend is a Spring Boot application that provides REST API endpoints similar to JSONPlaceholder.

### Running with Docker

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Build and run using Docker Compose:
   ```bash
   docker-compose up --build
   ```

The API will be available at `http://localhost:8080`

### Running Locally

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

## Frontend Setup

The Frontend is a React application with TypeScript that provides a user interface for managing users.

### Running Locally

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

### Building for Production

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Build the project:
   ```bash
   npm run build
   ```

The build artifacts will be stored in the `build/` directory.

## Features

### Backend
- RESTful API endpoints for users, posts, comments, albums, photos, and todos
- JWT-based authentication
- PostgreSQL database
- Docker containerization

### Frontend
- User list display with table layout
- Detailed user information in modal
- User management (view and delete)
- Responsive design
- Google Maps integration for user locations
- Modern UI with animations

## API Endpoints

The Backend provides the following endpoints:

- `/api/users` - User management
- `/api/posts` - Post management
- `/api/comments` - Comment management
- `/api/albums` - Album management
- `/api/photos` - Photo management
- `/api/todos` - Todo management
- `/api/auth` - Authentication endpoints

## Development

### Backend Development
- Spring Boot 2.7.x
- Spring Security
- Spring Data JPA
- PostgreSQL
- JWT Authentication

### Frontend Development
- React 18
- TypeScript
- CSS Modules
- JSONPlaceholder API integration

## Troubleshooting

### Common Issues

1. Port conflicts:
   - Backend runs on port 8080
   - Frontend runs on port 3000
   - PostgreSQL runs on port 5432

2. Docker issues:
   - Make sure Docker daemon is running
   - Check if ports are not in use
   - Try removing existing containers: `docker-compose down`

3. Frontend build issues:
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 
