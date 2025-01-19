window.noltQueue = window.noltQueue || [];
function nolt() {
  noltQueue.push(arguments);
}
nolt('init', {
  url: 'https://suggestions.raidprotect.bot',
  selector: '.suggestion-button',
});