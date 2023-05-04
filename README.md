# 5-principles-SOLID-in-practice-withe-JS

## SOLID:
- SRP - Single Responsibility Principle (Princípio da Responsabilidade Única).
- OCP - Open/Closed Principle (Princípio Aberto/Fechado).
- LSP - Liskov Substitution Principle (Princípio de Substituição de Liskov).
- ISP - Interface Segregation Principle (Princípio da Segregação de Interface).
- DIP - Dependency Inversion Principle (Princípio da Inversão de Dependência).

## SRP:
- Uma classe deve ter apenas um motivo para mudar.

## OCP:
- Uma classe deve estar aberta para extensões mas fechada para modificações.
- Alteração: Acessar uma classe, adicionar ou modificar metodos.
- Expansão: Abstração da classes mais sofisticadas na implementação, será extendida e não modificado.

## LSP:
- Princípio de Substituição de Liskov.
- Uma classe filha deve ser usada no lugar da classe pai sem conter erros.
- Polimorfismo de classes.
- As classes filhos(SubClasses) tevem ser capazes de substituir as classes pai(SuperClasses).
- Ficar atento as tipagens forte de comportamentos.

## Beneficios:
- Códigos fáceis de manters.
- Adaptaveis e Ajustaveis.
- Fácil entendimento.
- Reaproveitamento.
- Maior ciclo de vida do código.

## Reflexão - Como vai seu código?
- Pode ser testado facilmente?
- As classes criadas são grandes?
- Os códigos são complexos?
- É frágil a alterações?

## TDD - Test driven development (Desenvolvimento orientado a testes)
### Tipos de testes:
- Unidade. (Componentes, Funções ou Classes) olha para unidades individuais do software.
- Aceitação do Usuário.
- Caixa Branca.
- Caixa Cinza.
- Caixa Preta.
- Configuração.
- Funcional.
- Carga.
- Instalação.
- Interface.
- Operacional.
- Performance.
- Positivo-Negativo.
- Regressão.
- Segurança.
- Stress.
- Volume.

## ETL - EXTRACT, TRANSFORM and LOAD (ETT  – Extrair, Transformar, Carregar)

## Lib de Teste Jestjs
- https://jestjs.io/pt-BR/

``` bash
yarn global add jest
```

``` bash
yarn test
```

## SOLID para Vuejs
- https://dev.to/deverebor/vuejs-e-os-principios-do-solid-4h0f

