#!/bin/bash

# Increments the version of the app

log_exit() {
  echo -e "$1"
  exit 1
}

NEW_VERSION="${1?Error: Requires a new version}"
CURRENT_VERSION=$(node -p "require('./ui/package.json').version")

json -I -f ./ui/package.json -e "this.version=\"$NEW_VERSION\""

git add ./ui/package.json
git commit -m "Increment version to \`$NEW_VERSION\`"
git push

git tag "v$NEW_VERSION"
git push origin "v$NEW_VERSION"
