# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a terminal-style portfolio website for a DevOps engineer. The site simulates a terminal interface where visitors can interact with commands to explore the portfolio owner's skills, projects, and contact information.

## Architecture

### Core Components

- **index.html**: Main HTML structure with terminal UI and navigation
- **js/terminal.js**: Terminal class that handles user input, command execution, and UI interactions
- **js/commands.js**: Command definitions and execution logic for all available terminal commands
- **js/data.js**: Portfolio data structure containing personal information, skills, projects, and contact details
- **css/terminal.css**: Dracula-themed styling for the terminal interface

### Key Interactions

1. **Command Flow**: User input → Terminal.processCommand() → executeCommand() → commands object → output
2. **Auto-typing**: Button clicks trigger Terminal.autoTypeCommand() for smooth UX
3. **History Navigation**: Arrow keys navigate through command history
4. **Data Binding**: All portfolio content is centralized in portfolioData object

## Development Workflow

Since this is a static website with no build process:

- **Testing**: Open index.html directly in a browser
- **Development**: Make changes and refresh the browser
- **Deployment**: Copy files to web server or static hosting

## Customization Points

### Adding New Commands
1. Add command function to `commands` object in js/commands.js
2. Update help text to include the new command
3. Optionally add button in index.html with `data-command` attribute

### Updating Portfolio Data
- Modify the `portfolioData` object in js/data.js
- Update personal information, skills, projects, and contact details
- Ensure placeholder URLs and email addresses are replaced with real ones

### Styling Changes
- CSS uses Dracula color theme with CSS custom properties in :root
- Terminal styling is in .terminal-container and related classes
- Mobile responsiveness handled via media queries

## File Dependencies

Load order is important:
1. js/data.js (portfolio data)
2. js/commands.js (command definitions) 
3. js/terminal.js (terminal initialization)

## Notable Features

- **Auto-typing animation** when clicking command buttons
- **Command history** with arrow key navigation
- **Mobile-responsive design** with adaptive terminal sizing
- **Dracula color theme** throughout the interface