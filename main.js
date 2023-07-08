const EmailResponseGenerator = require('./email_response_generator');
const EmailSender = require('./email_sender');
const PluginUI = require('./plugin_ui');

const responseGenerator = new EmailResponseGenerator('your-openai-api-key');
const emailSender = new EmailSender();
const ui = new PluginUI();

ui.showResponseButton();
ui.showToneSelection();
ui.showInformationInput();

// Add event listeners for the "Generate Response" button, tone selection, and information input
