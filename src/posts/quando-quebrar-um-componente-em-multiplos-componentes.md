---
title: 'Quando quebrar um componente em múltiplos componentes'
date: '2021-06-13'
label: 'programacao'
---

Esse artigo é uma tradução do artigo do Kent C. Dodds [When to break up a component into multiple components
](https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components). Utilizarei os mesmos exemplos, porém acrescentarei mais comentários quando necessário.

# Quando quebrar um componente em múltiplos componentes

Como citado no artigo [Prop Driling](http://localhost:3000/posts/prop-driling), nada te impede de criar uma aplicação inteira em um único componente. Apesar do código ficar gigantesco e desorganizado, ele funcionaria corretamente. Porém isso resultaria em alguns problemas:

- Problemas de performance: A cada alteração de estado você teria uma re-renderização de toda a aplicação.
- Problemas com a reutilização de partes do código
- Problema com states: Saber onde cada state é utilizado seria um problema. Você acaba perdendo o controle do que está acontecendo em determinadas partes do código, além de dificultar na resolução de bugs.
- Testagem seria feita 100% por integração: Seria muito difícil testar partes isoladas do código.
- Trabalhar em equipe no código seria um problema. É muito difícil ter diversas pessoas ao mesmo tempo alterando o mesmo código. A chance de gerar conflitos de merge são muito grandes.
- Seria impossível utilizar componentes de terceiros, já que toda a aplicação é escrita como um único componente.

Quebre seu componente em vários depois que tiver algum desses problemas, não antes. É mais fácil resolver duplicações de código do que abstrações desnecessárias. Não tenha medo de seu componente ficar muito longo.
