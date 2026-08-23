# Team Fiber Fitness Studio — website (v2, lime/dark theme)

A single-page site for Team Fiber Fitness Studio, Kelambakkam. Plain HTML/CSS/JS —
no build step, works straight on Vercel or GitHub Pages.

## Files
```
index.html      the whole page
styles.css      all styling (colors + fonts are CSS variables at the top)
script.js       mobile menu, scroll animations, footer year
images/         gym photos, already resized for web
```

## Before you sell or publish this, search `index.html` for `TODO`

There are more of these than before since this version adds Stats, Trainers,
Pricing and Testimonials sections. Specifically:

1. **WhatsApp number** — `91XXXXXXXXXX` appears in ~9 places (nav, hero, every
   program card, every pricing card, final CTA, contact section, footer,
   floating button). Find-and-replace it everywhere with the real number.
2. **Stats section** — three of the four numbers are `[TODO]` (members, coaches,
   years running). The fourth ("4 Training Programs") is real — it just counts
   the program cards below it.
3. **Trainers section** — only the first card uses a real, identifiable photo
   (the coach from your gym photo). The other two are placeholder avatar cards
   on purpose — we didn't have confirmed photos + names for more coaches. Swap
   in real photos, names and specialisations once you have them, or reduce it
   to however many coaches you actually want to feature.
4. **Pricing** — Monthly / Quarterly / Yearly all show `₹[TODO]`. Fill in real
   prices before this goes live.
5. **Testimonials — important:** these three cards are sample placeholder
   copy, not real reviews, and each is flagged with a small "Sample quote"
   label. **Do not publish them as-is** — either replace them with real member
   quotes, or remove the section. Publishing invented reviews as if they were
   real customer feedback is misleading advertising, not just a style choice.
6. **Address, hours, email, Instagram, map** — all marked `[TODO]` in the
   Contact section and footer.

## Preview it before publishing

Just open `index.html` in a browser — no server needed. Check mobile with
Chrome DevTools (F12 → device toolbar).

## Publish — GitHub + Vercel

Same flow as before:
1. Push these files to your `team-fiber-website` GitHub repo (via `git push`
   or the "Upload files" button on github.com — either works).
2. If the repo is already connected to a Vercel project, it redeploys
   automatically on every push/upload. Otherwise: vercel.com → Add New →
   Project → import the repo → Deploy.
3. Once the gym owner approves, buy the domain and connect it under the
   Vercel project's Settings → Domains.

## Reusing this for other gyms

The whole design is CSS variables at the top of `styles.css` (`--bg`,
`--accent`, fonts, etc.) plus content in `index.html`. To resell this to a
different gym: swap the logo/photos in `images/`, edit the text content in
`index.html`, and change the `--accent` color if you want a different gym to
have its own identity instead of the same lime.

## About the "admin panel"

Same answer as before — a real self-service admin panel needs a backend and
database, which is a bigger project than this. For now: the owner sends you
changes, you edit the file and push/upload again, done in a minute. Worth
pitching as a paid "website care" add-on later rather than building it now.
