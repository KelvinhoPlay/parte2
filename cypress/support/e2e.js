
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import './commands';
import './commandsAlert';
import './commandsTables';
import './commandsProgress';
import './commandsOrdem'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
