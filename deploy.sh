#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd src/.vuepress/dist

echo 'codenteq.github.io' > CNAME

git init
git add -A
git commit -m 'Deploy src to GitHub'
git push -f git@github.com:codenteq/imtihan-docs.git master:gh-pages

cd -
