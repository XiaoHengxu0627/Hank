import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function removeCssLayers() {
  const oklchToHex: Record<string, string> = {
    'oklch(98.5% 0 0)': '#fafafa',
    'oklch(96.7% .001 286.375)': '#f4f4f5',
    'oklch(96.7% .003 264.542)': '#f3f4f6',
    'oklch(92% .004 286.32)': '#e4e4e7',
    'oklch(92% .003 264.542)': '#e5e7eb',
    'oklch(87.1% .006 286.286)': '#d4d4d8',
    'oklch(70.5% .015 286.067)': '#a1a1aa',
    'oklch(55.2% .016 285.938)': '#71717a',
    'oklch(44.2% .017 285.786)': '#52525b',
    'oklch(37% .013 285.805)': '#3f3f46',
    'oklch(27.4% .006 286.033)': '#27272a',
    'oklch(21% .006 285.885)': '#18181b',
    'oklch(14.1% .005 285.823)': '#09090b',
  }

  return {
    name: 'remove-css-layers',
    enforce: 'post' as const,
    generateBundle(_: any, bundle: Record<string, any>) {
      for (const [file, chunk] of Object.entries(bundle)) {
        if (file.endsWith('.css') && chunk.type === 'asset') {
          let css = typeof chunk.source === 'string' ? chunk.source : chunk.source.toString()

          // Step 1: Remove @layer block wrappers
          let result = ''
          let i = 0
          const len = css.length

          while (i < len) {
            const blockMatch = css.slice(i).match(/^@layer\s+[\w-]+\s*\{/)
            if (blockMatch && blockMatch.index === 0) {
              i += blockMatch[0].length
              let depth = 1
              const start = i
              while (i < len && depth > 0) {
                if (css[i] === '{') depth++
                if (css[i] === '}') depth--
                if (depth > 0) i++
              }
              result += css.slice(start, i)
              i++
              continue
            }
            const stmtMatch = css.slice(i).match(/^@layer\s+[\w-]+\s*;/)
            if (stmtMatch && stmtMatch.index === 0) {
              i += stmtMatch[0].length
              continue
            }
            result += css[i]
            i++
          }

          // Step 2: Replace oklch() values with hex equivalents
          for (const [oklch, hex] of Object.entries(oklchToHex)) {
            result = result.replaceAll(oklch, hex)
          }

          chunk.source = result
        }
      }
    },
  }
}

export default defineConfig({
  server: {
    host: true,
  },
  build: {
    target: 'es2015',
  },
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    removeCssLayers(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
