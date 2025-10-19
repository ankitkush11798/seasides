# Project Setup Documentation

## Development Commands

```bash
# Development
npm run dev

# Building 
npm run build

# Linting & Formatting
npm run lint          # Check for linting errors
npm run lint:fix      # Auto-fix linting errors 
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting

# Auditing
npm audit             # Check for security vulnerabilities
npm run check-updates # Check for outdated packages
```

## Code Quality Setup

### ESLint Configuration

- Strict ESLint rules with React, accessibility, and import checks
- Automatic code formatting and error detection
- Special overrides for unused components

### Husky Pre-commit Hooks

- Automatically runs `lint-staged` before each commit
- Ensures code quality and formatting standards
- Prevents committing code that doesn't meet standards

### Lint-staged Configuration

- Runs ESLint with auto-fix on JS/JSX/TS/TSX files
- Runs Prettier on all supported file types
- Only processes staged files for faster execution

### Prettier Configuration

- Consistent code formatting across the project
- 120 character line length
- Single quotes, no trailing commas
- 2-space indentation

## Pre-deployment Checklist

1. Run `npm run build` to ensure production build works
2. Run `npm run lint` to check for any linting errors
3. Run `npm run format:check` to verify formatting
4. Test the application functionality

## Vercel Deployment

The project is ready for Vercel deployment with:

- Optimized build configuration
- Strict code quality enforcement
- Automated formatting and linting
- Pre-commit hooks for quality assurance

## Component Organization 

- `components/layout/` - Layout components (navbar, footer, etc.)
- `components/home/` - Home page specific components
- `components/about/` - About page components
- `components/gallery/` - Gallery components
- `components/shared/` - Reusable components
- `components/unused/` - Unused components (relaxed linting rules)
