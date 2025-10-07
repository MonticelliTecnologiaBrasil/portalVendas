# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia apenas o essencial primeiro (cache de dependências)
COPY package*.json ./
RUN npm i

# Copia o restante do código e faz build
COPY . .
RUN npm run build

# Etapa de execução
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copia arquivos necessários do build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Cloud Run espera que o serviço escute nessa porta
EXPOSE 8080

# Inicia o Next na porta 8080
CMD ["npm", "run", "start", "--", "-p", "8080"]

