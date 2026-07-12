import { createCanvas, loadImage } from '@napi-rs/canvas'
import { writeFileSync } from 'fs'
for (let i = 8; i <= 11; i++) {
  const img = await loadImage(`/tmp/hi_${String(i).padStart(2,'0')}.png`)
  const h3 = Math.floor(img.height/3)
  for (let s=0; s<3; s++){
    // crop the actual app screenshot region (roughly center 55%-ish). Keep full width.
    const c = createCanvas(img.width, h3)
    const ctx = c.getContext('2d')
    ctx.drawImage(img, 0, s*h3, img.width, h3, 0, 0, img.width, h3)
    writeFileSync(`/tmp/crop_${i}_${s}.png`, c.toBuffer('image/png'))
  }
}
console.log('done')
