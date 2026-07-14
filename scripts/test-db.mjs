import pg from 'pg'

const url = process.env.DATABASE_URL
console.log('[db] DATABASE_URL set:', !!url)
if (!url) process.exit(1)

const pool = new pg.Pool({ connectionString: url })

const tables = ['ai_writing_task', 'ai_speaking_task', 'ai_reading_test', 'score_attempt', 'mock_section_progress']
for (const t of tables) {
  try {
    const r = await pool.query('SELECT to_regclass($1) AS exists', ['public.' + t])
    console.log(`[db] table ${t}:`, r.rows[0].exists ? 'EXISTS' : 'MISSING')
  } catch (err) {
    console.log(`[db] table ${t}: ERROR`, err.message)
  }
}

try {
  const c = await pool.query(
    "SELECT column_name FROM information_schema.columns WHERE table_name = 'ai_writing_task' ORDER BY ordinal_position",
  )
  console.log('[db] ai_writing_task columns:', c.rows.map((x) => x.column_name).join(', ') || '(none)')
} catch (err) {
  console.log('[db] column inspect ERROR', err.message)
}

// Attempt a real insert to reproduce the route's DB write
try {
  const ins = await pool.query(
    `INSERT INTO ai_writing_task (created_by_user_id, created_by_name, task_type, title, prompt, min_words, max_words, time_minutes, published)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id`,
    ['test-script', 'Test', 'Email', 'Task 1 — Writing an Email', 'Test prompt', 150, 200, 27, true],
  )
  console.log('[db] INSERT OK, id:', ins.rows[0].id)
  await pool.query('DELETE FROM ai_writing_task WHERE id = $1', [ins.rows[0].id])
  console.log('[db] cleanup OK')
} catch (err) {
  console.log('[db] INSERT ERROR:', err.message)
}

await pool.end()
