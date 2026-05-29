module.exports = {
  cliente: {
    nome: "Nirocred",
    subdomain: "nirocred-bi",
    coolify_app_uuid: "ej25g67yp4mhjvrqmcrsdpew",
    cor_primaria: "#8b5cf6",
  },
  fontes: {
    adapters: ["nirocred-xlsx"],
    nirocred_xlsx: {
      files: ["Nirocred - Caixa Real.xlsx"],
      vendas_path: "G:/Meu Drive/BGP/CLIENTES/BI/450.  ECONOMY ASSESSORIA/BASES/Vendas",
      vendas_files: [
        "Economy Brasília - Vendas - 2025_a_2026.xlsx",
        "Nirocred - Vendas e Cancelamentos.xlsx",
      ],
      vendedores_file: "Economy Brasilia - Dimensao Vendedores.xlsx",
      cancelamentos_file: "G:/Meu Drive/BGP/CLIENTES/BI/450.  ECONOMY ASSESSORIA/BASES/Cancelamentos Vendas/CONSOLIDADO - Cancelamentos Vendas.xlsx",
      empresa_filter: "Nirocred",
    },
    drive: {
      base_path: "G:/Meu Drive/BGP/CLIENTES/BI/450.  ECONOMY ASSESSORIA/BASES/Por Empresa v2",
    },
  },
  pages: {
    geral: {
      overview: "active", receita: "active", despesa: "active",
      fluxo: "active", tesouraria: "active", comparativo: "active",
      relatorio: "active", valuation: "hidden", orcamento: "hidden", dre: "hidden",
    },
    outros: {
      indicators: "hidden", faturamento_produto: "hidden", curva_abc: "hidden",
      marketing: "hidden", hierarquia: "hidden", detalhado: "hidden",
      profunda_cliente: "hidden", crm: "hidden",
      consolidado: "active", vendas: "active", cancelamentos: "active",
    },
  },
  meta: { ano_corrente: 2026, metas_crm: { mes: 0, ano: 0 }, valuation_premissas: { wacc: 25, growth_year2: 20, growth_year3: 20, ipca: 4.5, perpetuity_growth: 10 } },
  template: { version_when_created: "1.0.0", version_last_synced: "1.0.0" },
};
