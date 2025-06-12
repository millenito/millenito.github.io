const commands = {
    help: () => {
        return `Available commands:

Basic Commands:
  help          Show this help message
  welcome       Show the welcome message
  clear         Clear the terminal screen
  ls            List available commands and sections
  whoami        Display user information

Portfolio Commands:
  about         Show personal information and bio
  skills        Display technical skills and expertise
  projects      List projects and work samples
  contact       Show contact information and social links

Examples:
  • Type 'about' to learn more about me
  • Type 'skills' to see my technical expertise
  • Type 'projects' to view my work
  • Type 'clear' to clear the screen

Tip: Use the up/down arrow keys to navigate command history!
`;
    },

    welcome: () => {
        return `<span style="color: #bd93f9;">Welcome to Lord Maxie Millenito's DevOps Portfolio Terminal!</span>

<span style="color: #f8f8f2;">Type</span> <span style="color: #50fa7b;">'help'</span> <span style="color: #f8f8f2;">to see available commands or use the buttons above to explore:</span>
<span style="color: #8be9fd;">•</span> <span style="color: #50fa7b;">'about'</span> <span style="color: #f8f8f2;">- Learn about me</span>
<span style="color: #8be9fd;">•</span> <span style="color: #50fa7b;">'skills'</span> <span style="color: #f8f8f2;">- View my technical expertise</span>  
<span style="color: #8be9fd;">•</span> <span style="color: #50fa7b;">'projects'</span> <span style="color: #f8f8f2;">- See my work samples</span>
<span style="color: #8be9fd;">•</span> <span style="color: #50fa7b;">'contact'</span> <span style="color: #f8f8f2;">- Get in touch</span>

<span style="color: #ffb86c;">Try clicking the command buttons above or type commands directly!</span>
`;
    },

    clear: () => {
        const terminal = document.getElementById('main-terminal');
        const terminalCode = terminal.querySelector('code');
        terminalCode.innerHTML = '';
        return '';
    },

    ls: () => {
        return `<span style="color: #f8f8f2;">Available sections:</span>
<span style="color: #f8f8f2;">about.txt</span>     <span style="color: #f8f8f2;">skills.txt</span>    <span style="color: #50fa7b;">projects/</span>     <span style="color: #f8f8f2;">contact.txt</span>   <span style="color: #f8f8f2;">resume.pdf</span>

<span style="color: #f8f8f2;">Available commands:</span>
<span style="color: #8be9fd;">help</span>  <span style="color: #8be9fd;">welcome</span>  <span style="color: #8be9fd;">clear</span>  <span style="color: #8be9fd;">ls</span>  <span style="color: #8be9fd;">whoami</span>  <span style="color: #8be9fd;">about</span>  <span style="color: #8be9fd;">skills</span>  <span style="color: #8be9fd;">projects</span>  <span style="color: #8be9fd;">contact</span>
`;
    },

    whoami: () => {
        return `${portfolioData.about.name}
${portfolioData.about.title}
Currently logged in as: devops@portfolio
`;
    },

    about: () => {
        return `${portfolioData.about.name} - ${portfolioData.about.title}

${portfolioData.about.bio}
`;
    },

    skills: () => {
        let output = `Technical Skills & Expertise:

Technical Skills:
`;
        portfolioData.skills.technical.forEach(skill => {
            output += `  • ${skill}\n`;
        });
        
        output += `\nTools & Technologies:
`;
        portfolioData.skills.tools.forEach(tool => {
            output += `  • ${tool}\n`;
        });
        
        return `\n`+output;
    },

    projects: () => {
        let output = `Projects & Work Samples:

`;
        portfolioData.projects.forEach((project, index) => {
            output += `${index + 1}. ${project.name}
   ${project.description}
   
   Technologies: ${project.technologies.join(', ')}
   GitHub: ${project.github}
`;
        });
        
        return output;
    },

    contact: () => {
        return `Contact Information:

Email:    ${portfolioData.contact.email}
LinkedIn: ${portfolioData.contact.linkedin}
GitHub:   ${portfolioData.contact.github}
Twitter:  ${portfolioData.contact.twitter}
Website:  ${portfolioData.contact.website}

Feel free to reach out for collaboration opportunities!
`;
    }
};

function executeCommand(commandInput) {
    const cmd = commandInput.trim().toLowerCase();
    
    if (commands[cmd]) {
        return commands[cmd]();
    } else {
        return `Command not found: ${cmd}. Type 'help' for available commands.
        `;
    }
}