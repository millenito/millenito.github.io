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
        return `                                           <span style="color: var(--purple);">guest@localhost</span>
                                           ---------------
<span style="color: var(--purple);">           _ _ _       </span><span style="color: var(--foreground);">     _ _            </span><span style="color: var(--purple);">Name:</span> ${portfolioData.about.name}
<span style="color: var(--purple);"> _ __ ___ (_) | | ___ </span><span style="color: var(--foreground);">_ __ (_) |_ ___      </span><span style="color: var(--purple);">Based in:</span> Jakarta, Indonesia
<span style="color: var(--purple);">| '_ \` _ \\| | | |/ _ \\</span><span style="color: var(--foreground);"> '_ \\| | __/ _ \\     </span><span style="color: var(--purple);">Email:</span> ${portfolioData.contact.email}
<span style="color: var(--purple);">| | | | | | | | |  __/</span><span style="color: var(--foreground);"> | | | | || (_) |    </span><span style="color: var(--purple);">Github:</span> ${portfolioData.contact.github}
<span style="color: var(--purple);">|_| |_| |_|_|_|_|\\___|</span><span style="color: var(--foreground);">_| |_|_|\\__\\___/     </span><span style="color: var(--purple);">LinkedIn:</span> ${portfolioData.contact.linkedin}
                                           <span style="color: var(--purple);">Website:</span> ${portfolioData.contact.website}

                                           <span style="color: var(--red);">██</span><span style="color: var(--green);">██</span><span style="color: var(--yellow);">██</span><span style="color: var(--purple);">██</span><span style="color: var(--pink);">██</span><span style="color: var(--cyan);">██</span><span style="color: var(--foreground);">██</span><span style="color: var(--comment);">██</span>
                                           <span style="color: var(--current-line);">██</span><span style="color: var(--background);">██</span><span style="color: var(--orange);">██</span><span style="color: var(--red);">██</span><span style="color: var(--green);">██</span><span style="color: var(--cyan);">██</span><span style="color: var(--foreground);">██</span><span style="color: var(--comment);">██</span>


<span style="color: var(--foreground);">Type</span> <span style="color: var(--green);">'help'</span> <span style="color: var(--foreground);">to see available commands or use the buttons above to explore:</span>
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'about'</span> <span style="color: var(--foreground);">- Learn about me</span>
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'skills'</span> <span style="color: var(--foreground);">- View my technical expertise</span>  
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'projects'</span> <span style="color: var(--foreground);">- See my work samples</span>
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'contact'</span> <span style="color: var(--foreground);">- Get in touch</span>

<span style="color: var(--orange);">Try clicking the command buttons above or type commands directly!</span>
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
        return `<span style="color: var(--foreground);">Available sections:</span>
<span style="color: var(--foreground);">about.txt</span>     <span style="color: var(--foreground);">skills.txt</span>    <span style="color: var(--green);">projects/</span>     <span style="color: var(--foreground);">contact.txt</span>   <span style="color: var(--foreground);">resume.pdf</span>   <span style="color: var(--green);">millenito.sh</span>

<span style="color: var(--foreground);">Available commands:</span>
<span style="color: var(--cyan);">help</span>  <span style="color: var(--cyan);">./millenito.sh</span>  <span style="color: var(--cyan);">welcome</span>  <span style="color: var(--cyan);">clear</span>  <span style="color: var(--cyan);">ls</span>  <span style="color: var(--cyan);">whoami</span>  <span style="color: var(--cyan);">about</span>  <span style="color: var(--cyan);">skills</span>  <span style="color: var(--cyan);">projects</span>  <span style="color: var(--cyan);">contact</span>
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
