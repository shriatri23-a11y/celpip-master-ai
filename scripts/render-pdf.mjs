import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createCanvas } from '@napi-rs/canvas'
import { readFileSync, writeFileSync } from 'fs'

const data = new Uint8Array(readFileSync('/tmp/CELPIP_video_frames.pdf'))
const doc = await getDocument({ data, disableWorker: true }).promise
console.log('pages', doc.numPages)
const n = doc.numPages
for (let i = 1; i <= n; i++) {
  const page = await doc.getPage(i)
  const viewport = page.getViewport({ scale: 1.1 })
  const canvas = createCanvas(viewport.width, viewport.height)
  const ctx = canvas.getContext('2d')
  await page.render({
    canvasContext: ctx,
    viewport,
    canvasFactory: {
      create: (w, h) => { const c = createCanvas(w, h); return { canvas: c, context: c.getContext('2d') } },
      reset: (cc, w, h) => { cc.canvas.width = w; cc.canvas.height = h },
      destroy: (cc) => { cc.canvas.width = 0; cc.canvas.height = 0 },
    },
  }).promise
  const buf = canvas.toBuffer('image/png')
  writeFileSync(`/tmp/frame_${String(i).padStart(2, '0')}.png`, buf)
}
console.log('done')
