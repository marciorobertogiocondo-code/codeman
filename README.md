# PEPITO — A Calopsita da Sorte · v3.0

Aplicativo web instalável para explorar combinações aleatórias e experiências simbólicas. O modo Globo seleciona seis dezenas de forma uniforme, sem reposição; os demais métodos são experimentais e não preveem sorteios.

## Publicação no GitHub Pages

O site usa a branch `main` e a pasta raiz. Depois de enviar uma atualização, aguarde a conclusão da publicação pelo GitHub Pages e abra a página com uma recarga completa. O service worker atualiza o cache versionado e mantém o aplicativo disponível offline após a primeira visita.

## Recursos

- Globo com 60 bolas, movimento em três dimensões, iluminação suave e grade na frente e atrás das bolas.
- Pipito com artes diferentes para a identidade, conversa, curiosidades e reações do sorteio.
- Oráculo de Cristal com animação específica por método e pausa quando fica fora de uso.
- Consulta meteorológica opcional por cidade informada pelo usuário, usando geocodificação e dados atuais da Open-Meteo.
- Histórico guardado no aparelho, exportação e link para os resultados oficiais da Mega-Sena na CAIXA.
- Efeitos sonoros e melodia original opcionais, iniciados após interação do usuário e com controle de volume.
- Interface adaptável a celular e computador, com respeito à preferência por movimento reduzido.

## Arquivos

- `index.html`: interface, lógica do sorteio, desenhos e integrações públicas.
- `manifest.webmanifest`: identificação e instalação do PWA.
- `sw.js`: atualização de cache e suporte offline.
- `assets/`: ilustrações do mascote.
- `icons/`: ícones do aplicativo.

## Fontes externas

- Clima: [documentação de geocodificação da Open-Meteo](https://open-meteo.com/en/docs/geocoding-api) e [documentação da previsão](https://open-meteo.com/en/docs).
- Resultados oficiais: [Portal Loterias CAIXA — Mega-Sena](https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx).
