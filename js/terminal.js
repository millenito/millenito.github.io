class Terminal {
    constructor() {
        this.terminal = document.getElementById('main-terminal');
        this.terminalCode = this.terminal.querySelector('code');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isTyping = false;
        this.currentInput = '';

        this.init();
    }

    async init() {
        this.setupEventListeners();
        this.setupCommandButtons();
        this.showPrompt();
        
        // Auto-type ./millenito.sh command after a brief delay
        await this.delay(100);
        this.autoTypeCommand('./millenito.sh');
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (this.isTyping) return;
            
            if (e.key === 'Enter') {
                this.processCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            } else if (e.key === 'Backspace') {
                e.preventDefault();
                this.currentInput = this.currentInput.slice(0, -1);
                this.updatePrompt();
            } else if (e.key.length === 1) {
                e.preventDefault();
                this.currentInput += e.key;
                this.updatePrompt();
            }
        });

        this.terminal.addEventListener('click', () => {
            this.terminal.focus();
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
        this.currentInput = '';

        // Remove cursor animation while typing
        this.terminalCode.classList.add('no-animation');

        // Type each character with delay
        for (let i = 0; i < command.length; i++) {
            this.currentInput += command[i];
            this.updatePrompt();
            await this.delay(100); // 100ms delay between characters
        }

        // Restore cursor animation
        this.terminalCode.classList.remove('no-animation');
        await this.delay(400); // Brief pause before execution

        this.processCommand();
        this.isTyping = false;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    processCommand() {
        const command = this.currentInput.trim();

        if (command) {
            // Remove current prompt and add executed command with colors
            this.finalizeCurrentCommand(command);
            
            this.commandHistory.push(command);
            this.historyIndex = this.commandHistory.length;

            const result = executeCommand(command);
            if (result) {
                // Check if result contains HTML tags
                if (result.includes('<span')) {
                    this.addToTerminalHTML(result + '\n');
                } else {
                    this.addToTerminal(result + '\n');
                }
            }
        }

        this.currentInput = '';
        this.showPrompt();
    }

    finalizeCurrentCommand(command) {
        // Replace the current input prompt with the executed command
        let currentHTML = this.terminalCode.innerHTML;
        const promptPattern = /<span[^>]*>guest@localhost<\/span>:<span[^>]*>~<\/span><span[^>]*>\$<\/span>\s*<span[^>]*>[^<]*<\/span>$/;
        
        if (promptPattern.test(currentHTML)) {
            currentHTML = currentHTML.replace(promptPattern, '');
        }
        
        // Add the executed command with colors
        const commandHTML = `<span style="color: #50fa7b;">guest@localhost</span>:<span style="color: #bd93f9;">~</span><span style="color: #f8f8f2;">$</span> <span style="color: #f8f8f2;">${command}</span><br>`;
        this.terminalCode.innerHTML = currentHTML + commandHTML;
    }

    addToTerminal(text) {
        // Escape HTML characters and preserve line breaks
        const escapedText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
        this.terminalCode.innerHTML += escapedText;
        this.scrollToBottom();
    }

    addToTerminalHTML(html) {
        // Convert newlines to <br> tags for proper display
        const formattedHTML = html.replace(/\n/g, '<br>');
        this.terminalCode.innerHTML += formattedHTML;
        this.scrollToBottom();
    }

    showPrompt() {
        // Remove the last prompt line if it exists (preserve colors by working with innerHTML)
        let currentHTML = this.terminalCode.innerHTML;
        const promptPattern = /<span[^>]*>guest@localhost<\/span>:<span[^>]*>~<\/span><span[^>]*>\$<\/span>\s*<span[^>]*>[^<]*<\/span>$/;
        
        if (promptPattern.test(currentHTML)) {
            currentHTML = currentHTML.replace(promptPattern, '');
        }
        
        // Add prompt with proper styling using HTML
        const promptHTML = `<span style="color: #50fa7b;">guest@localhost</span>:<span style="color: #bd93f9;">~</span><span style="color: #f8f8f2;">$</span> <span style="color: #f8f8f2;">${this.currentInput}</span>`;
        this.terminalCode.innerHTML = currentHTML + promptHTML;
        
        this.scrollToBottom();
    }

    updatePrompt() {
        this.showPrompt();
    }

    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.currentInput = this.commandHistory[this.historyIndex];
            }
        } else if (direction === 'down') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.currentInput = this.commandHistory[this.historyIndex];
            } else {
                this.historyIndex = this.commandHistory.length;
                this.currentInput = '';
            }
        }
        this.updatePrompt();
    }

    scrollToBottom() {
        // Use setTimeout to ensure DOM is updated before scrolling
        setTimeout(() => {
            this.terminal.scrollTop = this.terminal.scrollHeight;
        }, 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});
