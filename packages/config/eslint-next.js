// Next.js resolves `eslint-config-next` relative to wherever this config file lives,
// so a shared preset in packages/config can't safely re-export it across workspace
// packages. Each Next.js app instead extends 'next/core-web-vitals' directly in its
// own .eslintrc.json (which can still layer this base preset's rules on top).
module.exports = {
  extends: [require.resolve('./eslint-preset.js')],
};
