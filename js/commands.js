const commands = {
    help: () => {
        return `Available commands:

Basic Commands:
  help          Show this help message
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

Tip: Use the up/down arrow keys to navigate command history!`;
    },

    clear: () => {
        const output = document.getElementById('output');
        output.innerHTML = '';
        return '';
    },

    ls: () => {
        return `Available sections:
about.txt     skills.txt    projects/     contact.txt   resume.pdf

Available commands:
help  clear  ls  whoami  about  skills  projects  contact`;
    },

    whoami: () => {
        return `${portfolioData.about.name}
${portfolioData.about.title}
Currently logged in as: devops@portfolio`;
    },

    about: () => {
        return `${portfolioData.about.name} - ${portfolioData.about.title}

${portfolioData.about.bio}`;
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
        
        return output;
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

Feel free to reach out for collaboration opportunities!`;
    }
};

function executeCommand(commandInput) {
    const cmd = commandInput.trim().toLowerCase();
    
    if (commands[cmd]) {
        return commands[cmd]();
    } else {
        return `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
}