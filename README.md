<div align="center">

```
 ╔═╗╔╦╗╔╦╗╔═╗╔╗╔╔╦╗╦╔═╗╔╗╔╦ ╦
 ╠═╣ ║  ║ ║╣ ║║║ ║ ║║ ║║║║╚╦╝
 ╩ ╩ ╩  ╩ ╚═╝╝╚╝ ╩ ╩╚═╝╝╚╝ ╩ 
```

# [AttentionX] — Automated Content Repurposing Engine

**Turn hours of long-form video into viral short-form content — automatically.**

[![Hackathon](https://img.shields.io/badge/AttentionX%20AI%20Hackathon-2026-f5c842?style=for-the-badge&labelColor=050810)](https://www.unsaidtalks.com)
[![Built with Gemini](https://img.shields.io/badge/Powered%20by-Gemini%201.5%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)
[![Status](https://img.shields.io/badge/Status-Live%20Demo-4ade80?style=for-the-badge)]()
[![Made by](https://img.shields.io/badge/Built%20by-Bhargavi%20N-ff6b35?style=for-the-badge)](https://github.com/bhargavi2048-boop)

</div>

---

## 🎯 What is AttentionX?

AttentionX is an **AI-powered content repurposing engine** that solves a real creator problem:

> *Mentors, educators, and podcasters produce hours of high-value long-form content. But modern audiences consume information in 60-second bursts. Brilliant wisdom gets buried in 60-minute videos that nobody watches to the end.*

**AttentionX automatically:**
- 🧠 Detects the most emotionally powerful moments using AI
- 📱 Smart-crops to 9:16 vertical with face-tracking
- ✍️ Generates karaoke-style captions and scroll-stopping hooks
- 🚀 Turns **one session into 7+ viral-ready clips** in under 10 minutes

---

## ✨ Key Features

| Feature | Description | Tech |
|---------|-------------|------|
| 🧠 **Emotional Peak Detection** | Finds where energy, passion, and insight peak | Gemini 1.5 Flash + Librosa |
| 📱 **Smart Crop to 9:16** | Tracks the speaker's face and re-frames automatically | MediaPipe + MoviePy |
| ✍️ **Dynamic Captions** | Karaoke-style word-by-word captions + hook headlines | OpenAI Whisper + Gemini |
| ⚡ **Full Pipeline** | End-to-end automation — upload → export | FastAPI + Python |

---

## 🖥️ Website Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero, features, comparison, use cases, testimonials, FAQ |
| **Problem** | `problem.html` | Deep-dive into the attention crisis with stats |
| **Solution** | `solution.html` | Three AI pillars explained in detail |
| **Tech Stack** | `tech.html` | All tools with official docs + system architecture |
| **Team** | `team.html` | Bhargavi N — profile, skills, social links |
| **Live Demo** | `demo.html` | Interactive AI pipeline simulation |

---

## 📂 Project Structure

```
attentionx/
├── index.html              # Home — hero, features, comparison, FAQ, notify
├── problem.html            # Problem statement with impact stats
├── solution.html           # Solution: 3 AI pillars (peaks, crop, captions)
├── tech.html               # Full tech stack + system architecture diagram
├── team.html               # Developer profile with social links
├── demo.html               # Interactive demo with pipeline simulation
│
├── css/
│   └── style.css           # Full design system — dark theme, animations, responsive
│
├── js/
│   ├── main.js             # Cursor, nav scroll, FAQ toggle, notify form, scroll reveal
│   └── demo.js             # Upload simulation, processing pipeline, results view
│
└── README.md               # This file
```

---

## 🛠️ Tech Stack

### 🤖 Core AI Engine

```
┌─────────────────────────────────────────────────────────┐
│  Google Gemini 1.5 Flash  ·  1M+ token context window  │
│  Analyzes full transcripts · Finds emotional peaks     │
│  Generates hook headlines · Scores shareability        │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  OpenAI Whisper  ·  Industry-standard Speech-to-Text   │
│  Word-level timestamps · Powers karaoke captions       │
└─────────────────────────────────────────────────────────┘
```

### 🎬 Video & Audio Processing

```python
# Peak Detection
librosa.feature.rms(y=audio)          # Audio loudness mapping
gemini.analyze(transcript)            # Semantic peak scoring

# Smart Crop
mediapipe.FaceDetection()             # Real-time face tracking
moviepy.VideoFileClip.crop(x, y)     # Dynamic 9:16 crop

# Caption Rendering
whisper.transcribe(audio, word_timestamps=True)  # Word-level timing
moviepy.TextClip(text, font="Impact") # Karaoke overlay
```

### ⚙️ Backend

| Framework | Purpose | Link |
|-----------|---------|------|
| **FastAPI** | Async API server for video pipeline | [Docs ↗](https://fastapi.tiangolo.com/) |
| **Flask** | Lightweight prototype server | [Docs ↗](https://flask.palletsprojects.com/) |

### 🎨 Frontend

| Tool | Purpose | Link |
|------|---------|------|
| **Custom HTML/CSS/JS** | The website you're looking at | — |
| **Pico.css** | Drop-in semantic CSS for app UI | [Website ↗](https://picocss.com/) |
| **Streamlit** | Python-native UI for AI demos | [Docs ↗](https://streamlit.io/) |

---

## 🚀 Running the Website

This is a **pure static site** — no build step, no dependencies. Just open and go.

### Option 1 — Open directly

```bash
open index.html
# or just double-click index.html in your file explorer
```

### Option 2 — Local dev server (recommended for full features)

```bash
# Python (built-in)
python -m http.server 3000
# → Visit http://localhost:3000

# Node.js
npx serve .
# → Visit http://localhost:3000

# VS Code
# Install "Live Server" extension → right-click index.html → "Open with Live Server"
```

---

## 🎨 Design System

### Color Palette

```css
--bg:          #050810  /* Page background     */
--bg-2:        #080d1a  /* Secondary bg        */
--surface:     #0d1428  /* Cards, panels       */
--surface-2:   #111b33  /* Elevated surfaces   */
--accent:      #f5c842  /* Primary gold        */
--accent-2:    #ff6b35  /* Orange highlight    */
--accent-3:    #00d4ff  /* Cyan accent         */
--text:        #e8eaf6  /* Primary text        */
--text-muted:  #8892b0  /* Secondary text      */
```

### Typography

```
Display:  Syne        (800, 700, 600)  — Headlines, logo, numbers
Body:     DM Sans     (300, 400, 500)  — Body copy, UI text  
Mono:     JetBrains Mono (400, 500)   — Code, tags, labels
```

### Animations

| Effect | Implementation |
|--------|---------------|
| Page load | CSS `animation` with `--delay` custom property staggering |
| Scroll reveal | `IntersectionObserver` + `.fade-up` / `.visible` classes |
| Cursor | RAF-based smooth trailing ring with hover state |
| Phone mockup | CSS `@keyframes float-phone` with rotate |
| Waveform | CSS `@keyframes wave-bar` with nth-child delays |
| Progress ring | SVG `stroke-dashoffset` animation |

---

## 🔗 All External Links

| Resource | URL |
|----------|-----|
| Google AI Studio (Gemini) | https://aistudio.google.com/ |
| OpenAI Whisper | https://platform.openai.com/docs/guides/speech-to-text |
| MoviePy Documentation | https://zulko.github.io/moviepy/ |
| Librosa Guide | https://librosa.org/doc/latest/index.html |
| MediaPipe Solutions | https://mediapipe-studio.webapps.google.com/ |
| FastAPI Docs | https://fastapi.tiangolo.com/ |
| Flask Docs | https://flask.palletsprojects.com/ |
| Pico.css | https://picocss.com/ |
| Streamlit | https://streamlit.io/ |

---

## 📊 AttentionX vs Manual Editing

```
                Without AttentionX    With AttentionX
                ──────────────────    ───────────────
Editing time    5–8 hours             < 10 minutes
Clips/session   1–2 (if any)          7+ clips
Cost            $500+ (editor)        $0 (automated)
Caption work    Manual, hours         Auto-generated
Format crop     Manual re-frame       AI face tracking
Publishing      Once/week             Daily possible
```

---

## 🏗️ System Architecture

```
┌──────────┐    ┌──────────┐    ┌─────────────────┐    ┌──────────────┐    ┌──────────┐
│  Upload  │───▶│  Whisper │───▶│ Gemini + Librosa │───▶│MediaPipe +   │───▶│  Export  │
│  Video   │    │ Transcribe│    │  Peak Detection  │    │MoviePy Crop  │    │  Clips   │
│  Input   │    │ + Timestamps│  │  + Scoring       │    │+ Caption     │    │1080×1920 │
└──────────┘    └──────────┘    └─────────────────┘    └──────────────┘    └──────────┘
     │                │                  │                      │                 │
  Any format      Word-level         Emotional            Face-centered       Ready to
  Up to 2GB      timestamps          moments              9:16 output         post 🚀
```

---

## 👩‍💻 About the Developer

<table>
<tr>
<td width="100">

```
 ╭─────╮
 │ B N │
 ╰─────╯
```

</td>
<td>

**Bhargavi N** — AI Developer & Full-Stack Engineer

Passionate about building AI-powered tools that make high-value education accessible to everyone. Conceived and built AttentionX end-to-end — from architecture to UI — for the AttentionX AI Hackathon.

**Skills:** Python · GenAI · Computer Vision · FastAPI · MoviePy · NLP · React · ML

</td>
</tr>
</table>

| Platform | Link |
|----------|------|
| 🔗 LinkedIn | [bhargavi-nagaraj-967811381](https://www.linkedin.com/in/bhargavi-nagaraj-967811381) |
| 💻 GitHub | [bhargavi2048-boop](https://github.com/bhargavi2048-boop) |
| 📧 Email | [bhargavi2048@gmail.com](mailto:bhargavi2048@gmail.com) |

---

## 🏆 Hackathon

> **AttentionX AI Hackathon 2026**  
> Organized by [Unsaid Talks](https://www.unsaidtalks.com) — India's platform for unfiltered conversations.

**Problem Statement:** Automated Content Repurposing Engine  
**Mission:** Turn a single mentorship session into a week's worth of viral marketing content, making high-level education snackable and shareable.

---

## 📝 License

Built for hackathon purposes. Free to fork, improve, and build on top of.

---

<div align="center">

*Made with ♥ and way too much caffeine by **Bhargavi N***  
*AttentionX AI Hackathon 2026*

</div>
