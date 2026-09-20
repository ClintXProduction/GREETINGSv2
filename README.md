# 💌 CLTX4 GREET

> **Create. Customize. Share. Celebrate.** ✨

CLTX4 GREET is a modern, interactive digital greeting platform designed to let you create beautiful personalized greetings and share them through a single link.

🎂 Birthdays • 🎄 Christmas • 💖 Valentine • 💍 Anniversary • 🎓 Graduation • 🙏 Thank You • 🎆 New Year • ✨ Custom

Built with a focus on **creativity, simplicity, animations, personalization, and easy sharing** — all while being capable of running on free static hosting such as **GitHub Pages**.

---

## ✨ Features

### 💌 Greeting Creator

Create personalized digital greetings with:

* 👤 Recipient name
* ✍️ Custom message
* 🧑 Sender name
* 🎨 Multiple greeting categories
* 📸 Optional photo
* 🎵 Optional background music
* ✨ Animated visual effects
* 💫 Interactive greeting opening
* 📱 Responsive mobile design

---

## 🎉 Greeting Categories

Choose from multiple ready-made themes:

| Theme       | Icon | Purpose                      |
| ----------- | ---: | ---------------------------- |
| Birthday    |   🎂 | Celebrate someone's birthday |
| Christmas   |   🎄 | Holiday greetings            |
| Valentine   |   💖 | Send a special message       |
| Anniversary |   💍 | Celebrate relationships      |
| Graduation  |   🎓 | Celebrate achievements       |
| Thank You   |   🙏 | Express appreciation         |
| New Year    |   🎆 | Welcome the new year         |
| Custom      |    ✨ | Create your own greeting     |

More themes can be added in future versions.

---

# 🔗 Shareable Greeting Links

Every greeting can generate its own shareable URL.

Example:

```text
https://yourusername.github.io/CLTX4-GREET/view.html?data=...
```

The greeting information is encoded into the URL, allowing the project to work without a traditional database.

That means you can:

* 📋 Copy the greeting link
* 📤 Share it through Messenger
* 💬 Send it through chat
* 📱 Generate a QR code externally
* 🌐 Open it from another device

---

# 💌 Interactive Greeting Experience

Instead of immediately displaying the message, the recipient can see an interactive envelope screen:

```text
        💌

  You have a special message

      [ OPEN MESSAGE ]
```

After opening:

```text
        🎂

      BIRTHDAY

     For Maria

Happy Birthday!
I hope your day is
filled with happiness
and amazing memories.

       — Clint
```

The experience can also display animated effects depending on the selected theme.

---

# ✨ Visual Effects

CLTX4 GREET includes animated effects designed to make greetings feel more alive.

Examples include:

🎈 Birthday
🎄 Christmas
❄️ Holiday
❤️ Valentine
🎆 New Year
🎉 Celebration
✨ Sparkles
💫 Floating particles

The effects can be enabled or disabled while creating a greeting.

---

# 🎵 Music Support

Greetings can optionally include background music.

Simply provide a direct audio URL:

```text
https://example.com/music.mp3
```

The browser may require the recipient to interact with the page before audio can begin.

---

# 📸 Photo Support

You can optionally attach an image URL to your greeting.

Example:

```text
https://example.com/my-photo.jpg
```

The image will appear inside the greeting card.

---

# 📊 Privacy-Friendly Analytics

CLTX4 GREET includes an optional analytics-consent system.

The recipient can choose:

```text
Allow analytics
```

or:

```text
No thanks
```

Analytics are designed around anonymous/local information rather than secretly trying to identify the recipient.

The project does **not** attempt to discover someone's real name from cookies.

---

# 🍪 Privacy & Cookies

CLTX4 GREET can use browser local storage for things such as:

* Anonymous visitor identifier
* Consent preference
* Local greeting statistics
* Local creator information

The project does not magically obtain a visitor's real-world identity.

A browser cookie or local-storage identifier generally identifies a browser/device context, not a person's actual name.

---

# 🔐 Admin Dashboard

CLTX4 GREET includes a basic administrator dashboard.

The current demo administrator password is:

```text
1342000
```

The dashboard can display locally available statistics such as:

* 📊 Greetings created
* 👀 Consent-based opens
* 👤 Anonymous visitor information
* 🕐 Recent local activity

---

## ⚠️ Admin Security Notice

The current version is designed for **GitHub Pages/static hosting**.

Because GitHub Pages serves JavaScript to the browser, a password stored directly in frontend JavaScript is **not a secure authentication system**.

Anyone with enough technical knowledge can inspect the website source.

Therefore:

> **Do not use the current frontend password system for sensitive or production administration.**

For a production version, the project should use a real authentication backend.

Possible future technologies include:

* Supabase
* Firebase
* Cloudflare Workers
* Cloudflare D1
* A custom API
* Other secure authentication providers

---

# 🧑‍💻 Technology

CLTX4 GREET is primarily built using web technologies.

### Frontend

```text
HTML5
CSS3
JavaScript
```

### Hosting

```text
GitHub Pages
```

### Storage

The current static version uses:

```text
URL-encoded greeting data
Browser LocalStorage
```

No traditional server is required for basic greeting creation.

---

# 🤖 Why Not C++?

C++ was originally considered for the project, but GitHub Pages does not execute C++ server-side.

GitHub Pages is designed for static web technologies.

Therefore, the interactive website uses:

```text
HTML
CSS
JavaScript
```

C++ could still be used for future tools such as:

* CLI greeting generator
* URL encoder
* Desktop application
* Offline greeting generator
* Embedded version
* ESP32-based greeting display

---

# 📁 Project Structure

```text
CLTX4-GREET/
│
├── index.html
├── create.html
├── view.html
│
├── admin/
│   └── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── create.js
│   ├── view.js
│   └── admin.js
│
└── README.md
```

---

# 🚀 Deploy on GitHub Pages

## 1. Create a repository

Create a GitHub repository:

```text
CLTX4-GREET
```

## 2. Upload the project

Upload all project files while keeping the folder structure.

## 3. Enable GitHub Pages

Go to:

```text
Repository
→ Settings
→ Pages
```

Select:

```text
Deploy from a branch
```

Then:

```text
Branch: main
Folder: / (root)
```

Save the settings.

GitHub will provide your website URL.

Example:

```text
https://YOUR-USERNAME.github.io/CLTX4-GREET/
```

---

# 💡 Example Workflow

### Step 1

Open:

```text
/create.html
```

### Step 2

Choose:

```text
🎂 Birthday
```

### Step 3

Enter:

```text
Recipient:
Maria

From:
Clint
```

### Step 4

Write:

```text
Happy Birthday, Maria!

I hope your special day is
filled with happiness,
laughter and unforgettable
memories.

Have an amazing birthday! 🎂✨
```

### Step 5

Click:

```text
Generate link ✨
```

### Step 6

Copy and send the generated URL.

The recipient opens the link and receives the interactive greeting.

---

# 🌐 No Database Required

One of the main goals of CLTX4 GREET is keeping the basic system simple.

Instead of sending every greeting to a server, the greeting information can be encoded into the generated URL.

Conceptually:

```text
Greeting
   ↓
JSON data
   ↓
Encoded data
   ↓
Shareable URL
   ↓
Recipient opens link
   ↓
Greeting reconstructed
```

This makes the basic system compatible with static hosting.

---

# 🔮 Future Features

Possible future versions may include:

### 👤 User Accounts

```text
Register
Login
Profile
Saved Greetings
Greeting History
```

### 📊 Advanced Analytics

```text
Total Views
Unique Visitors
Device Statistics
Browser Statistics
Time-based Statistics
Greeting Performance
```

### 🎨 Advanced Designer

```text
Custom backgrounds
Custom fonts
Text animations
Gradient editor
Particle controls
Sticker library
Image positioning
Color picker
```

### 🎵 Media

```text
Music library
Audio upload
Video greetings
Background sounds
Animated GIFs
```

### 🔗 Sharing

```text
QR codes
Short URLs
Social sharing
Messenger sharing
Copy link
Download greeting
```

### 🧩 More Templates

```text
Good Morning
Good Night
Congratulations
Get Well Soon
Thank You
Sorry
Welcome
Friendship
Wedding
Baby Shower
Mother's Day
Father's Day
Teacher's Day
Christmas
New Year
Halloween
Eid
Custom Events
```

---

# 🛡️ Privacy Philosophy

CLTX4 GREET is designed around the idea that greetings should be fun without secretly identifying people.

The project should avoid:

❌ Secretly collecting real names
❌ Hidden personal-information harvesting
❌ Password collection without secure authentication
❌ Selling visitor information
❌ Tracking users without appropriate notice/consent

Instead, future analytics should focus on aggregated information and clear user choices.

---

# 🎯 Project Goals

CLTX4 GREET aims to become more than a simple greeting generator.

The long-term goal is to create a complete digital greeting platform where users can:

```text
CREATE
   ↓
CUSTOMIZE
   ↓
ANIMATE
   ↓
SHARE
   ↓
CELEBRATE
```

All through one simple link.

---

# ⚡ Performance

The project is designed to work well on:

* 📱 Android
* 📱 iPhone
* 💻 Windows
* 💻 Linux
* 🍎 macOS
* 🌐 Modern browsers

The interface is responsive and designed for both desktop and mobile screens.

---

# 🧪 Status

```text
Version: 2.0
Status: Active Development
Hosting: GitHub Pages
License: Personal / Educational Project
```

---

# 👨‍💻 Creator

**CLTX4**

Created and developed by **Clint Pio Manuel Braceno**.

Brand:

```text
CLTX4
```

Project:

```text
CLTX4 GREET
```

---

# ⭐ Support the Project

If you like CLTX4 GREET:

⭐ Star the repository
🍴 Fork the project
🐛 Report bugs
💡 Suggest features
🔧 Submit improvements
📢 Share the project

---

# 💜 Final

CLTX4 GREET was created to make digital greetings feel more personal.

Instead of sending only:

```text
"Happy Birthday!"
```

create something that feels like an experience:

```text
💌 A message
     ↓
✨ An animation
     ↓
🎵 Music
     ↓
🎂 A personalized greeting
     ↓
❤️ A memory
```

**Create something special. Share it with one link.**

# CLTX4 GREET 💌✨

> **Your message. Your style. Your moment.**
