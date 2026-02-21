[⬅️Voltar](./03-entidades-e-objetos-de-valor.md)

# Agregados

---

#### O que são?

- Grupo de **entidades** e **objetos** que são tratados como uma **UNIDADE**

- Compostos por:
  1. Raiz do Agregado
     - Controla o **acesso** ao agregado

  2. Entidades e Objetos de Valor

- As **regras de negócio** ficam contidas no escopo do **agregado**

#### Qual é a utilidade?

- Mantém a consistência (regras de negócio)

- Simplifica o acesso

- Melhora o desempenho

#### Possíveis Agragados:

- Paciente

- Médico

<img src="../images/2026-02-10-11-13-56-image.png" />

**Agregado Paciente:**

<img src="../images/2026-02-10-11-43-00-image.png" />

**Agregado Médico:**

<img src="../images/2026-02-10-11-44-08-image.png" />

#### Módulos:

- Unidades que agrupam código relacionados

- Organizam o código

- Promovem reutilização

- Falicitam a manutenção

<img src="../images/2026-02-10-11-49-08-image.png" />

[Próximo ➡️](./05-repositorios-e-servicos.md)
