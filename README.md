# Dominik Cichon - Portfolio

This repository contains the code for my personal portfolio website available at [dominik-cichon.de](https://dominik-cichon.de).

## Access Control System

The website is protected by a simple access control system that requires an access code to view the content.

### Authentication Methods

There are three ways to authenticate:

1. **Access Page Form**:
   - Visit the access page at [dominik-cichon.de/access](https://dominik-cichon.de/access)
   - Enter the access code: `DOM15APRO`
   - Click Submit

2. **URL Parameter**:
   - Add `?accesscode=DOM15APRO` to any URL
   - Example: [dominik-cichon.de/?accesscode=DOM15APRO](https://dominik-cichon.de/?accesscode=DOM15APRO)
   - You'll be redirected to a clean URL after successful authentication

3. **Cookie Authentication**:
   - Once authenticated, an HTTP-only cookie is set
   - This cookie is valid for 7 days, allowing you to return without re-entering the access code

### How It Works

The authentication system uses:
- Client-side validation for the access form
- Edge middleware for blocking unauthorized access
- HTTP-only cookies for persistent authentication
- URL parameter support for direct access

### Technical Implementation

- The access control is implemented using Next.js middleware
- Authentication state is stored in an HTTP-only cookie named `access_token`
- The middleware runs on all non-public routes and redirects unauthenticated users to the access page
- When using a URL parameter, the middleware sets the cookie and redirects to a clean URL

## Development

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the production version
npm run build

# Start the production server
npm start
```