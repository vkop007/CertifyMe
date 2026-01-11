# Contributing to CertifyMe

Thank you for your interest in contributing to CertifyMe! We welcome contributions from the community. Please follow these guidelines to ensure a smooth contribution process.

## Code of Conduct

Please be respectful and constructive in all interactions with other contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the Issues section
2. If not, create a new issue with:
   - A clear title
   - Detailed description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue with:
   - A clear title describing the feature
   - Detailed description of the use case
   - Any relevant examples or mockups

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit with clear messages: `git commit -m 'Add feature: description'`
5. Push to your fork: `git push origin feature/your-feature-name`
6. Create a pull request with:
   - Clear title describing the changes
   - Detailed description of what was changed and why
   - Reference to any related issues
   - Screenshots for UI changes

## Development Setup

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build
```

## Coding Standards

- Use TypeScript for type safety
- Follow the existing code style
- Write clear, descriptive variable and function names
- Add comments for complex logic
- Ensure your code passes linting: `bun run lint`

## Testing

Please ensure:
- Your changes don't break existing functionality
- Add tests for new features if applicable
- Test across different browsers and devices

## Commit Messages

Use clear and descriptive commit messages:
- `feat: Add new feature`
- `fix: Fix bug description`
- `docs: Update documentation`
- `style: Update styling`
- `refactor: Refactor code`
- `test: Add or update tests`

## Pull Request Process

1. Ensure your PR title and description are clear
2. Link related issues
3. Provide screenshots for UI changes
4. Wait for code review
5. Address any feedback
6. Merge once approved

## Questions?

Feel free to open an issue or reach out to the maintainers. We're here to help!

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
