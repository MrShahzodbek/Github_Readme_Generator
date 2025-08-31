import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change this to your repo name if deploying to a project page:
// e.g. https://username.github.io/REPO_NAME/
// For user/organization pages (https://username.github.io), set base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Github_Readme_Generator/', // <-- set to '/REPO_NAME/' before deploying
})
