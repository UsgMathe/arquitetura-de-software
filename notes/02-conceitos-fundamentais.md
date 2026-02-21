[⬅️Voltar](../readme.md)

# Conceitos Fundamentais

---

## Comunicação Eficiente

- idioma == idioma

- linguagem != linguagem

<img title="" src="../images/2026-01-30-22-40-41-image.png" alt="" data-align="left">

<img title="" src="../images/2026-01-30-22-42-41-image.png" alt="" data-align="left">

<img title="" src="../images/2026-01-30-22-42-46-image.png" alt="" data-align="left">

<img title="" src="../images/2026-01-30-22-43-29-image.png" alt="" data-align="left">

**Resultado:**

<img title="" src="../images/2026-01-30-22-45-47-image.png" alt="" data-align="left">

## Domínio

- "Coração do software"

- Núcle do sistema
  - Regras de negócio
  - Lógica central da aplicação

- Arquitetura de Software:
  - Estrutura organizacional
  - Interpretação de componentes
  - Permite que o domínio seja estruturalmente isolado
  - <img title="" src="../images/2026-02-02-21-37-12.png" alt="" data-align="left">

---

## Arquitetura em Camadas

<img title="" src="../images/2026-02-02-21-41-02.png" alt="" data-align="left">

#### Apresentação [UI]:

- Frontend, terminal, etc.

- Coleta dados e os envia para a **Camada de Aplicação**

- Camada em que o usuário interage **(Inputs)**

>

#### Aplicação [Serviços]:

- Orquestração de operações

- Métodos

- Validações (CPF, email, celular, ect.)

- **Gatilho** para execução das regras de negócio da camada de domínio

- Depende da camada de **Domínio**

>

#### Domínio [Entidades, Regras de negócio]:

- **Lógica central** do programa

- Independente de detalhes técnicos

- Foco único no **Negócio**

>

#### Infraestutura [Banco de Dados, APIs Externas] :

- Detalhes técnicos

- Conexão com Banco de dados e APIs

- Conexão com serviço de pagamento, etc.

## Benefícios da Arquitetura em Camadas

- Isolamento do **Domínio**

- Clareza

- Testabilidade

- Escabilidade

- Reúso

- Boa para projetos de **PEQUENO E MÉDIO PORTE**
  - **PODE SE TORNAR DIFÍCIL DE MANTER EM PROJETOS MAIORES**

---

## Arquitetura Hexagonal

<img title="" src="../images/2026-02-03-21-10-48-image.png" alt="" data-align="left">

- **Portas e adaptadores** se conectam ao **Domínio**

#### Portas:

1. Portas de entrada (**Primary**)

2. Portas de saída (**Secondary**)

- Definem como o domínio pode ser **acessado**

- Determinam como uma ação vai ser feita

#### Adaptadores:

1. Adaptador **Primário**
   - Interface

2. Adaptador **Secundário**
   - Infraestrutura

- Implementações concretas das portas

- Repositório

- Facilita por exemplo a troca de banco de dados, pois será necessário fazer alterações **APENAS** nos adaptadores (pois o domínio está completamente isolado)

## Benefícios da Arquitetura Hexagonal

- Isolamento **TOTAL** do **Domínio**

- Portas / Adaptadores

- Testabilidade

- Flexibilidade

- Reúso

- Boa para projetos de **GRANDE PORTE**
  - **PODE SE TORNAR DIFÍCIL DE USAR EM PROJETOS MENORES**

[Próximo ➡️](03-entidades-e-objetos-de-valor.md)
