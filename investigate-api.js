// Script para investigar si Vacancy Rewards tiene API
const https = require('https');

const baseUrl = 'booking.vacancyrewards.com';
const paths = [
  '/api',
  '/api/v1',
  '/rest',
  '/services',
  '/graphql',
  '/api/health',
  '/api/auth',
  '/api/booking',
  '/api/login',
  '/api/reservations'
];

console.log('🔍 Investigando endpoints de API en', baseUrl, '\n');

function testEndpoint(path) {
  return new Promise((resolve) => {
    const options = {
      hostname: baseUrl,
      path: path,
      method: 'GET',
      timeout: 5000
    };

    const req = https.request(options, (res) => {
      console.log(`${path.padEnd(25)} → ${res.statusCode} ${getStatusEmoji(res.statusCode)}`);
      resolve({ path, status: res.statusCode });
    });

    req.on('error', (err) => {
      console.log(`${path.padEnd(25)} → Error: ${err.message}`);
      resolve({ path, status: 'error' });
    });

    req.on('timeout', () => {
      req.destroy();
      console.log(`${path.padEnd(25)} → Timeout`);
      resolve({ path, status: 'timeout' });
    });

    req.end();
  });
}

function getStatusEmoji(status) {
  if (status === 200) return '✅ Disponible';
  if (status === 404) return '❌ No encontrado';
  if (status === 401 || status === 403) return '🔒 Requiere auth';
  if (status === 302 || status === 301) return '↪️ Redirección';
  return '⚠️';
}

async function investigate() {
  for (const path of paths) {
    await testEndpoint(path);
    await new Promise(r => setTimeout(r, 200)); // pequeña pausa entre requests
  }
  
  console.log('\n📊 Resumen:');
  console.log('- Si ves códigos 200: hay API disponible');
  console.log('- Si ves códigos 401/403: hay API pero requiere autenticación');
  console.log('- Si todo es 404: probablemente no tienen API REST pública');
  console.log('\n💡 Siguiente paso: Contactar a Vacancy Rewards para pedir documentación de API');
}

investigate();
