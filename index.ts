import fs from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import a11y from 'eslint-plugin-jsx-a11y'
import n from 'eslint-plugin-n'

const dts = await pluginsToRulesDTS({
  'jsx-a11y': a11y,
  n
})

await fs.writeFile('eslint-typegen.d.ts', dts)
