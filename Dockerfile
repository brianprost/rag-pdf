FROM --platform=linux/amd64 node:20
RUN npm install -g pnpm
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .
RUN pnpm run build
CMD ["pnpx", "serve@latest", "out"]