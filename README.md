# Site Hildo Motos

Site estático (HTML, CSS e JS, sem build). Abra `index.html` por um servidor local ou publique a pasta inteira na Vercel, Netlify ou GitHub Pages.

```bash
python3 -m http.server 5173
```

## Atualizar o estoque

Tudo fica em `data/estoque.js`. Cada moto é uma linha com modelo, ano, km, condição (`"0km"` ou `"seminova"`), estilo, foto e a loja onde está. As instruções de cada campo estão no topo do arquivo.

- `destaque: true` coloca a moto no topo do site (use 4).
- `preco: null` mostra "Consulte"; um número (ex.: `18990`) mostra "R$ 18.990".
- `ilustrativa: true` mostra o selo "Imagem ilustrativa"; use `false` quando a foto for da moto real.
- Fotos: de preferência 16:9, moto de lado, virada para a direita, fundo escuro. Salve em `assets/img/`.

Depois de editar, troque o `?v=` dos links no fim do `index.html` (ex.: `?v=12`) para os visitantes receberem a versão nova.

## Antes de publicar

- As motos em `data/estoque.js` são exemplos: troque pelas reais.
- Todas as imagens de `assets/img/` foram geradas por IA (o prompt de cada uma está gravado no próprio arquivo). Troque pelas fotos reais quando tiver.
- Falta o logo oficial em vetor (SVG): hoje o site usa o nome escrito.
- Confirme endereços e horários das duas lojas para adicionar na seção "Lojas".
