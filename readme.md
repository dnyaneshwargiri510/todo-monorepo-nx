# Create and enter a completely separate Nx directory
cd /Users/dnyaneshwargiri/Desktop/workspace
mkdir todo-monorepo-nx && cd todo-monorepo-nx

# Initialize Git and pnpm project
git init
pnpm init

# Configure pnpm workspaces
echo "packages:\n  - 'packages/*'" > pnpm-workspace.yaml

# Install Nx locally
pnpm add -D nx

# Create the nx.json configuration
cat << 'EOF' > nx.json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["{workspaceRoot}/packages/*/dist", "{workspaceRoot}/packages/*/.next"]
    }
  },
  "defaultBase": "main"
}
EOF

# Add execution script to package.json
pnpm pkg set scripts.build="nx run-many -t build"

# Commit to the Nx Git history
git add .
git commit -m "Initialize isolated Nx structure using pnpm"