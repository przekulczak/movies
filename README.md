# Movie Search Application

## Local Development (Frontend Only)

To run the project locally:

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

## Testing

The project includes both unit tests and end-to-end tests:

- Run unit tests:
```bash
pnpm test
```

- Run tests with UI:
```bash
pnpm test:ui
```

## Features

### Home Page with Search
The main page features a search input and results display. The search works without requiring a form submission - the API query is sent automatically as you type. The search state is maintained in the URL bar, allowing users to bookmark specific searches or share the page with others. Both the API query and URL updates are debounced for better performance.

### Navigation
- Back button functionality to return to the previously visited page
- Favorite button available in all views throughout the application

### Pagination
Pagination is handled in the results list component and is also URL-based.

### Empty Results Handling
In the details view, only available movie data is displayed. If a poster is not available, a placeholder is shown in all views.

### Caching
RTK Query's built-in caching mechanism is used for query results.

### Styling
- Uses styled-components
- Colors are stored in a reusable object (could also use styled-components Theme)
- Reusable RWD queries

### Error Handling
Errors are handled using react-error-boundary, showing errors both during development and data fetching.

## Backend and Containerization

The project includes an experimental simple backend. In production, API communication should not be direct from the frontend - even storing the key in an ENV file could give unauthorized access. The version that connects to the API through the backend can be run using:

```bash
pnpm dev:backend
```

from the frontend folder.

### Running with Docker

To run both frontend and backend in containers:

1. From the root directory:
```bash
docker compose up --build
```

This will start both applications in parallel.

Happy testing!
