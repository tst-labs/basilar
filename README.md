# BASILAR

A @tst-labs/basilar é uma proposta de biblioteca de componentes, inicialmente direcionada aos desenvolvedores do TST, contendo as bases necessárias para a construção de UIs em [**React**](https://reactjs.org/) e [**Material UI**](https://mui.com/), que leva em consideração os elementos (design tokens) estabelecidos pelo [**Manual de Identidade Visual JT/TST**](http://www.tst.jus.br/identidadevisualjt).

> Nesse primeiro momento, a @tst-labs/basilar está configurada para usar as versões **v5.6.4** da ***MUI*** e **v18.1.0** do ***React***.
> Em um momento futuro (não muito distante) pretendemos torná-la compatível com as versões mais antigas em uso nos projetos de *front end* em produção no TST.

## Scripts do projeto

Usamos o `yarn` nesse projeto. No diretório do projeto você pode executar os seguintes de scripts:

### `yarn build`

Empacota a biblioteca, usando o `rollup`, no diretório `dist/`.
### `yarn build-watch`

Empacota a biblioteca, usando o `rollup`, no diretório `dist/` e fica verificando alterações a serem reempacotadas.

### `yarn test`

Inicia uma sessão interativa de testes executando `react-scripts test`.

### `yarn test:ci`

Executa `react-scripts test` mas configurado para ser usado em *pipelines* de CI/CD.

## Como adicionar novos componentes

Adotaremos um processo de trabalho manual para adicionar novos componentes à @tst-labs/basilar descrita nos passos a seguir.

### 1. Clone o repositório em seu *host* de trabalho:
``` shell
# ### Pode usar https ou ssh, como preferir. Abaixo uso SSH.
git clone git@github.com:tst-labs/basilar.git
# ### Mude para o diretório do projeto
cd basilar
```

### 2. Instale as dependências:
``` shell
# ### IMPORTANTE: Usamos o yarn nesse projeto. Evite problemas!
yarn
# ### Ou
# yarn install
```

### 3. Insira novos componentes, seus testes e histórias (Storybook stories):

Os componentes deverão ser organizados abaixo do diretório `src/componentes/` em diretórios próprios e exportados em arquivos `index.js`. O diretório raíz dos componentes (supracitado) tem o `index.js` que exporta tudo da biblioteca. 

> Explore o diretório de componentes para ter ideia de como organizar os novos componentes.

### 4. Exponha a biblioteca no seu *host* para uso em outros projetos:
``` shell
# ### Ao usar o yarn link você instalará a biblioteca no repositório global do host.
# ### No diretório raíz do projeto execute o seguinte comando:
yarn link
```

### 5. Link a biblioteca ao seu projeto final:
``` shell
# ### No diretório raíz do projeto que usará a biblioteca execute o seguinte comando:
yarn link @tst-labs/basilar
```
Agora é só incluir o novo componente e testar em sua aplicação.

### 6. Crie uma nova *branch* de trabalho para submeter o(s) novo(s) componente(s):
``` shell
# ### No diretório raíz do projeto:
git checkout -b novo-componente-fantastico
```
``` shell
# ### Envie a nova *branch* para o repositório principal no Github:
git push --set-upstream origin novo-componente-fantastico
```

E crie um novo *Pull Request* explicando o que está sendo proposto para inclusão na biblioteca. Marque o PR como WIP (Work In Progress) para evitar que seja incorporado à biblioteca acidentalmente.

Essa conversa pode demorar caso haja alguma discordância entre os mantenedores sobre o componente sendo proposto, por isso não é bom contar com uma atualização automática da biblioteca tão logo o código seja enviado ao repositório principal.

### Etapas posteriores

Assim que os MRs abertos sejam aceitos a documentação em Storybook da biblioteca já será atualizada, mas a biblioteca em si ainda dependerá de uma *release* para que seja publicada em uma nova versão na *registry* do npmjs.com.

## Como contribuir

> TODO: 

## Licença

Usamos licença MIT para esse projeto.

## Colaboradores

* @adriano.lemos.dev
