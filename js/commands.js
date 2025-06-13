// Utility function to make URLs clickable
function makeClickable(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    
    return text
        .replace(urlRegex, '<a href="$1" target="_blank" style="color: var(--cyan); text-decoration: underline;">$1</a>')
        .replace(emailRegex, '<a href="mailto:$1" style="color: var(--cyan); text-decoration: underline;">$1</a>');
}

const commands = {
    help: () => {
        return `<span style="color: var(--purple);">Available commands:</span>

<span style="color: var(--green);">Basic Commands:</span>
  <span style="color: var(--cyan);">help</span>          <span style="color: var(--foreground);">Show this help message</span>
  <span style="color: var(--cyan);">welcome</span>       <span style="color: var(--foreground);">Show the welcome message</span>
  <span style="color: var(--cyan);">clear</span>         <span style="color: var(--foreground);">Clear the terminal screen</span>
  <span style="color: var(--cyan);">ls</span>            <span style="color: var(--foreground);">List available commands and sections</span>
  <span style="color: var(--cyan);">whoami</span>        <span style="color: var(--foreground);">Display user information</span>

<span style="color: var(--green);">Portfolio Commands:</span>
  <span style="color: var(--cyan);">about</span>         <span style="color: var(--foreground);">Show personal information and bio</span>
  <span style="color: var(--cyan);">skills</span>        <span style="color: var(--foreground);">Display technical skills and expertise</span>
  <span style="color: var(--cyan);">projects</span>      <span style="color: var(--foreground);">List projects and work samples</span>
  <span style="color: var(--cyan);">contact</span>       <span style="color: var(--foreground);">Show contact information and social links</span>
  <span style="color: var(--cyan);">education</span>     <span style="color: var(--foreground);">Show education background and certifications</span>

<span style="color: var(--yellow);">Examples:</span>
  <span style="color: var(--comment);">•</span> <span style="color: var(--foreground);">Type</span> <span style="color: var(--green);">'welcome'</span> <span style="color: var(--foreground);">to see the welcome message</span>
  <span style="color: var(--comment);">•</span> <span style="color: var(--foreground);">Type</span> <span style="color: var(--green);">'about'</span> <span style="color: var(--foreground);">to learn more about me</span>
  <span style="color: var(--comment);">•</span> <span style="color: var(--foreground);">Type</span> <span style="color: var(--green);">'skills'</span> <span style="color: var(--foreground);">to see my technical expertise</span>
  <span style="color: var(--comment);">•</span> <span style="color: var(--foreground);">Type</span> <span style="color: var(--green);">'projects'</span> <span style="color: var(--foreground);">to view my work</span>
  <span style="color: var(--comment);">•</span> <span style="color: var(--foreground);">Type</span> <span style="color: var(--green);">'clear'</span> <span style="color: var(--foreground);">to clear the screen</span>

<span style="color: var(--orange);">Tip: Use the up/down arrow keys to navigate command history!</span>
`;
    },

    welcome: () => {
        return `                                           <span style="color: var(--purple);">guest@localhost</span>
                                           ---------------
<span style="color: var(--purple);">           _ _ _       </span><span style="color: var(--foreground);">     _ _            </span><span style="color: var(--purple);">Name:</span> <span style="color: var(--green);">${portfolioData.about.name}</span>
<span style="color: var(--purple);"> _ __ ___ (_) | | ___ </span><span style="color: var(--foreground);">_ __ (_) |_ ___      </span><span style="color: var(--purple);">Based in:</span> <span style="color: var(--yellow);">Jakarta, Indonesia</span>
<span style="color: var(--purple);">| '_ \` _ \\| | | |/ _ \\</span><span style="color: var(--foreground);"> '_ \\| | __/ _ \\     </span><span style="color: var(--purple);">Email:</span> ${makeClickable(portfolioData.contact.email)}
<span style="color: var(--purple);">| | | | | | | | |  __/</span><span style="color: var(--foreground);"> | | | | || (_) |    </span><span style="color: var(--purple);">Github:</span> ${makeClickable(portfolioData.contact.github)}
<span style="color: var(--purple);">|_| |_| |_|_|_|_|\\___|</span><span style="color: var(--foreground);">_| |_|_|\\__\\___/     </span><span style="color: var(--purple);">LinkedIn:</span> ${makeClickable(portfolioData.contact.linkedin)}
                                           <span style="color: var(--purple);">Website:</span> ${makeClickable(portfolioData.contact.website)}

                                           <span style="color: var(--red);">██</span><span style="color: var(--green);">██</span><span style="color: var(--yellow);">██</span><span style="color: var(--purple);">██</span><span style="color: var(--pink);">██</span><span style="color: var(--cyan);">██</span><span style="color: var(--foreground);">██</span><span style="color: var(--comment);">██</span>
                                           <span style="color: var(--current-line);">██</span><span style="color: var(--background);">██</span><span style="color: var(--orange);">██</span><span style="color: var(--red);">██</span><span style="color: var(--green);">██</span><span style="color: var(--cyan);">██</span><span style="color: var(--foreground);">██</span><span style="color: var(--comment);">██</span>


<span style="color: var(--foreground);">Type</span> <span style="color: var(--green);">'help'</span> <span style="color: var(--foreground);">to see available commands or use the buttons above to explore:</span>
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'about'</span> <span style="color: var(--foreground);">- Learn about me</span>
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'skills'</span> <span style="color: var(--foreground);">- View my technical expertise</span>  
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'projects'</span> <span style="color: var(--foreground);">- See my work samples</span>
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'contact'</span> <span style="color: var(--foreground);">- Get in touch</span>
<span style="color: var(--cyan);">•</span> <span style="color: var(--green);">'education'</span> <span style="color: var(--foreground);">- Show education background and certifications</span>

<span style="color: var(--orange);">Try clicking the command buttons above or type commands directly!</span>
`;
    },


    clear: () => {
        const terminal = document.getElementById('main-terminal');
        const terminalCode = terminal.querySelector('code');
        terminalCode.innerHTML = '';
        return '';
    },

    ls: () => {
        return `<span style="color: var(--purple);">Available sections:</span>
<span style="color: var(--foreground);">about.txt</span>     <span style="color: var(--foreground);">skills.txt</span>    <span style="color: var(--green);">projects/</span>     <span style="color: var(--foreground);">contact.txt</span>   <span style="color: var(--foreground);">education.txt</span>   <span style="color: var(--foreground);">resume.pdf</span>

<span style="color: var(--purple);">Available commands:</span>
<span style="color: var(--cyan);">help</span>  <span style="color: var(--cyan);">welcome</span>  <span style="color: var(--cyan);">clear</span>  <span style="color: var(--cyan);">ls</span>  <span style="color: var(--cyan);">whoami</span>  <span style="color: var(--cyan);">about</span>  <span style="color: var(--cyan);">skills</span>  <span style="color: var(--cyan);">projects</span>  <span style="color: var(--cyan);">contact</span>  <span style="color: var(--cyan);">education</span>
`;
    },

    whoami: () => {
        return `<span style="color: var(--green);">${portfolioData.about.name}</span>
<span style="color: var(--purple);">${portfolioData.about.title}</span>
<span style="color: var(--yellow);">Currently logged in as:</span> <span style="color: var(--cyan);">guest@localhost</span>
`;
    },

    about: () => {
        return `<span style="color: var(--green); font-weight: bold;">${portfolioData.about.name}</span> - <span style="color: var(--purple);">${portfolioData.about.title}</span>

<span style="color: var(--foreground);">${makeClickable(portfolioData.about.bio)}</span>
`;
    },

    skills: () => {
        let output = `<span style="color: var(--purple); font-weight: bold;">Technical Skills & Expertise:</span>\n\n<span style="color: var(--green);">Technical Skills:</span>\n`;
        portfolioData.skills.technical.forEach(skill => {
            output += `  <span style="color: var(--cyan);">•</span> <span style="color: var(--foreground);">${skill}</span>\n`;
        });
        
        output += `\n<span style="color: var(--green);">Tools & Technologies:</span>\n`;
        portfolioData.skills.tools.forEach(tool => {
            output += `  <span style="color: var(--cyan);">•</span> <span style="color: var(--foreground);">${tool}</span>\n`;
        });
        
        return output;
    },

    projects: () => {
        let output = `<span style="color: var(--purple); font-weight: bold;">Projects & Work Samples:</span>\n\n`;
        portfolioData.projects.forEach((project, index) => {
            output += `<span style="color: var(--green);">${index + 1}. ${project.name}</span>\n   <span style="color: var(--foreground);">${project.description}</span>\n   \n   <span style="color: var(--yellow);">Technologies:</span> <span style="color: var(--cyan);">${project.technologies.join(', ')}</span>\n   <span style="color: var(--yellow);">Site:</span> ${makeClickable(project.site)}\n\n`;
        });
        
        return output;
    },

    contact: () => {
        return `<span style="color: var(--purple); font-weight: bold;">Contact Information:</span>\n\n<span style="color: var(--green);">Email:</span>    ${makeClickable(portfolioData.contact.email)}\n<span style="color: var(--green);">LinkedIn:</span> ${makeClickable(portfolioData.contact.linkedin)}\n<span style="color: var(--green);">GitHub:</span>   ${makeClickable(portfolioData.contact.github)}\n<span style="color: var(--green);">Website:</span>  ${makeClickable(portfolioData.contact.website)}\n\n<span style="color: var(--orange);">Feel free to reach out for collaboration opportunities!</span>\n`;
    },

    education: () => {
        let output = `<span style="color: var(--purple); font-weight: bold;">Education & Certifications:</span>\n\n<span style="color: var(--green);">Education:</span>\n<span style="color: var(--cyan);">•</span> <span style="color: var(--yellow);">${portfolioData.education.degree}</span>\n  <span style="color: var(--foreground);">${portfolioData.education.institution}, ${portfolioData.education.location} (${portfolioData.education.year})</span>\n\n<span style="color: var(--green);">Certifications:</span>\n`;
        
        portfolioData.certifications.forEach(cert => {
            output += `<span style="color: var(--cyan);">•</span> <span style="color: var(--foreground);">${cert}</span>\n`;
        });
        
        return output;
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
