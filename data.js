/* BGP BI — gerado por build-data.cjs em 2026-05-29T18:00:04.298Z */
/* Empresa: Nirocred | Ano ref: 2026 */
const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MONTHS_FULL = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

function fmt(n, opts = {}) {
  const { dec = 2, prefix = "R$", showSign = false } = opts;
  const sign = n < 0 ? "-" : (showSign ? "+" : "");
  const abs = Math.abs(n);
  const parts = abs.toFixed(dec).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${prefix}${parts.join(",")}`;
}
function fmtK(n) {
  return fmt(n, { dec: 0 });
}
function fmtPct(n, dec = 2) {
  const sign = n > 0 ? "+" : (n < 0 ? "-" : "");
  return `${sign}${Math.abs(n).toFixed(dec).replace(".", ",")}%`;
}

const META = {
  "empresa": {
    "nome_fantasia": "Nirocred"
  },
  "fetched_at": "2026-05-29T18:00:03.221Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 26,
    "departamentos": 0,
    "clientes": 200
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": 9040.770000000019
  },
  {
    "name": "A receber (futuro)",
    "value": 838206.7600000002
  },
  {
    "name": "A pagar (futuro)",
    "value": 74817.41999999998
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
    "value": 562804.0599999998,
    "color": "#2dd4bf"
  },
  {
    "name": "SISTEMAS",
    "value": 47668.520000000004,
    "color": "#22c55e"
  },
  {
    "name": "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
    "value": 28397.010000000002,
    "color": "#a78bfa"
  },
  {
    "name": "PAGAMENTO DE EMPRÉSTIMO",
    "value": 6152.56,
    "color": "#f59e0b"
  },
  {
    "name": "EMPRÉSTIMO PESSOAL",
    "value": 5132.33,
    "color": "#ef4444"
  },
  {
    "name": "CUSTAS COM GRAVAME E ALIENAÇÃO",
    "value": 4240,
    "color": "#6b7686"
  }
];

const SEGMENTS = {
  "realizado": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 114660.32999999997,
        "despesa": 190486.3299999999
      },
      {
        "m": "fevereiro",
        "receita": 123603.56,
        "despesa": 178335.36999999994
      },
      {
        "m": "março",
        "receita": 136913.83,
        "despesa": 129628.86999999997
      },
      {
        "m": "abril",
        "receita": 175554.37999999995,
        "despesa": 64311.08999999998
      },
      {
        "m": "maio",
        "receita": 115923.51999999999,
        "despesa": 94853.19000000002
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "julho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "RECEITA DE ALIENAÇÃO",
        "value": 299681.5999999999,
        "clientes": 103
      },
      {
        "name": "RECEITA DA UNID. CEARÁ",
        "value": 111357.38,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. BRASILIA",
        "value": 104437.53,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. MARANHÃO",
        "value": 62764.119999999995,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. ONLINE",
        "value": 44698.42,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID . PARÁ",
        "value": 22396.129999999997,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. GOIÁS",
        "value": 13080.800000000001,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. PARANÁ",
        "value": 6750.65,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. REATIVAÇÃO",
        "value": 715.92,
        "clientes": 1
      },
      {
        "name": "OUTRAS RECEITAS",
        "value": 607.08,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. BAHIA",
        "value": 165.99,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "value": 562804.0599999998,
        "fornecedores": 1
      },
      {
        "name": "SISTEMAS",
        "value": 47668.520000000004,
        "fornecedores": 2
      },
      {
        "name": "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "value": 28397.010000000002,
        "fornecedores": 5
      },
      {
        "name": "PAGAMENTO DE EMPRÉSTIMO",
        "value": 6152.56,
        "fornecedores": 1
      },
      {
        "name": "EMPRÉSTIMO PESSOAL",
        "value": 5132.33,
        "fornecedores": 1
      },
      {
        "name": "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "value": 4240,
        "fornecedores": 1
      },
      {
        "name": "OUTRAS DESPESAS",
        "value": 865,
        "fornecedores": 3
      },
      {
        "name": "CARTÃO DE CRÉDITO",
        "value": 862.98,
        "fornecedores": 1
      },
      {
        "name": "TARIFAS BANCÁRIAS",
        "value": 792.3899999999998,
        "fornecedores": 3
      },
      {
        "name": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "value": 700,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "ECONOMY CEARÁ",
        "value": 111357.38
      },
      {
        "name": "ECONOMY BRASILIA",
        "value": 104437.53
      },
      {
        "name": "ECONOMY MARANHÃO",
        "value": 62764.119999999995
      },
      {
        "name": "ECONOMY ONLINE",
        "value": 44698.42
      },
      {
        "name": "FABIO RODRIGUES",
        "value": 23790.71
      },
      {
        "name": "ECONOMY PARÁ",
        "value": 22396.129999999997
      },
      {
        "name": "PEDRO HENRIQUE MELO DE SOUZA",
        "value": 16867.57
      },
      {
        "name": "ECONOMY GOIÁS",
        "value": 13080.800000000001
      },
      {
        "name": "WELLINGTON RODRIGUES MARTINS",
        "value": 9588.23
      },
      {
        "name": "CAROLINE DOS SANTOS GOES",
        "value": 7177.679999999999
      },
      {
        "name": "ECONOMY PARANA",
        "value": 6750.65
      },
      {
        "name": "LILIANA MELO DE SA TELES",
        "value": 6656.45
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "CELCOIN - ECONOMY",
        "value": 601817.9299999998
      },
      {
        "name": "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        "value": 45443.12
      },
      {
        "name": "RAPIDO DESPACHANTES",
        "value": 4240
      },
      {
        "name": "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        "value": 2225.4
      },
      {
        "name": "BANCO SICOOB",
        "value": 1032.98
      },
      {
        "name": "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        "value": 700
      },
      {
        "name": "SISPAG PJBANK",
        "value": 572.3899999999999
      },
      {
        "name": "NICROCRED - BANCO SICOOB",
        "value": 500
      },
      {
        "name": "MARTE DECORA",
        "value": 248.08
      },
      {
        "name": "HOSTGATOR BRASIL LTDA",
        "value": 223.95
      },
      {
        "name": "FRANCISCO NADSON MENDES PEREIRA",
        "value": 200
      },
      {
        "name": "MARIA EDUARDA ANACLETO",
        "value": 165
      }
    ],
    "EXTRATO": [
      [
        "28/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -3498.77,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -33937.93,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -13278.82,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "EMANUELE MATOS DOS SANTOS",
        1294.18,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IOLETE DOS SANTOS ALMEIDA",
        1116.65,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO NUNES LELES",
        413.39,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DOUGLAS DOS SANTOS FRANCA",
        1009.41,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEBERT DE BRITO SENNA DIAS",
        653.35,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DOUGLAS DOS SANTOS FRANCA",
        1061.4,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "YEDA VAZ DOS SANTOS",
        579.96,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -18354.53,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6588.32,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIANA MELO DE SA TELES",
        1339.05,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIANA MELO DE SA TELES",
        1327.45,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GABRIELLE RODRIGUES COSTA",
        524.39,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PAULO WANDERSON R DA SILVA",
        807.32,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BRUNO DE ASSIS RODRIGUES",
        1300,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1602.89,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANDREYSON CRISTIANO ARAUJO DE SOUSA",
        782.38,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UND. GOIÁS",
        "ECONOMY GOIÁS",
        2954.17,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UND. PARANÁ",
        "ECONOMY PARANA",
        1726.56,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IVALDO DOS REIS NAZARE",
        565.4,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WEINE MATIAS FERREIRA",
        976.86,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAFAEL PIRES DOS SANTOS",
        920.16,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID. CEARÁ",
        "ECONOMY CEARÁ",
        23485.55,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID. BRASILIA",
        "ECONOMY BRASILIA",
        21425.94,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID. ONLINE",
        "ECONOMY ONLINE",
        9260.43,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID . PARÁ",
        "ECONOMY PARÁ",
        4214.12,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID. MARANHÃO",
        "ECONOMY MARANHÃO",
        12905.28,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        471.84,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        629.36,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UND. REATIVAÇÃO",
        "ECONOMY REATIVAÇÃO",
        715.92,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UND. BAHIA",
        "ECONOMY BAHIA",
        165.99,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE GABRIELLE ALMEIDA DE SOUSA",
        347.31,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WENDEL GONCALVES SIQUEIRA",
        657.4,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "NILVA ANA PERINI",
        992.86,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLAMES FERREIRA DA SILVA",
        576.09,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLAMES FERREIRA DA SILVA",
        576.09,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DARLAN DA SILVA SANTOS",
        1162.36,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CELIO SANTANA DA SILVA",
        832.84,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JEOVA JUVENAL DOS SANTOS",
        1286.04,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALESSANDRA MATINS XAVIER DE LUCENA",
        930.42,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALESSANDRA MATINS XAVIER DE LUCENA",
        922.05,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEILA VALERIA DO LAGO",
        1486.62,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9931.84,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ERICA VALESCA DE OLIVEIRA FRAGA",
        592.09,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE GABRIELLE ALMEIDA DE SOUSA",
        365.11,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JESSYCA LOPES SOUZA",
        254.8,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE TALITA SOUSA LIMA",
        382.2,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SILVEIRA REGINA SILVA",
        617.13,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEF PEREIRA MARTINS",
        539.92,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1301.59,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDOMAR VIEIRA DA COSTA",
        720.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        518.36,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9262.98,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIAN PINHEIRO CUNHA",
        370.15,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        828.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        425.02,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TIPHANNY GEISILANE DE SOUSA AMORIM",
        466.03,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS FERNANDO SILVA GOMES",
        760.54,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        852.45,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        340.82,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CAROLINE DOS SANTOS GOES",
        1322.76,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO NUNES LELES",
        456.02,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        596.92,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIO RODRIGUES",
        19558.51,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PEDRO HENRIQUE MELO DE SOUZA",
        7911.69,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSANGELA DE SOUSA RODRIGUES",
        1145.5,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "OUTRAS RECEITAS",
        "BOLETO AMIGO",
        200,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4102.56,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEBERT DE BRITO SENNA DIAS",
        653.35,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",
        1170.02,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PEDRO HENRIQUE MELO DE SOUZA",
        2238.97,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCOS ROBERTH SANTOS ABREU",
        625.73,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "RAPIDO DESPACHANTES",
        -848,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELLINGTON MONTEIRO DA SILVA",
        1123.57,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CAROLINE DOS SANTOS GOES",
        1413.78,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        706.7,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCELO PORTELA SOUSA",
        1299.56,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",
        475.07,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUCIANO MAICON GODOI",
        1461.58,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PAULO WANDERSON R DA SILVA",
        808.52,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCELO PORTELA SOUSA",
        1299.56,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDO HENRIQUE DA SILVA BRITO",
        519.41,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        321.71,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11413.58,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "EMANUELE MATOS DOS SANTOS",
        1294.18,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IOLETE DOS SANTOS ALMEIDA",
        1116.65,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DIEGO DUARTE BORGES",
        608.37,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SARAH VICTORIA CARVALHO DE SANTANA",
        649.17,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSANA AMORIM SANTOS",
        1108.12,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DOUGLAS DOS SANTOS FRANCA",
        1016.25,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "YEDA VAZ DOS SANTOS",
        579.96,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7166.33,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -18.13,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS CLAUDIO FERNANDES",
        1094.98,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -17707.41,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BRUNO DE ASSIS RODRIGUES",
        1300,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        327.56,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCIA DE SOUZA SANTOS",
        587.59,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JEOVA JUVENAL DOS SANTOS",
        1286.04,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KATIUSK KELLINE BRITO DA SILVA",
        1333.08,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WEINE MATIAS FERREIRA",
        976.86,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANDREYSON CRISTIANO ARAUJO DE SOUSA",
        782.38,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "OUTRAS DESPESAS",
        "FRANCISCO NADSON MENDES PEREIRA",
        -200,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA CLARA SANTOS DE MOURA",
        616.97,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELLINGTON RODRIGUES MARTINS",
        9588.23,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUCAS JESUS PORTO",
        809.14,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IVALDO DOS REIS NAZARE",
        565.4,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GABRIELLE RODRIGUES COSTA",
        524.39,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "NILVA ANA PERINI",
        993.76,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1601.93,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLAMES FERREIRA DA SILVA",
        576.09,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        417.49,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIANA MELO DE SA TELES",
        1337.45,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VALDIMISON ALVES DE SOUZA",
        617.08,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO NUNES LELES",
        455.63,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        522.38,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WALISON DE ARAUJO SOUZA",
        1051.05,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TIPHANNY GEISILANE DE SOUSA AMORIM",
        466.03,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ERICA VALESCA DE OLIVEIRA FRAGA",
        592.09,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UND. GOIÁS",
        "ECONOMY GOIÁS",
        2751.86,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UND. PARANÁ",
        "ECONOMY PARANA",
        1656.48,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE GABRIELLE ALMEIDA DE SOUSA",
        365.11,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JESSYCA LOPES SOUZA",
        254.8,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        828.1,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        424.66,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SILVEIRA REGINA SILVA",
        617.13,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UNID. BRASILIA",
        "ECONOMY BRASILIA",
        20802,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UNID. ONLINE",
        "ECONOMY ONLINE",
        9381.67,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UNID . PARÁ",
        "ECONOMY PARÁ",
        4768.49,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UNID. MARANHÃO",
        "ECONOMY MARANHÃO",
        13127.1,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CELIO SANTANA DA SILVA",
        832.84,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEF PEREIRA MARTINS",
        539.92,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1303.15,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEIDSON GOLCALVES FLORENCIO",
        1900,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JUNIOR CRUZ DE OLIVEIRA",
        2405.54,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "RAPIDO DESPACHANTES",
        -3392,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIAN PINHEIRO CUNHA",
        370.15,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "RECEITA DA UNID. CEARÁ",
        "ECONOMY CEARÁ",
        23065.21,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "OUTRAS RECEITAS",
        "BOLETO AMIGO",
        242.08,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7989.18,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8340.69,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSANGELA DE SOUSA RODRIGUES",
        1261.95,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KARINE ANDREIA PEREIRA BRITO",
        1171.82,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        391.87,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PEDRO HENRIQUE MELO DE SOUZA",
        2238.97,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIZETH BARRETO PEIXOTO",
        574.91,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIO RODRIGUES",
        2116.1,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -11876.34,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "MARTE DECORA",
        -248.08,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELLINGTON MONTEIRO DA SILVA",
        1102.31,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        570.35,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -12508,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DOUGLAS DOS SANTOS FRANCA",
        1072.28,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCOS ROBERTH SANTOS ABREU",
        625.73,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "EMANUELE MATOS DOS SANTOS",
        1294.18,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IOLETE DOS SANTOS ALMEIDA",
        1116.65,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO NUNES LELES",
        413.39,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DOUGLAS DOS SANTOS FRANCA",
        1009.41,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEBERT DE BRITO SENNA DIAS",
        653.35,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DOUGLAS DOS SANTOS FRANCA",
        1061.4,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "YEDA VAZ DOS SANTOS",
        579.96,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIANA MELO DE SA TELES",
        1339.05,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIANA MELO DE SA TELES",
        1327.45,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GABRIELLE RODRIGUES COSTA",
        524.39,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PAULO WANDERSON R DA SILVA",
        807.32,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BRUNO DE ASSIS RODRIGUES",
        1300,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1602.89,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANDREYSON CRISTIANO ARAUJO DE SOUSA",
        782.38,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UND. GOIÁS",
        "ECONOMY GOIÁS",
        2954.17,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UND. PARANÁ",
        "ECONOMY PARANA",
        1726.56,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IVALDO DOS REIS NAZARE",
        565.4,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WEINE MATIAS FERREIRA",
        976.86,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAFAEL PIRES DOS SANTOS",
        920.16,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID. CEARÁ",
        "ECONOMY CEARÁ",
        23485.55,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID. BRASILIA",
        "ECONOMY BRASILIA",
        21425.94,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID. ONLINE",
        "ECONOMY ONLINE",
        9260.43,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID . PARÁ",
        "ECONOMY PARÁ",
        4214.12,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UNID. MARANHÃO",
        "ECONOMY MARANHÃO",
        12905.28,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        471.84,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        629.36,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UND. REATIVAÇÃO",
        "ECONOMY REATIVAÇÃO",
        715.92,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Nirocred",
        "RECEITA DA UND. BAHIA",
        "ECONOMY BAHIA",
        165.99,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE GABRIELLE ALMEIDA DE SOUSA",
        347.31,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WENDEL GONCALVES SIQUEIRA",
        657.4,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "NILVA ANA PERINI",
        992.86,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLAMES FERREIRA DA SILVA",
        576.09,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLAMES FERREIRA DA SILVA",
        576.09,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DARLAN DA SILVA SANTOS",
        1162.36,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CELIO SANTANA DA SILVA",
        832.84,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JEOVA JUVENAL DOS SANTOS",
        1286.04,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALESSANDRA MATINS XAVIER DE LUCENA",
        930.42,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALESSANDRA MATINS XAVIER DE LUCENA",
        922.05,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEILA VALERIA DO LAGO",
        1486.62,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ERICA VALESCA DE OLIVEIRA FRAGA",
        592.09,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE GABRIELLE ALMEIDA DE SOUSA",
        365.11,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JESSYCA LOPES SOUZA",
        254.8,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE TALITA SOUSA LIMA",
        382.2,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SILVEIRA REGINA SILVA",
        617.13,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEF PEREIRA MARTINS",
        539.92,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1301.59,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDOMAR VIEIRA DA COSTA",
        720.4,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        518.36,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIAN PINHEIRO CUNHA",
        370.15,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        828.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        425.02,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TIPHANNY GEISILANE DE SOUSA AMORIM",
        466.03,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS FERNANDO SILVA GOMES",
        760.54,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        852.45,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        340.82,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CAROLINE DOS SANTOS GOES",
        1322.76,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO NUNES LELES",
        456.02,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        596.92,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIO RODRIGUES",
        19558.51,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PEDRO HENRIQUE MELO DE SOUZA",
        7911.69,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSANGELA DE SOUSA RODRIGUES",
        1145.5,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "OUTRAS RECEITAS",
        "BOLETO AMIGO",
        200,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEBERT DE BRITO SENNA DIAS",
        653.35,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",
        1170.02,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PEDRO HENRIQUE MELO DE SOUZA",
        2238.97,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCOS ROBERTH SANTOS ABREU",
        625.73,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELLINGTON MONTEIRO DA SILVA",
        1123.57,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CAROLINE DOS SANTOS GOES",
        1413.78,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        706.7,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCELO PORTELA SOUSA",
        1299.56,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",
        475.07,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUCIANO MAICON GODOI",
        1461.58,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PAULO WANDERSON R DA SILVA",
        808.52,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCELO PORTELA SOUSA",
        1299.56,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDO HENRIQUE DA SILVA BRITO",
        519.41,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        321.71,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "EMANUELE MATOS DOS SANTOS",
        1294.18,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IOLETE DOS SANTOS ALMEIDA",
        1116.65,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DIEGO DUARTE BORGES",
        608.37,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SARAH VICTORIA CARVALHO DE SANTANA",
        649.17,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSANA AMORIM SANTOS",
        1108.12,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DOUGLAS DOS SANTOS FRANCA",
        1016.25,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "YEDA VAZ DOS SANTOS",
        579.96,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS CLAUDIO FERNANDES",
        1094.98,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BRUNO DE ASSIS RODRIGUES",
        1300,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        327.56,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCIA DE SOUZA SANTOS",
        587.59,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JEOVA JUVENAL DOS SANTOS",
        1286.04,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KATIUSK KELLINE BRITO DA SILVA",
        1333.08,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WEINE MATIAS FERREIRA",
        976.86,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANDREYSON CRISTIANO ARAUJO DE SOUSA",
        782.38,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA CLARA SANTOS DE MOURA",
        616.97,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELLINGTON RODRIGUES MARTINS",
        9588.23,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUCAS JESUS PORTO",
        809.14,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IVALDO DOS REIS NAZARE",
        565.4,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GABRIELLE RODRIGUES COSTA",
        524.39,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "NILVA ANA PERINI",
        993.76,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1601.93,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLAMES FERREIRA DA SILVA",
        576.09,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        417.49,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIANA MELO DE SA TELES",
        1337.45,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VALDIMISON ALVES DE SOUZA",
        617.08,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO NUNES LELES",
        455.63,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        522.38,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WALISON DE ARAUJO SOUZA",
        1051.05,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TIPHANNY GEISILANE DE SOUSA AMORIM",
        466.03,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ERICA VALESCA DE OLIVEIRA FRAGA",
        592.09,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UND. GOIÁS",
        "ECONOMY GOIÁS",
        2751.86,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UND. PARANÁ",
        "ECONOMY PARANA",
        1656.48,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE GABRIELLE ALMEIDA DE SOUSA",
        365.11,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JESSYCA LOPES SOUZA",
        254.8,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        828.1,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        424.66,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SILVEIRA REGINA SILVA",
        617.13,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UNID. BRASILIA",
        "ECONOMY BRASILIA",
        20802,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UNID. ONLINE",
        "ECONOMY ONLINE",
        9381.67,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UNID . PARÁ",
        "ECONOMY PARÁ",
        4768.49,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DA UNID. MARANHÃO",
        "ECONOMY MARANHÃO",
        13127.1,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CELIO SANTANA DA SILVA",
        832.84,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEF PEREIRA MARTINS",
        539.92,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1303.15,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEIDSON GOLCALVES FLORENCIO",
        1900,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JUNIOR CRUZ DE OLIVEIRA",
        2405.54,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIAN PINHEIRO CUNHA",
        370.15,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "RECEITA DA UNID. CEARÁ",
        "ECONOMY CEARÁ",
        23065.21,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "OUTRAS RECEITAS",
        "BOLETO AMIGO",
        242.08,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSANGELA DE SOUSA RODRIGUES",
        1261.95,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KARINE ANDREIA PEREIRA BRITO",
        1171.82,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        391.87,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PEDRO HENRIQUE MELO DE SOUZA",
        2238.97,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIZETH BARRETO PEIXOTO",
        574.91,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIO RODRIGUES",
        2116.1,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELLINGTON MONTEIRO DA SILVA",
        1102.31,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        570.35,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DOUGLAS DOS SANTOS FRANCA",
        1072.28,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCOS ROBERTH SANTOS ABREU",
        625.73,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",
        475.07,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CAROLINE DOS SANTOS GOES",
        1569.25,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DAMIANA BATISTA DOS SANTOS",
        688.76,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUCIANO MAICON GODOI",
        1461.58,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRO SANTOS GARCES",
        1418.72,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1605.29,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ARIANE KATLE SILVA SOARES",
        328.07,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        825.21,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "EMANUELE MATOS DOS SANTOS",
        1294.18,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IOLETE DOS SANTOS ALMEIDA",
        1116.65,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DIEGO DUARTE BORGES",
        608.37,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDO HENRIQUE DA SILVA BRITO",
        519.41,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BRUNO DE ASSIS RODRIGUES",
        1300,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEBERT DE BRITO SENNA DIAS",
        653.35,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RONI PEREIRA DA SILVA BATISTA",
        1208.68,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE TALITA SOUSA LIMA",
        382.2,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSANA AMORIM SANTOS",
        1106.8,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "DARLAN DA SILVA SANTOS",
        1285.81,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SARAH VICTORIA CARVALHO DE SANTANA",
        649.17,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GABRIELLE RODRIGUES COSTA",
        524.39,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANDREYSON CRISTIANO ARAUJO DE SOUSA",
        782.38,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        727.92,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARCIA DE SOUZA SANTOS",
        587.59,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS CLAUDIO FERNANDES",
        994.24,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUCAS JESUS PORTO",
        809.62,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WEINE MATIAS FERREIRA",
        976.86,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "PAULO WANDERSON R DA SILVA",
        805.4,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SILVEIRA REGINA SILVA",
        617.13,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JHONATTA ALVES DA SILVA LEITE",
        5289.42,
        "PAGO"
      ],
      [
        "10/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RICARDO GOMES DINIZ",
        616.97,
        "PAGO"
      ],
      [
        "10/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "NAYRO DIEGO DINIZ MIRANDA",
        636.29,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ERICA VALESCA DE OLIVEIRA FRAGA",
        592.09,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KATIUSK KELLINE BRITO DA SILVA",
        1185.57,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JESSYCA LOPES SOUZA",
        254.8,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "NILVA ANA PERINI",
        992.26,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VALDIMISON ALVES DE SOUZA",
        617.08,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1057.43,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANNE TALITA SOUSA LIMA",
        382.2,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LILIAN PINHEIRO CUNHA",
        370.15,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLAMES FERREIRA DA SILVA",
        576.09,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CAROLINE DOS SANTOS GOES",
        1458.11,
        "PAGO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "28/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -3498.77,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -33937.93,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -13278.82,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -18354.53,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6588.32,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9931.84,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9262.98,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4102.56,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "RAPIDO DESPACHANTES",
        -848,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11413.58,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7166.33,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -18.13,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -17707.41,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "OUTRAS DESPESAS",
        "FRANCISCO NADSON MENDES PEREIRA",
        -200,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "RAPIDO DESPACHANTES",
        -3392,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7989.18,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8340.69,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -11876.34,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "MARTE DECORA",
        -248.08,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -12508,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4606.81,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11169.82,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10295.96,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5118.67,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10257.74,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "GUILHERME PENHA DOS REIS",
        -120,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7206.79,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7064.38,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7206.79,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -12614.3,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -25.9,
        "PAGO"
      ],
      [
        "10/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7310.16,
        "PAGO"
      ],
      [
        "10/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9265.88,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "05/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6358.92,
        "PAGO"
      ],
      [
        "05/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6179.47,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "02/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "27/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5432.8,
        "PAGO"
      ],
      [
        "27/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -15852.64,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "25/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -12996.4,
        "PAGO"
      ],
      [
        "25/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "25/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "24/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "23/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5132.22,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11119.8,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -16059.38,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "PAGAMENTO DE EMPRÉSTIMO",
        "CELCOIN - ECONOMY",
        -6152.56,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8203.42,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -23.31,
        "PAGO"
      ],
      [
        "18/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -16978.48,
        "PAGO"
      ],
      [
        "18/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5865.29,
        "PAGO"
      ],
      [
        "18/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10187.09,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7102.03,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Nirocred",
        "EMPRÉSTIMO PESSOAL",
        "CELCOIN - ECONOMY",
        -5132.33,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "12/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "11/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8202.81,
        "PAGO"
      ],
      [
        "11/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "11/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "10/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5145.83,
        "PAGO"
      ],
      [
        "10/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -18.13,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -11218.54,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "06/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6562.23,
        "PAGO"
      ],
      [
        "06/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "REGISTRO.BR",
        -76,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8029.71,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "04/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4607.31,
        "PAGO"
      ],
      [
        "04/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "03/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -3912.54,
        "PAGO"
      ],
      [
        "03/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4095.71,
        "PAGO"
      ],
      [
        "03/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "HOSTGATOR BRASIL LTDA",
        -77.98,
        "PAGO"
      ],
      [
        "30/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "28/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "27/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "HOSTGATOR BRASIL LTDA",
        -145.97,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -11671.31,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4828.33,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5147.36,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -20816.72,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "23/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5732.32,
        "PAGO"
      ],
      [
        "23/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "22/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -16470.61,
        "PAGO"
      ],
      [
        "21/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11739.92,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5117.29,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10238.85,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4838.77,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SICOOB ECONOMY 10.869.180/0009-53",
        -50,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "19/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6896.32,
        "PAGO"
      ],
      [
        "19/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7103.34,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -11466.56,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8338.71,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "OUTRAS DESPESAS",
        "NICROCRED - BANCO SICOOB",
        -500,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8956.37,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6665.45,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7308.03,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "14/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10192.32,
        "PAGO"
      ],
      [
        "14/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8101.08,
        "PAGO"
      ],
      [
        "14/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "13/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6484.92,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Nirocred",
        "CARTÃO DE CRÉDITO",
        "BANCO SICOOB",
        -862.98,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -20.72,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Nirocred",
        "OUTRAS DESPESAS",
        "MARIA EDUARDA ANACLETO",
        -165,
        "PAGO"
      ],
      [
        "09/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5427,
        "PAGO"
      ],
      [
        "09/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "08/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "07/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "06/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5117.38,
        "PAGO"
      ],
      [
        "05/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "02/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "30/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "29/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "24/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "22/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "19/12/2025",
        "Nirocred",
        "TAXA JUNTA COMERCIAL",
        "JUNTA COMERCIAL DF",
        -388.91,
        "PAGO"
      ],
      [
        "19/12/2025",
        "Nirocred",
        "EMPRÉSTIMO PESSOAL",
        "CELCOIN - ECONOMY",
        -1534.05,
        "PAGO"
      ],
      [
        "18/12/2025",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11297.27,
        "PAGO"
      ],
      [
        "18/12/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7177.33,
        "PAGO"
      ],
      [
        "18/12/2025",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -10806.14,
        "PAGO"
      ],
      [
        "18/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "17/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -18.13,
        "PAGO"
      ],
      [
        "16/12/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10242.43,
        "PAGO"
      ],
      [
        "16/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "12/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "11/12/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10500.27,
        "PAGO"
      ],
      [
        "11/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "11/12/2025",
        "Nirocred",
        "CARTÃO DE CRÉDITO",
        "BANCO SICOOB",
        -3033.25,
        "PAGO"
      ],
      [
        "10/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "09/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -23.31,
        "PAGO"
      ],
      [
        "05/12/2025",
        "Nirocred",
        "OUTRAS DESPESAS",
        "SICOOB ECONOMY 10.869.180/0009-53",
        -200,
        "PAGO"
      ],
      [
        "05/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "04/12/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5156.55,
        "PAGO"
      ],
      [
        "04/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "03/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "02/12/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6861.41,
        "PAGO"
      ],
      [
        "28/11/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9826.71,
        "PAGO"
      ],
      [
        "28/11/2025",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -10666.19,
        "PAGO"
      ],
      [
        "28/11/2025",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -10201.96,
        "PAGO"
      ],
      [
        "27/11/2025",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -11282.47,
        "PAGO"
      ],
      [
        "27/11/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "27/11/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5.18,
        "PAGO"
      ],
      [
        "21/11/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -27823.46,
        "PAGO"
      ],
      [
        "21/11/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "21/11/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "19/11/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "18/11/2025",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11193.06,
        "PAGO"
      ],
      [
        "18/11/2025",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "HOSTGATOR BRASIL LTDA",
        -201.96,
        "PAGO"
      ],
      [
        "18/11/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10714.69,
        "PAGO"
      ],
      [
        "14/11/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8760.24,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 666655.6199999999,
      "TOTAL_DESPESA": 657614.8499999999,
      "VALOR_LIQUIDO": 9040.770000000019,
      "MARGEM_LIQUIDA": 1.3561379712061858,
      "VALOR_LIQ_SERIES": [
        -75825.99999999993,
        -54731.80999999994,
        7284.960000000021,
        111243.28999999996,
        21070.329999999973,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "RECEITA_DIA": [
      1261.95,
      29520.93,
      22628.649999999998,
      127861.66,
      84024.20999999999,
      70968.00999999998,
      10521.440000000002,
      88746.70999999999,
      17638.95,
      13706.169999999998,
      18977.92,
      18392.879999999994,
      15755.099999999999,
      8308.009999999998,
      11991.14,
      8682.029999999999,
      9534.73,
      4042.6699999999996,
      8655.64,
      13585.999999999998,
      2090.78,
      2108.08,
      5827.240000000001,
      8853.039999999999,
      7732.639999999999,
      7848.6,
      8875.659999999998,
      2039.8399999999997,
      1345.5,
      33565.75,
      1563.69
    ],
    "DESPESA_DIA": [
      2.59,
      16423.39,
      8016.02,
      10802.320000000002,
      23743.15,
      34297.82000000001,
      10.36,
      18.13,
      16689.570000000003,
      12489.66,
      28107.57,
      8141.57,
      43682.85,
      18511.530000000002,
      22942.8,
      52453.170000000006,
      7192.2300000000005,
      48420.219999999994,
      54133.79,
      106538.2,
      5.18,
      16475.79,
      15489.480000000003,
      2251.3,
      25530.120000000003,
      70604.7,
      7008.93,
      3506.54,
      4105.150000000001,
      15.54,
      5.18
    ],
    "SALDOS_MES": [
      -75825.99999999993,
      -130557.80999999987,
      -123272.84999999985,
      -12029.559999999881,
      9040.770000000091,
      9040.770000000091,
      9040.770000000091,
      9040.770000000091,
      9040.770000000091,
      9040.770000000091,
      9040.770000000091,
      9040.770000000091
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "RECEITA DE ALIENAÇÃO",
        "values": [
          40249.23,
          54095.049999999996,
          66708.26999999999,
          99559.48999999996,
          39069.560000000005,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "RECEITA DA UNID. CEARÁ",
        "values": [
          23097.12,
          20153.46,
          21556.04,
          23065.21,
          23485.55,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "RECEITA DA UNID. BRASILIA",
        "values": [
          21628.29,
          20607.08,
          19974.22,
          20802,
          21425.94,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "RECEITA DA UNID. MARANHÃO",
        "values": [
          13187.32,
          11826.8,
          11717.62,
          13127.1,
          12905.28,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "RECEITA DA UNID. ONLINE",
        "values": [
          8991.34,
          8985.16,
          8079.82,
          9381.67,
          9260.43,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "values": [
          -176919.03999999998,
          -139731.78999999998,
          -105993.87,
          -45306.17,
          -94853.19000000002,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "SISTEMAS",
        "values": [
          -11739.92,
          -11119.8,
          -11169.82,
          -13638.98,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "values": [
          -145.97,
          -16006.619999999999,
          -12244.42,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "PAGAMENTO DE EMPRÉSTIMO",
        "values": [
          0,
          -6152.56,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "EMPRÉSTIMO PESSOAL",
        "values": [
          0,
          -5132.33,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 375177.71999999986,
        "d2": 291477.8999999999
      },
      {
        "tipo": "RECEITA DE ALIENAÇÃO",
        "parent": "Receita",
        "d1": 161052.55,
        "d2": 138629.04999999993
      },
      {
        "tipo": "RECEITA DA UNID. BRASILIA",
        "parent": "Receita",
        "d1": 62209.590000000004,
        "d2": 42227.94
      },
      {
        "tipo": "RECEITA DA UNID. ONLINE",
        "parent": "Receita",
        "d1": 26056.32,
        "d2": 18642.1
      },
      {
        "tipo": "RECEITA DA UNID. CEARÁ",
        "parent": "Receita",
        "d1": 64806.62,
        "d2": 46550.759999999995
      },
      {
        "tipo": "RECEITA DA UNID . PARÁ",
        "parent": "Receita",
        "d1": 13413.519999999999,
        "d2": 8982.61
      },
      {
        "tipo": "RECEITA DA UND. GOIÁS",
        "parent": "Receita",
        "d1": 7374.77,
        "d2": 5706.030000000001
      },
      {
        "tipo": "RECEITA DA UNID. MARANHÃO",
        "parent": "Receita",
        "d1": 36731.74,
        "d2": 26032.38
      },
      {
        "tipo": "RECEITA DA UND. PARANÁ",
        "parent": "Receita",
        "d1": 3367.6099999999997,
        "d2": 3383.04
      },
      {
        "tipo": "OUTRAS RECEITAS",
        "parent": "Receita",
        "d1": 165,
        "d2": 442.08000000000004
      },
      {
        "tipo": "RECEITA DA UND. REATIVAÇÃO",
        "parent": "Receita",
        "d1": 0,
        "d2": 715.92
      },
      {
        "tipo": "RECEITA DA UND. BAHIA",
        "parent": "Receita",
        "d1": 0,
        "d2": 165.99
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -498450.56999999995,
        "d2": -159164.27999999994
      },
      {
        "tipo": "SISTEMAS",
        "parent": "Despesa",
        "d1": -34029.54,
        "d2": -13638.98
      },
      {
        "tipo": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "parent": "Despesa",
        "d1": -422644.69999999984,
        "d2": -140159.36
      },
      {
        "tipo": "OUTRAS DESPESAS",
        "parent": "Despesa",
        "d1": -665,
        "d2": -200
      },
      {
        "tipo": "CARTÃO DE CRÉDITO",
        "parent": "Despesa",
        "d1": -862.98,
        "d2": 0
      },
      {
        "tipo": "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "parent": "Despesa",
        "d1": -28397.010000000002,
        "d2": 0
      },
      {
        "tipo": "TARIFAS BANCÁRIAS",
        "parent": "Despesa",
        "d1": -566.4499999999998,
        "d2": -225.94
      },
      {
        "tipo": "EMPRÉSTIMO PESSOAL",
        "parent": "Despesa",
        "d1": -5132.33,
        "d2": 0
      },
      {
        "tipo": "PAGAMENTO DE EMPRÉSTIMO",
        "parent": "Despesa",
        "d1": -6152.56,
        "d2": 0
      },
      {
        "tipo": "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4240
      },
      {
        "tipo": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -700
      }
    ]
  },
  "a_pagar_receber": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 10485.580000000002,
        "despesa": 0
      },
      {
        "m": "fevereiro",
        "receita": 17803.050000000003,
        "despesa": 0
      },
      {
        "m": "março",
        "receita": 27143.310000000005,
        "despesa": 0
      },
      {
        "m": "abril",
        "receita": 40911.02000000001,
        "despesa": 0
      },
      {
        "m": "maio",
        "receita": 84303.63000000003,
        "despesa": 42339.62
      },
      {
        "m": "junho",
        "receita": 102861.75000000006,
        "despesa": 14925.4
      },
      {
        "m": "julho",
        "receita": 105037.11000000004,
        "despesa": 2925.4
      },
      {
        "m": "agosto",
        "receita": 101716.24000000003,
        "despesa": 2925.4
      },
      {
        "m": "setembro",
        "receita": 100416.23000000005,
        "despesa": 2925.4
      },
      {
        "m": "outubro",
        "receita": 87770.60000000003,
        "despesa": 2925.4
      },
      {
        "m": "novembro",
        "receita": 81932.15000000002,
        "despesa": 2925.4
      },
      {
        "m": "dezembro",
        "receita": 77826.09000000003,
        "despesa": 2925.4
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "RECEITA DE ALIENAÇÃO",
        "value": 838206.2299999993,
        "clientes": 126
      },
      {
        "name": "RECEITA DA UNID. CEARÁ",
        "value": 0.07,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. BRASILIA",
        "value": 0.07,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. ONLINE",
        "value": 0.07,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID . PARÁ",
        "value": 0.07,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. MARANHÃO",
        "value": 0.07,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. REATIVAÇÃO",
        "value": 0.07,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. BAHIA",
        "value": 0.07,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. PARANÁ",
        "value": 0.03,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. GOIÁS",
        "value": 0.01,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "SISTEMAS",
        "value": 40516.39000000001,
        "fornecedores": 2
      },
      {
        "name": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "value": 27951.03,
        "fornecedores": 1
      },
      {
        "name": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "value": 5600,
        "fornecedores": 1
      },
      {
        "name": "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "value": 750,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "ROBERTO AUGUSTO FREITAS ALENCAR FILHO",
        "value": 24095.189999999995
      },
      {
        "name": "ROSIANE MEIRELES AZEVEDO",
        "value": 22304.369999999995
      },
      {
        "name": "ERIVALDO FRAZAO SILVA",
        "value": 17887.050000000003
      },
      {
        "name": "CAROLINE DOS SANTOS GOES",
        "value": 17559.96
      },
      {
        "name": "ELIAS BATISTA DE SOUSA FILHO",
        "value": 14414.000000000002
      },
      {
        "name": "ZAIANE FERREIRA DOS SANTOS",
        "value": 13906.27
      },
      {
        "name": "MARIA DO P SOCORRO S L BARBOSA",
        "value": 13845.439999999999
      },
      {
        "name": "CARLOS AUGUSTO DE JESUS COSTA",
        "value": 13053.109999999999
      },
      {
        "name": "KATIUSK KELLINE BRITO DA SILVA",
        "value": 13041.269999999999
      },
      {
        "name": "ALEXANDRO SANTOS GARCES",
        "value": 12599.400000000003
      },
      {
        "name": "JOAO PAULO DO NASCIMENTO NERES",
        "value": 12078.999999999998
      },
      {
        "name": "LUCIANO MAICON GODOI",
        "value": 11692.64
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "CELCOIN - ECONOMY",
        "value": 27951.03
      },
      {
        "name": "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        "value": 23774.59
      },
      {
        "name": "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        "value": 16741.8
      },
      {
        "name": "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        "value": 5600
      },
      {
        "name": "ANTONIO FRANCISCO PEIXOTO DE SOUSA",
        "value": 750
      }
    ],
    "EXTRATO": [
      [
        "25/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "15/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "25/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "15/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "01/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSIANE MEIRELES AZEVEDO",
        2027.67,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "AGNY DE LEMOS SIQUEIRA",
        775.64,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1441.9,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KLEDYSON ROCHA PRAXEDES",
        309.48,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        749.19,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSIANE MEIRELES AZEVEDO",
        2027.67,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "AGNY DE LEMOS SIQUEIRA",
        775.64,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1441.9,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KATIUSK KELLINE BRITO DA SILVA",
        1185.57,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "25/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "15/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "25/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "15/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "01/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSIANE MEIRELES AZEVEDO",
        2027.67,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "AGNY DE LEMOS SIQUEIRA",
        775.64,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1441.9,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KLEDYSON ROCHA PRAXEDES",
        309.48,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        749.19,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSIANE MEIRELES AZEVEDO",
        2027.67,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "AGNY DE LEMOS SIQUEIRA",
        775.64,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1441.9,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KATIUSK KELLINE BRITO DA SILVA",
        1185.57,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "27/03/2027",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/03/2027",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/02/2027",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/02/2027",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/01/2027",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/01/2027",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/12/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/12/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/11/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/11/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/10/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/06/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/06/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "20/06/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -12000,
        "A_PAGAR"
      ],
      [
        "27/05/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "25/05/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11774.59,
        "A_PAGAR"
      ],
      [
        "24/05/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -1164,
        "A_PAGAR"
      ],
      [
        "22/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -17507.23,
        "A_PAGAR"
      ],
      [
        "22/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -2559.1,
        "A_PAGAR"
      ],
      [
        "20/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7884.7,
        "A_PAGAR"
      ],
      [
        "19/05/2026",
        "Nirocred",
        "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "ANTONIO FRANCISCO PEIXOTO DE SOUSA",
        -750,
        "A_PAGAR"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 838206.7600000002,
      "TOTAL_DESPESA": 74817.41999999998,
      "VALOR_LIQUIDO": 763389.3400000003,
      "MARGEM_LIQUIDA": 91.07410920904529,
      "VALOR_LIQ_SERIES": [
        10485.580000000002,
        17803.050000000003,
        27143.310000000005,
        40911.02000000001,
        41964.01000000003,
        87936.35000000006,
        102111.71000000005,
        98790.84000000004,
        97490.83000000006,
        84845.20000000004,
        79006.75000000003,
        74900.69000000003
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0.13999999999999999,
      0.21000000000000005,
      102431.61000000009,
      1095.33,
      3184.9999999999995,
      3552.510000000003,
      10740.870000000003,
      163389.71999999994,
      2650.52,
      2027.67,
      0,
      9002.279999999999,
      201144.42000000007,
      0,
      0,
      1372.82,
      0,
      150545.7500000001,
      0,
      0,
      0,
      1110.43,
      167099.26999999993,
      0,
      1652.28,
      8900.04,
      0,
      8305.889999999998,
      0
    ],
    "DESPESA_DIA": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      750,
      19884.7,
      0,
      20066.329999999998,
      0,
      16741.8,
      11774.59,
      0,
      5600,
      0,
      0,
      0,
      0
    ],
    "SALDOS_MES": [
      10485.580000000002,
      28288.630000000005,
      55431.94000000001,
      96342.96000000002,
      138306.97000000006,
      226243.32000000012,
      328355.03000000014,
      427145.87000000017,
      524636.7000000002,
      609481.9000000003,
      688488.6500000003,
      763389.3400000003
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "RECEITA DE ALIENAÇÃO",
        "values": [
          10485.580000000002,
          17803.050000000003,
          27143.310000000005,
          40911.02000000001,
          84303.63000000003,
          102861.66000000006,
          105037.03000000004,
          101716.16000000005,
          100416.16000000005,
          87770.53000000004,
          81932.08000000003,
          77826.02000000002
        ]
      },
      {
        "cat": "RECEITA DA UNID. CEARÁ",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01
        ]
      },
      {
        "cat": "RECEITA DA UNID. BRASILIA",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01
        ]
      },
      {
        "cat": "RECEITA DA UNID. ONLINE",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01
        ]
      },
      {
        "cat": "RECEITA DA UNID . PARÁ",
        "values": [
          0,
          0,
          0,
          0,
          0,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "SISTEMAS",
        "values": [
          0,
          0,
          0,
          0,
          -12938.59,
          -14225.4,
          -2225.4,
          -2225.4,
          -2225.4,
          -2225.4,
          -2225.4,
          -2225.4
        ]
      },
      {
        "cat": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "values": [
          0,
          0,
          0,
          0,
          -27951.03,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "values": [
          0,
          0,
          0,
          0,
          -700,
          -700,
          -700,
          -700,
          -700,
          -700,
          -700,
          -700
        ]
      },
      {
        "cat": "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "values": [
          0,
          0,
          0,
          0,
          -750,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 55431.94000000001,
        "d2": 228076.39999999982
      },
      {
        "tipo": "RECEITA DE ALIENAÇÃO",
        "parent": "Receita",
        "d1": 55431.94000000001,
        "d2": 228076.30999999976
      },
      {
        "tipo": "RECEITA DA UND. GOIÁS",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "RECEITA DA UND. PARANÁ",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "RECEITA DA UNID. CEARÁ",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "RECEITA DA UNID. BRASILIA",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "RECEITA DA UNID. ONLINE",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "RECEITA DA UNID . PARÁ",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "RECEITA DA UNID. MARANHÃO",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "RECEITA DA UND. REATIVAÇÃO",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "RECEITA DA UND. BAHIA",
        "parent": "Receita",
        "d1": 0,
        "d2": 0.01
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": 0,
        "d2": -57265.02
      },
      {
        "tipo": "SISTEMAS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -27163.99
      },
      {
        "tipo": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1400
      },
      {
        "tipo": "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -750
      },
      {
        "tipo": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "parent": "Despesa",
        "d1": 0,
        "d2": -27951.03
      }
    ]
  },
  "tudo": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 125145.90999999996,
        "despesa": 190486.3299999999
      },
      {
        "m": "fevereiro",
        "receita": 141406.61000000002,
        "despesa": 178335.36999999994
      },
      {
        "m": "março",
        "receita": 164057.14000000004,
        "despesa": 129628.86999999997
      },
      {
        "m": "abril",
        "receita": 216465.39999999997,
        "despesa": 64311.08999999998
      },
      {
        "m": "maio",
        "receita": 200227.1499999999,
        "despesa": 137192.81
      },
      {
        "m": "junho",
        "receita": 102861.75000000006,
        "despesa": 14925.4
      },
      {
        "m": "julho",
        "receita": 105037.11000000004,
        "despesa": 2925.4
      },
      {
        "m": "agosto",
        "receita": 101716.24000000003,
        "despesa": 2925.4
      },
      {
        "m": "setembro",
        "receita": 100416.23000000005,
        "despesa": 2925.4
      },
      {
        "m": "outubro",
        "receita": 87770.60000000003,
        "despesa": 2925.4
      },
      {
        "m": "novembro",
        "receita": 81932.15000000002,
        "despesa": 2925.4
      },
      {
        "m": "dezembro",
        "receita": 77826.09000000003,
        "despesa": 2925.4
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "RECEITA DE ALIENAÇÃO",
        "value": 1137887.8300000024,
        "clientes": 135
      },
      {
        "name": "RECEITA DA UNID. CEARÁ",
        "value": 111357.44999999997,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. BRASILIA",
        "value": 104437.59999999996,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. MARANHÃO",
        "value": 62764.19000000001,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID. ONLINE",
        "value": 44698.49000000001,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UNID . PARÁ",
        "value": 22396.199999999986,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. GOIÁS",
        "value": 13080.810000000001,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. PARANÁ",
        "value": 6750.68,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. REATIVAÇÃO",
        "value": 715.9899999999999,
        "clientes": 1
      },
      {
        "name": "OUTRAS RECEITAS",
        "value": 607.08,
        "clientes": 1
      },
      {
        "name": "RECEITA DA UND. BAHIA",
        "value": 166.05999999999995,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "value": 590755.0899999997,
        "fornecedores": 1
      },
      {
        "name": "SISTEMAS",
        "value": 88184.90999999996,
        "fornecedores": 2
      },
      {
        "name": "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "value": 28397.010000000002,
        "fornecedores": 5
      },
      {
        "name": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "value": 6300,
        "fornecedores": 1
      },
      {
        "name": "PAGAMENTO DE EMPRÉSTIMO",
        "value": 6152.56,
        "fornecedores": 1
      },
      {
        "name": "EMPRÉSTIMO PESSOAL",
        "value": 5132.33,
        "fornecedores": 1
      },
      {
        "name": "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "value": 4990,
        "fornecedores": 2
      },
      {
        "name": "OUTRAS DESPESAS",
        "value": 865,
        "fornecedores": 3
      },
      {
        "name": "CARTÃO DE CRÉDITO",
        "value": 862.98,
        "fornecedores": 1
      },
      {
        "name": "TARIFAS BANCÁRIAS",
        "value": 792.3899999999998,
        "fornecedores": 3
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "ECONOMY CEARÁ",
        "value": 111357.44999999997
      },
      {
        "name": "ECONOMY BRASILIA",
        "value": 104437.59999999996
      },
      {
        "name": "ECONOMY MARANHÃO",
        "value": 62764.19000000001
      },
      {
        "name": "ECONOMY ONLINE",
        "value": 44698.49000000001
      },
      {
        "name": "CAROLINE DOS SANTOS GOES",
        "value": 24737.639999999992
      },
      {
        "name": "ROSIANE MEIRELES AZEVEDO",
        "value": 24332.039999999994
      },
      {
        "name": "ROBERTO AUGUSTO FREITAS ALENCAR FILHO",
        "value": 24095.189999999995
      },
      {
        "name": "FABIO RODRIGUES",
        "value": 23790.71
      },
      {
        "name": "ECONOMY PARÁ",
        "value": 22396.199999999986
      },
      {
        "name": "ELIAS BATISTA DE SOUSA FILHO",
        "value": 18035.969999999998
      },
      {
        "name": "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        "value": 17955.88
      },
      {
        "name": "ERIVALDO FRAZAO SILVA",
        "value": 17887.050000000003
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "CELCOIN - ECONOMY",
        "value": 629768.9599999997
      },
      {
        "name": "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        "value": 69217.71
      },
      {
        "name": "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        "value": 18967.2
      },
      {
        "name": "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        "value": 6300
      },
      {
        "name": "RAPIDO DESPACHANTES",
        "value": 4240
      },
      {
        "name": "BANCO SICOOB",
        "value": 1032.98
      },
      {
        "name": "ANTONIO FRANCISCO PEIXOTO DE SOUSA",
        "value": 750
      },
      {
        "name": "SISPAG PJBANK",
        "value": 572.3899999999999
      },
      {
        "name": "NICROCRED - BANCO SICOOB",
        "value": 500
      },
      {
        "name": "MARTE DECORA",
        "value": 248.08
      },
      {
        "name": "HOSTGATOR BRASIL LTDA",
        "value": 223.95
      },
      {
        "name": "FRANCISCO NADSON MENDES PEREIRA",
        "value": 200
      }
    ],
    "EXTRATO": [
      [
        "25/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "15/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "25/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "15/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "01/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSIANE MEIRELES AZEVEDO",
        2027.67,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "AGNY DE LEMOS SIQUEIRA",
        775.64,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1441.9,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KLEDYSON ROCHA PRAXEDES",
        309.48,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        749.19,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSIANE MEIRELES AZEVEDO",
        2027.67,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "AGNY DE LEMOS SIQUEIRA",
        775.64,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1441.9,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KATIUSK KELLINE BRITO DA SILVA",
        1185.57,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "25/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "15/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/05/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "25/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "15/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/04/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "01/03/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSIANE MEIRELES AZEVEDO",
        2027.67,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "AGNY DE LEMOS SIQUEIRA",
        775.64,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1441.9,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "SIDNEI LOPES DA COSTA",
        375.09,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "VITOR MORAES GOMES",
        531.05,
        "A_PAGAR"
      ],
      [
        "20/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CLEANE FURTADO VIVEIROS",
        759.95,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KLEDYSON ROCHA PRAXEDES",
        309.48,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        749.19,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ROSIANE MEIRELES AZEVEDO",
        2027.67,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO FILOMENO BARROS",
        384.31,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KENNEDY MAGALHAES RABELO",
        786.71,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HEVERSON DE CASSIO RODRIGUES COELHO",
        749.98,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "OZIAS HENRIQUE DE SENA",
        657.93,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JULIO CESAR DOS SANTOS DE JESUS",
        521.81,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUZINEY PEREIRA MAIA",
        534.16,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",
        612.56,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO DOS SANTOS DUARTE",
        504.06,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RAIMUNDA NONATA P CORREA",
        1303.64,
        "A_PAGAR"
      ],
      [
        "15/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "BENTO FRANCISCO RODRIGUES NETO",
        973.49,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEANDRO RODRIGUES DA COSTA",
        539.7,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LINDAURA PEREIRA DE SOUZA",
        640.55,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "AGNY DE LEMOS SIQUEIRA",
        775.64,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WESLEI RODRIGUES DA COSTA",
        770.87,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LUIS HENRIQUE DE MORAES XAVIER",
        474.79,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "THAIS DE SOUZA RODRIGUES",
        519.41,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ELIAS BATISTA DE SOUSA FILHO",
        1231.4,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WELDES DE LIMA SANTANA",
        425.39,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOSE CARLOS ALVES RODRIGUES",
        738.83,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "CRISTIANO DA COSTA FERREIRA",
        539.57,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RUBENS EPAMINONDAS SANTOS",
        531.05,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "MARIA DO P SOCORRO S L BARBOSA",
        618.18,
        "A_PAGAR"
      ],
      [
        "10/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "GUSTAVO DANTAS MATOS",
        483.8,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO ALVES DE OLIVEIRA JUNIOR",
        1441.9,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "Maria Julia Neves de Souza",
        819.11,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ANTONIO JOSE LIMA",
        724.33,
        "A_PAGAR"
      ],
      [
        "30/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "WILLIAM DE FRANCA SOUSA",
        460.71,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "KATIUSK KELLINE BRITO DA SILVA",
        1185.57,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO RAYAN ALMEIDA FERREIRA",
        743.48,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "IDELMAR BORGES DE OLIVEIRA",
        356.05,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FABIANO CARVALHO DE OLIVEIRA",
        378.12,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "HERICON ATAIDE SANTANA",
        1180.43,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",
        1163.29,
        "A_PAGAR"
      ],
      [
        "25/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "LEONARDO DA CRUZ CONCEICAO",
        272.06,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "JOAO PAULO DO NASCIMENTO NERES",
        1207.9,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "RODRIGO DE CARVALHO PEREIRA",
        289.03,
        "A_PAGAR"
      ],
      [
        "20/09/2027",
        "Nirocred",
        "RECEITA DE ALIENAÇÃO",
        "ALEXANDRE FERREIRA DE OLIVEIRA",
        590.22,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "27/03/2027",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/03/2027",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/02/2027",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/02/2027",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/01/2027",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/01/2027",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/12/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/12/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/11/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/11/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/10/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "27/06/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "24/06/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "A_PAGAR"
      ],
      [
        "20/06/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -12000,
        "A_PAGAR"
      ],
      [
        "28/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -3498.77,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "A_PAGAR"
      ],
      [
        "25/05/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11774.59,
        "A_PAGAR"
      ],
      [
        "24/05/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -1164,
        "A_PAGAR"
      ],
      [
        "22/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -17507.23,
        "A_PAGAR"
      ],
      [
        "22/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -2559.1,
        "A_PAGAR"
      ],
      [
        "20/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7884.7,
        "A_PAGAR"
      ],
      [
        "19/05/2026",
        "Nirocred",
        "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "ANTONIO FRANCISCO PEIXOTO DE SOUSA",
        -750,
        "A_PAGAR"
      ],
      [
        "19/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -33937.93,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -13278.82,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -18354.53,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6588.32,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9931.84,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9262.98,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4102.56,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "RAPIDO DESPACHANTES",
        -848,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "SISTEMAS",
        "AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO",
        -2225.4,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11413.58,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7166.33,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -18.13,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -17707.41,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "OUTRAS DESPESAS",
        "FRANCISCO NADSON MENDES PEREIRA",
        -200,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "RAPIDO DESPACHANTES",
        -3392,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7989.18,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8340.69,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -11876.34,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "MARTE DECORA",
        -248.08,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -12508,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4606.81,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11169.82,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10295.96,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5118.67,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10257.74,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "GUILHERME PENHA DOS REIS",
        -120,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7206.79,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7064.38,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7206.79,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -12614.3,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -25.9,
        "PAGO"
      ],
      [
        "10/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7310.16,
        "PAGO"
      ],
      [
        "10/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -9265.88,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "05/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6358.92,
        "PAGO"
      ],
      [
        "05/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6179.47,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "02/03/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "27/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5432.8,
        "PAGO"
      ],
      [
        "27/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -15852.64,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "25/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -12996.4,
        "PAGO"
      ],
      [
        "25/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "25/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "24/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "23/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5132.22,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11119.8,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -16059.38,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "PAGAMENTO DE EMPRÉSTIMO",
        "CELCOIN - ECONOMY",
        -6152.56,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8203.42,
        "PAGO"
      ],
      [
        "20/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -23.31,
        "PAGO"
      ],
      [
        "18/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -16978.48,
        "PAGO"
      ],
      [
        "18/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5865.29,
        "PAGO"
      ],
      [
        "18/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10187.09,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7102.03,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Nirocred",
        "EMPRÉSTIMO PESSOAL",
        "CELCOIN - ECONOMY",
        -5132.33,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "12/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "11/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8202.81,
        "PAGO"
      ],
      [
        "11/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "11/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "10/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5145.83,
        "PAGO"
      ],
      [
        "10/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -18.13,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -11218.54,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -15.54,
        "PAGO"
      ],
      [
        "06/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6562.23,
        "PAGO"
      ],
      [
        "06/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "REGISTRO.BR",
        -76,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8029.71,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "04/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4607.31,
        "PAGO"
      ],
      [
        "04/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "03/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -3912.54,
        "PAGO"
      ],
      [
        "03/02/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4095.71,
        "PAGO"
      ],
      [
        "03/02/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "HOSTGATOR BRASIL LTDA",
        -77.98,
        "PAGO"
      ],
      [
        "30/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "28/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "27/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "HOSTGATOR BRASIL LTDA",
        -145.97,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -11671.31,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4828.33,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5147.36,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -20816.72,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "23/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5732.32,
        "PAGO"
      ],
      [
        "23/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "22/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -16470.61,
        "PAGO"
      ],
      [
        "21/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11739.92,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5117.29,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10238.85,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -4838.77,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SICOOB ECONOMY 10.869.180/0009-53",
        -50,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "19/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6896.32,
        "PAGO"
      ],
      [
        "19/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -12.95,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7103.34,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -11466.56,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8338.71,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "OUTRAS DESPESAS",
        "NICROCRED - BANCO SICOOB",
        -500,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8956.37,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6665.45,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7308.03,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "14/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -10192.32,
        "PAGO"
      ],
      [
        "14/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -8101.08,
        "PAGO"
      ],
      [
        "14/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "13/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -6484.92,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Nirocred",
        "CARTÃO DE CRÉDITO",
        "BANCO SICOOB",
        -862.98,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -20.72,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Nirocred",
        "OUTRAS DESPESAS",
        "MARIA EDUARDA ANACLETO",
        -165,
        "PAGO"
      ],
      [
        "09/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5427,
        "PAGO"
      ],
      [
        "09/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "08/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "07/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "06/01/2026",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -5117.38,
        "PAGO"
      ],
      [
        "05/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "02/01/2026",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -2.59,
        "PAGO"
      ],
      [
        "30/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -10.36,
        "PAGO"
      ],
      [
        "29/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -5,
        "PAGO"
      ],
      [
        "24/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -7.77,
        "PAGO"
      ],
      [
        "22/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "BANCO SICOOB",
        -50,
        "PAGO"
      ],
      [
        "19/12/2025",
        "Nirocred",
        "TAXA JUNTA COMERCIAL",
        "JUNTA COMERCIAL DF",
        -388.91,
        "PAGO"
      ],
      [
        "19/12/2025",
        "Nirocred",
        "EMPRÉSTIMO PESSOAL",
        "CELCOIN - ECONOMY",
        -1534.05,
        "PAGO"
      ],
      [
        "18/12/2025",
        "Nirocred",
        "SISTEMAS",
        "CELCOIN INSTITUICAO DE PAGAMENTO S.A",
        -11297.27,
        "PAGO"
      ],
      [
        "18/12/2025",
        "Nirocred",
        "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "CELCOIN - ECONOMY",
        -7177.33,
        "PAGO"
      ],
      [
        "18/12/2025",
        "Nirocred",
        "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "CELCOIN - ECONOMY",
        -10806.14,
        "PAGO"
      ],
      [
        "18/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -5.18,
        "PAGO"
      ],
      [
        "17/12/2025",
        "Nirocred",
        "TARIFAS BANCÁRIAS",
        "SISPAG PJBANK",
        -18.13,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 1504862.3800000001,
      "TOTAL_DESPESA": 732432.2699999999,
      "VALOR_LIQUIDO": 772430.1100000002,
      "MARGEM_LIQUIDA": 51.328953415660514,
      "VALOR_LIQ_SERIES": [
        -65340.41999999994,
        -36928.75999999992,
        34428.27000000008,
        152154.31,
        63034.33999999991,
        87936.35000000006,
        102111.71000000005,
        98790.84000000004,
        97490.83000000006,
        84845.20000000004,
        79006.75000000003,
        74900.69000000003
      ]
    },
    "RECEITA_DIA": [
      1261.95,
      29520.93,
      22628.789999999975,
      127861.8699999999,
      186455.8199999997,
      72063.33999999997,
      13706.439999999999,
      92299.21999999994,
      28379.819999999985,
      177095.8899999997,
      21628.44,
      20420.549999999992,
      15755.099999999999,
      17310.290000000005,
      213135.5600000001,
      8682.029999999999,
      9534.73,
      5415.49,
      8655.64,
      164131.75000000003,
      2090.78,
      2108.08,
      5827.240000000001,
      9963.47,
      174831.90999999995,
      7848.6,
      10527.939999999999,
      10939.88,
      1345.5,
      41871.64000000001,
      1563.69
    ],
    "DESPESA_DIA": [
      2.59,
      16423.39,
      8016.02,
      10802.320000000002,
      23743.15,
      34297.82000000001,
      10.36,
      18.13,
      16689.570000000003,
      12489.66,
      28107.57,
      8141.57,
      43682.85,
      18511.530000000002,
      22942.8,
      52453.170000000006,
      7192.2300000000005,
      48420.219999999994,
      54883.79,
      126422.9,
      5.18,
      36542.12,
      15489.480000000003,
      18993.100000000002,
      37304.71,
      70604.7,
      12608.93,
      3506.54,
      4105.150000000001,
      15.54,
      5.18
    ],
    "SALDOS_MES": [
      -65340.41999999994,
      -102269.17999999986,
      -67840.90999999979,
      84313.40000000021,
      147347.7400000001,
      235284.09000000017,
      337395.8000000002,
      436186.64000000025,
      533677.4700000003,
      618522.6700000004,
      697529.4200000004,
      772430.1100000005
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "RECEITA DE ALIENAÇÃO",
        "values": [
          50734.81,
          71898.10000000003,
          93851.58,
          140470.50999999998,
          123373.18999999997,
          102861.66000000006,
          105037.03000000004,
          101716.16000000005,
          100416.16000000005,
          87770.53000000004,
          81932.08000000003,
          77826.02000000002
        ]
      },
      {
        "cat": "RECEITA DA UNID. CEARÁ",
        "values": [
          23097.12,
          20153.46,
          21556.04,
          23065.21,
          23485.55,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01
        ]
      },
      {
        "cat": "RECEITA DA UNID. BRASILIA",
        "values": [
          21628.29,
          20607.08,
          19974.22,
          20802,
          21425.94,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01
        ]
      },
      {
        "cat": "RECEITA DA UNID. MARANHÃO",
        "values": [
          13187.32,
          11826.8,
          11717.62,
          13127.1,
          12905.28,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01
        ]
      },
      {
        "cat": "RECEITA DA UNID. ONLINE",
        "values": [
          8991.34,
          8985.16,
          8079.82,
          9381.67,
          9260.43,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01,
          0.01
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "values": [
          -176919.03999999998,
          -139731.78999999998,
          -105993.87,
          -45306.17,
          -122804.22000000002,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "SISTEMAS",
        "values": [
          -11739.92,
          -11119.8,
          -11169.82,
          -13638.98,
          -12938.59,
          -14225.4,
          -2225.4,
          -2225.4,
          -2225.4,
          -2225.4,
          -2225.4,
          -2225.4
        ]
      },
      {
        "cat": "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "values": [
          -145.97,
          -16006.619999999999,
          -12244.42,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "values": [
          0,
          0,
          0,
          -700,
          -700,
          -700,
          -700,
          -700,
          -700,
          -700,
          -700,
          -700
        ]
      },
      {
        "cat": "PAGAMENTO DE EMPRÉSTIMO",
        "values": [
          0,
          -6152.56,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 430609.6600000001,
        "d2": 519554.3000000004
      },
      {
        "tipo": "RECEITA DE ALIENAÇÃO",
        "parent": "Receita",
        "d1": 216484.49,
        "d2": 366705.36000000004
      },
      {
        "tipo": "RECEITA DA UNID. BRASILIA",
        "parent": "Receita",
        "d1": 62209.590000000004,
        "d2": 42227.950000000004
      },
      {
        "tipo": "RECEITA DA UNID. ONLINE",
        "parent": "Receita",
        "d1": 26056.32,
        "d2": 18642.109999999997
      },
      {
        "tipo": "RECEITA DA UNID. CEARÁ",
        "parent": "Receita",
        "d1": 64806.62,
        "d2": 46550.77
      },
      {
        "tipo": "RECEITA DA UNID . PARÁ",
        "parent": "Receita",
        "d1": 13413.519999999999,
        "d2": 8982.62
      },
      {
        "tipo": "RECEITA DA UND. GOIÁS",
        "parent": "Receita",
        "d1": 7374.77,
        "d2": 5706.040000000001
      },
      {
        "tipo": "RECEITA DA UNID. MARANHÃO",
        "parent": "Receita",
        "d1": 36731.74,
        "d2": 26032.39
      },
      {
        "tipo": "RECEITA DA UND. PARANÁ",
        "parent": "Receita",
        "d1": 3367.6099999999997,
        "d2": 3383.05
      },
      {
        "tipo": "OUTRAS RECEITAS",
        "parent": "Receita",
        "d1": 165,
        "d2": 442.08000000000004
      },
      {
        "tipo": "RECEITA DA UND. REATIVAÇÃO",
        "parent": "Receita",
        "d1": 0,
        "d2": 715.93
      },
      {
        "tipo": "RECEITA DA UND. BAHIA",
        "parent": "Receita",
        "d1": 0,
        "d2": 166
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -498450.56999999995,
        "d2": -216429.29999999993
      },
      {
        "tipo": "SISTEMAS",
        "parent": "Despesa",
        "d1": -34029.54,
        "d2": -40802.97
      },
      {
        "tipo": "EMPRÉSTIMO GARANTIA AUTOMÓVEL",
        "parent": "Despesa",
        "d1": -422644.69999999984,
        "d2": -168110.39
      },
      {
        "tipo": "OUTRAS DESPESAS",
        "parent": "Despesa",
        "d1": -665,
        "d2": -200
      },
      {
        "tipo": "CARTÃO DE CRÉDITO",
        "parent": "Despesa",
        "d1": -862.98,
        "d2": 0
      },
      {
        "tipo": "EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY",
        "parent": "Despesa",
        "d1": -28397.010000000002,
        "d2": 0
      },
      {
        "tipo": "TARIFAS BANCÁRIAS",
        "parent": "Despesa",
        "d1": -566.4499999999998,
        "d2": -225.94
      },
      {
        "tipo": "EMPRÉSTIMO PESSOAL",
        "parent": "Despesa",
        "d1": -5132.33,
        "d2": 0
      },
      {
        "tipo": "PAGAMENTO DE EMPRÉSTIMO",
        "parent": "Despesa",
        "d1": -6152.56,
        "d2": 0
      },
      {
        "tipo": "CUSTAS COM GRAVAME E ALIENAÇÃO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4990
      },
      {
        "tipo": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2100
      }
    ]
  }
};

// ALL_TX: lista flat de TODAS as transacoes normalizadas (despesa + receita,
// realizadas + a pagar + canceladas excluidas). Usada pra cross-filter real
// — pagina recalcula KPIs/charts/tabelas em runtime via aggregateTx().
// Cada row eh tupla compacta pra reduzir tamanho do bundle:
// [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, centroCusto, regime]
// regime: 'c' = caixa, 'k' = competencia (compacto pra economizar bytes)
const ALL_TX = [["r","2024-03",11,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-04",15,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-05",15,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-06",17,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-08",19,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",685.66,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",685.66,1,"","Nirocred","k"],["r","2024-09",16,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-10",14,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-11",18,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-12",16,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2025-01",17,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2025-02",19,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","EVA BENTA DE SOUZA SAMPAIO",622.57,1,"","Nirocred","k"],["r","2024-02",21,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",10,1,"","Nirocred","c"],["r","2024-02",21,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",10,1,"","Nirocred","k"],["r","2024-03",1,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","k"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","k"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","k"],["r","2024-06",3,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","k"],["r","2024-07",5,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","k"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","k"],["r","2024-09",2,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","k"],["r","2024-10",1,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.15,1,"","Nirocred","k"],["r","2024-11",1,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.18,1,"","Nirocred","c"],["r","2024-02",26,"RECEITA DE ALIENAÇÃO","ADALTON DOS SANTOS SILVA",470.18,1,"","Nirocred","k"],["r","2024-03",18,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-04",12,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-06",13,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-05",9,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-07",19,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-10",15,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-09",12,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-11",19,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-12",19,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2025-01",21,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2025-02",19,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","c"],["r","2024-02",29,"RECEITA DE ALIENAÇÃO","IVETE ALVES PEREIRA",605.76,1,"","Nirocred","k"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",675.93,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",675.93,1,"","Nirocred","k"],["r","2024-06",17,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",680.93,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",680.93,1,"","Nirocred","k"],["r","2024-07",17,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","k"],["r","2024-08",2,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",677.93,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",677.93,1,"","Nirocred","k"],["r","2024-09",2,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",678.13,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",678.13,1,"","Nirocred","k"],["r","2024-11",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","k"],["r","2025-01",6,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","k"],["r","2025-02",7,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","k"],["r","2025-08",5,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",605.76,1,"","Nirocred","k"],["r","2024-04",8,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.93,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.93,1,"","Nirocred","k"],["r","2024-05",6,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.53,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.53,1,"","Nirocred","k"],["r","2024-06",10,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",605.76,1,"","Nirocred","k"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",667.33,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",667.33,1,"","Nirocred","k"],["r","2024-08",12,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",605.76,1,"","Nirocred","k"],["r","2024-09",10,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",605.76,1,"","Nirocred","k"],["r","2024-10",16,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",667.53,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",667.53,1,"","Nirocred","k"],["r","2024-12",5,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.13,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.13,1,"","Nirocred","k"],["r","2025-01",8,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.73,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.73,1,"","Nirocred","k"],["r","2025-02",7,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.53,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",671.53,1,"","Nirocred","k"],["r","2025-04",9,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",605.76,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",605.76,1,"","Nirocred","k"],["r","2025-03",13,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",666.53,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CARLOS LUIZ DA CONCEICAO",666.53,1,"","Nirocred","k"],["r","2024-05",24,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-04",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-05",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-06",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-07",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-08",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-09",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-10",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-11",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2024-12",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2025-01",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.46,0,"","Nirocred","k"],["r","2025-02",25,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.41,0,"","Nirocred","c"],["r","2024-03",7,"RECEITA DE ALIENAÇÃO","CLEIDENICE DE SOUSA SILVA",363.41,0,"","Nirocred","k"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-05",14,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-06",10,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-08",13,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-09",9,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-10",8,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-10",8,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-11",13,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-11",13,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-12",12,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.61,1,"","Nirocred","k"],["r","2024-12",12,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.59,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","LUCIANA GOMES DE LIMA",484.59,1,"","Nirocred","k"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",605.76,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",605.76,1,"","Nirocred","k"],["r","2024-04",3,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",605.76,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",605.76,1,"","Nirocred","k"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",605.76,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",605.76,1,"","Nirocred","k"],["r","2024-07",4,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",671.13,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",671.13,1,"","Nirocred","k"],["r","2024-08",6,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",671.73,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",671.73,1,"","Nirocred","k"],["r","2024-10",4,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",676.93,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",676.93,1,"","Nirocred","k"],["r","2024-12",20,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",605.76,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",605.76,1,"","Nirocred","k"],["r","2024-11",18,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",674.13,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",674.13,1,"","Nirocred","k"],["r","2024-12",23,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",674.73,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",674.73,1,"","Nirocred","k"],["r","2025-01",8,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",671.73,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",671.73,1,"","Nirocred","k"],["r","2025-03",5,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",675.93,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",675.93,1,"","Nirocred","k"],["r","2025-03",20,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",673.53,1,"","Nirocred","c"],["r","2024-03",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",673.53,1,"","Nirocred","k"],["r","2024-04",5,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",668.33,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",668.33,1,"","Nirocred","k"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2024-08",26,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",669.13,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",669.13,1,"","Nirocred","k"],["r","2024-09",10,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2024-10",8,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2024-11",6,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2024-12",9,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2025-01",9,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2025-02",6,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2025-02",6,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","c"],["r","2024-03",13,"RECEITA DE ALIENAÇÃO","FELIPE DOS SANTOS JUNIOR",605.76,1,"","Nirocred","k"],["r","2024-04",8,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","k"],["r","2024-05",10,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","k"],["r","2024-06",11,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","k"],["r","2024-07",9,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","k"],["r","2024-08",8,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","k"],["r","2024-09",9,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","k"],["r","2024-10",9,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",484.61,1,"","Nirocred","k"],["r","2024-12",6,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",535.63,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",535.63,1,"","Nirocred","k"],["r","2025-01",13,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",536.27,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",536.27,1,"","Nirocred","k"],["r","2025-02",12,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",536.43,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",536.43,1,"","Nirocred","k"],["r","2025-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",536.27,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",536.27,1,"","Nirocred","k"],["r","2025-04",9,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",535.92,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ENIS VERA DA CONCEIÇAO",535.92,1,"","Nirocred","k"],["r","2024-04",15,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","k"],["r","2024-05",15,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","k"],["r","2024-06",17,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","k"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","k"],["r","2024-08",15,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","k"],["r","2024-10",25,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",800.66,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",800.66,1,"","Nirocred","k"],["r","2024-12",19,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","k"],["r","2025-02",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.37,1,"","Nirocred","k"],["r","2025-06",2,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",792.02,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",792.02,1,"","Nirocred","k"],["r","2025-09",10,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.32,1,"","Nirocred","c"],["r","2024-03",14,"RECEITA DE ALIENAÇÃO","ALAN PEREIRA GOMES",719.32,1,"","Nirocred","k"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",605.76,1,"","Nirocred","c"],["r","2024-03",20,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",605.76,1,"","Nirocred","k"],["r","2024-05",9,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",605.76,1,"","Nirocred","c"],["r","2024-03",20,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",605.76,1,"","Nirocred","k"],["r","2024-06",6,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",605.76,1,"","Nirocred","c"],["r","2024-03",20,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",605.76,1,"","Nirocred","k"],["r","2024-07",1,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",605.76,1,"","Nirocred","c"],["r","2024-03",20,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",605.76,1,"","Nirocred","k"],["r","2024-05",9,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",669.13,1,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",669.13,1,"","Nirocred","k"],["r","2024-06",26,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",672.33,1,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",672.33,1,"","Nirocred","k"],["r","2024-07",26,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",672.53,1,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",672.53,1,"","Nirocred","k"],["r","2024-09",23,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,1,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,1,"","Nirocred","k"],["r","2024-08",25,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","k"],["r","2024-09",25,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","k"],["r","2024-10",25,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","k"],["r","2024-11",25,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","k"],["r","2024-12",25,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","k"],["r","2025-01",25,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","k"],["r","2025-02",25,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","k"],["r","2025-03",25,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","c"],["r","2024-03",28,"RECEITA DE ALIENAÇÃO","MAXIMILIANO MONTEIRO DA SILVA",605.76,0,"","Nirocred","k"],["r","2024-05",10,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","k"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",666.93,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",666.93,1,"","Nirocred","k"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","k"],["r","2024-08",16,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",666.53,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",666.53,1,"","Nirocred","k"],["r","2024-09",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","k"],["r","2024-10",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","k"],["r","2024-11",18,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","k"],["r","2024-12",4,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","k"],["r","2025-01",17,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","k"],["r","2025-02",19,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",605.76,1,"","Nirocred","k"],["r","2025-03",20,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",666.53,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",666.53,1,"","Nirocred","k"],["r","2025-04",28,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",668.13,1,"","Nirocred","c"],["r","2024-04",9,"RECEITA DE ALIENAÇÃO","JOSE IVAILTON DE OLIVEIRA FREITAS",668.13,1,"","Nirocred","k"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","k"],["r","2024-06",17,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","k"],["r","2024-07",4,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","k"],["r","2024-08",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","k"],["r","2024-09",4,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","k"],["r","2024-10",3,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","k"],["r","2024-12",3,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",669.33,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",669.33,1,"","Nirocred","k"],["r","2025-01",8,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",670.53,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",670.53,1,"","Nirocred","k"],["r","2025-01",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","k"],["r","2025-03",7,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",669.53,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",669.53,1,"","Nirocred","k"],["r","2025-03",20,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",666.53,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",666.53,1,"","Nirocred","k"],["r","2025-04",3,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","c"],["r","2024-04",2,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",605.76,1,"","Nirocred","k"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",666.53,1,"","Nirocred","c"],["r","2024-04",4,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",666.53,1,"","Nirocred","k"],["r","2024-06",7,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","c"],["r","2024-04",4,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","k"],["r","2024-07",5,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","c"],["r","2024-04",4,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","k"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","c"],["r","2024-04",4,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","k"],["r","2024-08",20,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","c"],["r","2024-04",4,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","k"],["r","2024-10",7,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","c"],["r","2024-04",4,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","k"],["r","2024-10",28,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","c"],["r","2024-04",4,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",605.76,1,"","Nirocred","k"],["r","2024-05",6,"RECEITA DE ALIENAÇÃO","MARIA CLEONICE RAMOS CABRAL",605.76,1,"","Nirocred","c"],["r","2024-04",5,"RECEITA DE ALIENAÇÃO","MARIA CLEONICE RAMOS CABRAL",605.76,1,"","Nirocred","k"],["r","2024-06",6,"RECEITA DE ALIENAÇÃO","MARIA CLEONICE RAMOS CABRAL",605.76,1,"","Nirocred","c"],["r","2024-04",5,"RECEITA DE ALIENAÇÃO","MARIA CLEONICE RAMOS CABRAL",605.76,1,"","Nirocred","k"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",666.93,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",666.93,1,"","Nirocred","k"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2024-07",22,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2024-08",20,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2024-09",20,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2024-10",21,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2024-11",21,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2024-12",20,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2025-01",23,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",666.53,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",666.53,1,"","Nirocred","k"],["r","2025-02",10,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2025-03",24,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2025-04",23,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","c"],["r","2024-04",11,"RECEITA DE ALIENAÇÃO","LUCAS FERREIRA COSTA",605.76,1,"","Nirocred","k"],["r","2024-06",5,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",333.56,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",333.56,1,"","Nirocred","k"],["r","2024-09",5,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2024-10",9,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",333.36,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",333.36,1,"","Nirocred","k"],["r","2024-11",5,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2024-12",4,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2024-12",4,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2025-01",8,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2025-01",8,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2025-05",15,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2025-03",7,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","c"],["r","2024-05",2,"RECEITA DE ALIENAÇÃO","MARIANO FOGAÇA SANTANA JUNIOR",302.88,1,"","Nirocred","k"],["r","2024-06",5,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2024-07",3,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2024-08",5,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2024-09",3,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2024-10",9,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",666.73,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",666.73,1,"","Nirocred","k"],["r","2024-11",4,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2024-12",2,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2025-01",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2025-02",5,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2025-03",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2025-04",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2025-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","CLAUDIA MARIA SANTANA DOS SANTOS",605.76,1,"","Nirocred","k"],["r","2024-06",3,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2024-07",2,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2024-07",26,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2024-08",28,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2024-10",2,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2024-11",4,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2024-12",2,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2025-01",6,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2025-02",5,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2025-03",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2025-04",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2025-05",6,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","c"],["r","2024-05",7,"RECEITA DE ALIENAÇÃO","APARECIDA MARTINS DE SANTANA",605.76,1,"","Nirocred","k"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2024-07",22,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",399.92,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",399.92,1,"","Nirocred","k"],["r","2024-09",20,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2024-10",21,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2024-11",19,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2024-12",20,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2025-01",22,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2025-02",24,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2025-03",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",399.92,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",399.92,1,"","Nirocred","k"],["r","2025-04",16,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.46,1,"","Nirocred","k"],["r","2025-05",21,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.41,1,"","Nirocred","c"],["r","2024-05",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO NONATO DA SILVA",363.41,1,"","Nirocred","k"],["r","2024-06",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",678.86,1,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",678.86,1,"","Nirocred","k"],["r","2024-07",22,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,1,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,1,"","Nirocred","k"],["r","2024-10",8,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",688.46,1,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",688.46,1,"","Nirocred","k"],["r","2025-03",25,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","k"],["r","2024-10",20,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","k"],["r","2024-11",20,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","k"],["r","2024-12",20,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","k"],["r","2025-01",20,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","k"],["r","2025-02",20,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","k"],["r","2025-03",20,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","k"],["r","2025-04",20,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.97,0,"","Nirocred","k"],["r","2025-05",20,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.94,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WILLIAN NASCIMENTO DA SILVA",616.94,0,"","Nirocred","k"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1102.31,1,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1102.31,1,"","Nirocred","k"],["r","2026-04",24,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1123.57,1,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1123.57,1,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","k"],["r","2024-06",25,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","k"],["r","2024-07",25,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","k"],["r","2024-08",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","k"],["r","2024-09",24,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","k"],["r","2024-11",11,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",682.06,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",682.06,1,"","Nirocred","k"],["r","2025-01",2,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",685.06,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",685.06,1,"","Nirocred","k"],["r","2025-05",21,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",680.86,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",680.86,1,"","Nirocred","k"],["r","2025-03",14,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",687.46,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",687.46,1,"","Nirocred","k"],["r","2025-06",13,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","k"],["r","2025-04",3,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",680.06,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",680.06,1,"","Nirocred","k"],["r","2025-07",16,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","k"],["r","2025-07",16,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","c"],["r","2024-05",29,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",616.97,1,"","Nirocred","k"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.39,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.39,1,"","Nirocred","k"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",172.99,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",172.99,1,"","Nirocred","k"],["r","2024-09",16,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.44,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.44,1,"","Nirocred","k"],["r","2024-11",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",174.29,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",174.29,1,"","Nirocred","k"],["r","2024-12",3,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",174.29,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",174.29,1,"","Nirocred","k"],["r","2024-12",26,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.94,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.94,1,"","Nirocred","k"],["r","2025-02",26,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",175.34,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",175.34,1,"","Nirocred","k"],["r","2025-04",7,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",175.74,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",175.74,1,"","Nirocred","k"],["r","2025-04",17,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",174.94,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",174.94,1,"","Nirocred","k"],["r","2025-04",25,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.69,1,"","Nirocred","c"],["r","2024-06",4,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.69,1,"","Nirocred","k"],["r","2024-08",19,"RECEITA DE ALIENAÇÃO","CLEIDE RODRIGUES DE SOUSA",880,1,"","Nirocred","c"],["r","2024-06",11,"RECEITA DE ALIENAÇÃO","CLEIDE RODRIGUES DE SOUSA",880,1,"","Nirocred","k"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,1,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,1,"","Nirocred","k"],["r","2025-11",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,1,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,1,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","k"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,1,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,1,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,1,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","c"],["r","2024-06",12,"RECEITA DE ALIENAÇÃO","RICARDO GOMES DINIZ",616.97,0,"","Nirocred","k"],["r","2024-06",14,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1300,1,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1300,1,"","Nirocred","k"],["r","2024-11",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2024-08",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2024-09",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2024-10",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2024-11",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2024-12",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-02",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-03",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-04",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-05",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-06",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-08",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-09",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-10",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2025-12",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2026-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2026-04",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","c"],["r","2024-01",25,"RECEITA DE ALIENAÇÃO","MARIA DAS GRAÇAS RIBEIRO DOS SANTOS",1315,0,"","Nirocred","k"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","HERMANO GONSALO RIBEIRO",616.97,1,"","Nirocred","c"],["r","2024-06",17,"RECEITA DE ALIENAÇÃO","HERMANO GONSALO RIBEIRO",616.97,1,"","Nirocred","k"],["r","2024-08",15,"RECEITA DE ALIENAÇÃO","HERMANO GONSALO RIBEIRO",616.97,1,"","Nirocred","c"],["r","2024-06",17,"RECEITA DE ALIENAÇÃO","HERMANO GONSALO RIBEIRO",616.97,1,"","Nirocred","k"],["r","2024-09",20,"RECEITA DE ALIENAÇÃO","HERMANO GONSALO RIBEIRO",679.46,1,"","Nirocred","c"],["r","2024-06",17,"RECEITA DE ALIENAÇÃO","HERMANO GONSALO RIBEIRO",679.46,1,"","Nirocred","k"],["r","2024-07",22,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2024-08",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2024-09",19,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2024-10",21,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2024-11",19,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2024-12",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2025-01",22,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2025-02",24,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2025-03",24,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2025-04",24,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2025-05",22,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2025-06",24,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","c"],["r","2024-06",20,"RECEITA DE ALIENAÇÃO","FABIO CORDEIRO DURAES",616.97,1,"","Nirocred","k"],["r","2024-06",21,"RECEITA DE ALIENAÇÃO","JOAO MARCOS RODRIGUES PEREIRA",2763.75,0,"","Nirocred","c"],["r","2024-06",21,"RECEITA DE ALIENAÇÃO","JOAO MARCOS RODRIGUES PEREIRA",2763.75,0,"","Nirocred","k"],["r","2024-07",3,"RECEITA DE ALIENAÇÃO","MARIA CLEONICE RAMOS CABRAL",5438.24,1,"","Nirocred","c"],["r","2024-04",5,"RECEITA DE ALIENAÇÃO","MARIA CLEONICE RAMOS CABRAL",5438.24,1,"","Nirocred","k"],["r","2024-07",3,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",4400,1,"","Nirocred","c"],["r","2024-03",20,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",4400,1,"","Nirocred","k"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","k"],["r","2024-09",10,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","k"],["r","2024-10",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","k"],["r","2024-11",21,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",545.88,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",545.88,1,"","Nirocred","k"],["r","2024-12",23,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",546.52,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",546.52,1,"","Nirocred","k"],["r","2025-01",9,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","k"],["r","2025-03",5,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",547,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",547,1,"","Nirocred","k"],["r","2025-03",19,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","k"],["r","2025-05",2,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",547.64,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",547.64,1,"","Nirocred","k"],["r","2025-06",2,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",547.64,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",547.64,1,"","Nirocred","k"],["r","2025-06",20,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","k"],["r","2025-07",9,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","c"],["r","2024-07",8,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",495.82,1,"","Nirocred","k"],["r","2024-08",8,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2024-09",4,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2024-10",18,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",680.26,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",680.26,1,"","Nirocred","k"],["r","2024-11",6,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2024-12",6,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2025-01",8,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2025-02",10,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2025-03",7,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2025-04",9,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2025-05",6,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2025-06",9,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2025-07",9,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","c"],["r","2024-07",11,"RECEITA DE ALIENAÇÃO","LUCIANO FLORENTINO BARBOSA",616.97,1,"","Nirocred","k"],["r","2024-08",14,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1269.69,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1269.69,1,"","Nirocred","k"],["r","2024-09",10,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1153.58,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1153.58,1,"","Nirocred","k"],["r","2024-10",16,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1271.21,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1271.21,1,"","Nirocred","k"],["r","2024-11",11,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1153.58,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1153.58,1,"","Nirocred","k"],["r","2024-12",10,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1153.58,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1153.58,1,"","Nirocred","k"],["r","2025-01",14,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1153.58,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1153.58,1,"","Nirocred","k"],["r","2024-08",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2024-09",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2024-10",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2024-11",14,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2024-12",13,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2025-01",17,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2025-02",18,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2025-03",18,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2025-04",17,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2025-05",19,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2025-06",12,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2025-07",17,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","c"],["r","2024-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",495.82,1,"","Nirocred","k"],["r","2024-09",16,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2024-10",15,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2024-11",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2024-12",16,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-01",17,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-02",19,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-03",19,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-04",17,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-05",15,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-06",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-07",17,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-08",14,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-11",19,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2026-03",17,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2026-05",11,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,0,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,0,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,0,"","Nirocred","c"],["r","2024-07",18,"RECEITA DE ALIENAÇÃO","BRUNO DE ASSIS RODRIGUES",1300,0,"","Nirocred","k"],["r","2024-08",19,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",505.86,1,"","Nirocred","c"],["r","2024-07",19,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",505.86,1,"","Nirocred","k"],["r","2024-09",16,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",459.47,1,"","Nirocred","c"],["r","2024-07",19,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",459.47,1,"","Nirocred","k"],["r","2024-10",16,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",505.56,1,"","Nirocred","c"],["r","2024-07",19,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",505.56,1,"","Nirocred","k"],["r","2024-11",18,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",459.47,1,"","Nirocred","c"],["r","2024-07",19,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",459.47,1,"","Nirocred","k"],["r","2024-08",26,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","k"],["r","2024-09",24,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","k"],["r","2024-10",25,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","k"],["r","2024-11",25,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","k"],["r","2025-01",10,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",681.26,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",681.26,1,"","Nirocred","k"],["r","2025-02",24,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",683.46,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",683.46,1,"","Nirocred","k"],["r","2025-06",24,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",687.86,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",687.86,1,"","Nirocred","k"],["r","2025-05",7,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",680.66,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",680.66,1,"","Nirocred","k"],["r","2025-06",24,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",683.66,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",683.66,1,"","Nirocred","k"],["r","2025-07",3,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",679.86,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",679.86,1,"","Nirocred","k"],["r","2025-07",3,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",616.97,1,"","Nirocred","k"],["r","2024-08",19,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2024-09",10,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2024-10",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2024-11",11,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2024-12",11,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2025-01",27,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2025-02",19,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2025-03",20,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2025-04",25,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2025-05",12,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2025-06",25,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2025-07",28,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","c"],["r","2024-08",7,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",616.97,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",685.86,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",685.86,0,"","Nirocred","k"],["r","2025-10",14,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,1,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,1,"","Nirocred","k"],["r","2026-04",13,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,1,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,1,"","Nirocred","k"],["r","2024-12",10,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","k"],["r","2025-01",8,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,1,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,1,"","Nirocred","k"],["r","2025-10",11,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","k"],["r","2025-11",11,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","k"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","k"],["r","2026-01",11,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","k"],["r","2026-02",11,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","k"],["r","2026-04",11,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","c"],["r","2024-08",9,"RECEITA DE ALIENAÇÃO","MARIA CLARA SANTOS DE MOURA",616.97,0,"","Nirocred","k"],["r","2024-08",13,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",2218.74,1,"","Nirocred","c"],["r","2024-08",13,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",2218.74,1,"","Nirocred","k"],["r","2024-08",13,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",7208.59,1,"","Nirocred","c"],["r","2024-08",13,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",7208.59,1,"","Nirocred","k"],["r","2024-08",13,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",6426.26,1,"","Nirocred","c"],["r","2024-08",13,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",6426.26,1,"","Nirocred","k"],["r","2024-08",13,"RECEITA DA UNID. ONLINE","ECONOMY PALMAS",5181.04,1,"","Nirocred","c"],["r","2024-08",13,"RECEITA DA UNID. ONLINE","ECONOMY PALMAS",5181.04,1,"","Nirocred","k"],["r","2024-08",14,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",15227.12,1,"","Nirocred","c"],["r","2024-08",14,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",15227.12,1,"","Nirocred","k"],["r","2024-08",16,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","k"],["r","2024-09",9,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","k"],["r","2024-10",16,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",678.86,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",678.86,1,"","Nirocred","k"],["r","2024-12",5,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",682.06,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",682.06,1,"","Nirocred","k"],["r","2025-01",9,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",683.06,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",683.06,1,"","Nirocred","k"],["r","2025-03",14,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",689.86,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",689.86,1,"","Nirocred","k"],["r","2025-04",15,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",689.26,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",689.26,1,"","Nirocred","k"],["r","2025-05",15,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",690.06,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",690.06,1,"","Nirocred","k"],["r","2025-06",13,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",690.06,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",690.06,1,"","Nirocred","k"],["r","2025-07",16,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","k"],["r","2025-08",26,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","k"],["r","2025-09",12,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","c"],["r","2024-07",10,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",616.97,1,"","Nirocred","k"],["r","2024-09",16,"RECEITA DE ALIENAÇÃO","LAZARO FRANCISCO ALVES",616.97,1,"","Nirocred","c"],["r","2024-08",19,"RECEITA DE ALIENAÇÃO","LAZARO FRANCISCO ALVES",616.97,1,"","Nirocred","k"],["r","2024-10",14,"RECEITA DE ALIENAÇÃO","LAZARO FRANCISCO ALVES",616.97,1,"","Nirocred","c"],["r","2024-08",19,"RECEITA DE ALIENAÇÃO","LAZARO FRANCISCO ALVES",616.97,1,"","Nirocred","k"],["r","2024-09",16,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",616.97,1,"","Nirocred","k"],["r","2024-10",15,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",616.97,1,"","Nirocred","k"],["r","2024-11",18,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",616.97,1,"","Nirocred","k"],["r","2024-12",23,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",680.06,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",680.06,1,"","Nirocred","k"],["r","2025-01",30,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",681.26,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",681.26,1,"","Nirocred","k"],["r","2025-03",12,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",682.86,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",682.86,1,"","Nirocred","k"],["r","2025-04",8,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",682.26,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",682.26,1,"","Nirocred","k"],["r","2025-05",19,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",684.66,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",684.66,1,"","Nirocred","k"],["r","2025-07",3,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",688.06,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",688.06,1,"","Nirocred","k"],["r","2025-09",9,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",679.26,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",679.26,1,"","Nirocred","k"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",699.04,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",699.04,1,"","Nirocred","k"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",616.97,1,"","Nirocred","k"],["r","2024-09",23,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",679.26,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",679.26,1,"","Nirocred","k"],["r","2024-10",22,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2024-11",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2024-12",23,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2025-01",23,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2025-02",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2025-03",27,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2025-04",29,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2025-05",28,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2025-06",26,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2025-07",28,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2025-08",26,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","c"],["r","2024-08",21,"RECEITA DE ALIENAÇÃO","LINDOMAR FERREIRA LINO",616.97,1,"","Nirocred","k"],["r","2024-09",13,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","k"],["r","2024-10",30,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.34,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.34,1,"","Nirocred","k"],["r","2024-11",8,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","k"],["r","2024-12",6,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","k"],["r","2025-01",10,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","k"],["r","2025-02",11,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","k"],["r","2025-03",7,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","k"],["r","2025-05",12,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.74,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.74,1,"","Nirocred","k"],["r","2025-06",10,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.74,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",173.74,1,"","Nirocred","k"],["r","2025-06",10,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","c"],["r","2024-08",29,"RECEITA DE ALIENAÇÃO","JOSE ROBERTO FERREIRA DOS SANTOS",157.18,1,"","Nirocred","k"],["r","2024-10",22,"RECEITA DE ALIENAÇÃO","LAZARO FRANCISCO ALVES",4935.76,1,"","Nirocred","c"],["r","2024-08",19,"RECEITA DE ALIENAÇÃO","LAZARO FRANCISCO ALVES",4935.76,1,"","Nirocred","k"],["r","2024-11",12,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",2650,1,"","Nirocred","c"],["r","2024-04",4,"RECEITA DE ALIENAÇÃO","POLIANA DUQUE CARDOSO",2650,1,"","Nirocred","k"],["r","2024-11",6,"RECEITA DE ALIENAÇÃO","LAZARO FRANCISCO ALVES",616.97,1,"","Nirocred","c"],["r","2024-08",19,"RECEITA DE ALIENAÇÃO","LAZARO FRANCISCO ALVES",616.97,1,"","Nirocred","k"],["r","2024-11",13,"RECEITA DE ALIENAÇÃO","HERMANO GONSALO RIBEIRO",4489.6,1,"","Nirocred","c"],["r","2024-06",17,"RECEITA DE ALIENAÇÃO","HERMANO GONSALO RIBEIRO",4489.6,1,"","Nirocred","k"],["r","2024-12",11,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",3100,1,"","Nirocred","c"],["r","2024-07",19,"RECEITA DE ALIENAÇÃO","LILIAN DA SILVA CAMELO",3100,1,"","Nirocred","k"],["r","2025-04",4,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",679.86,1,"","Nirocred","c"],["r","2024-07",31,"RECEITA DE ALIENAÇÃO","CESAR COIMBRA DE ARAUJO",679.86,1,"","Nirocred","k"],["r","2025-08",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","c"],["r","2025-07",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","k"],["r","2025-09",5,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","c"],["r","2025-07",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","k"],["r","2025-10",6,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","c"],["r","2025-07",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","k"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","c"],["r","2025-07",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","k"],["r","2025-12",8,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","c"],["r","2025-07",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","k"],["r","2026-01",8,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","c"],["r","2025-07",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",953.02,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",4307.14,1,"","Nirocred","c"],["r","2025-07",7,"RECEITA DE ALIENAÇÃO","Jessica dos santos rio branco",4307.14,1,"","Nirocred","k"],["r","2025-08",5,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2025-09",5,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2025-10",6,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2025-12",8,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2026-01",8,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2026-03",9,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,1,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,0,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,0,"","Nirocred","c"],["r","2025-07",25,"RECEITA DE ALIENAÇÃO","ERICA VALESCA DE OLIVEIRA FRAGA",592.09,0,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1227.7,1,"","Nirocred","c"],["r","2025-08",12,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1227.7,1,"","Nirocred","k"],["r","2025-10",8,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","c"],["r","2025-08",12,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","k"],["r","2025-11",8,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","c"],["r","2025-08",12,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","k"],["r","2025-12",8,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","c"],["r","2025-08",12,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","k"],["r","2026-01",8,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","c"],["r","2025-08",12,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","k"],["r","2026-02",8,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","c"],["r","2025-08",12,"RECEITA DE ALIENAÇÃO","IAGO FELIPE SOUSA LIMA",1106.34,0,"","Nirocred","k"],["r","2025-03",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21536.13,1,"","Nirocred","c"],["r","2025-03",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21536.13,1,"","Nirocred","k"],["r","2025-04",2,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",22635.72,1,"","Nirocred","c"],["r","2025-04",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",22635.72,1,"","Nirocred","k"],["r","2025-05",2,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21972.45,1,"","Nirocred","c"],["r","2025-05",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21972.45,1,"","Nirocred","k"],["r","2025-06",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21907.41,1,"","Nirocred","c"],["r","2025-06",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21907.41,1,"","Nirocred","k"],["r","2025-07",2,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21848.42,1,"","Nirocred","c"],["r","2025-07",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21848.42,1,"","Nirocred","k"],["r","2025-08",19,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",23145.87,1,"","Nirocred","c"],["r","2025-08",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",23145.87,1,"","Nirocred","k"],["r","2025-09",8,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",22049.9,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",22049.9,1,"","Nirocred","k"],["r","2025-10",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",22790.43,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",22790.43,1,"","Nirocred","k"],["r","2025-11",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21943.12,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21943.12,1,"","Nirocred","k"],["r","2025-12",2,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",20058.08,1,"","Nirocred","c"],["r","2025-12",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",20058.08,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21628.29,1,"","Nirocred","c"],["r","2026-01",28,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21628.29,1,"","Nirocred","k"],["r","2025-03",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8358.76,1,"","Nirocred","c"],["r","2025-03",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8358.76,1,"","Nirocred","k"],["r","2025-04",2,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8890.07,1,"","Nirocred","c"],["r","2025-04",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8890.07,1,"","Nirocred","k"],["r","2025-05",2,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8698.29,1,"","Nirocred","c"],["r","2025-05",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8698.29,1,"","Nirocred","k"],["r","2025-06",3,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",9401.61,1,"","Nirocred","c"],["r","2025-06",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",9401.61,1,"","Nirocred","k"],["r","2025-07",2,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8581.15,1,"","Nirocred","c"],["r","2025-07",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8581.15,1,"","Nirocred","k"],["r","2025-08",19,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8313.93,1,"","Nirocred","c"],["r","2025-08",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8313.93,1,"","Nirocred","k"],["r","2025-09",8,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8177.03,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8177.03,1,"","Nirocred","k"],["r","2025-10",3,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8578.51,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8578.51,1,"","Nirocred","k"],["r","2025-11",3,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8249.01,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8249.01,1,"","Nirocred","k"],["r","2025-12",2,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",7543.38,1,"","Nirocred","c"],["r","2025-12",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",7543.38,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8991.34,1,"","Nirocred","c"],["r","2026-01",28,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8991.34,1,"","Nirocred","k"],["r","2025-03",28,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",13203.9,1,"","Nirocred","c"],["r","2025-03",28,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",13203.9,1,"","Nirocred","k"],["r","2025-04",2,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",14485.06,1,"","Nirocred","c"],["r","2025-04",2,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",14485.06,1,"","Nirocred","k"],["r","2025-05",2,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",16146.8,1,"","Nirocred","c"],["r","2025-05",2,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",16146.8,1,"","Nirocred","k"],["r","2025-07",2,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",17546.35,1,"","Nirocred","c"],["r","2025-07",2,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",17546.35,1,"","Nirocred","k"],["r","2025-06",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",17794,1,"","Nirocred","c"],["r","2025-07",28,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",17794,1,"","Nirocred","k"],["r","2025-08",19,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",19388.79,1,"","Nirocred","c"],["r","2025-08",28,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",19388.79,1,"","Nirocred","k"],["r","2025-09",8,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",19826.58,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",19826.58,1,"","Nirocred","k"],["r","2025-10",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",20273.32,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",20273.32,1,"","Nirocred","k"],["r","2025-11",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",22078.19,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",22078.19,1,"","Nirocred","k"],["r","2025-12",2,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",20324.74,1,"","Nirocred","c"],["r","2025-12",28,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",20324.74,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",23097.12,1,"","Nirocred","c"],["r","2026-01",28,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",23097.12,1,"","Nirocred","k"],["r","2025-03",28,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",6559.41,1,"","Nirocred","c"],["r","2025-03",28,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",6559.41,1,"","Nirocred","k"],["r","2025-04",2,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3190.51,1,"","Nirocred","c"],["r","2025-04",2,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3190.51,1,"","Nirocred","k"],["r","2025-05",2,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3468.63,1,"","Nirocred","c"],["r","2025-05",2,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3468.63,1,"","Nirocred","k"],["r","2025-06",3,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3159.6,1,"","Nirocred","c"],["r","2025-06",3,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3159.6,1,"","Nirocred","k"],["r","2025-07",2,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3574.33,1,"","Nirocred","c"],["r","2025-07",2,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3574.33,1,"","Nirocred","k"],["r","2025-08",19,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3609.15,1,"","Nirocred","c"],["r","2025-08",28,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3609.15,1,"","Nirocred","k"],["r","2025-09",8,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3327.54,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3327.54,1,"","Nirocred","k"],["r","2025-10",3,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3187.09,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3187.09,1,"","Nirocred","k"],["r","2025-11",3,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3824.13,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3824.13,1,"","Nirocred","k"],["r","2025-12",2,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3392.72,1,"","Nirocred","c"],["r","2025-12",28,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",3392.72,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4140.49,1,"","Nirocred","c"],["r","2026-01",28,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4140.49,1,"","Nirocred","k"],["r","2025-07",3,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",866.55,1,"","Nirocred","c"],["r","2025-07",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",866.55,1,"","Nirocred","k"],["r","2025-08",19,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",1346.55,1,"","Nirocred","c"],["r","2025-08",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",1346.55,1,"","Nirocred","k"],["r","2025-09",8,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",1328.16,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",1328.16,1,"","Nirocred","k"],["r","2025-10",3,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",1785.04,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",1785.04,1,"","Nirocred","k"],["r","2025-11",3,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2142.63,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2142.63,1,"","Nirocred","k"],["r","2025-12",2,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2050.74,1,"","Nirocred","c"],["r","2025-12",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2050.74,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2442.26,1,"","Nirocred","c"],["r","2026-01",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2442.26,1,"","Nirocred","k"],["r","2026-02",4,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2257.69,1,"","Nirocred","c"],["r","2026-02",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2257.69,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2674.82,1,"","Nirocred","c"],["r","2026-03",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2674.82,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2751.86,1,"","Nirocred","c"],["r","2026-04",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2751.86,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2954.17,1,"","Nirocred","c"],["r","2026-05",8,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",2954.17,1,"","Nirocred","k"],["r","2026-06",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",0.01,0,"","Nirocred","c"],["r","2026-06",28,"RECEITA DA UND. GOIÁS","ECONOMY GOIÁS",0.01,0,"","Nirocred","k"],["r","2025-03",28,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",10672.39,1,"","Nirocred","c"],["r","2025-03",28,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",10672.39,1,"","Nirocred","k"],["r","2025-04",2,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",14485.06,1,"","Nirocred","c"],["r","2025-04",2,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",14485.06,1,"","Nirocred","k"],["r","2025-05",2,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12221.55,1,"","Nirocred","c"],["r","2025-05",2,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12221.55,1,"","Nirocred","k"],["r","2025-06",3,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",11865.03,1,"","Nirocred","c"],["r","2025-06",3,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",11865.03,1,"","Nirocred","k"],["r","2025-07",2,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12796.28,1,"","Nirocred","c"],["r","2025-07",2,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12796.28,1,"","Nirocred","k"],["r","2025-08",19,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12425.27,1,"","Nirocred","c"],["r","2025-08",28,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12425.27,1,"","Nirocred","k"],["r","2025-09",8,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12378.31,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12378.31,1,"","Nirocred","k"],["r","2025-10",3,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12895.96,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12895.96,1,"","Nirocred","k"],["r","2025-11",3,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12177.42,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12177.42,1,"","Nirocred","k"],["r","2025-12",2,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12413.71,1,"","Nirocred","c"],["r","2025-12",28,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12413.71,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",13187.32,1,"","Nirocred","c"],["r","2026-01",28,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",13187.32,1,"","Nirocred","k"],["r","2025-09",5,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",392.15,1,"","Nirocred","c"],["r","2025-08",13,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",392.15,1,"","Nirocred","k"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",392.15,1,"","Nirocred","c"],["r","2025-08",13,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",392.15,1,"","Nirocred","k"],["r","2025-11",10,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",392.15,1,"","Nirocred","c"],["r","2025-08",13,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",392.15,1,"","Nirocred","k"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",392.15,1,"","Nirocred","c"],["r","2025-08",13,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",392.15,1,"","Nirocred","k"],["r","2025-09",5,"RECEITA DE ALIENAÇÃO","NATACHA FREIRE ALVES DA SILVA",516.15,1,"","Nirocred","c"],["r","2025-08",20,"RECEITA DE ALIENAÇÃO","NATACHA FREIRE ALVES DA SILVA",516.15,1,"","Nirocred","k"],["r","2025-10",6,"RECEITA DE ALIENAÇÃO","NATACHA FREIRE ALVES DA SILVA",516,1,"","Nirocred","c"],["r","2025-08",20,"RECEITA DE ALIENAÇÃO","NATACHA FREIRE ALVES DA SILVA",516,1,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","k"],["r","2025-11",11,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","k"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1424.02,1,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1424.02,1,"","Nirocred","k"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","k"],["r","2026-03",18,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","k"],["r","2026-04",17,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,0,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,0,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,0,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,0,"","Nirocred","c"],["r","2025-09",3,"RECEITA DE ALIENAÇÃO","EMANUELE MATOS DOS SANTOS",1294.18,0,"","Nirocred","k"],["r","2025-09",8,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",366.99,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",366.99,1,"","Nirocred","k"],["r","2025-10",3,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",719.37,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",719.37,1,"","Nirocred","k"],["r","2025-11",3,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",781.78,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",781.78,1,"","Nirocred","k"],["r","2025-12",2,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",794.63,1,"","Nirocred","c"],["r","2025-12",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",794.63,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",924.28,1,"","Nirocred","c"],["r","2026-01",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",924.28,1,"","Nirocred","k"],["r","2026-02",4,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",1184.96,1,"","Nirocred","c"],["r","2026-02",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",1184.96,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",1258.37,1,"","Nirocred","c"],["r","2026-03",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",1258.37,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",1656.48,1,"","Nirocred","c"],["r","2026-04",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",1656.48,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",1726.56,1,"","Nirocred","c"],["r","2026-05",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",1726.56,1,"","Nirocred","k"],["r","2026-06",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",0.01,0,"","Nirocred","c"],["r","2026-06",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",0.01,0,"","Nirocred","k"],["r","2026-07",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",0.01,0,"","Nirocred","c"],["r","2026-07",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",0.01,0,"","Nirocred","k"],["r","2026-08",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",0.01,0,"","Nirocred","c"],["r","2026-08",28,"RECEITA DA UND. PARANÁ","ECONOMY PARANA",0.01,0,"","Nirocred","k"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,1,"","Nirocred","k"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,1,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,1,"","Nirocred","k"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1325.85,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1325.85,1,"","Nirocred","k"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1326.65,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1326.65,1,"","Nirocred","k"],["r","2026-04",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1337.45,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1337.45,1,"","Nirocred","k"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1339.05,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1339.05,1,"","Nirocred","k"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1327.45,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1327.45,1,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","LILIANA MELO DE SA TELES",1204.23,0,"","Nirocred","k"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2025-11",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2025-10",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,1,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,1,"","Nirocred","k"],["r","2026-01",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","c"],["r","2025-09",8,"RECEITA DE ALIENAÇÃO","CARLOS EDUARDO LIMA DE MELO",678.75,0,"","Nirocred","k"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","k"],["r","2025-11",12,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","k"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","k"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","k"],["r","2026-03",18,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","k"],["r","2026-04",17,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,0,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,0,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,0,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,0,"","Nirocred","c"],["r","2025-09",11,"RECEITA DE ALIENAÇÃO","IOLETE DOS SANTOS ALMEIDA",1116.65,0,"","Nirocred","k"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",670.2,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",670.2,1,"","Nirocred","k"],["r","2025-11",19,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","k"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","k"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","k"],["r","2026-03",18,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","k"],["r","2026-04",17,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","DIEGO DUARTE BORGES",608.37,0,"","Nirocred","k"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","k"],["r","2025-11",19,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","k"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","k"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","k"],["r","2026-03",20,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1569.25,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1569.25,1,"","Nirocred","k"],["r","2026-04",24,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,1,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,0,"","Nirocred","c"],["r","2025-09",15,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1413.78,0,"","Nirocred","k"],["r","2025-10",6,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","k"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","k"],["r","2025-12",8,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","k"],["r","2026-01",8,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","k"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",257.58,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",257.58,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",347.31,1,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",347.31,1,"","Nirocred","k"],["r","2026-07",6,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,0,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,0,"","Nirocred","k"],["r","2026-08",6,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,0,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,0,"","Nirocred","k"],["r","2026-09",6,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,0,"","Nirocred","c"],["r","2025-09",16,"RECEITA DE ALIENAÇÃO","ANNE GABRIELLE ALMEIDA DE SOUSA",365.11,0,"","Nirocred","k"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,1,"","Nirocred","k"],["r","2026-01",8,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1326.65,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1326.65,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1327.43,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1327.43,1,"","Nirocred","k"],["r","2026-04",8,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1339.69,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1339.69,0,"","Nirocred","k"],["r","2026-02",15,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","k"],["r","2026-03",15,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","FRANCISCO FRAZAO SANTANA",1188.32,0,"","Nirocred","k"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,1,"","Nirocred","k"],["r","2025-11",19,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,1,"","Nirocred","k"],["r","2026-01",2,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",678.76,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",678.76,1,"","Nirocred","k"],["r","2026-03",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",688.76,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",688.76,1,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","k"],["r","2026-03",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","DAMIANA BATISTA DOS SANTOS",615.79,0,"","Nirocred","k"],["r","2025-12",5,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",741.12,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",741.12,1,"","Nirocred","k"],["r","2025-10",31,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,1,"","Nirocred","k"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",743.76,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",743.76,1,"","Nirocred","k"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",742.22,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",742.22,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",742.22,1,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",742.22,1,"","Nirocred","k"],["r","2026-03",20,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","c"],["r","2025-09",17,"RECEITA DE ALIENAÇÃO","ANA CLEA VIEIRA DA SILVA",672.75,0,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","c"],["r","2025-09",18,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","c"],["r","2025-09",18,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","c"],["r","2025-09",18,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","c"],["r","2025-09",18,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","c"],["r","2025-09",18,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","c"],["r","2025-09",18,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",702.97,1,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","k"],["r","2025-11",21,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","k"],["r","2025-12",24,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","k"],["r","2026-01",21,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","k"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","k"],["r","2026-03",17,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","k"],["r","2026-04",27,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","k"],["r","2026-05",14,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,1,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,0,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,0,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,0,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,0,"","Nirocred","c"],["r","2025-09",19,"RECEITA DE ALIENAÇÃO","HEBERT DE BRITO SENNA DIAS",653.35,0,"","Nirocred","k"],["r","2025-10",8,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","k"],["r","2025-11",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","k"],["r","2026-01",28,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",654.8,1,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",654.8,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",657.4,1,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",657.4,1,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","c"],["r","2025-09",22,"RECEITA DE ALIENAÇÃO","WENDEL GONCALVES SIQUEIRA",592.73,0,"","Nirocred","k"],["r","2025-10",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2025-12",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-01",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-04",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","ERIVALDO FRAZAO SILVA",1987.45,0,"","Nirocred","k"],["r","2025-11",4,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1305.68,1,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1305.68,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,1,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,1,"","Nirocred","k"],["r","2026-03",9,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,1,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,1,"","Nirocred","k"],["r","2026-04",14,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1333.08,1,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1333.08,1,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-04",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-04",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-05",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-06",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-07",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-08",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2027-09",25,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","c"],["r","2025-09",24,"RECEITA DE ALIENAÇÃO","KATIUSK KELLINE BRITO DA SILVA",1185.57,0,"","Nirocred","k"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1297.38,1,"","Nirocred","c"],["r","2025-09",25,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1297.38,1,"","Nirocred","k"],["r","2025-12",24,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1297.38,1,"","Nirocred","c"],["r","2025-09",25,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1297.38,1,"","Nirocred","k"],["r","2026-01",21,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1437.43,1,"","Nirocred","c"],["r","2025-09",25,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1437.43,1,"","Nirocred","k"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1297.38,1,"","Nirocred","c"],["r","2025-09",25,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1297.38,1,"","Nirocred","k"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1297.38,1,"","Nirocred","c"],["r","2025-09",25,"RECEITA DE ALIENAÇÃO","ANTONIO FRANCISCO PEIXOTO DE SOUSA",1297.38,1,"","Nirocred","k"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","k"],["r","2025-12",8,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","k"],["r","2026-01",8,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","k"],["r","2026-03",9,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,1,"","Nirocred","k"],["r","2026-06",7,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","k"],["r","2026-07",7,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","k"],["r","2026-08",7,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","k"],["r","2026-09",7,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","k"],["r","2026-10",7,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","JESSYCA LOPES SOUZA",254.8,0,"","Nirocred","k"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","k"],["r","2025-12",8,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","k"],["r","2026-01",8,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","k"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","k"],["r","2026-03",6,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","k"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,1,"","Nirocred","k"],["r","2026-06",7,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","k"],["r","2026-07",7,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","k"],["r","2026-08",7,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","k"],["r","2026-09",7,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","k"],["r","2026-10",7,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","ANNE TALITA SOUSA LIMA",382.2,0,"","Nirocred","k"],["r","2025-10",9,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","k"],["r","2025-11",11,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","k"],["r","2026-01",28,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","k"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","k"],["r","2026-03",12,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","k"],["r","2026-04",17,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","c"],["r","2025-09",26,"RECEITA DE ALIENAÇÃO","SARAH VICTORIA CARVALHO DE SANTANA",649.17,0,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,1,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,1,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,1,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,1,"","Nirocred","k"],["r","2025-12",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-01",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-04",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","c"],["r","2025-09",30,"RECEITA DE ALIENAÇÃO","SAMUEL DOURADO CASTRO NOLETO",994.54,0,"","Nirocred","k"],["r","2025-11",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-02",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-03",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","c"],["r","2025-10",1,"RECEITA DE ALIENAÇÃO","KLEDYSON ROCHA PRAXEDES",309.48,0,"","Nirocred","k"],["r","2025-11",10,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",603.86,1,"","Nirocred","c"],["r","2025-10",2,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",603.86,1,"","Nirocred","k"],["r","2025-12",12,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",603.86,1,"","Nirocred","c"],["r","2025-10",2,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",603.86,1,"","Nirocred","k"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",603.86,1,"","Nirocred","c"],["r","2025-10",2,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",603.86,1,"","Nirocred","k"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",664.44,1,"","Nirocred","c"],["r","2025-10",2,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",664.44,1,"","Nirocred","k"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,1,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,1,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,1,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,1,"","Nirocred","k"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,1,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,1,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,1,"","Nirocred","k"],["r","2026-03",17,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1208.68,1,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1208.68,1,"","Nirocred","k"],["r","2026-04",5,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","c"],["r","2025-10",7,"RECEITA DE ALIENAÇÃO","RONI PEREIRA DA SILVA BATISTA",1096.19,0,"","Nirocred","k"],["r","2025-11",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,1,"","Nirocred","k"],["r","2025-12",18,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1108.45,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1108.45,1,"","Nirocred","k"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1107.13,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1107.13,1,"","Nirocred","k"],["r","2026-02",11,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,1,"","Nirocred","k"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1106.8,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1106.8,1,"","Nirocred","k"],["r","2026-04",17,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1108.12,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1108.12,1,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","ROSANA AMORIM SANTOS",1005.89,0,"","Nirocred","k"],["r","2025-11",21,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",712.46,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",712.46,1,"","Nirocred","k"],["r","2025-12",12,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,1,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",719.6,1,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",719.6,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","c"],["r","2025-10",10,"RECEITA DE ALIENAÇÃO","JARBIANO DAS AVES FREITAS",646.17,0,"","Nirocred","k"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","k"],["r","2025-12",8,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","k"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","k"],["r","2026-03",6,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","k"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","k"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,1,"","Nirocred","k"],["r","2026-06",9,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","k"],["r","2026-07",9,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","k"],["r","2026-08",9,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","k"],["r","2026-09",9,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","k"],["r","2026-10",9,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","LILIAN PINHEIRO CUNHA",370.15,0,"","Nirocred","k"],["r","2025-11",10,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","k"],["r","2025-12",8,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","k"],["r","2026-11",9,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","k"],["r","2026-03",12,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","k"],["r","2026-04",9,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","k"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,1,"","Nirocred","k"],["r","2026-06",9,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","k"],["r","2026-07",9,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","k"],["r","2026-08",9,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","k"],["r","2026-09",9,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","k"],["r","2026-10",9,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","c"],["r","2025-10",13,"RECEITA DE ALIENAÇÃO","GABRIELLE RODRIGUES COSTA",524.39,0,"","Nirocred","k"],["r","2025-10",14,"OUTRAS RECEITAS","CELCOIN - ECONOMY",4537.71,1,"","Nirocred","c"],["r","2025-10",14,"OUTRAS RECEITAS","CELCOIN - ECONOMY",4537.71,1,"","Nirocred","k"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",994.24,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",994.24,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",994.24,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",994.24,1,"","Nirocred","k"],["r","2026-04",16,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",1094.98,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",1094.98,1,"","Nirocred","k"],["r","2025-11",11,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,1,"","Nirocred","k"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,1,"","Nirocred","k"],["r","2026-04",27,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1170.02,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1170.02,1,"","Nirocred","k"],["r","2026-02",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-03",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","ILCILENE DOS SANTOS ALMEIDA NASCIMENTO",1033.37,0,"","Nirocred","k"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","k"],["r","2025-12",16,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","k"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","k"],["r","2026-02",5,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,1,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",760.54,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",760.54,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","LUIS FERNANDO SILVA GOMES",688.69,0,"","Nirocred","k"],["r","2025-11",10,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,1,"","Nirocred","k"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,1,"","Nirocred","k"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,1,"","Nirocred","k"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",828.1,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",828.1,1,"","Nirocred","k"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",828.85,1,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",828.85,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","c"],["r","2025-10",17,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",749.19,0,"","Nirocred","k"],["r","2025-12",24,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,1,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,1,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,1,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,1,"","Nirocred","k"],["r","2026-03",26,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,1,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,1,"","Nirocred","k"],["r","2026-03",20,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","c"],["r","2025-10",22,"RECEITA DE ALIENAÇÃO","ANTONIZETH BARRETO PEIXOTO",574.91,0,"","Nirocred","k"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,1,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,1,"","Nirocred","k"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1418.72,1,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1418.72,1,"","Nirocred","k"],["r","2026-01",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-04",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","c"],["r","2025-10",24,"RECEITA DE ALIENAÇÃO","ALEXANDRO SANTOS GARCES",1259.94,0,"","Nirocred","k"],["r","2025-11",12,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","k"],["r","2025-12",12,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","k"],["r","2026-01",26,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","k"],["r","2026-03",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","k"],["r","2026-04",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",2238.97,1,"","Nirocred","k"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,1,"","Nirocred","k"],["r","2025-12",30,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,1,"","Nirocred","k"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",992.56,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",992.56,1,"","Nirocred","k"],["r","2026-03",9,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",992.26,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",992.26,1,"","Nirocred","k"],["r","2026-04",9,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",993.76,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",993.76,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",992.86,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",992.86,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","NILVA ANA PERINI",899.88,0,"","Nirocred","k"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",809.38,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",809.38,1,"","Nirocred","k"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",809.62,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",809.62,1,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",809.14,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",809.14,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","LUCAS JESUS PORTO",735.15,0,"","Nirocred","k"],["r","2025-11",10,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","k"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,1,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","IVALDO DOS REIS NAZARE",565.4,0,"","Nirocred","k"],["r","2025-11",19,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","k"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","k"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","k"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","k"],["r","2026-03",18,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","RAIMUNDO HENRIQUE DA SILVA BRITO",519.41,0,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","k"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","k"],["r","2026-02",11,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","k"],["r","2026-05",11,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,1,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",1075.5,1,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",1075.5,1,"","Nirocred","k"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","k"],["r","2026-02",11,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","k"],["r","2026-04",14,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,1,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","WEINE MATIAS FERREIRA",976.86,0,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,1,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-02",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-04",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","c"],["r","2025-10",29,"RECEITA DE ALIENAÇÃO","YURE ALVES PAVAO",723.6,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","c"],["r","2025-10",28,"RECEITA DE ALIENAÇÃO","LEANDRO RODRIGUES DA COSTA",539.7,0,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,1,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,1,"","Nirocred","k"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-02",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-04",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","c"],["r","2025-10",30,"RECEITA DE ALIENAÇÃO","FRANCISCA RITA CARNEIRO XAVIER",750.03,0,"","Nirocred","k"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,1,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,1,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",636.29,1,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",636.29,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",569.78,0,"","Nirocred","k"],["r","2025-12",9,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,1,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,1,"","Nirocred","k"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1610.57,1,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1610.57,1,"","Nirocred","k"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1605.29,1,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1605.29,1,"","Nirocred","k"],["r","2026-04",9,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1601.93,1,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1601.93,1,"","Nirocred","k"],["r","2026-05",11,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1602.89,1,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1602.89,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-03",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-04",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-05",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-06",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-07",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-08",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-09",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-10",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2027-11",5,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","c"],["r","2025-11",7,"RECEITA DE ALIENAÇÃO","ANTONIO ALVES DE OLIVEIRA JUNIOR",1441.9,0,"","Nirocred","k"],["r","2025-12",12,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","k"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","k"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","k"],["r","2026-04",23,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",706.7,1,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",706.7,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,1,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","c"],["r","2025-11",13,"RECEITA DE ALIENAÇÃO","LINDAURA PEREIRA DE SOUZA",640.55,0,"","Nirocred","k"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,1,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,1,"","Nirocred","k"],["r","2026-01",28,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",735.87,1,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",735.87,1,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",735.65,1,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",735.65,1,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","c"],["r","2025-11",14,"RECEITA DE ALIENAÇÃO","LEANDRO LEITE PEREIRA",666.18,0,"","Nirocred","k"],["r","2025-12",12,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,1,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,1,"","Nirocred","k"],["r","2026-01",20,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",854.2,1,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",854.2,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","AGNY DE LEMOS SIQUEIRA",775.64,0,"","Nirocred","k"],["r","2025-12",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2231.1,1,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2231.1,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,1,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,1,"","Nirocred","k"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-03",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","c"],["r","2025-11",18,"RECEITA DE ALIENAÇÃO","ROSIANE MEIRELES AZEVEDO",2027.67,0,"","Nirocred","k"],["r","2026-03",2,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,1,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,1,"","Nirocred","k"],["r","2026-03",2,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1271.83,1,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1271.83,1,"","Nirocred","k"],["r","2026-03",2,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1260.43,1,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1260.43,1,"","Nirocred","k"],["r","2026-04",1,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1261.95,1,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1261.95,1,"","Nirocred","k"],["r","2026-04",29,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,1,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","c"],["r","2025-11",24,"RECEITA DE ALIENAÇÃO","ROSANGELA DE SOUSA RODRIGUES",1145.5,0,"","Nirocred","k"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-04",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","c"],["r","2025-11",25,"RECEITA DE ALIENAÇÃO","DIANA RAMOS DE GUSMAO",1110.43,0,"","Nirocred","k"],["r","2025-11",25,"OUTRAS RECEITAS","ECONOMY TAGUATINGA",799.05,1,"","Nirocred","c"],["r","2025-11",25,"OUTRAS RECEITAS","ECONOMY TAGUATINGA",799.05,1,"","Nirocred","k"],["r","2025-12",30,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,1,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,1,"","Nirocred","k"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1189.95,1,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1189.95,1,"","Nirocred","k"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1072.28,1,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1072.28,1,"","Nirocred","k"],["r","2026-04",17,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1016.25,1,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1016.25,1,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1081.12,0,"","Nirocred","k"],["r","2025-11",18,"OUTRAS RECEITAS","CELCOIN INSTITUICAO DE PAGAMENTO S.A",7000,1,"","Nirocred","c"],["r","2025-11",26,"OUTRAS RECEITAS","CELCOIN INSTITUICAO DE PAGAMENTO S.A",7000,1,"","Nirocred","k"],["r","2025-11",18,"OUTRAS RECEITAS","CELCOIN INSTITUICAO DE PAGAMENTO S.A",2000,1,"","Nirocred","c"],["r","2025-11",26,"OUTRAS RECEITAS","CELCOIN INSTITUICAO DE PAGAMENTO S.A",2000,1,"","Nirocred","k"],["r","2025-11",21,"OUTRAS RECEITAS","CELCOIN INSTITUICAO DE PAGAMENTO S.A",569.21,1,"","Nirocred","c"],["r","2025-11",26,"OUTRAS RECEITAS","CELCOIN INSTITUICAO DE PAGAMENTO S.A",569.21,1,"","Nirocred","k"],["r","2025-12",30,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,1,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,1,"","Nirocred","k"],["r","2026-01",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-04",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-04",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-05",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-06",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-07",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-08",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-09",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-10",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2027-11",25,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","c"],["r","2025-11",27,"RECEITA DE ALIENAÇÃO","LEONARDO RAYAN ALMEIDA FERREIRA",743.48,0,"","Nirocred","k"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","k"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","k"],["r","2026-03",12,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","k"],["r","2026-04",14,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","k"],["r","2026-05",11,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,1,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","c"],["r","2025-11",28,"RECEITA DE ALIENAÇÃO","ANDREYSON CRISTIANO ARAUJO DE SOUSA",782.38,0,"","Nirocred","k"],["r","2025-12",4,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",971.21,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",971.21,1,"","Nirocred","k"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,1,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,1,"","Nirocred","k"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,1,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",424.66,1,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",424.66,1,"","Nirocred","k"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",425.02,1,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",425.02,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","c"],["r","2025-12",3,"RECEITA DE ALIENAÇÃO","JOAO FILOMENO BARROS",384.31,0,"","Nirocred","k"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",2842.29,1,"","Nirocred","c"],["r","2025-09",18,"RECEITA DE ALIENAÇÃO","FRANCISCO ANDERSON BRAGA",2842.29,1,"","Nirocred","k"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,1,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,1,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,1,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,1,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",852.45,1,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",852.45,1,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","c"],["r","2025-12",10,"RECEITA DE ALIENAÇÃO","WESLEI RODRIGUES DA COSTA",770.87,0,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,1,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,1,"","Nirocred","k"],["r","2025-12",30,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,1,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,1,"","Nirocred","k"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,1,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,1,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","c"],["r","2025-12",11,"RECEITA DE ALIENAÇÃO","KARINE ANDREIA PEREIRA BRITO",1171.82,0,"","Nirocred","k"],["r","2026-01",26,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",802.52,1,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",802.52,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",805.4,1,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",805.4,1,"","Nirocred","k"],["r","2026-04",22,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",808.52,1,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",808.52,1,"","Nirocred","k"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",807.32,1,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",807.32,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","c"],["r","2025-12",15,"RECEITA DE ALIENAÇÃO","PAULO WANDERSON R DA SILVA",728.04,0,"","Nirocred","k"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","k"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","c"],["r","2025-12",17,"RECEITA DE ALIENAÇÃO","KENNEDY MAGALHAES RABELO",786.71,0,"","Nirocred","k"],["r","2026-01",8,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,1,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,1,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,1,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,1,"","Nirocred","k"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",328.07,1,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",328.07,1,"","Nirocred","k"],["r","2026-05",11,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","k"],["r","2026-06",9,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","k"],["r","2026-07",9,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","k"],["r","2026-08",9,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","k"],["r","2026-09",9,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","k"],["r","2026-10",9,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","k"],["r","2026-11",9,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","k"],["r","2026-12",9,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","c"],["r","2025-12",19,"RECEITA DE ALIENAÇÃO","ARIANE KATLE SILVA SOARES",182.64,0,"","Nirocred","k"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",862.38,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",862.38,1,"","Nirocred","k"],["r","2026-02",9,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,1,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,1,"","Nirocred","k"],["r","2026-03",9,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,1,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,1,"","Nirocred","k"],["r","2026-04",8,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,1,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","c"],["r","2026-01",5,"RECEITA DE ALIENAÇÃO","VALDIMISON ALVES DE SOUZA",617.08,0,"","Nirocred","k"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,1,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,1,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,1,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,1,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,1,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,1,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","c"],["r","2026-01",7,"RECEITA DE ALIENAÇÃO","SILVEIRA REGINA SILVA",617.13,0,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,1,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,1,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","c"],["r","2026-01",9,"RECEITA DE ALIENAÇÃO","LUIS HENRIQUE DE MORAES XAVIER",474.79,0,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,1,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,1,"","Nirocred","k"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",825.21,1,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",825.21,1,"","Nirocred","k"],["r","2026-04",16,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,1,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,1,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2028-01",15,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","c"],["r","2026-01",12,"RECEITA DE ALIENAÇÃO","HEVERSON DE CASSIO RODRIGUES COELHO",749.98,0,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,1,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",920.16,1,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",920.16,1,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","RAFAEL PIRES DOS SANTOS",823.5,0,"","Nirocred","k"],["r","2026-03",12,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",727.92,1,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",727.92,1,"","Nirocred","k"],["r","2026-03",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2028-01",15,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","c"],["r","2026-01",13,"RECEITA DE ALIENAÇÃO","OZIAS HENRIQUE DE SENA",657.93,0,"","Nirocred","k"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,1,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,1,"","Nirocred","k"],["r","2026-04",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2028-01",15,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","JULIO CESAR DOS SANTOS DE JESUS",521.81,0,"","Nirocred","k"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,1,"","Nirocred","k"],["r","2026-03",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","CLEITON MORAES DA SILVA",677.57,0,"","Nirocred","k"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,1,"","Nirocred","k"],["r","2026-03",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2028-01",15,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","LUZINEY PEREIRA MAIA",534.16,0,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,1,"","Nirocred","k"],["r","2026-04",22,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,1,"","Nirocred","k"],["r","2026-04",23,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,1,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","c"],["r","2026-01",14,"RECEITA DE ALIENAÇÃO","MARCELO PORTELA SOUSA",1299.56,0,"","Nirocred","k"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",686.41,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",686.41,0,"","Nirocred","k"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",686.41,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",686.41,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2028-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","TERESA CRISTINA DE CARVALHO SANTOS DE LUCENA",612.56,0,"","Nirocred","k"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",820.14,1,"","Nirocred","c"],["r","2025-10",16,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",820.14,1,"","Nirocred","k"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","k"],["r","2026-03",6,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","k"],["r","2026-04",9,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,1,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","WILLAMES FERREIRA DA SILVA",576.09,0,"","Nirocred","k"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","NATACHA FREIRE ALVES DA SILVA",4047.74,1,"","Nirocred","c"],["r","2025-08",20,"RECEITA DE ALIENAÇÃO","NATACHA FREIRE ALVES DA SILVA",4047.74,1,"","Nirocred","k"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,1,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,1,"","Nirocred","k"],["r","2026-03",18,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,1,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,1,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2028-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","c"],["r","2026-01",15,"RECEITA DE ALIENAÇÃO","JOAO DOS SANTOS DUARTE",504.06,0,"","Nirocred","k"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1285.81,1,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1285.81,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,1,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,1,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","DARLAN DA SILVA SANTOS",1162.36,0,"","Nirocred","k"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",391.87,1,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",391.87,1,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",327.56,1,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",327.56,1,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",340.82,1,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",340.82,1,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-04",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-05",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-06",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-07",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-08",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-09",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-10",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-11",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2027-12",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2028-01",25,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",356.05,0,"","Nirocred","k"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,1,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,1,"","Nirocred","k"],["r","2026-03",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-06",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-07",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-08",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-09",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-10",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-11",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2027-12",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2028-01",20,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","c"],["r","2026-01",19,"RECEITA DE ALIENAÇÃO","JOAO PAULO DO NASCIMENTO NERES",1207.9,0,"","Nirocred","k"],["r","2026-03",12,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",587.59,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",587.59,1,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",587.59,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",587.59,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",647.5,0,"","Nirocred","k"],["r","2026-03",6,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1458.11,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1458.11,1,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,1,"","Nirocred","k"],["r","2026-04",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","CAROLINE DOS SANTOS GOES",1322.76,0,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",455.11,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",455.11,1,"","Nirocred","k"],["r","2026-04",8,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",455.63,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",455.63,1,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",456.02,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",456.02,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,1,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2027-06",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2027-07",20,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","RODRIGO NUNES LELES",413.39,0,"","Nirocred","k"],["r","2026-01",27,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",338.05,1,"","Nirocred","c"],["r","2026-01",16,"RECEITA DE ALIENAÇÃO","IDELMAR BORGES DE OLIVEIRA",338.05,1,"","Nirocred","k"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",416.17,1,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",416.17,1,"","Nirocred","k"],["r","2026-04",9,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",417.49,1,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",417.49,1,"","Nirocred","k"],["r","2026-04",9,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,1,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-04",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-05",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-06",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-07",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-08",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-09",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-10",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-11",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2027-12",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2028-01",25,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIANO CARVALHO DE OLIVEIRA",378.12,0,"","Nirocred","k"],["r","2026-02",26,"RECEITA DE ALIENAÇÃO","FABIO RODRIGUES",2116.1,1,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIO RODRIGUES",2116.1,1,"","Nirocred","k"],["r","2026-03",26,"RECEITA DE ALIENAÇÃO","FABIO RODRIGUES",2116.1,1,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIO RODRIGUES",2116.1,1,"","Nirocred","k"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",934.6,1,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",934.6,1,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",321.71,1,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",321.71,1,"","Nirocred","k"],["r","2026-04",8,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,1,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-06",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-07",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-08",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-09",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-10",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-11",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2027-12",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2028-01",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2028-02",20,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","RODRIGO DE CARVALHO PEREIRA",289.03,0,"","Nirocred","k"],["r","2026-03",6,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,1,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,1,"","Nirocred","k"],["r","2026-04",7,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,1,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,1,"","Nirocred","k"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,1,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,1,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","c"],["r","2026-01",30,"RECEITA DE ALIENAÇÃO","TIPHANNY GEISILANE DE SOUSA AMORIM",466.03,0,"","Nirocred","k"],["r","2026-03",4,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,1,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,1,"","Nirocred","k"],["r","2026-04",23,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,1,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-06",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-07",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-08",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-09",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-10",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-11",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2027-12",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2028-01",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2028-02",20,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ALEXANDRE FERREIRA DE OLIVEIRA",590.22,0,"","Nirocred","k"],["r","2026-02",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",20153.46,1,"","Nirocred","c"],["r","2026-02",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",20153.46,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",21556.04,1,"","Nirocred","c"],["r","2026-03",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",21556.04,1,"","Nirocred","k"],["r","2026-04",2,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",23065.21,1,"","Nirocred","c"],["r","2026-04",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",23065.21,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",23485.55,1,"","Nirocred","c"],["r","2026-05",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",23485.55,1,"","Nirocred","k"],["r","2026-06",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","c"],["r","2026-06",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","k"],["r","2026-07",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","c"],["r","2026-07",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","k"],["r","2026-08",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","c"],["r","2026-08",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","k"],["r","2026-09",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","c"],["r","2026-09",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","k"],["r","2026-10",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","c"],["r","2026-10",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","k"],["r","2026-11",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","c"],["r","2026-11",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","k"],["r","2026-12",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","c"],["r","2026-12",3,"RECEITA DA UNID. CEARÁ","ECONOMY CEARÁ",0.01,0,"","Nirocred","k"],["r","2026-02",4,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",20607.08,1,"","Nirocred","c"],["r","2026-02",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",20607.08,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",19974.22,1,"","Nirocred","c"],["r","2026-03",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",19974.22,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",20802,1,"","Nirocred","c"],["r","2026-04",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",20802,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21425.94,1,"","Nirocred","c"],["r","2026-05",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",21425.94,1,"","Nirocred","k"],["r","2026-06",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","c"],["r","2026-06",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","k"],["r","2026-07",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","c"],["r","2026-07",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","k"],["r","2026-08",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","c"],["r","2026-08",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","k"],["r","2026-09",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","c"],["r","2026-09",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","k"],["r","2026-10",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","c"],["r","2026-10",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","k"],["r","2026-11",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","c"],["r","2026-11",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","k"],["r","2026-12",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","c"],["r","2026-12",3,"RECEITA DA UNID. BRASILIA","ECONOMY BRASILIA",0.01,0,"","Nirocred","k"],["r","2026-02",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8985.16,1,"","Nirocred","c"],["r","2026-02",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8985.16,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8079.82,1,"","Nirocred","c"],["r","2026-03",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",8079.82,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",9381.67,1,"","Nirocred","c"],["r","2026-04",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",9381.67,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",9260.43,1,"","Nirocred","c"],["r","2026-05",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",9260.43,1,"","Nirocred","k"],["r","2026-06",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","c"],["r","2026-06",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","k"],["r","2026-07",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","c"],["r","2026-07",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","k"],["r","2026-08",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","c"],["r","2026-08",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","k"],["r","2026-09",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","c"],["r","2026-09",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","k"],["r","2026-10",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","c"],["r","2026-10",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","k"],["r","2026-11",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","c"],["r","2026-11",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","k"],["r","2026-12",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","c"],["r","2026-12",4,"RECEITA DA UNID. ONLINE","ECONOMY ONLINE",0.01,0,"","Nirocred","k"],["r","2026-02",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4328.36,1,"","Nirocred","c"],["r","2026-02",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4328.36,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4944.67,1,"","Nirocred","c"],["r","2026-03",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4944.67,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4768.49,1,"","Nirocred","c"],["r","2026-04",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4768.49,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4214.12,1,"","Nirocred","c"],["r","2026-05",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",4214.12,1,"","Nirocred","k"],["r","2026-06",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","c"],["r","2026-06",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","k"],["r","2026-07",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","c"],["r","2026-07",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","k"],["r","2026-08",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","c"],["r","2026-08",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","k"],["r","2026-09",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","c"],["r","2026-09",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","k"],["r","2026-10",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","c"],["r","2026-10",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","k"],["r","2026-11",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","c"],["r","2026-11",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","k"],["r","2026-12",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","c"],["r","2026-12",4,"RECEITA DA UNID . PARÁ","ECONOMY PARÁ",0.01,0,"","Nirocred","k"],["r","2026-02",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",11826.8,1,"","Nirocred","c"],["r","2026-02",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",11826.8,1,"","Nirocred","k"],["r","2026-03",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",11717.62,1,"","Nirocred","c"],["r","2026-03",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",11717.62,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",13127.1,1,"","Nirocred","c"],["r","2026-04",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",13127.1,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12905.28,1,"","Nirocred","c"],["r","2026-05",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",12905.28,1,"","Nirocred","k"],["r","2026-06",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","c"],["r","2026-06",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","k"],["r","2026-07",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","c"],["r","2026-07",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","k"],["r","2026-08",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","c"],["r","2026-08",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","k"],["r","2026-09",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","c"],["r","2026-09",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","k"],["r","2026-10",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","c"],["r","2026-10",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","k"],["r","2026-11",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","c"],["r","2026-11",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","k"],["r","2026-12",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","c"],["r","2026-12",4,"RECEITA DA UNID. MARANHÃO","ECONOMY MARANHÃO",0.01,0,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-04",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","c"],["r","2026-02",3,"RECEITA DE ALIENAÇÃO","ANDRE TAVARES DA ROCHA",523.37,0,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-04",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2027-03",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2027-04",5,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","c"],["r","2026-02",4,"RECEITA DE ALIENAÇÃO","THALYTA BERNARDES DE OLIVEIRA MAGALHAES",666.28,0,"","Nirocred","k"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-04",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-03",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-04",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-05",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-06",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-07",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-08",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-09",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-10",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-11",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2027-12",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2028-01",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2028-02",5,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","Maria Julia Neves de Souza",819.11,0,"","Nirocred","k"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,1,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,1,"","Nirocred","k"],["r","2026-04",24,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,1,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-06",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-07",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-08",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-09",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-10",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-11",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2027-12",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2028-01",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2028-02",20,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","c"],["r","2026-02",6,"RECEITA DE ALIENAÇÃO","SIDNEI LOPES DA COSTA",375.09,0,"","Nirocred","k"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",617.85,1,"","Nirocred","c"],["r","2026-01",22,"RECEITA DE ALIENAÇÃO","MARCIA DE SOUZA SANTOS",617.85,1,"","Nirocred","k"],["r","2026-03",6,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,1,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,1,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,1,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,1,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","c"],["r","2026-02",10,"RECEITA DE ALIENAÇÃO","CELIO SANTANA DA SILVA",832.84,0,"","Nirocred","k"],["r","2026-02",10,"OUTRAS RECEITAS","BOLETO AMIGO",165,1,"","Nirocred","c"],["r","2026-02",10,"OUTRAS RECEITAS","BOLETO AMIGO",165,1,"","Nirocred","k"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2028-02",10,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","THAIS DE SOUZA RODRIGUES",519.41,0,"","Nirocred","k"],["r","2026-03",4,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1190.86,1,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1190.86,1,"","Nirocred","k"],["r","2026-04",14,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,1,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,1,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2028-02",10,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","c"],["r","2026-02",12,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",1231.4,0,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,1,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,1,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,1,"","Nirocred","k"],["r","2026-06",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2026-07",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2026-08",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2026-09",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2026-10",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2026-11",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2026-12",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2027-01",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2027-02",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2027-03",9,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","ALEF PEREIRA MARTINS",539.92,0,"","Nirocred","k"],["r","2026-03",12,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,1,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",471.84,1,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",471.84,1,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2028-02",10,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","WELDES DE LIMA SANTANA",425.39,0,"","Nirocred","k"],["r","2026-02",25,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,1,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,1,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2028-02",10,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","c"],["r","2026-02",13,"RECEITA DE ALIENAÇÃO","JOSE CARLOS ALVES RODRIGUES",738.83,0,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1303.15,1,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1303.15,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1301.59,1,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1301.59,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-04",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-05",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-06",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-07",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-08",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-09",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-10",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-11",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2027-12",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2028-01",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2028-02",25,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","HERICON ATAIDE SANTANA",1180.43,0,"","Nirocred","k"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,1,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,1,"","Nirocred","k"],["r","2026-04",27,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,1,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","MARCOS ROBERTH SANTOS ABREU",625.73,0,"","Nirocred","k"],["r","2026-05",6,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",930.42,1,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",930.42,1,"","Nirocred","k"],["r","2026-05",6,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",922.05,1,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",922.05,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","c"],["r","2026-02",19,"RECEITA DE ALIENAÇÃO","ALESSANDRA MATINS XAVIER DE LUCENA",834.3,0,"","Nirocred","k"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,1,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,1,"","Nirocred","k"],["r","2026-04",23,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,1,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2027-06",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","c"],["r","2026-02",20,"RECEITA DE ALIENAÇÃO","FABIO MARCUS SOBRAL FEITOSA DO PRADO DAHER",475.07,0,"","Nirocred","k"],["r","2026-03",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,1,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,1,"","Nirocred","k"],["r","2026-04",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,1,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","c"],["r","2026-02",23,"RECEITA DE ALIENAÇÃO","LUCIANO MAICON GODOI",1461.58,0,"","Nirocred","k"],["r","2026-03",2,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1111.88,1,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1111.88,1,"","Nirocred","k"],["r","2026-03",9,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1057.43,1,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1057.43,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-04",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-05",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-06",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-07",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-08",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-09",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-10",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-11",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2027-12",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2028-01",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2028-02",25,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","c"],["r","2026-02",24,"RECEITA DE ALIENAÇÃO","FRANCISCA DAS CHAGAS SOUSA SANTOS BATISTA",1163.29,0,"","Nirocred","k"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,1,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,1,"","Nirocred","k"],["r","2026-05",8,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",629.36,1,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",629.36,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2027-04",25,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","c"],["r","2026-02",27,"RECEITA DE ALIENAÇÃO","ELIAS BATISTA DE SOUSA FILHO",570.35,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-05",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-06",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-07",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-08",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-09",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-10",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-11",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-12",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-01",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-03",2,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-03",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-04",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-05",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-06",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-07",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-08",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-09",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-10",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-11",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2027-12",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2028-01",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2028-03",1,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2028-03",30,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","WILLIAM DE FRANCA SOUSA",460.71,0,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",720.4,1,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",720.4,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2027-03",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2027-04",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2027-05",5,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","c"],["r","2026-03",3,"RECEITA DE ALIENAÇÃO","LINDOMAR VIEIRA DA COSTA",649.38,0,"","Nirocred","k"],["r","2026-03",11,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",5289.42,1,"","Nirocred","c"],["r","2025-10",2,"RECEITA DE ALIENAÇÃO","JHONATTA ALVES DA SILVA LEITE",5289.42,1,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",596.92,1,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",596.92,1,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2028-02",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2028-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","CRISTIANO DA COSTA FERREIRA",539.57,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2028-02",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2028-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","RUBENS EPAMINONDAS SANTOS",531.05,0,"","Nirocred","k"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,1,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,1,"","Nirocred","k"],["r","2026-05",7,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,1,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,1,"","Nirocred","k"],["r","2026-06",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2026-07",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2026-08",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2026-09",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2026-10",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2026-11",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2026-12",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2027-01",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2027-02",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2027-03",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2027-04",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2027-05",14,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","JEOVA JUVENAL DOS SANTOS",1286.04,0,"","Nirocred","k"],["r","2026-04",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-05",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","c"],["r","2026-03",10,"RECEITA DE ALIENAÇÃO","EDINALDO MAXIMO DOS SANTOS",801.75,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","c"],["r","2024-05",21,"RECEITA DE ALIENAÇÃO","WELLINGTON MONTEIRO DA SILVA",1017.83,0,"","Nirocred","k"],["r","2026-04",8,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",522.38,1,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",522.38,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",518.36,1,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",518.36,1,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-06",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-07",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-08",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-09",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-10",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-11",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2027-12",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2028-01",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2028-02",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2028-03",20,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","c"],["r","2026-03",13,"RECEITA DE ALIENAÇÃO","VITOR MORAES GOMES",531.05,0,"","Nirocred","k"],["r","2026-04",17,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,1,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,1,"","Nirocred","k"],["r","2026-05",13,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,1,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","YEDA VAZ DOS SANTOS",579.96,0,"","Nirocred","k"],["r","2026-04",8,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,1,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","c"],["r","2026-03",16,"RECEITA DE ALIENAÇÃO","WALISON DE ARAUJO SOUZA",1051.05,0,"","Nirocred","k"],["r","2026-04",23,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,1,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,1,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-06",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-07",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-08",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-09",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-10",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-11",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2027-12",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2028-01",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2028-02",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2028-03",20,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","c"],["r","2026-03",19,"RECEITA DE ALIENAÇÃO","CLEANE FURTADO VIVEIROS",759.95,0,"","Nirocred","k"],["r","2026-04",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","c"],["r","2026-03",23,"RECEITA DE ALIENAÇÃO","FRANCISCO DE ASSIS A DA SILVA",521.96,0,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-05",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","c"],["r","2026-03",24,"RECEITA DE ALIENAÇÃO","VAGNER DA SILVA LIMA CONCEICAO",1266.69,0,"","Nirocred","k"],["r","2026-05",6,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1486.62,1,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1486.62,1,"","Nirocred","k"],["r","2026-05",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","c"],["r","2026-03",25,"RECEITA DE ALIENAÇÃO","LEILA VALERIA DO LAGO",1347.88,0,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2027-03",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2027-04",5,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","c"],["r","2026-03",31,"RECEITA DE ALIENAÇÃO","REINEL ANDRES CARDENAS SEPULVEDA",915.02,0,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",1900,1,"","Nirocred","c"],["r","2024-03",4,"RECEITA DE ALIENAÇÃO","CLEIDSON GOLCALVES FLORENCIO",1900,1,"","Nirocred","k"],["r","2026-04",6,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",2405.54,1,"","Nirocred","c"],["r","2025-08",13,"RECEITA DE ALIENAÇÃO","JUNIOR CRUZ DE OLIVEIRA",2405.54,1,"","Nirocred","k"],["r","2026-04",2,"OUTRAS RECEITAS","BOLETO AMIGO",242.08,1,"","Nirocred","c"],["r","2026-04",2,"OUTRAS RECEITAS","BOLETO AMIGO",242.08,1,"","Nirocred","k"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2028-02",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2028-03",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2028-04",10,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",618.18,0,"","Nirocred","k"],["r","2026-04",13,"RECEITA DE ALIENAÇÃO","WELLINGTON RODRIGUES MARTINS",9588.23,1,"","Nirocred","c"],["r","2026-03",5,"RECEITA DE ALIENAÇÃO","WELLINGTON RODRIGUES MARTINS",9588.23,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,1,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2028-01",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2028-02",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2028-03",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2028-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","RAIMUNDA NONATA P CORREA",1303.64,0,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","c"],["r","2026-04",15,"RECEITA DE ALIENAÇÃO","LUIS CLAUDIO FERNANDES",812.57,0,"","Nirocred","k"],["r","2026-05",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2026-06",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2026-07",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2026-08",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2026-09",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2026-10",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2026-11",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2026-12",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2027-01",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2027-03",2,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2027-03",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2027-04",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2027-05",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2027-06",30,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",419.19,0,"","Nirocred","k"],["r","2026-04",29,"OUTRAS RECEITAS","BOLETO AMIGO",200,1,"","Nirocred","c"],["r","2026-04",29,"OUTRAS RECEITAS","BOLETO AMIGO",200,1,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","FABIO RODRIGUES",19558.51,1,"","Nirocred","c"],["r","2026-01",23,"RECEITA DE ALIENAÇÃO","FABIO RODRIGUES",19558.51,1,"","Nirocred","k"],["r","2026-04",30,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",7911.69,1,"","Nirocred","c"],["r","2025-10",27,"RECEITA DE ALIENAÇÃO","PEDRO HENRIQUE MELO DE SOUZA",7911.69,1,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-03",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-04",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-05",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-06",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-07",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-08",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-09",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-10",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-11",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2027-12",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2028-01",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2028-02",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2028-03",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2028-04",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2028-05",5,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","c"],["r","2026-05",4,"RECEITA DE ALIENAÇÃO","ANTONIO JOSE LIMA",724.33,0,"","Nirocred","k"],["r","2026-06",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2026-07",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2026-08",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2026-09",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2026-10",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2026-11",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2026-12",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2027-01",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2027-02",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2027-03",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2027-04",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2027-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","c"],["r","2026-05",5,"RECEITA DE ALIENAÇÃO","EMILIO RIBAS LOPES DA SILVA",1128.89,0,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",715.92,1,"","Nirocred","c"],["r","2026-05",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",715.92,1,"","Nirocred","k"],["r","2026-06",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2026-06",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2026-07",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2026-07",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2026-08",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2026-08",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2026-09",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2026-09",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2026-10",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2026-10",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2026-11",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2026-11",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2026-12",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2026-12",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2027-01",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2027-01",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2027-02",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2027-02",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2027-03",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2027-03",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2027-04",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","c"],["r","2027-04",8,"RECEITA DA UND. REATIVAÇÃO","ECONOMY REATIVAÇÃO",0.01,0,"","Nirocred","k"],["r","2026-05",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",165.99,1,"","Nirocred","c"],["r","2026-05",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",165.99,1,"","Nirocred","k"],["r","2026-06",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2026-06",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2026-07",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2026-07",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2026-08",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2026-08",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2026-09",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2026-09",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2026-10",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2026-10",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2026-11",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2026-11",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2026-12",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2026-12",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2027-01",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2027-01",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2027-02",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2027-02",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2027-03",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2027-03",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2027-04",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","c"],["r","2027-04",8,"RECEITA DA UND. BAHIA","ECONOMY BAHIA",0.01,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-09",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-10",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-11",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2027-12",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2028-01",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2028-02",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2028-03",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2028-04",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2028-05",10,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","GUSTAVO DANTAS MATOS",483.8,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","c"],["r","2026-05",12,"RECEITA DE ALIENAÇÃO","CARLOS AUGUSTO DE JESUS COSTA",1864.73,0,"","Nirocred","k"],["r","2026-05",14,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1061.4,1,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1061.4,1,"","Nirocred","k"],["r","2026-05",15,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1009.41,1,"","Nirocred","c"],["r","2025-11",26,"RECEITA DE ALIENAÇÃO","DOUGLAS DOS SANTOS FRANCA",1009.41,1,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","ROBERTO AUGUSTO FREITAS ALENCAR FILHO",3442.17,0,"","Nirocred","k"],["r","2026-06",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2026-07",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2026-08",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2026-09",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2026-10",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2026-11",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2026-12",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-01",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-02",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-03",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-04",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-05",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-06",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-07",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-08",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-09",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-10",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-11",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2027-12",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2028-01",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2028-02",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2028-03",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2028-04",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2028-05",15,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",973.49,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","c"],["r","2026-05",19,"RECEITA DE ALIENAÇÃO","PEDRO FELIPE ATAIDE LEAL",897.71,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ZAIANE FERREIRA DOS SANTOS",1986.61,0,"","Nirocred","k"],["r","2026-06",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2026-07",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2026-08",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2026-09",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2026-10",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2026-11",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2026-12",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2027-01",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2027-02",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2027-03",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2027-04",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2027-05",20,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","c"],["r","2026-05",21,"RECEITA DE ALIENAÇÃO","ROSEANA DE SOUSA TOMAZ",300.32,0,"","Nirocred","k"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",292.17,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",292.17,0,"","Nirocred","k"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",417.09,0,"","Nirocred","c"],["r","2026-04",28,"RECEITA DE ALIENAÇÃO","SHAULYN FOGACA DE JESUS",417.09,0,"","Nirocred","k"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",943.02,0,"","Nirocred","c"],["r","2026-05",18,"RECEITA DE ALIENAÇÃO","BENTO FRANCISCO RODRIGUES NETO",943.02,0,"","Nirocred","k"],["r","2026-06",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2026-07",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2026-08",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2026-09",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2026-10",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2026-11",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2026-12",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-01",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-02",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-03",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-04",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-05",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-06",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-07",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-08",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-09",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-10",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-11",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2027-12",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2028-01",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2028-02",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2028-03",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2028-04",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2028-05",25,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","c"],["r","2026-05",27,"RECEITA DE ALIENAÇÃO","LEONARDO DA CRUZ CONCEICAO",272.06,0,"","Nirocred","k"],["r","2026-05",28,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",8900,0,"","Nirocred","c"],["r","2026-04",2,"RECEITA DE ALIENAÇÃO","MARIA DO P SOCORRO S L BARBOSA",8900,0,"","Nirocred","k"],["r","2026-06",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",255.21,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",255.21,0,"","Nirocred","k"],["r","2026-07",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2026-08",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2026-09",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2026-10",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2026-11",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2026-12",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2027-01",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2027-02",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2027-03",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2027-04",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2027-05",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2027-06",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2027-07",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["r","2027-08",10,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","c"],["r","2025-11",6,"RECEITA DE ALIENAÇÃO","NAYRO DIEGO DINIZ MIRANDA",408.26,0,"","Nirocred","k"],["d","2024-02",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"EVA BENTA DE SOUZA SAMPAIO","Nirocred","c"],["d","2024-02",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"EVA BENTA DE SOUZA SAMPAIO","Nirocred","k"],["d","2024-02",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"IVETE ALVES PEREIRA","Nirocred","c"],["d","2024-02",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"IVETE ALVES PEREIRA","Nirocred","k"],["d","2024-03",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CLEIDSON GOLCALVES FLORENCIO","Nirocred","c"],["d","2024-03",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CLEIDSON GOLCALVES FLORENCIO","Nirocred","k"],["d","2024-03",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CARLOS LUIZ DA CONCEICAO","Nirocred","c"],["d","2024-03",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CARLOS LUIZ DA CONCEICAO","Nirocred","k"],["d","2024-02",27,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3000,1,"ADALTON DOS SANTOS SILVA","Nirocred","c"],["d","2024-02",27,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3000,1,"ADALTON DOS SANTOS SILVA","Nirocred","k"],["d","2024-03",8,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3000,1,"CLEIDENICE DE SOUSA SILVA","Nirocred","c"],["d","2024-03",7,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3000,1,"CLEIDENICE DE SOUSA SILVA","Nirocred","k"],["d","2024-03",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4000,1,"LUCIANA GOMES DE LIMA","Nirocred","c"],["d","2024-03",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4000,1,"LUCIANA GOMES DE LIMA","Nirocred","k"],["d","2024-03",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"ROSANA AMORIM SANTOS","Nirocred","c"],["d","2024-03",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"ROSANA AMORIM SANTOS","Nirocred","k"],["d","2024-03",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"FELIPE DOS SANTOS JUNIOR","Nirocred","c"],["d","2024-03",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"FELIPE DOS SANTOS JUNIOR","Nirocred","k"],["d","2024-03",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4000,1,"ENIS VERA DA CONCEIÇAO","Nirocred","c"],["d","2024-03",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4000,1,"ENIS VERA DA CONCEIÇAO","Nirocred","k"],["d","2024-03",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"ALAN PEREIRA GOMES","Nirocred","c"],["d","2024-03",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"ALAN PEREIRA GOMES","Nirocred","k"],["d","2024-03",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LUCIANO FLORENTINO BARBOSA","Nirocred","c"],["d","2024-03",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LUCIANO FLORENTINO BARBOSA","Nirocred","k"],["d","2024-03",28,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"MAXIMILIANO MONTEIRO DA SILVA","Nirocred","c"],["d","2024-03",28,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"MAXIMILIANO MONTEIRO DA SILVA","Nirocred","k"],["d","2024-04",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LINDAURA PEREIRA DE SOUZA","Nirocred","c"],["d","2024-04",2,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LINDAURA PEREIRA DE SOUZA","Nirocred","k"],["d","2024-04",5,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"POLIANA DUQUE CARDOSO","Nirocred","c"],["d","2024-04",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"POLIANA DUQUE CARDOSO","Nirocred","k"],["d","2024-04",8,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"MARIA CLEONICE RAMOS CABRAL","Nirocred","c"],["d","2024-04",5,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"MARIA CLEONICE RAMOS CABRAL","Nirocred","k"],["d","2024-04",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"JOSE IVAILTON DE OLIVEIRA FREITAS","Nirocred","c"],["d","2024-04",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"JOSE IVAILTON DE OLIVEIRA FREITAS","Nirocred","k"],["d","2024-04",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LUCAS FERREIRA COSTA","Nirocred","c"],["d","2024-04",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LUCAS FERREIRA COSTA","Nirocred","k"],["d","2024-05",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",2500,1,"MARIANO FOGAÇA SANTANA JUNIOR","Nirocred","c"],["d","2024-05",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",2500,1,"MARIANO FOGAÇA SANTANA JUNIOR","Nirocred","k"],["d","2024-05",7,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CLAUDIA MARIA SANTANA DOS SANTOS","Nirocred","c"],["d","2024-05",7,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CLAUDIA MARIA SANTANA DOS SANTOS","Nirocred","k"],["d","2024-05",7,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"APARECIDA MARTINS DE SANTANA","Nirocred","c"],["d","2024-05",7,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"APARECIDA MARTINS DE SANTANA","Nirocred","k"],["d","2024-05",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3000,1,"RAIMUNDO NONATO DA SILVA","Nirocred","c"],["d","2024-05",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3000,1,"RAIMUNDO NONATO DA SILVA","Nirocred","k"],["d","2024-05",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"WILLIAN NASCIMENTO DA SILVA","Nirocred","c"],["d","2024-05",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"WILLIAN NASCIMENTO DA SILVA","Nirocred","k"],["d","2024-05",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"WELLINGTON MONTEIRO DA SILVA","Nirocred","c"],["d","2024-05",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"WELLINGTON MONTEIRO DA SILVA","Nirocred","k"],["d","2024-05",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"ANTONIZETH BARRETO PEIXOTO","Nirocred","c"],["d","2024-05",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"ANTONIZETH BARRETO PEIXOTO","Nirocred","k"],["d","2024-06",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",1000,1,"JOSE ROBERTO FERREIRA DOS SANTOS","Nirocred","c"],["d","2024-06",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",1000,1,"JOSE ROBERTO FERREIRA DOS SANTOS","Nirocred","k"],["d","2024-06",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"RICARDO GOMES DINIZ","Nirocred","c"],["d","2024-06",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"RICARDO GOMES DINIZ","Nirocred","k"],["d","2024-06",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"HERMANO GONSALO RIBEIRO","Nirocred","c"],["d","2024-06",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"HERMANO GONSALO RIBEIRO","Nirocred","k"],["d","2024-06",13,"EMPRÉSTIMO COM GARANTIA CARTÃO","",880,1,"CLEIDE RODRIGUES DE SOUSA","Nirocred","c"],["d","2024-06",18,"EMPRÉSTIMO COM GARANTIA CARTÃO","",880,1,"CLEIDE RODRIGUES DE SOUSA","Nirocred","k"],["d","2024-06",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"FABIO CORDEIRO DURAES","Nirocred","c"],["d","2024-06",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"FABIO CORDEIRO DURAES","Nirocred","k"],["d","2024-06",26,"COMISSÕES","",100,1,"FELIPE GABRIEL DA SILVA LEITE JORGE","Nirocred","c"],["d","2024-06",24,"COMISSÕES","",100,1,"FELIPE GABRIEL DA SILVA LEITE JORGE","Nirocred","k"],["d","2024-06",28,"COMISSÕES","",100,1,"FELIPE GABRIEL DA SILVA LEITE JORGE","Nirocred","c"],["d","2024-06",26,"COMISSÕES","",100,1,"FELIPE GABRIEL DA SILVA LEITE JORGE","Nirocred","k"],["d","2024-07",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4000,1,"KENNEDY MAGALHAES RABELO","Nirocred","c"],["d","2024-07",8,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4000,1,"KENNEDY MAGALHAES RABELO","Nirocred","k"],["d","2024-07",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"ANTONIO FRANCISCO PEIXOTO DE SOUSA","Nirocred","c"],["d","2024-07",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"ANTONIO FRANCISCO PEIXOTO DE SOUSA","Nirocred","k"],["d","2024-07",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LUCIANO FLORENTINO BARBOSA","Nirocred","c"],["d","2024-07",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LUCIANO FLORENTINO BARBOSA","Nirocred","k"],["d","2024-07",15,"COMISSÕES","",100,1,"MARIA CLARA SANTOS DE MOURA","Nirocred","c"],["d","2024-07",15,"COMISSÕES","",100,1,"MARIA CLARA SANTOS DE MOURA","Nirocred","k"],["d","2024-07",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CAROLINE DOS SANTOS GOES","Nirocred","c"],["d","2024-07",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CAROLINE DOS SANTOS GOES","Nirocred","k"],["d","2024-07",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4000,1,"RAIMUNDO HENRIQUE DA SILVA BRITO","Nirocred","c"],["d","2024-07",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4000,1,"RAIMUNDO HENRIQUE DA SILVA BRITO","Nirocred","k"],["d","2024-07",18,"COMISSÕES","",100,1,"WILLIAN NASCIMENTO DA SILVA","Nirocred","c"],["d","2024-07",16,"COMISSÕES","",100,1,"WILLIAN NASCIMENTO DA SILVA","Nirocred","k"],["d","2024-07",19,"Sem categoria","",20207.41,1,"BANCO SANTANDER","Nirocred","c"],["d","2024-07",19,"Sem categoria","",20207.41,1,"BANCO SANTANDER","Nirocred","k"],["d","2024-07",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3700,1,"LILIAN DA SILVA CAMELO","Nirocred","c"],["d","2024-07",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3700,1,"LILIAN DA SILVA CAMELO","Nirocred","k"],["d","2024-08",1,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CESAR COIMBRA DE ARAUJO","Nirocred","c"],["d","2024-07",31,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CESAR COIMBRA DE ARAUJO","Nirocred","k"],["d","2024-08",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"VALDIMISON ALVES DE SOUZA","Nirocred","c"],["d","2024-08",7,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"VALDIMISON ALVES DE SOUZA","Nirocred","k"],["d","2024-08",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"MARIA CLARA SANTOS DE MOURA","Nirocred","c"],["d","2024-08",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"MARIA CLARA SANTOS DE MOURA","Nirocred","k"],["d","2024-08",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LAZARO FRANCISCO ALVES","Nirocred","c"],["d","2024-08",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LAZARO FRANCISCO ALVES","Nirocred","k"],["d","2024-08",15,"COMISSÕES","",100,1,"ANTONIO FRANCISCO PEIXOTO DE SOUSA","Nirocred","c"],["d","2024-08",15,"COMISSÕES","",100,1,"ANTONIO FRANCISCO PEIXOTO DE SOUSA","Nirocred","k"],["d","2024-08",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CELIO SANTANA DA SILVA","Nirocred","c"],["d","2024-08",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"CELIO SANTANA DA SILVA","Nirocred","k"],["d","2024-08",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LINDOMAR FERREIRA LINO","Nirocred","c"],["d","2024-08",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5000,1,"LINDOMAR FERREIRA LINO","Nirocred","k"],["d","2024-08",26,"COMISSÕES","",100,1,"FELIPE GABRIEL DA SILVA LEITE JORGE","Nirocred","c"],["d","2024-08",26,"COMISSÕES","",100,1,"FELIPE GABRIEL DA SILVA LEITE JORGE","Nirocred","k"],["d","2024-08",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",1000,1,"JOSE ROBERTO FERREIRA DOS SANTOS","Nirocred","c"],["d","2024-08",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",1000,1,"JOSE ROBERTO FERREIRA DOS SANTOS","Nirocred","k"],["d","2024-11",14,"DEVOLUÇÕES DE VENDAS","",616.97,1,"LAZARO FRANCISCO ALVES","Nirocred","c"],["d","2024-11",14,"DEVOLUÇÕES DE VENDAS","",616.97,1,"LAZARO FRANCISCO ALVES","Nirocred","k"],["d","2024-12",16,"CUSTAS COM GRAVAME E ALIENAÇÃO","",351,1,"LILIAN DA SILVA CAMELO","Nirocred","c"],["d","2024-12",16,"CUSTAS COM GRAVAME E ALIENAÇÃO","",351,1,"LILIAN DA SILVA CAMELO","Nirocred","k"],["d","2025-02",19,"OUTRAS DESPESAS","",498,1,"MARCAS E PATENTES EIRELI","Nirocred","c"],["d","2025-02",19,"OUTRAS DESPESAS","",498,1,"MARCAS E PATENTES EIRELI","Nirocred","k"],["d","2025-02",17,"TARIFAS BANCÁRIAS","",5,1,"BANCO BRB","Nirocred","c"],["d","2025-02",21,"TARIFAS BANCÁRIAS","",5,1,"BANCO BRB","Nirocred","k"],["d","2025-04",17,"CUSTAS COM GRAVAME E ALIENAÇÃO","",238,1,"EVA BENTA DE SOUZA SAMPAIO","Nirocred","c"],["d","2025-04",17,"CUSTAS COM GRAVAME E ALIENAÇÃO","",238,1,"EVA BENTA DE SOUZA SAMPAIO","Nirocred","k"],["d","2025-07",3,"CUSTAS COM GRAVAME E ALIENAÇÃO","",368,1,"CESAR COIMBRA DE ARAUJO","Nirocred","c"],["d","2025-07",3,"CUSTAS COM GRAVAME E ALIENAÇÃO","",368,1,"CESAR COIMBRA DE ARAUJO","Nirocred","k"],["d","2025-07",30,"SISTEMAS","",12000,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2025-07",30,"SISTEMAS","",12000,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2025-08",20,"SISTEMAS","",12000,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2025-08",20,"SISTEMAS","",12000,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2025-09",19,"SISTEMAS","",11932.82,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2025-09",20,"SISTEMAS","",11932.82,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2025-10",17,"SISTEMAS","",11265.8,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2025-10",20,"SISTEMAS","",11265.8,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2025-11",18,"SISTEMAS","",11193.06,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2025-11",20,"SISTEMAS","",11193.06,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2025-12",18,"SISTEMAS","",11297.27,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2025-12",20,"SISTEMAS","",11297.27,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2026-01",20,"SISTEMAS","",11739.92,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2026-01",20,"SISTEMAS","",11739.92,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2026-02",20,"SISTEMAS","",11119.8,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2026-02",20,"SISTEMAS","",11119.8,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2026-03",20,"SISTEMAS","",11169.82,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2026-03",20,"SISTEMAS","",11169.82,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2026-04",20,"SISTEMAS","",11413.58,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2026-04",20,"SISTEMAS","",11413.58,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2026-05",25,"SISTEMAS","",11774.59,0,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2026-05",20,"SISTEMAS","",11774.59,0,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2026-06",20,"SISTEMAS","",12000,0,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2026-06",20,"SISTEMAS","",12000,0,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2025-07",7,"EMPRÉSTIMO PESSOAL","",9174.45,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-07",7,"EMPRÉSTIMO PESSOAL","",9174.45,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-07",29,"EMPRÉSTIMO PESSOAL","",5082.47,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-07",29,"EMPRÉSTIMO PESSOAL","",5082.47,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-08",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5446.05,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-08",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5446.05,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-08",13,"EMPRÉSTIMO PESSOAL","",3224.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-08",13,"EMPRÉSTIMO PESSOAL","",3224.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-08",20,"EMPRÉSTIMO PESSOAL","",4834.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-08",20,"EMPRÉSTIMO PESSOAL","",4834.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-08",26,"SISTEMAS","",10000,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","c"],["d","2025-08",25,"SISTEMAS","",10000,1,"CELCOIN INSTITUICAO DE PAGAMENTO S.A","Nirocred","k"],["d","2025-09",1,"CUSTAS COM GRAVAME E ALIENAÇÃO","",368,1,"LUCIANO FLORENTINO BARBOSA","Nirocred","c"],["d","2025-09",1,"CUSTAS COM GRAVAME E ALIENAÇÃO","",368,1,"LUCIANO FLORENTINO BARBOSA","Nirocred","k"],["d","2025-09",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11922.93,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11922.93,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",8,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11203.03,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",8,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11203.03,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",8,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6314.43,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",8,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6314.43,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",9,"CUSTAS COM GRAVAME E ALIENAÇÃO","",368,1,"LINDOMAR FERREIRA LINO","Nirocred","c"],["d","2025-09",9,"CUSTAS COM GRAVAME E ALIENAÇÃO","",368,1,"LINDOMAR FERREIRA LINO","Nirocred","k"],["d","2025-09",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10440.22,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10440.22,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5630.93,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5630.93,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11339.98,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11339.98,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",17,"EMPRÉSTIMO PESSOAL","",3068.02,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",16,"EMPRÉSTIMO PESSOAL","",3068.02,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10849.26,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",17,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10849.26,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5733.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5733.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6246.27,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6246.27,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6551.8,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6551.8,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5937.88,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5937.88,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",24,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6148.44,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",24,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6148.44,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",24,"CUSTAS COM GRAVAME E ALIENAÇÃO","",282,1,"RAPIDO DESPACHANTES","Nirocred","c"],["d","2025-09",24,"CUSTAS COM GRAVAME E ALIENAÇÃO","",282,1,"RAPIDO DESPACHANTES","Nirocred","k"],["d","2025-09",24,"CUSTAS COM GRAVAME E ALIENAÇÃO","",282,1,"RAPIDO DESPACHANTES","Nirocred","c"],["d","2025-09",24,"CUSTAS COM GRAVAME E ALIENAÇÃO","",282,1,"RAPIDO DESPACHANTES","Nirocred","k"],["d","2025-09",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",18117.71,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",18117.71,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",17010.21,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",17010.21,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5790.25,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5790.25,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",26,"EMPRÉSTIMO PESSOAL","",2049.06,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",26,"EMPRÉSTIMO PESSOAL","",2049.06,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-09",26,"EMPRÉSTIMO PESSOAL","",3073.58,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-09",26,"EMPRÉSTIMO PESSOAL","",3073.58,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",1,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5935.87,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",1,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5935.87,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9107.76,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9107.76,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4639.69,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4639.69,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7510.95,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7510.95,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9723.31,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9723.31,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",13,"EMPRÉSTIMO PESSOAL","",3000,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",13,"EMPRÉSTIMO PESSOAL","",3000,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",13,"EMPRÉSTIMO PESSOAL","",4250,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",13,"EMPRÉSTIMO PESSOAL","",4250,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9947.29,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9947.29,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5731.65,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5731.65,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",17,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5084.41,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",17,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5084.41,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",17,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10253.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",17,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10253.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",22,"CUSTAS COM GRAVAME E ALIENAÇÃO","",368,1,"LILIANA MELO DE SA TELES","Nirocred","c"],["d","2025-10",22,"CUSTAS COM GRAVAME E ALIENAÇÃO","",368,1,"LILIANA MELO DE SA TELES","Nirocred","k"],["d","2025-10",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10304.26,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10304.26,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6139.52,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6139.52,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11157.16,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",27,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11157.16,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",27,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5116.7,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",27,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5116.7,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",31,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",17362.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",27,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",17362.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5127.91,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5127.91,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5015.18,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5015.18,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9338.89,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9338.89,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6451.47,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6451.47,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",31,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9962.39,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9962.39,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7079.44,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7079.44,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7700.53,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7700.53,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-10",31,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7319.5,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-10",30,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7319.5,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",18,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",201.96,1,"HOSTGATOR BRASIL LTDA","Nirocred","c"],["d","2025-11",10,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",201.96,1,"HOSTGATOR BRASIL LTDA","Nirocred","k"],["d","2025-11",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5016.99,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5016.99,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",19785.57,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",19785.57,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8760.24,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8760.24,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5934.99,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5934.99,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10714.69,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10714.69,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",27823.46,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",21,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",27823.46,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",27,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",11282.47,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",11282.47,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",28,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9826.71,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9826.71,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",28,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",10666.19,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",10666.19,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-11",28,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",10201.96,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-11",28,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",10201.96,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-12",2,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6861.41,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-12",1,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6861.41,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-12",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5156.55,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-12",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5156.55,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-12",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10500.27,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-12",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10500.27,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-12",5,"OUTRAS DESPESAS","",200,1,"SICOOB ECONOMY 10.869.180/0009-53","Nirocred","c"],["d","2025-12",11,"OUTRAS DESPESAS","",200,1,"SICOOB ECONOMY 10.869.180/0009-53","Nirocred","k"],["d","2025-12",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10242.43,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-12",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10242.43,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-12",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7177.33,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-12",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7177.33,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-12",18,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",10806.14,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-12",18,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",10806.14,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-12",19,"TAXA JUNTA COMERCIAL","",388.91,1,"JUNTA COMERCIAL DF","Nirocred","c"],["d","2025-12",19,"TAXA JUNTA COMERCIAL","",388.91,1,"JUNTA COMERCIAL DF","Nirocred","k"],["d","2025-12",19,"EMPRÉSTIMO PESSOAL","",1534.05,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2025-12",19,"EMPRÉSTIMO PESSOAL","",1534.05,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",6,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5117.38,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",5,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5117.38,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5427,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5427,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6484.92,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6484.92,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10192.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10192.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8101.08,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",14,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8101.08,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8956.37,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8956.37,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6665.45,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6665.45,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7308.03,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",15,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7308.03,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7103.34,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7103.34,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11466.56,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11466.56,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8338.71,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8338.71,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",16,"OUTRAS DESPESAS","",500,1,"NICROCRED - BANCO SICOOB","Nirocred","c"],["d","2026-01",16,"OUTRAS DESPESAS","",500,1,"NICROCRED - BANCO SICOOB","Nirocred","k"],["d","2026-01",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6896.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6896.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5117.29,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5117.29,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10238.85,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10238.85,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4838.77,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4838.77,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2025-01",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",2,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-01",2,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-01",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",8,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",8,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",9,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",9,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",10,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",10,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",17,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",17,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-01",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-01",21,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",21,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",23,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",23,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",30,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-01",30,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-01",31,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-01",31,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-02",5,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",5,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",7,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",7,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",11,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",11,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",12,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",12,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",26,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",26,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",21,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",21,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-02",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-02",19,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",19,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-02",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-02",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",5,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",5,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",5,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-03",5,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-03",7,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",7,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",12,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",12,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",14,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",14,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",24,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",24,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",20,"TARIFAS BANCÁRIAS","",50,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",20,"TARIFAS BANCÁRIAS","",50,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",20,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",20,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",19,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",19,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-03",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-03",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",1,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-04",1,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-04",29,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",29,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",28,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",28,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",25,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",25,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",24,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",24,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",22,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-04",22,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-04",17,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",17,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",16,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",16,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",15,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",15,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",9,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",9,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",8,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",8,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",7,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",7,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-04",3,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-04",3,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",28,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",28,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",22,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",22,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",21,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",21,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-05",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-05",19,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",19,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",15,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",15,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",12,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",12,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",7,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",7,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-05",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-05",2,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-05",2,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-06",30,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-06",30,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-06",26,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",26,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-06",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-06",20,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",20,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",12,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",12,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",9,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",9,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-06",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-06",2,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-06",2,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-07",30,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-07",30,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-07",28,"TARIFAS BANCÁRIAS","",5.18,1,"BANCO SICOOB","Nirocred","c"],["d","2025-07",28,"TARIFAS BANCÁRIAS","",5.18,1,"BANCO SICOOB","Nirocred","k"],["d","2025-07",17,"TARIFAS BANCÁRIAS","",5.18,1,"BANCO SICOOB","Nirocred","c"],["d","2025-07",17,"TARIFAS BANCÁRIAS","",5.18,1,"BANCO SICOOB","Nirocred","k"],["d","2025-07",21,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-07",21,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-07",16,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-07",16,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-07",9,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-07",9,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-07",3,"TARIFAS BANCÁRIAS","",7.77,1,"BANCO SICOOB","Nirocred","c"],["d","2025-07",3,"TARIFAS BANCÁRIAS","",7.77,1,"BANCO SICOOB","Nirocred","k"],["d","2025-08",4,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",4.9,1,"PAGUEVELOZ INSTITUICAO DE PAGAMENTO LTDA","Nirocred","c"],["d","2025-08",2,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",4.9,1,"PAGUEVELOZ INSTITUICAO DE PAGAMENTO LTDA","Nirocred","k"],["d","2025-08",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-08",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-08",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-08",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-08",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-08",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-08",29,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-08",29,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-08",26,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-08",26,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-09",11,"CARTÃO DE CRÉDITO","",29.5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-09",11,"CARTÃO DE CRÉDITO","",29.5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-09",22,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-09",22,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-09",29,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-09",29,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-09",9,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-09",9,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-09",10,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-09",10,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-09",12,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-09",12,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-09",17,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-09",17,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",13,"CARTÃO DE CRÉDITO","",799.05,1,"BANCO SICOOB","Nirocred","c"],["d","2025-10",13,"CARTÃO DE CRÉDITO","",799.05,1,"BANCO SICOOB","Nirocred","k"],["d","2025-10",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-10",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-10",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",8,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",8,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",9,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",9,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",16,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",16,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",17,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",17,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",28,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-10",28,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-10",29,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",29,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",31,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-10",31,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-10",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Nirocred","c"],["d","2025-10",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Nirocred","k"],["d","2025-10",24,"OUTRAS DESPESAS","",200,1,"GERALDO MAGELA DE VASCONCELOS","Nirocred","c"],["d","2025-10",24,"OUTRAS DESPESAS","",200,1,"GERALDO MAGELA DE VASCONCELOS","Nirocred","k"],["d","2025-11",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",6,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",6,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",7,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",7,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",10,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",10,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",11,"CARTÃO DE CRÉDITO","",3537.08,1,"BANCO SICOOB","Nirocred","c"],["d","2025-11",11,"CARTÃO DE CRÉDITO","",3537.08,1,"BANCO SICOOB","Nirocred","k"],["d","2025-11",11,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",11,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",12,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",12,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",19,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",19,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",21,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-11",21,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-11",21,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-11",21,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-11",27,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-11",27,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-11",27,"TARIFAS BANCÁRIAS","",5.18,1,"BANCO SICOOB","Nirocred","c"],["d","2025-11",27,"TARIFAS BANCÁRIAS","",5.18,1,"BANCO SICOOB","Nirocred","k"],["d","2025-12",3,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",3,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",9,"TARIFAS BANCÁRIAS","",23.31,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",9,"TARIFAS BANCÁRIAS","",23.31,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",10,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",10,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",29,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2025-12",29,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2025-12",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",22,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2025-12",22,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2025-12",18,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",18,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",17,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",17,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",16,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",16,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",12,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",12,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",11,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2025-12",11,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2025-12",11,"CARTÃO DE CRÉDITO","",3033.25,1,"BANCO SICOOB","Nirocred","c"],["d","2025-12",11,"CARTÃO DE CRÉDITO","",3033.25,1,"BANCO SICOOB","Nirocred","k"],["d","2026-01",12,"CARTÃO DE CRÉDITO","",862.98,1,"BANCO SICOOB","Nirocred","c"],["d","2026-01",22,"CARTÃO DE CRÉDITO","",862.98,1,"BANCO SICOOB","Nirocred","k"],["d","2026-01",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",16470.61,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",16470.61,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5732.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5732.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",145.97,1,"HOSTGATOR BRASIL LTDA","Nirocred","c"],["d","2026-01",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",145.97,1,"HOSTGATOR BRASIL LTDA","Nirocred","k"],["d","2026-01",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11671.31,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11671.31,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4828.33,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4828.33,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5147.36,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5147.36,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",20816.72,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-01",26,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",20816.72,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",2,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",77.98,1,"HOSTGATOR BRASIL LTDA","Nirocred","c"],["d","2026-02",2,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",77.98,1,"HOSTGATOR BRASIL LTDA","Nirocred","k"],["d","2026-02",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3912.54,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3912.54,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4095.71,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",3,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4095.71,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4607.31,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4607.31,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",5,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",76,1,"REGISTRO.BR","Nirocred","c"],["d","2026-02",5,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",76,1,"REGISTRO.BR","Nirocred","k"],["d","2026-02",5,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8029.71,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",5,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8029.71,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",7,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",7,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",8,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",8,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",9,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",9,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB ECONOMY 10.869.180/0009-53","Nirocred","c"],["d","2026-01",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB ECONOMY 10.869.180/0009-53","Nirocred","k"],["d","2026-01",26,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2026-01",26,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2026-01",30,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",30,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",28,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",28,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",12,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",12,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",14,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",14,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",15,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",15,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",19,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",19,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",20,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",20,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",21,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",21,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-01",26,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-01",26,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",6,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6562.23,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",6,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6562.23,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11218.54,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",9,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",11218.54,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5145.83,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5145.83,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-01",12,"OUTRAS DESPESAS","",165,1,"MARIA EDUARDA ANACLETO","Nirocred","c"],["d","2026-01",12,"OUTRAS DESPESAS","",165,1,"MARIA EDUARDA ANACLETO","Nirocred","k"],["d","2026-02",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8202.81,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8202.81,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7102.03,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7102.03,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",13,"EMPRÉSTIMO PESSOAL","",5132.33,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",13,"EMPRÉSTIMO PESSOAL","",5132.33,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",16978.48,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",16978.48,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5865.29,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5865.29,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10187.09,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10187.09,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",16059.38,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",16059.38,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",20,"PAGAMENTO DE EMPRÉSTIMO","",6152.56,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",20,"PAGAMENTO DE EMPRÉSTIMO","",6152.56,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8203.42,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8203.42,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5132.22,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5132.22,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",25,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",12996.4,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",25,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",12996.4,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",15852.64,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",25,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",15852.64,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",27,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5432.8,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-02",27,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5432.8,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6179.47,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6179.47,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",5,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6358.92,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",4,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6358.92,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-02",3,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",3,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",4,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",4,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",6,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",6,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",9,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",9,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",10,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",10,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",11,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",11,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",11,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2026-02",11,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2026-02",12,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",12,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",13,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",13,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",20,"TARIFAS BANCÁRIAS","",23.31,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",20,"TARIFAS BANCÁRIAS","",23.31,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",24,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",24,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",25,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",25,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",25,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2026-02",25,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2026-02",26,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",26,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-02",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-02",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",6,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9265.88,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",6,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9265.88,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7310.16,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",10,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7310.16,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7206.79,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7206.79,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",12614.3,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",11,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",12614.3,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7064.38,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",12,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7064.38,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",16,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",120,1,"GUILHERME PENHA DOS REIS","Nirocred","c"],["d","2026-03",16,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",120,1,"GUILHERME PENHA DOS REIS","Nirocred","k"],["d","2026-03",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7206.79,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7206.79,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5118.67,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",5118.67,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10257.74,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",18,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10257.74,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10295.96,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",10295.96,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4606.81,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",23,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4606.81,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",25,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",12508,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",25,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",12508,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",11876.34,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",11876.34,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-04",2,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7989.18,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-03",31,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7989.18,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-03",2,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",2,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",3,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",3,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",4,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",4,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",5,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",5,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",6,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",6,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",9,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",9,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",11,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",11,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",12,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",12,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",17,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",17,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",18,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",18,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",19,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",19,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",20,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",20,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2026-03",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2026-03",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",25,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",25,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",26,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",26,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",27,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2026-03",27,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2026-03",31,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-03",31,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-03",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",248.08,1,"MARTE DECORA","Nirocred","c"],["d","2026-03",26,"EMPRESAS PRESTADORAS DE SERVIÇOS A ECONOMY","",248.08,1,"MARTE DECORA","Nirocred","k"],["d","2026-04",2,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8340.69,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-04",2,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",8340.69,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-04",6,"CUSTAS COM GRAVAME E ALIENAÇÃO","",3392,1,"RAPIDO DESPACHANTES","Nirocred","c"],["d","2026-04",6,"CUSTAS COM GRAVAME E ALIENAÇÃO","",3392,1,"RAPIDO DESPACHANTES","Nirocred","k"],["d","2026-04",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",17707.41,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-04",16,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",17707.41,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-04",17,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7166.33,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-04",17,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7166.33,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-04",24,"SISTEMAS","",2225.4,1,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-04",24,"SISTEMAS","",2225.4,1,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-05",24,"SISTEMAS","",1164,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-05",24,"SISTEMAS","",1164,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-06",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-06",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-07",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-07",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-08",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-08",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-09",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-09",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-10",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-10",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-11",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-11",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-12",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2026-12",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2027-01",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2027-01",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2027-02",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2027-02",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2027-03",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","c"],["d","2027-03",24,"SISTEMAS","",2225.4,0,"AUTOVIST SOLUÇÕES TECNOLOGICAS DE ANÁLISE DE RISCO","Nirocred","k"],["d","2026-04",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-04",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-05",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-05",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-06",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-06",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-07",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-07",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-08",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-08",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-09",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-09",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-10",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-10",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-11",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-11",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-12",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2026-12",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2027-01",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2027-01",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2027-02",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2027-02",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2027-03",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","c"],["d","2027-03",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Nirocred","k"],["d","2026-04",27,"CUSTAS COM GRAVAME E ALIENAÇÃO","",848,1,"RAPIDO DESPACHANTES","Nirocred","c"],["d","2026-04",27,"CUSTAS COM GRAVAME E ALIENAÇÃO","",848,1,"RAPIDO DESPACHANTES","Nirocred","k"],["d","2026-04",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4102.56,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-04",29,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",4102.56,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-04",14,"OUTRAS DESPESAS","",200,1,"FRANCISCO NADSON MENDES PEREIRA","Nirocred","c"],["d","2026-04",14,"OUTRAS DESPESAS","",200,1,"FRANCISCO NADSON MENDES PEREIRA","Nirocred","k"],["d","2026-05",5,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9262.98,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",5,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9262.98,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-04",1,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",1,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",6,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",6,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",8,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",8,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",10,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",10,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",14,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",14,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",15,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",15,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",17,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",17,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",20,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",20,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","c"],["d","2026-04",20,"TARIFAS BANCÁRIAS","",50,1,"BANCO SICOOB","Nirocred","k"],["d","2026-04",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",23,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",23,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",27,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",27,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",27,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","c"],["d","2026-04",27,"TARIFAS BANCÁRIAS","",5,1,"BANCO SICOOB","Nirocred","k"],["d","2026-04",29,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",29,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-04",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","c"],["d","2026-04",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG PJBANK","Nirocred","k"],["d","2026-05",6,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9931.84,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",6,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",9931.84,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-05",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",18354.53,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",18354.53,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-05",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6588.32,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",13,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",6588.32,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-05",19,"CUSTAS COM GRAVAME E ALIENAÇÃO","",750,0,"ANTONIO FRANCISCO PEIXOTO DE SOUSA","Nirocred","c"],["d","2026-05",18,"CUSTAS COM GRAVAME E ALIENAÇÃO","",750,0,"ANTONIO FRANCISCO PEIXOTO DE SOUSA","Nirocred","k"],["d","2026-05",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",33937.93,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",33937.93,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-05",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",13278.82,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",19,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",13278.82,1,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-05",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7884.7,0,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",20,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",7884.7,0,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-05",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",17507.23,0,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",17507.23,0,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-05",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",2559.1,0,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",22,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",2559.1,0,"CELCOIN - ECONOMY","Nirocred","k"],["d","2026-05",28,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3498.77,1,"CELCOIN - ECONOMY","Nirocred","c"],["d","2026-05",28,"EMPRÉSTIMO GARANTIA AUTOMÓVEL","",3498.77,1,"CELCOIN - ECONOMY","Nirocred","k"]];

const REF_YEAR = 2026;
const AVAILABLE_YEARS = [2028,2027,2026,2025,2024];

// aggregateTx: recomputa MONTH_DATA, KPIS, top categorias/clientes/fornecedores
// e EXTRATO a partir de uma lista filtrada de transacoes. Chamada pelas Pages
// quando drilldown ou statusFilter estao ativos.
function aggregateTx(txList, year) {
  year = year || REF_YEAR;
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const MONTH_DATA = months.map(m => ({ m, receita: 0, despesa: 0 }));
  const RECEITA_DIA = Array(31).fill(0);
  const DESPESA_DIA = Array(31).fill(0);
  const recCat = new Map(), despCat = new Map();
  const recCli = new Map(), despForn = new Map();
  const extratoArr = [];
  const extratoRecArr = [], extratoDespArr = [];
  let totalReceita = 0, totalDespesa = 0;

  for (const row of txList) {
    const [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, cc] = row;
    if (!mes) continue;
    const ymonth = mes.slice(0,4);
    if (Number(ymonth) !== year) continue;
    const mIdx = parseInt(mes.slice(5,7), 10) - 1;
    if (mIdx < 0 || mIdx > 11) continue;
    if (kind === 'r') {
      MONTH_DATA[mIdx].receita += valor;
      totalReceita += valor;
      recCat.set(categoria, (recCat.get(categoria) || 0) + valor);
      if (cliente) recCli.set(cliente, (recCli.get(cliente) || 0) + valor);
      if (dia >= 1 && dia <= 31) RECEITA_DIA[dia - 1] += valor;
    } else {
      MONTH_DATA[mIdx].despesa += valor;
      totalDespesa += valor;
      despCat.set(categoria, (despCat.get(categoria) || 0) + valor);
      if (fornecedor) despForn.set(fornecedor, (despForn.get(fornecedor) || 0) + valor);
      if (dia >= 1 && dia <= 31) DESPESA_DIA[dia - 1] += valor;
    }
    // Extrato compacto pra tabela (renomeado pra extRow porque outer for já usa 'row')
    const dataStr = String(dia).padStart(2,'0') + '/' + mes.slice(5,7) + '/' + mes.slice(0,4);
    const extRow = [dataStr, cc || 'Operações', categoria, kind === 'r' ? cliente : fornecedor, kind === 'r' ? valor : -valor, realizado ? 'PAGO' : ''];
    extratoArr.push(extRow);
    if (kind === 'r') extratoRecArr.push(extRow); else extratoDespArr.push(extRow);
  }

  // sort por data desc (string DD/MM/YYYY → Date) — aplica nos 3 arrays
  const sortByDateDesc = (a, b) => {
    const [da,ma,ya] = a[0].split('/').map(Number);
    const [db,mb,yb] = b[0].split('/').map(Number);
    return new Date(yb,mb-1,db) - new Date(ya,ma-1,da);
  };
  extratoArr.sort(sortByDateDesc);
  extratoRecArr.sort(sortByDateDesc);
  extratoDespArr.sort(sortByDateDesc);

  const topN = (mp, n) => Array.from(mp.entries()).map(([name,value]) => ({name,value})).sort((a,b)=>b.value-a.value).slice(0,n);
  const VALOR_LIQUIDO = totalReceita - totalDespesa;
  const MARGEM_LIQUIDA = totalReceita > 0 ? (VALOR_LIQUIDO / totalReceita) * 100 : 0;

  // Saldos acumulados por mês
  const SALDOS_MES = [];
  var _saldo = 0;
  for (var _si = 0; _si < MONTH_DATA.length; _si++) {
    _saldo += MONTH_DATA[_si].receita - MONTH_DATA[_si].despesa;
    SALDOS_MES.push(_saldo);
  }

  return {
    MONTH_DATA,
    RECEITA_CATEGORIAS: topN(recCat, 12),
    DESPESA_CATEGORIAS: topN(despCat, 12),
    RECEITA_CLIENTES: topN(recCli, 12),
    DESPESA_FORNECEDORES: topN(despForn, 12),
    EXTRATO: extratoArr.slice(0, 200),
    EXTRATO_RECEITAS: extratoRecArr.slice(0, 200),
    EXTRATO_DESPESAS: extratoDespArr.slice(0, 200),
    RECEITA_DIA: RECEITA_DIA,
    DESPESA_DIA: DESPESA_DIA,
    SALDOS_MES: SALDOS_MES,
    KPIS: {
      TOTAL_RECEITA: totalReceita,
      TOTAL_DESPESA: totalDespesa,
      VALOR_LIQUIDO,
      MARGEM_LIQUIDA,
      VALOR_LIQ_SERIES: MONTH_DATA.map(m => m.receita - m.despesa),
    },
  };
}

// applyDrilldown: filtra ALL_TX baseado em statusFilter + drilldown + regime.
// statusFilter: 'realizado' | 'a_pagar_receber' | 'tudo'
// drilldown: null | { type: 'mes'|'categoria'|'cliente'|'fornecedor', value: ... }
// regime: 'caixa' | 'competencia' | null (null = caixa default)
function filterTx(allTx, statusFilter, drilldown, regime, extraFilters) {
  let out = allTx;
  // Filtro por regime (caixa/competencia) — index [9]: 'c' ou 'k'
  var rg = (regime === 'competencia') ? 'k' : 'c';
  out = out.filter(r => r[9] === rg);
  if (statusFilter === 'realizado') out = out.filter(r => r[6] === 1);
  else if (statusFilter === 'a_pagar_receber') out = out.filter(r => r[6] === 0);
  if (drilldown) {
    if (drilldown.type === 'mes') out = out.filter(r => r[1] === drilldown.value);
    else if (drilldown.type === 'categoria') out = out.filter(r => r[3] === drilldown.value);
    else if (drilldown.type === 'cliente') out = out.filter(r => r[0] === 'r' && r[4] === drilldown.value);
    else if (drilldown.type === 'fornecedor') out = out.filter(r => r[0] === 'd' && r[7] === drilldown.value);
    else if (drilldown.type === 'dia') out = out.filter(r => r[2] === drilldown.value + 1);
  }
  // Extra filters: dateFrom, dateTo, categoria
  if (extraFilters) {
    if (extraFilters.dateFrom) {
      // dateFrom format: "YYYY-MM-DD"
      var dfYm = extraFilters.dateFrom.slice(0, 7); // "YYYY-MM"
      var dfDay = parseInt(extraFilters.dateFrom.slice(8, 10), 10);
      out = out.filter(function(r) {
        if (r[1] > dfYm) return true;
        if (r[1] < dfYm) return false;
        return r[2] >= dfDay;
      });
    }
    if (extraFilters.dateTo) {
      var dtYm = extraFilters.dateTo.slice(0, 7);
      var dtDay = parseInt(extraFilters.dateTo.slice(8, 10), 10);
      out = out.filter(function(r) {
        if (r[1] < dtYm) return true;
        if (r[1] > dtYm) return false;
        return r[2] <= dtDay;
      });
    }
    if (extraFilters.categoria && extraFilters.categoria !== "Todas categorias") {
      out = out.filter(function(r) { return r[3] === extraFilters.categoria; });
    }
    if (extraFilters.diaFrom && extraFilters.diaFrom > 0) {
      out = out.filter(function(r) { return r[2] >= extraFilters.diaFrom; });
    }
    if (extraFilters.diaTo && extraFilters.diaTo > 0) {
      out = out.filter(function(r) { return r[2] <= extraFilters.diaTo; });
    }
    if (extraFilters.empresa && extraFilters.empresa !== "Todas empresas") {
      out = out.filter(function(r) { return r[8] === extraFilters.empresa; });
    }
  }
  return out;
}

// Sintetiza um BIT "flat" baseado no filtro escolhido (window.BIT_FILTER).
// Default: 'realizado' (PAGO).
function _makeBit(filter) {
  const seg = SEGMENTS[filter] || SEGMENTS.realizado;
  const K = seg.KPIS;
  const indicadores = {
    TOTAL_RECEITA: K.TOTAL_RECEITA,
    TOTAL_DESPESA: K.TOTAL_DESPESA,
    VALOR_LIQUIDO: K.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: K.MARGEM_LIQUIDA,
    IMPOSTOS: 0,
    EBITDA: K.VALOR_LIQUIDO,
    RESULTADO_OPERACIONAL: K.VALOR_LIQUIDO,
    CAPEX: 0,
    MARGEM_CONTRIB: K.MARGEM_LIQUIDA,
    EBITDA_PCT: K.MARGEM_LIQUIDA,
    IMPOSTOS_PCT: 0,
  };
  return Object.assign({
    META, POSICAO_CAIXA, COMPOSICAO_DESPESA,
    MONTHS, MONTHS_FULL, fmt, fmtK, fmtPct,
    SEGMENTS,
    MONTH_DATA: seg.MONTH_DATA,
    RECEITA_CATEGORIAS: seg.RECEITA_CATEGORIAS,
    DESPESA_CATEGORIAS: seg.DESPESA_CATEGORIAS,
    RECEITA_CLIENTES: seg.RECEITA_CLIENTES,
    DESPESA_FORNECEDORES: seg.DESPESA_FORNECEDORES,
    EXTRATO: seg.EXTRATO,
    DIAS: Array.from({ length: 31 }, (_, i) => i + 1),
    RECEITA_DIA: seg.RECEITA_DIA,
    DESPESA_DIA: seg.DESPESA_DIA,
    SALDOS_MES: seg.SALDOS_MES,
    VALOR_LIQ_SERIES: K.VALOR_LIQ_SERIES,
    FLUXO_RECEITA: seg.FLUXO_RECEITA,
    FLUXO_DESPESA: seg.FLUXO_DESPESA,
    COMP_DATA: seg.COMP_DATA,
    RECDESP_AREA: seg.MONTH_DATA.map(m => ({ m: m.m.slice(0,3), receita: m.receita, despesa: m.despesa })),
  }, indicadores);
}

window.BIT = _makeBit(window.BIT_FILTER || 'realizado');
window._makeBit = _makeBit;
window.BIT_SEGMENTS = SEGMENTS;
window.BIT_META = META;
window.ALL_TX = ALL_TX;
window.REF_YEAR = REF_YEAR;
window.AVAILABLE_YEARS = AVAILABLE_YEARS;
window.aggregateTx = aggregateTx;
window.filterTx = filterTx;
window.getBit = function (statusFilter, drilldown, year, month, regime, extraFilters) {
  const sf = statusFilter || window.BIT_FILTER || 'realizado';
  const y = year || window.REF_YEAR;
  let dd = drilldown;
  if (!dd && month && month >= 1 && month <= 12) {
    const mm = String(month).padStart(2, '0');
    const ym = y + '-' + mm;
    dd = { type: 'mes', value: ym, label: ym };
  }
  return window.recomputeBit(sf, dd, y, regime, extraFilters);
};
// Cross-filter helper: combina statusFilter + drilldown + regime e retorna BIT-like
// com KPIs/charts/extrato recalculados em ~10ms (17k rows).
window.recomputeBit = function (statusFilter, drilldown, year, regime, extraFilters) {
  const filtered = filterTx(ALL_TX, statusFilter, drilldown, regime || 'caixa', extraFilters);
  const agg = aggregateTx(filtered, year || REF_YEAR);
  // Mescla com BIT base pra preservar META, helpers (fmt, fmtK), MONTHS etc.
  const base = window.BIT || {};
  return Object.assign({}, base, agg, {
    TOTAL_RECEITA: agg.KPIS.TOTAL_RECEITA,
    TOTAL_DESPESA: agg.KPIS.TOTAL_DESPESA,
    VALOR_LIQUIDO: agg.KPIS.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: agg.KPIS.MARGEM_LIQUIDA,
  });
};
window.BIT_ORCAMENTO = [];
