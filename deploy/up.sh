#!/bin/bash

if [ ! -f ~/dhparam/dhparam.pem ]; then
  mkdir -p ~/dhparam
  openssl dhparam -out ~/dhparam/dhparam.pem 2048
fi

if ! command -v node >/dev/null 2>&1 || ! command -v pnpm >/dev/null 2>&1; then
  echo "Node.js или pnpm не найдены. Устанавливаю..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  nvm install 22
  corepack enable
  corepack prepare pnpm@latest --activate
else
  echo "Node.js и pnpm уже установлены. Пропускаю установку."
fi

cd ..
pnpm install
pnpm run build
docker compose -f deploy/compose.yaml up -d