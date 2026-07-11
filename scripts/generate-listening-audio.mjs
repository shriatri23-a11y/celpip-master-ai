import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const apiKey = process.env.ELEVENLABS_API_KEY
if (!apiKey) throw new Error("ELEVENLABS_API_KEY is required")

const outputDir = path.join(process.cwd(), "public/audio/listening-1")
await mkdir(outputDir, { recursive: true })

const voices = {
  Narrator: "Xb7hH8MSUJpSbSDYk0k2",
  Agent: "EXAVITQu4vr4xnSDxMaL",
  David: "cjVigY5qzO86Huf0OWal",
  Maya: "FGY2WhTYpPnrIDTdsKH5",
  Sam: "CwhRBWXzGAHq8TQ4Fs17",
  Patron: "bIHbv24MWmeRgasZH58o",
  Librarian: "XrExE9yKIg1WjnnlVkGX",
  Reporter: "onwK4e9ZLuTAKqWW03F9",
  Lena: "pFZP5JQG7iQjIQuC4Bku",
  Raj: "IKne3meq5aSn9XLyUdCD",
  Tom: "JBFqnCBsd6RMkjVDRZzb",
  Speaker: "SAz9YHcvj6GT2YYXdXww",
}

const scenes = [
  { id: "practice", lines: [{ speaker: "Narrator", text: "This is a sound check. If you can hear this clearly, your headphones are working. Adjust your volume to a comfortable level, then select Next to begin the test." }] },
  { id: "p1-audio", lines: [
    { speaker: "Agent", text: "Central Station customer services. Before we begin, are you reporting property that is missing, or an item you can see but cannot retrieve?" },
    { speaker: "David", text: "The second one, I hope. I stepped off the ten-fifteen from Oakville and noticed my brown leather backpack through the window as the train pulled toward the service yard." },
    { speaker: "Agent", text: "That distinction helps. Cleaning staff can secure visible property, but because the train is no longer at a public platform, passengers cannot board it. Which carriage and seat area?" },
    { speaker: "David", text: "Second carriage, beside the accessible doors. I moved there only after a coffee spilled near my original seat, so my reservation number points to the wrong place." },
    { speaker: "Agent", text: "I will note both locations. The yard team reports in batches, usually within ninety minutes. Please do not come immediately; a claim number is not confirmation that we have the bag." },
    { speaker: "David", text: "Understood. My work laptop is encrypted, but my passport is inside and I fly tomorrow evening. Is there any way to flag the deadline?" },
    { speaker: "Agent", text: "I can mark it time-sensitive, not guaranteed. If it is logged before six, collect it from platform one with photo identification. After six, secured items move to the main terminal office and require an appointment." },
  ] },
  { id: "p2-audio", lines: [
    { speaker: "Maya", text: "Hey Sam, are we still on for the hiking trip on Saturday?" },
    { speaker: "Sam", text: "Definitely. But the forecast says it might rain in the morning, so maybe we start after lunch?" },
    { speaker: "Maya", text: "Good idea. Let's meet at one. I'll bring sandwiches if you bring water and snacks." },
    { speaker: "Sam", text: "Deal. Should we take the Ridge Trail again or try the new Lakeside route?" },
    { speaker: "Maya", text: "Let's try Lakeside. It's longer, but my sister said the views are amazing. I'll drive." },
    { speaker: "Sam", text: "Perfect. I'll text you the trail map tonight." },
  ] },
  { id: "p3-audio", lines: [
    { speaker: "Patron", text: "Hi, I'd like to sign up for a library membership. What do I need?" },
    { speaker: "Librarian", text: "Just a piece of photo ID and proof of address, like a utility bill. Membership is free for residents." },
    { speaker: "Patron", text: "Great. How many books can I borrow at once?" },
    { speaker: "Librarian", text: "Up to twenty items, including books, DVDs, and audiobooks, for three weeks. You can renew twice online." },
    { speaker: "Patron", text: "And if I return something late?" },
    { speaker: "Librarian", text: "There are no late fees anymore, but if an item is thirty days overdue, we bill you the replacement cost. You can also access e-books through our app." },
  ] },
  { id: "p4-audio", lines: [{ speaker: "Reporter", text: "Starting next month, the city will launch a new curbside composting program for all households. Residents will receive a green bin for food scraps and yard waste, collected every week. The city hopes to reduce landfill waste by forty percent within two years. Bins will be delivered free of charge, and an information booklet will explain what can be composted. Officials say the program will also create about fifty new jobs at the local processing facility." }] },
  { id: "p5-audio", lines: [
    { speaker: "Lena", text: "So the proposal is to move our team to a four-day work week. I think it could really boost morale." },
    { speaker: "Raj", text: "I like the idea, but I worry about client coverage on Fridays. Someone still needs to answer calls." },
    { speaker: "Tom", text: "We could rotate, so half the team is off Friday and half is off Monday. That keeps the office open five days." },
    { speaker: "Lena", text: "That's smart. Studies show people are often more productive when they work fewer, focused hours." },
    { speaker: "Raj", text: "True, but we'd need clear goals so work doesn't just spill into evenings." },
    { speaker: "Tom", text: "Agreed. Let's pilot it for three months and measure output and customer satisfaction before deciding." },
    { speaker: "Lena", text: "Perfect. I'll draft a plan and share it with everyone by Friday." },
  ] },
  { id: "p6-audio", lines: [{ speaker: "Speaker", text: "There's ongoing debate about online learning in universities. Supporters argue it increases access: students in remote areas or with jobs can attend lectures anytime, and recorded classes let them review difficult material. Critics, however, point out that online formats can weaken engagement. Without face-to-face contact, some students feel isolated and are more likely to fall behind. There's also concern about unequal internet access, which can disadvantage lower-income students. A middle view suggests a blended model, combining in-person seminars for discussion with online lectures for flexibility, may capture the benefits of both while reducing the drawbacks." }] },
]

async function synthesize(text, voiceId) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
    method: "POST",
    headers: { "xi-api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({ text, model_id: "eleven_multilingual_v2", voice_settings: { stability: 0.62, similarity_boost: 0.78, style: 0.18, use_speaker_boost: true } }),
  })
  if (!response.ok) throw new Error(`${response.status}: ${await response.text()}`)
  return Buffer.from(await response.arrayBuffer())
}

for (const scene of scenes) {
  const buffers = []
  for (const line of scene.lines) {
    process.stdout.write(`Generating ${scene.id}: ${line.speaker}\n`)
    buffers.push(await synthesize(line.text, voices[line.speaker]))
  }
  await writeFile(path.join(outputDir, `${scene.id}.mp3`), Buffer.concat(buffers))
}

console.log(`Generated ${scenes.length} listening files in ${outputDir}`)
