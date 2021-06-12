---
title: 'Prop Drilling'
date: '2021-06-12'
label: 'programacao'
---

# Prop Drilling

Esse artigo é uma tradução do artigo do Kent C. Dodds [Prop Drilling](https://kentcdodds.com/blog/prop-drilling). Utilizarei os mesmos exemplos, porém acrescentarei mais comentários quando necessário.

## O que é Prop Drilling?

Prop drilling se refere ao processo de ter que passar propriedades de um componente mais externo pra outro mais interno, porém não diretamente. Ou seja, a propriedade será passada de um componente A para um componente B, e do componente B será repassada para um componente C.

```javascript
function Toggle() {
  const [on, setOn] = React.useState(false);

  // Inverte o estado entre true/false
  const toggle = () => setOn((o) => !o);

  return <Switch on={on} onToggle={toggle} />;
}

function Switch({ on, onToggle }) {
  // Note que as propriedades on e onToggle são repassadas para outro componente mais interno
  return (
    <div>
      <SwitchMessage on={on} />
      <SwitchButton onToggle={onToggle} />
    </div>
  );
}

function SwitchMessage({ on }) {
  return <div>The button is {on ? 'on' : 'off'}</div>;
}

function SwitchButton({ onToggle }) {
  return <button onClick={onToggle}>Toggle</button>;
}
```

No exemplo acima, o componente Toggle repassa propriedades para o componente Switch, que repassa as propriedades para os componentes SwitchMessage e SwitchButton. Isso é Prop Drilling.

## Quais problemas o Prop Drilling pode trazer para a aplicação?

Apesar de você ter um certo benefício por ter um controle maior sobre as propriedades utilizando Prop Drilling, como por exemplo de onde as variáveis se iniciam e do quanto você pode modificar o código sem quebrá-lo, a medida que a sua aplicação cresce você pode ter problemas tendo que "navegar" entre muitos níveis de código, além de acabar confundindo dependendo das mudanças que você fizer nas propriedades a cada nível.

## Como evitar o Prop Drilling?

Uma estratégia que já alivia drasticamente o uso do Prop Drilling é não quebrar o código em muitos componentes desnecessáriamente. Qual é o sentido de criar dezenas de componentes desnecessáriamente quando toda a informação poderia estar junta? Aguarde a necessidade de reutilizar os seus códigos para aí pensar em quebrá-los.

> Pense sobre isso: Nada te impede de criar uma aplicação inteira em apenas um arquivo. Não é para você fazer isso, é claro, é apenas para refletir sobre a necessidade de quebrar o seu código o tempo todo, criando dezenas de componentes desnecessários.

_Nota: Em breve traduzirei o artigo [When to break up a component into multiple components](https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components)_

Outra estratégia é manter um state o mais perto possível de onde será utilizado. Se ele for utilizado em apenas um componente, por exemplo, não o coloque vários níveis acima. mantenha-o no próprio componente. E caso seja compartilhado por outros componentes, utilize-o o mais próximo possível dos dois, em algum componente em comum.

_Nota: Em breve traduzirei também o artigo [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react) ensinando como lidar com states na aplicação_

Caso seja necessário, utilize os contexts.

_Nota: Também traduzirei o artigo [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively) ensinando a melhor maneira de utilizar os contexts._

Até breve!
