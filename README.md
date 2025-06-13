# Terminal Portfolio

A terminal-style portfolio website for me, Lord Maxie Millenito K. This interactive web application simulates a Linux terminal interface where visitors can explore my professional background, skills, projects, and contact information through familiar command-line interactions.

## 🚀 Features

- **Interactive Terminal Interface**: Authentic terminal experience with command history and auto-completion
- **Command-Based Navigation**: Use familiar commands like `help`, `about`, `skills`, `projects`, and `contact`
- **Auto-typing Animation**: Smooth typing animations when clicking command buttons
- **Responsive Design**: Optimized for both desktop and mobile devices
- [**Dracula Theme**](https://draculatheme.com/): My favorite theme in all of my editors and terminals! beautiful dark theme with syntax highlighting
- **Real-time Command History**: Navigate through previous commands with arrow keys

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `welcome` | Display welcome message with ASCII art |
| `about` | Show personal information and bio |
| `skills` | Display technical skills and expertise |
| `projects` | List projects and work samples |
| `contact` | Show contact information and social links |
| `education` | Show education background and certifications |
| `clear` | Clear the terminal screen |
| `ls` | List available commands and sections |
| `whoami` | Display current user information |

## 🎯 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/millenito/terminal-portfolio.git
   cd terminal-portfolio
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser - no build process required!

3. **Start exploring:**
   Type `help` to see all available commands or click the command buttons above the terminal.

## 🏗️ Project Structure

```
terminal-portfolio/
├── index.html          # Main HTML structure
├── css/
│   └── terminal.css    # Dracula-themed terminal styling
├── js/
│   ├── data.js         # Portfolio data (personal info, skills, projects)
│   ├── commands.js     # Command definitions and logic
│   └── terminal.js     # Terminal functionality and interactions
├── assets/
│   └── images/         # Profile images and assets
└── README.md           # This file
```

## 🎨 Customization

### Adding New Commands
1. Add your command function to the `commands` object in `js/commands.js`
2. Update the help text to include your new command
3. Optionally add a button in `index.html` with `data-command` attribute

### Updating Portfolio Data
Modify the `portfolioData` object in `js/data.js`:
- Personal information in `about` section
- Technical skills in `skills` section
- Project details in `projects` array
- Contact information in `contact` section
- Education and certifications

### Styling Changes
- CSS uses Dracula color theme with custom properties in `:root`
- Terminal styling is in `.terminal-container` and related classes
- Mobile responsiveness handled via media queries

## 🌟 Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Dracula theme styling with custom properties
- **Vanilla JavaScript**: Terminal functionality and command processing
- **Responsive Design**: Mobile-first approach

## 🔧 Development

Since this is a static website:
- **Testing**: Open `index.html` directly in browser
- **Development**: Make changes and refresh browser
- **Deployment**: Copy files to any static hosting service

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you have suggestions for improvements, please open an issue or submit a pull request.