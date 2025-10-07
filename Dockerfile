# ---- Stage 1: Build ----
FROM node:20-alpine AS builder

# Instalar pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# Criar diretório da aplicação
WORKDIR /app

# Copiar arquivos de configuração primeiro (para melhor cache das dependências)
COPY package.json pnpm-lock.yaml* ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar restante do código
COPY . .

# Gerar build de produção
RUN pnpm build


# ---- Stage 2: Run ----
FROM node:20-alpine AS runner

WORKDIR /app

# Definir variáveis de ambiente padrão
ENV NODE_ENV=production
ENV PORT=3000

# Copiar apenas o necessário do builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expor a porta
EXPOSE 80

# Comando para rodar a aplicação
CMD ["pnpm", "start"]
