# Pulse Casino Mockup

Mockup responsivo de cassino online com:

- login fake
- lobby com banner promocional
- atalhos por categoria
- grid de slots, crash, roletas e cassino ao vivo
- top ganhos simulados
- painel lateral para jogar um titulo
- saldo local
- historico de rodadas
- perfil simples

## Como rodar

Como o projeto lê dados de `data/*.json`, rode com um servidor HTTP simples:

```bash
python3 -m http.server 8080
```

Depois abra:

```text
http://localhost:8080
```

## Persistência

- dados base em `data/games.json` e `data/user.json`
- sessao, saldo, historico e jogo selecionado em `localStorage`

## Reset

Use o botao `Restaurar mockup` dentro da tela de perfil para voltar ao estado inicial.
