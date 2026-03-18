# Lead Capture Setup

This project keeps the current visible contact form design and existing email notification flow, and adds a Supabase backup so every valid submission is also stored in a database.

## Environment variables

Add these values to your local `.env` file and to your GitHub Pages deployment environment if you use a build pipeline:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Only use the public anon key in the frontend.

Never expose the Supabase `service_role` key in Vite, React, or any committed client-side file.

## GitHub Pages deployment

This site is built in GitHub Actions, so the live site only receives Vite env vars that are present during the workflow build.

Add these secrets in GitHub before deploying:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

You can store them either as repository secrets or as secrets on the `github-pages` environment used by `.github/workflows/deploy.yml`.

If they are missing, the workflow now fails on purpose instead of publishing a broken bundle where form submissions always error.

## Supabase SQL

Run this SQL in the Supabase SQL editor:

```sql
create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  service text,
  subject text,
  message text not null,
  status text not null default 'new',
  source text not null default 'website',
  page_url text,
  user_agent text,
  whatsapp_preference text,
  submitted_at_local text,
  submitted_timezone text
);

alter table public.leads
add column if not exists submitted_at_local text,
add column if not exists submitted_timezone text;

alter table public.leads enable row level security;

drop policy if exists "Allow website lead inserts" on public.leads;

create policy "Allow website lead inserts"
on public.leads
for insert
to anon
with check (
  source = 'website'
  and status = 'new'
  and char_length(name) between 2 and 200
  and char_length(email) between 5 and 320
  and char_length(message) between 3 and 5000
  and (
    page_url is null
    or page_url like 'https://queuesolutions.org%'
    or page_url like 'https://www.queuesolutions.org%'
    or page_url like 'http://localhost:%'
    or page_url like 'https://localhost:%'
  )
);
```

## RLS guidance

- Keep RLS enabled.
- Do not create public `select`, `update`, or `delete` policies for `anon`.
- The current frontend only needs `insert`.
- The insert policy above allows both `https://queuesolutions.org` and `https://www.queuesolutions.org`.
- If you later build an internal dashboard, use authenticated users or a server-side admin route for reading and updating leads.

## Submission flow

Current flow after this change:

1. Validate the form in the existing modal.
2. Insert the lead into Supabase first.
3. Preserve the existing email notification request after the DB insert succeeds.
4. If Supabase fails, the user sees an error and no false success is shown.
5. If Supabase succeeds but the email notification fails, the user still sees success and the email failure is only logged in the console.

## Field mapping

Current form fields are mapped like this:

- `name` -> `name`
- `businessName` -> `company`
- `email` -> `email`
- `phoneCountry` + `phone` -> `phone`
- `idea` -> `message`
- generated subject -> `subject`
- current page URL -> `page_url`
- browser user agent -> `user_agent`
- WhatsApp yes/no selection -> `whatsapp_preference`
- browser local submission time -> `submitted_at_local`
- browser timezone -> `submitted_timezone`

The phone input accepts users who repeat the country code in the number field and normalizes it before saving and emailing.

## Local testing

1. Create a Supabase project.
2. Run the SQL above.
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env`.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the contact form locally and submit a test lead.
7. Confirm:
   - the success state appears
   - a row exists in `public.leads`
   - the current email notification still arrives

## Files changed

- `.env.example`
- `docs/lead-capture-setup.md`
- `package.json`
- `package-lock.json`
- `src/components/layout/ContactFormModal.jsx`
- `src/lib/leadCapture.js`
- `src/lib/supabase.js`

## Future admin/dashboard expansion

The current code already isolates:

- the Supabase client in `src/lib/supabase.js`
- lead-building and insert logic in `src/lib/leadCapture.js`

That makes it straightforward to add:

- a private lead dashboard
- lead status updates
- CRM sync
- server-side spam protection
- webhook or Edge Function notifications

If spam becomes a problem, the next safe upgrade is moving inserts behind a serverless function or Supabase Edge Function and adding CAPTCHA.
