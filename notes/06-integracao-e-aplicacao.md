[⬅️Voltar](./05-repositorios-e-servicos.md)

# Integração e Aplicação

---

### Resumo da estrutura:

- **Domain** → regra de negócio

- **Entity** → objeto com identidade

- **Value Object** → objeto sem identidade

- **Repository** → salva e busca entidades

- **Domain Service** → regra que não cabe em uma entidade

- **Application** → coordena o caso de uso

- **Controller** → recebe requisição

- **Interface** → camada de entrada/saída

- **Infrastructure** → detalhes técnicos

---

# 🧠 DOMAIN

**Coração do sistema.**  
Onde ficam as **regras de negócio**.

Se remover banco, framework e API… o Domain continua funcionando.

---

# 🧍 ENTITY

Objeto com **identidade própria (ID)** e ciclo de vida.

- Pode mudar de estado

- Continua sendo o mesmo objeto

Ex: `Usuário`, `Pedido`, `Cliente`

👉 Tem identidade.

---

# 📦 VALUE OBJECT

Objeto definido **apenas pelos valores**.

- Não tem ID

- É imutável

- Dois iguais = são o mesmo conceitualmente

Ex: `CPF`, `Email`, `Endereço`, `Dinheiro`

👉 Não tem identidade, só valor.

---

# 🗄 REPOSITORY

**Porta de acesso às entidades.**

- Busca

- Salva

- Remove

No Domain → você define a **interface**  
Na Infrastructure → você implementa (ORM, SQL, etc)

👉 É o “meio de campo” entre domínio e banco.

---

# ⚙️ DOMAIN SERVICE

Regra de negócio que **não pertence a uma entidade específica**.

Usado quando:

- Envolve várias entidades

- Não faz sentido ficar dentro de uma só

Ex: `CalculadorDeFrete`, `ProcessadorDePagamento`

👉 Contém regra de negócio pura.

---

# 🎯 APPLICATION (Application Service / Use Case)

**Orquestra o caso de uso.**

- Recebe dados

- Chama entidades

- Usa repositórios

- Controla fluxo

👉 Não decide regra complexa, só coordena.

---

# 🎮 CONTROLLER

**Entrada da aplicação.**

- Recebe requisição (HTTP, CLI, etc)

- Valida dados básicos

- Chama Application

- Retorna resposta

👉 Não contém regra de negócio.

---

# 🖥 INTERFACE (Presentation Layer)

Camada que conversa com o mundo externo:

- API REST

- GraphQL

- UI

- CLI

👉 Traduz entrada/saída.

---

# 🏗 INFRASTRUCTURE

Parte técnica do sistema.

- Banco de dados

- ORM

- Integrações externas

- Mensageria

- Frameworks

👉 Implementa o que o Domain definiu como abstração.

[Próximo ➡️](./07-conceitos-avançados.md)
