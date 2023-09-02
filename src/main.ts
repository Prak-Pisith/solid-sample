// TODO: SRP
class Logger {

  logMessage = (message: string): void => {
    console.log(`Logging message: ${message}`);
  }

}

// TODO: OCP
interface MessageSender {
  sendMessage(message: string, recipient: string): void;
}

class MessageService {
  private senders: MessageSender[] = [];
  private logger: Logger;

  addSender(sender: MessageSender) {
    this.senders.push(sender);
  }

  addLogger(logger: Logger) {
    this.logger = logger;
  }

  sendMessage(message: string, recipient: string): void {
    this.senders.forEach(sender => {
      sender.sendMessage(message, recipient);
    })
    if (this.logger) {
      this.logger.logMessage(`Message sent to ${recipient}: ${message}`);
    }
  }
}

// TODO: LSP

class SmsSender implements MessageSender {
  sendMessage(message: string, recipient: string): void {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}

class EmailSender implements MessageSender {
  sendMessage = (message: string, recipient: string): void => {
    console.log(`Sending Email to ${recipient}: ${message}`);
  }
}

// TODO: ISP
interface FileLogger {
  logToFile(message: string): void;
}

class FileLoggerAdapter implements FileLogger {
  logToFile(message: string): void {
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