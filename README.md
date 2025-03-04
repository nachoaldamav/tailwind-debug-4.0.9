# Canditates search issue in @tailwindcss/vite@^4.0.8

This reproduction shows an issue @tailwindcss/vite@^4.0.8 that breaks the candidates search when the config file (css) is loaded from a package.

In `@tailwindcss/vite@4.0.7` it works because it uses the Module Graph to find the candidates, but it was replaced with a FS based system in this PR [tailwindcss#16631](https://github.com/tailwindlabs/tailwindcss/pull/16631).

## Steps

1. run `pnpm dev`, open the preview a check that the button is loading with Tailwind styles applied.
2. in the `package.json`, replace `"@tailwindcss/vite": "4.0.7"` with `"@tailwindcss/vite": "4.0.9"` and run `pnpm i`.
3. run `pnpm dev`, now the button does not have styles applied.

## Observations

- Theorically, this could be fixed by using `@source`, but as seen in `node_modules/@ialdama/tailwind-config/styles.css`, it does not work.
- This is probably caused by pnpm dependencies structure, as the css file is not really loading from `node_modules/@ialdama/tailwind-config/styles.css` but rather `node_modules/.pnpm/@ialdama+tailwind-config@1.0.0/node_modules/@ialdama/tailwind-config/styles.css`.
