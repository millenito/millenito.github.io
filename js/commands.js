const commands = {
    help: () => {
        return `Available commands:

Basic Commands:
  help          Show this help message
  ./millenito.sh Show the welcome message
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
  • Type './millenito.sh' to see the welcome message
  • Type 'about' to learn more about me
  • Type 'skills' to see my technical expertise
  • Type 'projects' to view my work
  • Type 'clear' to clear the screen

Tip: Use the up/down arrow keys to navigate command history!
`;
    },

    "./millenito.sh": () => {
return `                                           <span style="color: #bd93f9;">guest@localhost</span>
                                           -----------------------------
<span style="color: #bd93f9;">           _ _ _            _ _            </span><span style="color: #bd93f9;">Name:</span> Lord Maxie Millenito K
<span style="color: #bd93f9;"> _ __ ___ (_) | | ___ _ __ (_) |_ ___      </span><span style="color: #bd93f9;">Based in:</span> Jakarta, Indonesia
<span style="color: #bd93f9;">| '_ \` _ \\| | | |/ _ \\ '_ \\| | __/ _ \\     </span><span style="color: #bd93f9;">Email:</span> placeholder_url
<span style="color: #bd93f9;">| | | | | | | | |  __/ | | | | || (_) |    </span><span style="color: #bd93f9;">Github:</span> placeholder_url
<span style="color: #bd93f9;">|_| |_| |_|_|_|_|\\___|_| |_|_|\\__\\___/     </span><span style="color: #bd93f9;">LinkedIn:</span> placeholder_url
                                           <span style="color: #bd93f9;">Instagram:</span> placeholder_url

                                           <span style="color: #ff5555;">██</span><span style="color: #50fa7b;">██</span><span style="color: #f1fa8c;">██</span><span style="color: #bd93f9;">██</span><span style="color: #ff79c6;">██</span><span style="color: #8be9fd;">██</span><span style="color: #f8f8f2;">██</span><span style="color: #6272a4;">██</span>
                                           <span style="color: #44475a;">██</span><span style="color: #282a36;">██</span><span style="color: #ffb86c;">██</span><span style="color: #ff5555;">██</span><span style="color: #50fa7b;">██</span><span style="color: #8be9fd;">██</span><span style="color: #f8f8f2;">██</span><span style="color: #6272a4;">██</span>

<span style="color: #f8f8f2;">Type</span> <span style="color: #50fa7b;">'help'</span> <span style="color: #f8f8f2;">to see available commands or use the buttons above to explore:</span>
<span style="color: #8be9fd;">•</span> <span style="color: #50fa7b;">'about'</span> <span style="color: #f8f8f2;">- Learn about me</span>
<span style="color: #8be9fd;">•</span> <span style="color: #50fa7b;">'skills'</span> <span style="color: #f8f8f2;">- View my technical expertise</span>  
<span style="color: #8be9fd;">•</span> <span style="color: #50fa7b;">'projects'</span> <span style="color: #f8f8f2;">- See my work samples</span>
<span style="color: #8be9fd;">•</span> <span style="color: #50fa7b;">'contact'</span> <span style="color: #f8f8f2;">- Get in touch</span>

<span style="color: #ffb86c;">Try clicking the command buttons above or type commands directly!</span>
`;
    },

    welcome: () => {
        return commands["./millenito.sh"]();
    },

    clear: () => {
        const terminal = document.getElementById('main-terminal');
        const terminalCode = terminal.querySelector('code');
        terminalCode.innerHTML = '';
        return '';
    },

    ls: () => {
        return `<span style="color: #f8f8f2;">Available sections:</span>
<span style="color: #f8f8f2;">about.txt</span>     <span style="color: #f8f8f2;">skills.txt</span>    <span style="color: #50fa7b;">projects/</span>     <span style="color: #f8f8f2;">contact.txt</span>   <span style="color: #f8f8f2;">resume.pdf</span>   <span style="color: #50fa7b;">millenito.sh</span>

<span style="color: #f8f8f2;">Available commands:</span>
<span style="color: #8be9fd;">help</span>  <span style="color: #8be9fd;">./millenito.sh</span>  <span style="color: #8be9fd;">welcome</span>  <span style="color: #8be9fd;">clear</span>  <span style="color: #8be9fd;">ls</span>  <span style="color: #8be9fd;">whoami</span>  <span style="color: #8be9fd;">about</span>  <span style="color: #8be9fd;">skills</span>  <span style="color: #8be9fd;">projects</span>  <span style="color: #8be9fd;">contact</span>
`;
    },

    whoami: () => {
        return `${portfolioData.about.name}
${portfolioData.about.title}
Currently logged in as: guest@localhost
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
