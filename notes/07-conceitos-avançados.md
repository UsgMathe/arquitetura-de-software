[⬅️Voltar](./06-integracao-e-aplicacao.md)

# Conceitos Avançados

---

## 1. Contexto Delimitado

- Limite aos termos do **domínio** e suas **aplicações**

- Quanto maior o sistema, maior a necessidade de estabelecer **limites ao contexto**

- Divisão de responsabilidade

>

### 1.1 Como identificar contextos

- Identificando Subdomínios
  - Áreas específicas do negócio que podem ser tratadas isoladamente

- Identificar termos exclusivos do contexto

- Identificar como os contextos se relacionam
  - Paciente ↔ Médico ↔ Financeiro
  - Paciente ↔ Tratamento ↔ Iventário ↔ Financeiro

>

### 1.2 Benefícios de Contextos Delimitados

- Clareza e Organização

- Fácil evolução

- Independência e isolamento

---

## 2. Anticorruption Layer

> Atua como um tradutor que protege o domínio de ser contaminado por modelos externos.

- 🧱 Camada extra

- 🔒 **Protege** o sistema de influências externas

- 🔣 **Traduz dados externos** para um padrão aceito pelo nosso sistema

>

### 2.1 Importância

- Sistemas diferentes possuem regras de negócio diferentes

- Não são "plug and play"

>

### 2.2 Benefícios

- Proteção do domínio

- Facilidade de manutenção

- Melhoria na clareza

>

### 2.3 Quando usar

- Integração com sistema legado

- Integração com terceiros

- Contextos com modelos conceitualmente diferentes

>

### 2.4 Quando não usar

- Dentro do mesmo bounded context

- Quando os modelos já são equivalentes

- Apenas para abstração técnica

>

### 2.5 Exemplo

```js
// domain/User.js
export class User {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance; // em reais
  }
}

// infrastructure/externalApi.js
export async function fetchExternalUser(id) {
  return {
    user_id: '123',
    full_name: 'João Silva',
    balance_cents: 10500,
  };
}

// acl/UserTranslator.js
import { User } from '../domain/User.js';

export function toDomain(externalUser) {
  return new User(
    externalUser.user_id,
    externalUser.full_name,
    externalUser.balance_cents / 100, // converte para reais
  );
}

// infrastructure/UserRepository.js
import { fetchExternalUser } from './externalApi.js';
import { toDomain } from '../acl/UserTranslator.js';

export async function findUserById(id) {
  const externalUser = await fetchExternalUser(id);
  return toDomain(externalUser);
}
```

[Início 🏠](./readme.md)
