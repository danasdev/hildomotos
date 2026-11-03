/*
  ESTOQUE DA HILDO MOTOS
  ----------------------
  Edite este arquivo para atualizar o site. Não precisa mexer em mais nada.

  ATENÇÃO: as motos abaixo são EXEMPLOS para montar o layout.
  Troque pelas motos reais (modelo, ano, km, foto) antes de publicar.

  Campos de cada moto:
    id          texto curto, sem espaço (vira o link da moto: site.com/#moto=id)
    marca       ex.: "Honda"
    modelo      ex.: "CG 160 Titan"
    ano         ex.: 2024
    km          0 para 0km
    condicao    "0km" ou "seminova"
    categoria   "street" | "trail" | "scooter" | "esportiva"
    cilindrada  em cc, ex.: 160
    cor         ex.: "Vermelha"
    preco       número (ex.: 18990) ou null para mostrar "Consulte"
    foto        foto principal (de preferência 16:9, moto de lado, virada para a direita)
    fotos       fotos extras da galeria, ex.: ["assets/img/cg-frente.jpg", "assets/img/cg-painel.jpg"]
                (pode deixar [] se só tiver a principal)
    ilustrativa true enquanto a foto não for da moto real
    destaque    true para aparecer no topo do site (use 4)
    loja        "cohab" | "vila-flamengo" (onde a moto está)
*/

window.HILDO = {
  lojas: {
    cohab: {
      nome: "Unidade Cohab",
      bairro: "Cohab · São Luís",
      whatsapp: "5598985237332",
      telefone: "(98) 98523-7332",
      mapa: "https://www.google.com/maps/search/?api=1&query=Hildo+Motos+Cohab+S%C3%A3o+Lu%C3%ADs"
    },
    "vila-flamengo": {
      nome: "Unidade Vila Flamengo",
      bairro: "Estrada de Ribamar · São Luís",
      whatsapp: "5598984308732",
      telefone: "(98) 98430-8732",
      mapa: "https://www.google.com/maps/search/?api=1&query=Hildo+Motos+Vila+Flamengo+S%C3%A3o+Lu%C3%ADs"
    }
  },

  estoque: [
    { id: "cb300f-2024", marca: "Honda", modelo: "CB 300F Twister", ano: 2024, km: 0, condicao: "0km", categoria: "street", cilindrada: 293, cor: "Preta", preco: null, foto: "assets/img/naked.jpg", fotos: ["assets/img/naked-34.jpg", "assets/img/naked-det.jpg"], ilustrativa: true, destaque: true, loja: "cohab" },
    { id: "xre300-2023", marca: "Honda", modelo: "XRE 300 Sahara", ano: 2023, km: 8400, condicao: "seminova", categoria: "trail", cilindrada: 294, cor: "Branca", preco: null, foto: "assets/img/trail.jpg", fotos: ["assets/img/trail-34.jpg", "assets/img/trail-det.jpg"], ilustrativa: true, destaque: true, loja: "vila-flamengo" },
    { id: "nmax160-2025", marca: "Yamaha", modelo: "NMax 160", ano: 2025, km: 0, condicao: "0km", categoria: "scooter", cilindrada: 155, cor: "Cinza", preco: null, foto: "assets/img/scooter.jpg", fotos: ["assets/img/scooter-34.jpg", "assets/img/scooter-det.jpg"], ilustrativa: true, destaque: true, loja: "cohab" },
    { id: "r3-2022", marca: "Yamaha", modelo: "YZF-R3", ano: 2022, km: 12100, condicao: "seminova", categoria: "esportiva", cilindrada: 321, cor: "Azul", preco: null, foto: "assets/img/sport.jpg", fotos: ["assets/img/sport-34.jpg", "assets/img/sport-det.jpg"], ilustrativa: true, destaque: true, loja: "vila-flamengo" },
    { id: "cg160-2025", marca: "Honda", modelo: "CG 160 Titan", ano: 2025, km: 0, condicao: "0km", categoria: "street", cilindrada: 162, cor: "Vermelha", preco: null, foto: "assets/img/street.jpg", fotos: ["assets/img/street-34.jpg", "assets/img/street-det.jpg"], ilustrativa: true, destaque: false, loja: "cohab" },
    { id: "lander-2023", marca: "Yamaha", modelo: "Lander 250", ano: 2023, km: 9800, condicao: "seminova", categoria: "trail", cilindrada: 249, cor: "Azul", preco: null, foto: "assets/img/trail-azul.jpg", fotos: ["assets/img/trail-azul-34.jpg", "assets/img/trail-azul-det.jpg"], ilustrativa: true, destaque: false, loja: "cohab" },
    { id: "pcx160-2024", marca: "Honda", modelo: "PCX 160", ano: 2024, km: 4200, condicao: "seminova", categoria: "scooter", cilindrada: 156, cor: "Branca", preco: null, foto: "assets/img/scooter-branca.jpg", fotos: ["assets/img/scooter-branca-34.jpg", "assets/img/scooter-branca-det.jpg"], ilustrativa: true, destaque: false, loja: "vila-flamengo" },
    { id: "fazer250-2025", marca: "Yamaha", modelo: "Fazer FZ25", ano: 2025, km: 0, condicao: "0km", categoria: "street", cilindrada: 249, cor: "Cinza e amarela", preco: null, foto: "assets/img/naked250.jpg", fotos: ["assets/img/naked250-34.jpg", "assets/img/naked250-det.jpg"], ilustrativa: true, destaque: false, loja: "vila-flamengo" }
  ]
};
