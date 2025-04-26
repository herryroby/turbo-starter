// lint-staged.config.js
const path = require('path');

// helper: given a filename like "packages/ui/src/button.tsx",
//           return the workspace dir, e.g. "packages/ui"
function getWorkspaceDir(file) {
  const parts = file.split(path.sep);
  // assume your workspaces live directly under "packages" or "apps"
  return parts[0] === 'packages' || parts[0] === 'apps' ? path.join(parts[0], parts[1]) : null;
}

module.exports = {
  // catch all JS/TS files anywhere
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    // group files by workspace dir
    const byWorkspace = filenames.reduce((map, file) => {
      const ws = getWorkspaceDir(file);
      if (ws) {
        map[ws] = map[ws] || [];
        map[ws].push(file);
      }
      return map;
    }, {});

    // for each workspace, return a pnpm command that runs its lint script
    return Object.entries(byWorkspace).map(
      ([workspaceDir, files]) =>
        // adjust the filter to your package name or path
        `pnpm --filter ./${workspaceDir} lint --fix ${files.join(' ')}`
    );
  },

  // fallback: format JSON/MD everywhere
  '**/*.{json,md}': ['prettier --write']
};
