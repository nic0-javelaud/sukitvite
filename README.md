# Boilerplate Sveltekit + Supabase + Vite + Tailwind CSS + Shadcn-svelte + Typescript

After cloning the repo you need to perform the actions below:

## Install dependencies

```bash
npm install
```

## Create .env file

```bash
touch .env
echo "# Private" >> .env
echo "SUPABASE_URL=" >> .env
echo "SUPABASE_ANON_KEY=" >> .env
echo "# Public" >> .env
echo "PUBLIC_SUPABASE_URL=" >> .env
echo "PUBLIC_SUPABASE_ANON_KEY=" >> .env
```

## Update .env file with relevant info

## Configure Supabase client

Comment in/Out the relevant import statement in  the file src > lib > db.ts depending on if the client should be expose to the -fe or -be of the sveltekit app.
