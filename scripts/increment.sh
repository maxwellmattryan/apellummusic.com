#!/bin/bash

# Increments the version of the app

log_exit() {
  echo -e "$1"
  exit 1
}

NEW_VERSION="${1?[Error] Requires a new version}"
CURRENT_VERSION=$(node -p "require('./ui/package.json').version" || log_exit "\n[Error] Unable get current app version")

overwrite_package_version() {
  json -I -f ./ui/package.json -e "this.version=\"$NEW_VERSION\""
}

commit_version_increment() {
  git add ./ui/package.json
  git commit -m "Increment version to \`$NEW_VERSION\`"
  git push
}

tag_new_version() {
  git tag "v$NEW_VERSION"
  git push origin "v$NEW_VERSION"
}

overwrite_package_version || log_exit "\n[Error] Unable to overwrite current version"
commit_version_increment || log_exit "\n[Error] Unable to commit version increment"
#tag_new_version || log_exit "\n[Error] Unable to tag new version"
