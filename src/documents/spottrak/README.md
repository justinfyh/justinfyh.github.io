# SpotTrak

An application that provides users with personalized listening insights and the ability to curate custom playlists, offering a comprehensive and engaging experience within the world of Spotify music.

## Features

- Personalized listening insights
- Playlist creation and management
- Seamless Spotify authentication

## Technologies Used

- React
- Vite
- Spotify API
- Tailwindcss

## Roadblocks

Difficult to set up and run api requests on a server as CORS restricts redirecting to the spotify authentication page.
Thus, page is currently run on client-side

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

_Repository is currently not public_

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd [project-directory]`
3. Install dependencies: `npm install`

### Configuration

1. Obtain Spotify API credentials (client ID, client secret) from the Spotify Developer Dashboard.
2. Update the `.env` file with your Spotify API credentials:

   ```env
   REACT_APP_SPOTIFY_CLIENT_ID=[Your Spotify Client ID]
   REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000 # Update if using a different port
   ```

## Development

Run the development server:

`npm run dev`

Open http://localhost:5173 in your browser.
