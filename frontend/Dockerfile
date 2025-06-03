FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN --mount=type=cache,target=/root/.pnpm-store \
    pnpm install --no-frozen-lockfile

COPY src/ ./src/
COPY public/ ./public/
COPY index.html ./
COPY tsconfig.json ./
COPY vite.config.ts ./

EXPOSE 5173

CMD ["pnpm", "dev:backend", "--host"]
