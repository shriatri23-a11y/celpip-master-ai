import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createCanvas } from '@napi-rs/canvas'
import { readFileSync, writeFileSync } from 'fs'
const data = new Uint8Array(readFileSync('/tmp/CELPIP_video_frames.pdf'))
const doc = await getDocument({ data, disableWorker: true }).promise
console.log('pages', doc.numPages)
for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i)
  const viewport = page.getViewport({ scale: 2.2 })
  const canvas = createCanvas(viewport.width, viewport.height)
  const ctx = canvas.getContext('2d')
  await page.render({ canvasContext: ctx, viewport, canvasFactory: {
    create:(w,h)=>{const c=createCanvas(w,h);return{canvas:c,context:c.getContext('2d')}},
    reset:(cc,w,h)=>{cc.canvas.width=w;cc.canvas.height=h},
    destroy:(cc)=>{cc.canvas.width=0;cc.canvas.height=0},
  }}).promise
  writeFileSync(`/tmp/pg_${String(i).padStart(2,'0')}.png`, canvas.toBuffer('image/png'))
}
console.log('done')
