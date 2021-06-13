---
title: 'Como construí, do zero, o app da JRM Compensados'
date: '2021-05-30'
label: 'programacao'
---

# Como construí, do zero, o app da JRM Compensados

## Como o App funciona

O app funciona como um gerenciador de pedidos de chapas de MDF para serem cortadas na marcenaria. O vendedor recebe o pedido de certas peças cortadas nas medidas informadas pelo cliente. Por exemplo: Um cliente faz o pedido de 3 peças de MDF 15mm, todas elas medindo 350mm x 450mm. Imediatamente esse pedido é armazenado no banco de dados com todas as informações do cliente e informações do pedido (Como tipo de pedido, tipo de pagamento, loja de origem, informações do cliente) e a marcenaria passa a ter acesso a ele. A marcenaria, então, pode imprimir os dados do pedido, produzir e informar pelo próprio aplicativo que ele está produzido, deixando a loja ciente de que eles podem acionar o transporte para recolher as peças produzidas.

## Por que sentimos a necessidade de criar essa aplicação?

A minha motivação começou com a necessidade de termos uma assimetria de informações entre os vendedores e a produção. O método antigo utilizava uma planilha de excel em cada loja, porém problemas passaram a aparecer como pedidos duplicados, pedidos que não chegavam até a produção e uma certa confusão sobre quais pedidos já haviam sido produzidos. A necessidade de estar sempre ao telefone fazendo consulta sobre pedidos específicos tomava um tempo absurdo, e como não tínhamos acesso as planilhas pela marcenaria, não conseguíamos fazer a criação de novos pedidos ou verificar a situação de pedidos já existentes.

## Tecnologias utilizadas

Toda a aplicação foi escrita em **Typescript**, sendo o backend em Node.js e o frontend em React.js.

### Tecnologias do backend:

- Banco de dados: Postgres
- ORM: TypeORM
- Autenticação: JWT Web Token + BCrypt + uuid
- Segurança básica: CORS, express-rate-limit e helmet
- Manipulação de datas: Date-fns
- Validação de dados: Celebrate
- Injeção de dependencias: Tsyringe
- Criação de PDF: PDFKit
- Testes: Jest

### Tecnologias do frontend:

- Requisição HTTP: Axios
- Estilização: Styled Components
- UI: Ant Design
- Rotas: React Router Dom
