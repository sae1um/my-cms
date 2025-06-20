# 🧠 Saelum CMS — A Client-Side Headless CMS

Saelum CMS is a **lightweight, password-protected content management system** (CMS) built for developers and indie creators who want complete control over their site's content structure — **without relying on third-party CMS platforms**.

Designed for personal projects and small client sites, it gives you the flexibility of defining your own content schemas per project (e.g. blog, portfolio, product site) with a fully client-side editing experience.

---

## ✨ Why I Built This

As a developer working on multiple personal projects, I wanted:

- A **simple but powerful** tool to manage different types of content without setting up WordPress, Strapi, or Sanity.
- Full control over how my content is structured and stored.
- A CMS that doesn't require an account, dashboard login, or third-party SaaS.
- A system where I could visually define custom fields for **each project** and auto-generate the UI for editing them.
- A secure but minimal password-protected system that works entirely in the browser for managing my blog, portfolio, and client content.

> 🔐 This is not a multi-user CMS. It’s a **developer-focused, single-admin CMS** for managing custom data locally or on your own backend.

---

## 🧰 Technologies Used

| Area            | Stack / Library                         | Why I Chose It                                      |
|-----------------|------------------------------------------|-----------------------------------------------------|
| **Frontend**    | Next.js 15 + App Router                  | App Router is ideal for modular, dynamic routing    |
|                 | Tailwind CSS + shadcn/ui                 | Fast UI development, themeable, accessible          |
| **Backend**     | Express.js                               | Lightweight, fast to build custom APIs              |
|                 | MySQL + mysql2                           | Familiar, relational storage for content/sessions   |
|                 | STILL WIP...                             |                                                     |
| **Auth**        | bcrypt + HTTP-only cookies               | Simple, secure login with hashed password + tokens  |
|                 | STILL WIP...                             |                                                     |
| **Schema Logic**| Dynamic runtime form generation          | Reusable components that adapt to JSON schema       |
|                 | STILL WIP...                             |                                                     |

---

## 🔐 Authentication & Security

- **Single admin** model — no user registration or roles (will probably be different in the long run)

---

## 📁 What You Can Do With It

- Create multiple "projects" (e.g. blog, portfolio, recipes, journal)
- Define each project's fields in a ** schema editor**
- Get a custom form UI generated 
- Upload and manage media (images, files)
- View and edit entries in a clean dashboard interface
- Access the system from any device, as long as you're logged in

---

📸 Example Use Case
You're building a portfolio site and want to manage:

- Projects (title, description, live URL, tags, thumbnail)
- Blog posts (title, slug, body, cover image)
- Testimonials (author, quote, avatar)

You create 3 schema configs and use the CMS dashboard to manage them without touching your codebase again.



---
## 💡 Future Plans

Here's where I’d like to take Saelum CMS next:

- [ ] Add visual schema builder UI (instead of raw JSON)
- [ ] Image preview & media manager with folders
- [ ] Optional Markdown or rich-text support
- [ ] Role-based authentication (eventually multi-user)
- [ ] Scheduled publishing + drafts
- [ ] Versioning and entry history
- [ ] Export/import content to JSON/YAML

---

## 🛠 Getting Started

### 🚧 WIP
