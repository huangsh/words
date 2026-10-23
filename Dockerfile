FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8861
ENV HOSTNAME=0.0.0.0
ENV DATABASE_PATH=/app/data/words.db
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
RUN mkdir -p /app/data
VOLUME ["/app/data"]
EXPOSE 8861
CMD ["node", "server.js"]
