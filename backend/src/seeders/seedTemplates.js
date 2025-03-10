const Template = require("../models/Templates");

const templates = [
  {
    name: "Contrato de Prestação de Serviços",
    content: `
CONTRATO DE PRESTAÇÃO DE SERVIÇOS

Entre as partes:

CONTRATANTE: [Nome do Contratante], [Nacionalidade], [Estado Civil], [Profissão], portador do documento de identidade nº [RG] e CPF nº [CPF], residente e domiciliado na [Endereço Completo].

CONTRATADO: [Nome do Contratado], [Nacionalidade], [Estado Civil], [Profissão], portador do documento de identidade nº [RG] e CPF nº [CPF], residente e domiciliado na [Endereço Completo].

As partes acima identificadas têm, entre si, justo e acertado o presente contrato de prestação de serviços, que se regerá pelas cláusulas seguintes:

1. DO OBJETO
O presente contrato tem por objeto a prestação de serviços de [Descrição dos Serviços] pelo CONTRATADO ao CONTRATANTE.

2. DO PRAZO
O contrato terá a duração de [Prazo], iniciando-se em [Data de Início] e terminando em [Data de Término].

3. DO VALOR E FORMA DE PAGAMENTO
O valor total dos serviços é de R$ [Valor], a ser pago em [Número de Parcelas] parcelas mensais e consecutivas, no valor de R$ [Valor da Parcela] cada, vencendo a primeira parcela em [Data do Primeiro Vencimento].

4. DAS OBRIGAÇÕES DAS PARTES
4.1. O CONTRATADO se obriga a prestar os serviços com diligência e eficiência, em conformidade com as especificações acordadas.
4.2. O CONTRATANTE se obriga a fornecer todas as informações e materiais necessários para a execução dos serviços.

5. DA RESCISÃO
O presente contrato poderá ser rescindido por qualquer das partes, mediante comunicação por escrito com antecedência mínima de [Número de Dias] dias.

6. DO FORO
Para dirimir quaisquer controvérsias decorrentes do presente contrato, as partes elegem o foro da comarca de [Cidade/Estado].

E, por estarem assim justos e contratados, firmam o presente contrato em duas vias de igual teor, para que produza os seus efeitos legais.

[Nome do Contratante]
Assinatura: _________________________

[Nome do Contratado]
Assinatura: _________________________

[Local e Data]
    `,
  },
  {
    name: "Contrato de Locação Residencial",
    content: `
CONTRATO DE LOCAÇÃO RESIDENCIAL

Entre as partes:

LOCADOR: [Nome do Locador], [Nacionalidade], [Estado Civil], [Profissão], portador do documento de identidade nº [RG] e CPF nº [CPF], residente e domiciliado na [Endereço Completo].

LOCATÁRIO: [Nome do Locatário], [Nacionalidade], [Estado Civil], [Profissão], portador do documento de identidade nº [RG] e CPF nº [CPF], residente e domiciliado na [Endereço Completo].

As partes acima identificadas têm, entre si, justo e acertado o presente contrato de locação residencial, que se regerá pelas cláusulas seguintes:

1. DO OBJETO
O presente contrato tem por objeto a locação do imóvel residencial situado à [Endereço Completo do Imóvel].

2. DO PRAZO
O contrato terá a duração de [Prazo], iniciando-se em [Data de Início] e terminando em [Data de Término].

3. DO VALOR E FORMA DE PAGAMENTO
O valor do aluguel é de R$ [Valor do Aluguel], a ser pago mensalmente até o dia [Dia do Vencimento] de cada mês.

4. DAS OBRIGAÇÕES DAS PARTES
4.1. O LOCADOR se obriga a entregar o imóvel em perfeitas condições de uso.
4.2. O LOCATÁRIO se obriga a utilizar o imóvel exclusivamente para fins residenciais e a mantê-lo em bom estado de conservação.

5. DA RESCISÃO
O presente contrato poderá ser rescindido por qualquer das partes, mediante comunicação por escrito com antecedência mínima de [Número de Dias] dias.

6. DO FORO
Para dirimir quaisquer controvérsias decorrentes do presente contrato, as partes elegem o foro da comarca de [Cidade/Estado].

E, por estarem assim justos e contratados, firmam o presente contrato em duas vias de igual teor, para que produza os seus efeitos legais.

[Nome do Locador]
Assinatura: _________________________

[Nome do Locatário]
Assinatura: _________________________

[Local e Data]
    `,
  },
  {
    name: "Contrato de Compra e Venda de Imóvel",
    content: `
CONTRATO DE COMPRA E VENDA DE IMÓVEL

Entre as partes:

VENDEDOR: [Nome do Vendedor], [Nacionalidade], [Estado Civil], [Profissão], portador do documento de identidade nº [RG] e CPF nº [CPF], residente e domiciliado na [Endereço Completo].

COMPRADOR: [Nome do Comprador], [Nacionalidade], [Estado Civil], [Profissão], portador do documento de identidade nº [RG] e CPF nº [CPF], residente e domiciliado na [Endereço Completo].

As partes acima identificadas têm, entre si, justo e acertado o presente contrato de compra e venda de imóvel, que se regerá pelas cláusulas seguintes:

1. DO OBJETO
O presente contrato tem por objeto a compra e venda do imóvel situado à [Endereço Completo do Imóvel].

2. DO VALOR E FORMA DE PAGAMENTO
O valor total do imóvel é de R$ [Valor Total], a ser pago da seguinte forma: [Descrição da Forma de Pagamento].

3. DA ENTREGA DO IMÓVEL
O VENDEDOR se obriga a entregar o imóvel ao COMPRADOR livre de quaisquer ônus ou gravames, na data de [Data de Entrega].

4. DAS OBRIGAÇÕES DAS PARTES
4.1. O VENDEDOR se obriga a fornecer toda a documentação necessária para a transferência do imóvel.
4.2. O COMPRADOR se obriga a efetuar o pagamento conforme acordado.

5. DA RESCISÃO
O presente contrato poderá ser rescindido por qualquer das partes, mediante comunicação por escrito com antecedência mínima de [Número de Dias] dias.

6. DO FORO
Para dirimir quaisquer controvérsias decorrentes do presente contrato, as partes elegem o foro da comarca de [Cidade/Estado].

E, por estarem assim justos e contratados, firmam o presente contrato em duas vias de igual teor, para que produza os seus efeitos legais.

[Nome do Vendedor]
Assinatura: _________________________

[Nome do Comprador]
Assinatura: _________________________

[Local e Data]
    `,
  },
];

(async () => {
  try {
    await Template.bulkCreate(templates);
    console.log("Templates padrões criados com sucesso!");
  } catch (error) {
    console.error("Erro ao criar templates:", error);
  }
})();