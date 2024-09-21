import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle, { rules } from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
