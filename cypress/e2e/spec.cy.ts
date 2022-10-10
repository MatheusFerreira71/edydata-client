describe('Home Page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Bem vindo ao Edydata Client')
  })
})

describe('Client Page', () => {
  it('Visits the client page', () => {
    cy.visit('/client/1')
    cy.get('article').contains('Nome');
  })
})

describe('Login Page', () => {
  it('Visits the login page', () => {
    cy.visit('/login')
    cy.contains('E-mail');
    cy.contains('Senha');
  })
})

describe('Create User Page', () => {
  it('Visits the create user page', () => {
    cy.visit('/create-account')
    cy.contains('E-mail');
    cy.contains('Nome');
    cy.contains('Senha');
  })
})

describe('Find By Name Page', () => {
  it('Visits the find by name page', () => {
    cy.visit('/clients-by-name')
    cy.contains('Nome a procurar')
  })
})

describe('Find By Birthdate Page', () => {
  it('Visits the find by birthdate page', () => {
    cy.visit('/clients-by-date')
    cy.contains('Intervalo de Datas');
  })
})

describe('Find Count and Salary Page', () => {
  it('Visits the find count and salary page', () => {
    cy.visit('/salary-and-count')
    cy.get('label').contains('Escolha uma opção')
  })
})
