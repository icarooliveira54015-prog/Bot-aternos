const bedrock = require('bedrock-protocol');

function createBot() {
  const client = bedrock.createClient({
    host: 'DESAFIOSVERMELHOS.aternos.me', // Substitua pelo seu IP
    port: 30951,                            // Substitua pela sua porta
    username: 'BotAFK_Bedrock',             // Nome do seu bot
    offline: true                           // Permite entrar em servidor pirata
  });

  client.on('spawn', () => {
    console.log('O bot Bedrock entrou com sucesso no servidor!');
  });

  client.on('text', (packet) => {
    console.log(`Mensagem no chat: ${packet.source_name}: ${packet.message}`);
  });

  client.on('close', (reason) => {
    console.log(`Bot desconectado. Motivo: ${reason}. Tentando reconectar em 10 segundos...`);
    setTimeout(createBot, 10000);
  });

  client.on('error', (err) => {
    console.error('Erro encontrado:', err);
  });
}

createBot();
