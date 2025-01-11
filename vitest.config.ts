import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['default'],
    exclude: [...configDefaults.exclude],
  },
})