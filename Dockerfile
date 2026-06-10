FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .

# Build args passés au moment du build
ARG NEXT_PUBLIC_API_URL=http://localhost:3001
ARG NEXT_PUBLIC_VIEWER_URL=http://localhost:4000
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_VIEWER_URL=$NEXT_PUBLIC_VIEWER_URL

RUN npm run build

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
