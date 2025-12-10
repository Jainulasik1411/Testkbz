const { spawn } = require('child_process');

const runScript = (scriptPath, name) => {
  return new Promise((resolve, reject) => {
    console.log(`[${name}] Starting...`);
    const process = spawn('node', [scriptPath], { stdio: 'inherit' });
    
    process.on('close', (code) => {
      if (code !== 0) {
        console.error(`[${name}] Failed with exit code ${code}`);
        reject(new Error(`${scriptPath} exited with code ${code}`));
      } else {
        console.log(`[${name}] Completed successfully!`);
        resolve();
      }
    });
    
    process.on('error', (err) => {
      console.error(`[${name}] Error:`, err);
      reject(err);
    });
  });
};

(async () => {
  console.log('Starting parallel execution of kbzpay-flow and kbzpay2-flow...');
  
  try {
    const kbz1 = runScript('tests/kbzpay-flow.spec.js', 'KBZ1');
    await new Promise(resolve => setTimeout(resolve, 2000));
    const kbz2 = runScript('tests/kbzpay2-flow.spec.js', 'KBZ2');
    
    await Promise.all([kbz1, kbz2]);
    console.log('\nBoth scripts completed successfully!');
  } catch (error) {
    console.error('\nParallel execution failed:', error.message);
  }
})();
