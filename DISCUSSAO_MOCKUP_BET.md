# Mockup Bet

## Objetivo

Criar um mockup de plataforma de apostas esportivas com versão desktop e mobile, focado em navegação, aparência visual e funcionalidades principais. Não será um sistema real de apostas. O objetivo é simular a experiência do produto com dados locais simples.

## Direção do Projeto

Esse projeto deve ser tratado como um protótipo funcional:

- sem backend real
- sem autenticação real
- sem integração com APIs externas
- sem banco de dados
- persistência local simples em JSON
- foco em UI, fluxos básicos e sensação de produto

## Identidade Visual

Direção inicial:

- cor primária: preto
- cor secundária: roxo
- apoio: branco e tons de cinza escuro
- textos: branco e roxo em áreas de destaque
- estilo: moderno, escuro, com aparência de casa de apostas esportiva

Sugestão de paleta:

- `#0B0B0F` fundo principal
- `#15151D` superfícies e cards
- `#7B2CFF` roxo principal
- `#A970FF` roxo de destaque
- `#FFFFFF` texto principal
- `#B8B8C7` texto secundário
- `#1F1F2B` bordas e divisões

## Stack Sugerida

Para manter simples e rápido de construir, eu faria assim:

- `Next.js` com `React`
- `TypeScript`
- `Tailwind CSS`
- armazenamento em arquivos `.json` locais para dados mockados
- `localStorage` para estado do usuário no navegador

## Por Que Essa Stack

- entrega rápida
- boa responsividade para desktop e celular
- componentes reutilizáveis
- fácil simular login, saldo, apostas e histórico
- fácil hospedar depois se quiser mostrar o mockup online

## Arquitetura Simples

Arquitetura mínima, sem complexidade desnecessária:

### Camadas

1. `UI`
   telas, componentes, cards, header, menu, modal de aposta

2. `Estado local`
   sessão fake do usuário, saldo, cupom de aposta, histórico recente

3. `Dados mockados`
   jogos, odds, banners, categorias e usuário fake em JSON

### Estrutura sugerida

```text
/src
  /app
    /login
    /home
    /sports
    /bet-slip
    /profile
  /components
    Header
    BottomNav
    GameCard
    OddsButton
    BetSlip
    BalanceCard
  /data
    games.json
    user.json
    bets.json
  /lib
    storage.ts
    mock-session.ts
```

## Funcionalidades Principais

O mockup deve cobrir só o núcleo do produto:

### 1. Login fake

- tela simples com e-mail e senha
- botão entrar
- sem validação real
- ao entrar, salva sessão fake no `localStorage`

### 2. Home

- banner principal
- saldo do usuário
- jogos em destaque
- atalhos para categorias esportivas
- seção de apostas populares ou eventos ao vivo simulados

### 3. Lista de jogos

- cards com:
  - times
  - horário
  - campeonato
  - odds principais
- categorias simples:
  - futebol
  - basquete
  - tênis

### 4. Seleção de odds

- clicar em uma odd adiciona item ao cupom
- destacar odd selecionada
- impedir duplicação simples do mesmo mercado

### 5. Cupom de aposta

- lista das seleções escolhidas
- valor da aposta
- retorno estimado
- botão de confirmar aposta
- ao confirmar:
  - reduz saldo fake
  - salva no histórico local
  - mostra mensagem de sucesso

### 6. Histórico simples

- apostas realizadas
- status mockado:
  - pendente
  - ganha
  - perdida

### 7. Perfil básico

- nome do usuário
- saldo atual
- botão sair
- limpar sessão local

## Experiência Desktop e Mobile

### Desktop

- sidebar ou menu lateral para navegação
- área central com listagem de jogos
- cupom de aposta visível na lateral direita

### Mobile

- navegação inferior
- listagem em cards empilhados
- cupom em drawer ou modal deslizante
- foco em uso com uma mão

## Fluxo Principal

1. usuário entra pelo login fake
2. vê saldo e eventos na home
3. escolhe odds em jogos
4. abre o cupom
5. define valor
6. confirma aposta
7. vê atualização do saldo e histórico

## O Que Fica Fora

Para manter o projeto pequeno, eu deixaria fora:

- cadastro real
- recuperação de senha
- autenticação com backend
- integração com pagamentos
- resultados reais de partidas
- atualizações em tempo real
- painel administrativo
- sistema completo de carteiras
- regras avançadas de aposta

## Dados Mockados

Sugestão de dados locais:

### `games.json`

- id
- esporte
- campeonato
- timeA
- timeB
- horário
- odds
- status ao vivo ou agendado

### `user.json`

- id
- nome
- email
- saldo

### `bets.json`

- id
- seleções
- valor apostado
- retorno estimado
- status
- data

## Regras Simples do Mockup

- login sempre funciona
- saldo inicial fixo, por exemplo `R$ 1.000,00`
- aposta só pode ser confirmada se houver saldo suficiente
- odds são estáticas
- histórico pode ser salvo localmente

## MVP Recomendado

Se a ideia for fazer a primeira versão rápido, eu faria este recorte:

1. login fake
2. home com jogos mockados
3. seleção de odds
4. cupom de aposta
5. confirmação com atualização de saldo
6. histórico simples
7. layout responsivo para desktop e mobile

## Próximo Passo Sugerido

Se essa direção fizer sentido, o próximo documento pode ser um escopo mais operacional com:

- mapa de telas
- componentes necessários
- estrutura de dados JSON
- checklist de implementação por etapas

## Minha Recomendação

Eu faria esse projeto como frontend-only, com dados locais e persistência em `localStorage`, porque isso entrega exatamente o que você descreveu: um mockup funcional, visualmente convincente, sem criar dependências técnicas desnecessárias.
