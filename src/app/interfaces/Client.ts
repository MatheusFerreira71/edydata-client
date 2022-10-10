export interface Client {
  id: number;
  nome: string;
  CPF: string;
  estadoCivil: string;
  pai?: string;
  mae?: string;
  conjuge?: string;
  rg?: string;
  salario: string;
  especie: string;
  tituloEleitor?: string;
  sexo: string;
  celular?: string;
  cep?: string;
  endereco?: string;
  complemento?: string;
  numero?: string;
  bairro?: string;
  email?: string;
  cidade?: string;
  dataNascimento?: Date;
}

export interface Count {
  id: number;
}

export interface Sum {
  salario: string;
}

export interface CountAndSalary {
  _count: Count;
  _sum: Sum;
  cidade?: string;
  sexo?: string;
  especie?: string;
}

export interface ClientBody {
  nome: string;
  CPF: string;
  estadoCivil: string;
  pai?: string;
  mae?: string;
  conjuge?: string;
  rg?: string;
  salario: number;
  especie: string;
  tituloEleitor?: string;
  sexo: string;
  celular?: string;
  cep?: string;
  endereco?: string;
  complemento?: string;
  numero?: string;
  bairro?: string;
  email?: string;
  cidade?: string;
  dataNascimento?: Date;
}

export interface ClientUpdateBody {
  id: number;
  nome?: string;
  CPF?: string;
  estadoCivil?: string;
  pai?: string;
  mae?: string;
  conjuge?: string;
  rg?: string;
  salario?: number;
  especie?: string;
  tituloEleitor?: string;
  sexo?: string;
  celular?: string;
  cep?: string;
  endereco?: string;
  complemento?: string;
  numero?: string;
  bairro?: string;
  email?: string;
  cidade?: string;
  dataNascimento?: Date;
}
