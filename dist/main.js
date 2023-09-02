// TODO: SRP
class Logger {
    constructor() {
        this.logMessage = (message) => {
            console.log(`Logging message: ${message}`);
        };
    }
}
class MessageService {
    constructor() {
        this.senders = [];
    }
    addSender(sender) {
        this.senders.push(sender);
    }
    addLogger(logger) {
        this.logger = logger;
    }
    sendMessage(message, recipient) {
        this.senders.forEach(sender => {
            sender.sendMessage(message, recipient);
        });
        if (this.logger) {
            this.logger.logMessage(`Message sent to ${recipient}: ${message}`);
        }
    }
}
// TODO: LSP
class SmsSender {
    sendMessage(message, recipient) {
        console.log(`Sending SMS to ${recipient}: ${message}`);
    }
}
class EmailSender {
    constructor() {
        this.sendMessage = (message, recipient) => {
            console.log(`Sending Email to ${recipient}: ${message}`);
        };
    }
}
class FileLoggerAdapter {
    logToFile(message) {
        console.log(`Logs to file: ${message}`);
    }
}
// TODO: DIP
// Message Services
const messageService = new MessageService();
// Senders
const smsSender = new SmsSender();
const emailSender = new EmailSender();
// Logger
const logger = new Logger();
messageService.addSender(smsSender);
messageService.addSender(emailSender);
messageService.addLogger(logger);
messageService.sendMessage(`Hello World!!!`, 'Axura');
