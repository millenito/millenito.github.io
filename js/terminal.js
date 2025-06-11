class Terminal {
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isTyping = false;

        this.init();
    }

    init() {
        this.input.focus();
        this.setupEventListeners();
        this.setupCommandButtons();
        this.showWelcomeMessage();
    }

    setupEventListeners() {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.processCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.cmd-btn')) {
                this.input.focus();
            }
        });
    }

    setupCommandButtons() {
        const cmdButtons = document.querySelectorAll('.cmd-btn');
        cmdButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const command = e.target.getAttribute('data-command');
                this.autoTypeCommand(command);
            });
        });
    }

    async autoTypeCommand(command) {
        if (this.isTyping) return;

        this.isTyping = true;
        this.input.focus();
        this.input.value = '';

        // Add typing class for visual feedback
        this.input.classList.add('typing');

        // Type each character with delay
        for (let i = 0; i < command.length; i++) {
            this.input.value += command[i];
            await this.delay(100); // 100ms delay between characters
        }

        // Remove typing class and execute command
        this.input.classList.remove('typing');
        await this.delay(500); // Brief pause before execution

        this.processCommand();
        this.isTyping = false;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showWelcomeMessage() {
        const welcomeMessage = `Welcome to my DevOps Portfolio Terminal!

Type 'help' to see available commands or use the buttons above to explore:
• 'about' - Learn about me
• 'skills' - View my technical expertise
• 'projects' - See my work samples
• 'contact' - Get in touch

Try clicking the command buttons above or type commands directly!

`;
        this.addOutput(welcomeMessage, 'welcome-message');
    }

    processCommand() {
        const command = this.input.value.trim();

        if (command) {
            this.addOutput(`devops@portfolio:~$ ${command}`, 'command-line');
            this.commandHistory.push(command);
            this.historyIndex = this.commandHistory.length;

            const result = executeCommand(command);
            if (result) {
                this.addOutput(result, 'output-text');
            }
        }

        this.input.value = '';
        this.scrollToBottom();
    }

    addOutput(text, className = '') {
        const line = document.createElement('div');
        line.className = `output-line ${className}`;
        line.textContent = text;
        this.output.appendChild(line);
    }

    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.input.value = this.commandHistory[this.historyIndex];
            }
        } else if (direction === 'down') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.input.value = this.commandHistory[this.historyIndex];
            } else {
                this.historyIndex = this.commandHistory.length;
                this.input.value = '';
            }
        }
    }

    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});
