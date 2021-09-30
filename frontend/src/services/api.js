function createHeaders(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}

var vacinas = [
  {
    nomeVacina: 'janssen',
    numDosesNecessarias: 1,
    diasEntreDoses: 0,
  },
  {
    nomeVacina: 'pfiiizerrr',
    numDosesNecessarias: 2,
    diasEntreDoses: 90,
  },
];

var lotes = [
  {
    id: 111,
    vacina: {
      nomeVacina: 'pfiiizerrr',
      numDosesNecessarias: 2,
      diasEntreDoses: 90,
    },
    qtdDosesDisponiveis: 200,
    dataDeValidade: '2022-31-01',
    posto: postos,
  },
  {
    id: 222,
    vacina: {
      nomeVacina: 'pfiiizerrr',
      numDosesNecessarias: 2,
      diasEntreDoses: 90,
    },
    qtdDosesDisponiveis: 200,
    dataDeValidade: '2022-31-01',
    posto: postos,
  },
  {
    id: 333,
    vacina: {
      nomeVacina: 'pfiiizerrr',
      numDosesNecessarias: 2,
      diasEntreDoses: 90,
    },
    qtdDosesDisponiveis: 200,
    dataDeValidade: '2022-31-01',
    posto: postos,
  },
];

var postos = [
  {
    id: 5555555,
    enderecoPosto: 'rua blablau',
    telefone: '(79) 99999-3232',
    email: 'email@email.com',
    nomePosto: 'Posto Ipiranga',
    vacina: { nome: 'astrazeneca', quantidade: '100' },
  },
];

var pfizer = {
  nomeVacina: 'pfiiizerrr',
  numDosesNecessarias: 2,
  diasEntreDoses: 90,
};

var lote = [
  {
    id: 321,
    vacina: pfizer,
    qtdDosesDisponiveis: 666,
    dataDeValidade: '2042-31-01',
  },
];

function isAdmin(token) {
  return token === 1; //TO-DO botar uma logica nisso
}

function getVaccineList({ token }) {
  return vacinas;
}

function getLotsList({ token }) {
  return lotes;
}

function getUnitsList({ token }) {
  return postos;
}

function postLogin({ email, password, loginType }) {
  const body = { email, password, loginType };
  console.log('login', body);
}

/**
 * Método que verifica se o usuário é Admin (secretário de saúde) TO-DO NOT YET IMPLEMENTED
 * @param {token: secretario de saude?}
 */
function checkIfAdmin(token) {
  if (isAdmin(token)) {
    return true;
  }
  console.log(token);
  alert('Operação Não Permitida!');
  return false;
}

/**
 * Método POST para cadastrar Posto de Vacinação TO-DO NOT YET IMPLEMENTED
 * @param {body: {{nome,email,senha,telefone,endereco}}, token:secretaria}
 */
function postUnitSignUp({ body, token }) {
  if (checkIfAdmin(token)) {
    const config = createHeaders(token);
  }
  //TO-DO
}

export {
  isAdmin,
  getVaccineList,
  getLotsList,
  getUnitsList,
  postLogin,
  postUnitSignUp,
};
