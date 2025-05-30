FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# We don't need to copy the rest of the files because we'll use a volume
# COPY . .

# Use dev server for hot reload
CMD ["pnpm", "dev", "--host", "0.0.0.0"]
