

# Norbil — car rental website

Live at **[norbil.me](https://norbil.me)**

A booking-request site for Norbil DOO, a small car rental company in Montenegro.
This is a real project for a real company, and it is also my first one.

I am learning React, so I wrote all of the JSX and the logic myself. Where I got
stuck I asked for direction, not for finished code.

---

## Stack

React 19, Vite, React Router, CSS Modules. Plain JavaScript.

No UI library. The design system lives in CSS custom properties, and I wanted to
keep it visible.

I am following a React course that uses Create React App and TypeScript. I kept
this project on Vite and plain JS on purpose — I did not want to learn two new
things at the same time. TypeScript comes after React is solid.

---

## Running it

```bash
npm install
npm run dev
```

---

## Structure

```
src/
  components/   one component, one .module.css
  pages/        Home, CarPage, Privacy, Terms
  data/         cars.json, extras.json, distances.json
  styles/       tokens.css, global.css
public/
  images/       WebP with JPG fallback
  _redirects    SPA fallback for Cloudflare Pages
  robots.txt
  sitemap.xml
```

---

## Decisions

**CSS in three layers.** `tokens.css` holds only variables. `global.css` holds
classes that repeat everywhere. Each component gets its own module. I did not
use Tailwind because the design system already exists in the variables and
Tailwind would hide it.

**Data separate from code.** Cars, extras and distances live in JSON. One place
to change a price.

**Keys, not display strings.** `"wagon"` in the data, "Station wagon" in the
component. Translations are coming, and I did not want to rewrite the data when
they do.

**Slug as id.** `/vozila/skoda-octavia` instead of `/vozila/3`. Better for
search, and a person can read it.

**URL as state.** Dates and pick-up location go into query parameters, so a link
can be shared and refreshed without losing the search.

**`:focus-visible` with `:where()`.** Keyboard users see the focus ring, mouse
users do not get an outline on click. `:where()` has zero specificity, so a
component can override it without a fight.

**A request is not a booking.** The price in the browser is an estimate. Anyone
can change it in DevTools, so the site, the email and the Terms all say the same
thing: the reservation is confirmed by us, not by the form.

**Formspree, not Resend.** Resend needs an API key. Vite puts every `VITE_*`
variable straight into the bundle, so there is no way to keep a key secret in a
front-end app — it would sit in the JS file for anyone to read. Formspree's
endpoint is public by design, so there is nothing to steal. Resend would need a
serverless function, which is a reason to migrate, not a reason to rush.

**Uncontrolled honeypot.** The trap field has no `value` and no `onChange`. A bot
that sets `input.value` through the DOM does not trigger React's `onChange`, so a
controlled honeypot would always read as empty and catch nothing. The field is
read from the form's `elements` collection on submit instead.

**Form validation.** Errors are kept in their own state object, keyed by field
name, and recomputed from scratch on every submit — no spreading the previous
errors in, or a fixed message would never disappear. `aria-invalid` and
`aria-describedby` connect each input to its message, and the first invalid field
gets focus when validation fails.

---

## What I found hard

Connecting the dots.

Writing a component on its own is one thing. Writing it so that it still works
for whatever is next on the list is different. Choosing keys instead of display
strings because translations are coming. Putting dates in the URL because the
booking form and the car page both need them. Deciding where state should live
before I knew what would need it.

That was the first time I was dealing with how a real project actually works —
making a decision now while keeping in mind what comes after it.

---

## Known limitations

I know about these. They are not oversights.

**One set of meta tags for the whole site.** This is a SPA, so `/vozila/renault-clio`
serves the same `<title>` and Open Graph image as the home page. Google runs
JavaScript and will eventually see the right content, but Facebook and WhatsApp
do not, so every shared link looks identical. React 19 can set metadata per page
in the browser, which fixes search but not social previews. The real fix is
server rendering.

**Formspree free tier is 50 submissions a month.** Enough now, not enough for a
season. The recipient address is also locked to the account owner on the free
plan, so requests arrive in a personal inbox rather than `booking@norbil.me`.
Both are solved by upgrading, and that has to happen before spring 2027.

**The sitemap is written by hand.** Fine for six cars. It should be generated
from `cars.json` at build time once the fleet grows.

**No tests.** I have not learned testing yet.

---

## Next

- Translations — ME, EN, NO
- Google Search Console and Google Business Profile
- Per-page metadata
- Migration to Next.js

The migration is the one that matters. It fixes the metadata, puts the content in
the HTML for every crawler, and it is what employers are asking for. The URLs
stay the same, so nothing that is already indexed is lost.

---

## Credit

The hero photograph is mine, taken at Rijeka Crnojevića and edited afterwards.