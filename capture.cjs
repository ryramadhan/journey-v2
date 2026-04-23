const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Create images folder
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport for high quality
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Try ports 5173, 5174, 5175
  const ports = [5173, 5174, 5175];
  let connected = false;
  
  for (const port of ports) {
    try {
      await page.goto(`http://localhost:${port}`, { timeout: 5000 });
      connected = true;
      break;
    } catch (e) {
      // Try next port
    }
  }
  
  if (!connected) {
    console.log('❌ Error: Dev server not running!');
    console.log('💡 Run: npm run dev');
    await browser.close();
    process.exit(1);
  }
  
  await page.waitForTimeout(3000);
  
  console.log('🎨 Capturing all sections...\n');
  
  // 1. Hero Section
  console.log('📸 1. Hero Section...');
  const hero = await page.$('#hero');
  if (hero) {
    await hero.screenshot({ 
      path: path.join(imagesDir, 'hero-section.png'),
      type: 'png'
    });
    console.log('   ✅ hero-section.png saved');
  }
  
  // 2. Chapter 1
  console.log('📸 2. Chapter 1...');
  await page.evaluate(() => {
    document.querySelector('#chapter-1')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const ch1 = await page.$('#chapter-1');
  if (ch1) {
    await ch1.screenshot({ 
      path: path.join(imagesDir, 'chapter-01.png'),
      type: 'png'
    });
    console.log('   ✅ chapter-01.png saved');
  }
  
  // 3. Chapter 2
  console.log('📸 3. Chapter 2...');
  await page.evaluate(() => {
    document.querySelector('#chapter-2')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const ch2 = await page.$('#chapter-2');
  if (ch2) {
    await ch2.screenshot({ 
      path: path.join(imagesDir, 'chapter-02.png'),
      type: 'png'
    });
    console.log('   ✅ chapter-02.png saved');
  }
  
  // 4. Chapter 3
  console.log('📸 4. Chapter 3...');
  await page.evaluate(() => {
    document.querySelector('#chapter-3')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const ch3 = await page.$('#chapter-3');
  if (ch3) {
    await ch3.screenshot({ 
      path: path.join(imagesDir, 'chapter-03.png'),
      type: 'png'
    });
    console.log('   ✅ chapter-03.png saved');
  }
  
  // 5. Chapter 4
  console.log('📸 5. Chapter 4...');
  await page.evaluate(() => {
    document.querySelector('#chapter-4')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const ch4 = await page.$('#chapter-4');
  if (ch4) {
    await ch4.screenshot({ 
      path: path.join(imagesDir, 'chapter-04.png'),
      type: 'png'
    });
    console.log('   ✅ chapter-04.png saved');
  }
  
  // 6. Chapter 5
  console.log('📸 6. Chapter 5...');
  await page.evaluate(() => {
    document.querySelector('#chapter-5')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const ch5 = await page.$('#chapter-5');
  if (ch5) {
    await ch5.screenshot({ 
      path: path.join(imagesDir, 'chapter-05.png'),
      type: 'png'
    });
    console.log('   ✅ chapter-05.png saved');
  }
  
  // 7. Timeline
  console.log('📸 7. Timeline...');
  await page.evaluate(() => {
    document.querySelector('#timeline')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const timeline = await page.$('#timeline');
  if (timeline) {
    await timeline.screenshot({ 
      path: path.join(imagesDir, 'timeline-section.png'),
      type: 'png'
    });
    console.log('   ✅ timeline-section.png saved');
  }
  
  // 8. Gallery
  console.log('📸 8. Gallery...');
  await page.evaluate(() => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const gallery = await page.$('#gallery');
  if (gallery) {
    await gallery.screenshot({ 
      path: path.join(imagesDir, 'gallery-section.png'),
      type: 'png'
    });
    console.log('   ✅ gallery-section.png saved');
  }
  
  // 9. Vision
  console.log('📸 9. Vision...');
  await page.evaluate(() => {
    document.querySelector('#vision')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const vision = await page.$('#vision');
  if (vision) {
    await vision.screenshot({ 
      path: path.join(imagesDir, 'vision-section.png'),
      type: 'png'
    });
    console.log('   ✅ vision-section.png saved');
  }
  
  // 10. Footer
  console.log('📸 10. Footer...');
  await page.evaluate(() => {
    document.querySelector('#footer')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  const footer = await page.$('#footer');
  if (footer) {
    await footer.screenshot({ 
      path: path.join(imagesDir, 'footer-section.png'),
      type: 'png'
    });
    console.log('   ✅ footer-section.png saved');
  }
  
  await browser.close();
  
  console.log('\n✅ All sections captured!');
  console.log('📁 Location: images/');
  console.log('🎨 Format: PNG (High Quality)');
})();
