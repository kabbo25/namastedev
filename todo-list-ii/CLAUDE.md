# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with hot module replacement
- `pnpm build` - Build production bundle
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm preview` - Preview production build locally

## Technology Stack

- **Frontend**: React v19.1.0 with modern patterns (createRoot, StrictMode)
- **Build Tool**: Vite v7.0.4 with fast HMR and optimized builds
- **Styling**: Tailwind CSS v4.1.11 (utility-first CSS framework)
- **Package Manager**: pnpm
- **Linting**: ESLint v9.30.1 with React-specific plugins

## Architecture Overview

This is a React + Vite application currently in development for todo list functionality. The project follows a component-based architecture with modern React patterns.

### Key Files

- `src/App.jsx` - Main application component (currently contains default Vite counter)
- `src/main.jsx` - Application entry point with React 19 setup
- `src/index.css` - Global styles with Tailwind CSS imports
- `vite.config.js` - Vite configuration with React and Tailwind plugins

### Project Structure

- `src/` - Source code with React components and styles
- `public/` - Static assets served by Vite
- Root config files for Vite, ESLint, and package management

## Development Notes

- Uses ES modules (type: "module" in package.json)
- No testing framework currently configured
- Tailwind CSS v4.1.11 is integrated via Vite plugin for rapid UI development
- ESLint configured with React Hooks and React Refresh plugins
- Project is ready for todo list application development