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
    posto: posto,
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
    posto: posto,
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
    posto: posto,
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
    posto: posto,
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
    posto: posto,
  },

  {
    id: 333,
    vacina: {
      nomeVacina: 'coronavac',
      numDosesNecessarias: 2,
      diasEntreDoses: 90,
    },
    qtdDosesDisponiveis: 200,
    dataDeValidade: '2022-31-01',
    posto: posto,
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
    posto: posto,
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
    posto: posto,
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
    posto: posto,
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
    posto: posto,
  },
];

var posto = {
  id: 5555555,
  enderecoPosto: 'rua blablau',
  telefone: '(79) 99999-3232',
  email: 'email@email.com',
  nomePosto: 'Posto Ipiranga',
  vacina: { nome: 'astrazeneca', quantidade: '100' },
};

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

var posto2 = {
  id: 111111,
  enderecoPosto: 'rua bilulu',
  telefone: '(72) 22222-3333',
  email: 'imaul@email.com',
  nomePosto: 'Posto Do Posto',
  vacina: pfizer,
};

var mockQueue = {
  posicaoAtual: 2,
  posicaoFinal: 200,
};

var postos = [posto, posto2];

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
 * M??todo que verifica se o usu??rio ?? Admin (secret??rio de sa??de) TO-DO NOT YET IMPLEMENTED
 * @param {token: secretario de saude?}
 */
function checkIfAdmin(token) {
  if (isAdmin(token)) {
    return true;
  }
  console.log(token);
  alert('Opera????o N??o Permitida!');
  return false;
}

/**
 * M??todo POST para cadastrar Posto de Vacina????o TO-DO NOT YET IMPLEMENTED
 * @param {body: {{nome,email,senha,telefone,endereco}}, token:secretaria}
 */
function postUnitSignUp({ body, token }) {
  if (checkIfAdmin(token)) {
    const config = createHeaders(token);
  }
  //TO-DO
}

/**
 * M??todo GET para receber os lotes de um posto de sa??de TO-DO NOT YET IMPLEMENTED
 * @param {body: {{idPosto}}, token:postoDeSaude}
 */
function getUnitLots({ body, token }) {
  return lotes; // tem que fazer o GET da API SOMENTE dos lotes com id=idPosto
}

/**
 * M??todo GET para receber o estado da fila de um posto de sa??de TO-DO NOT YET IMPLEMENTED
 * @param {body: {idPosto}, token:postoDeSaude}
 */
function getUnitQueue({ body, token }) {
  return mockQueue;
}

/**
 * M??todo POST que envia o c??digo de vacina????o para ser colocado na fila TO-DO NOT YET IMPLEMENTED
 * @param {body: {code:c??digo de vacinacao}} param0
 */
function postVaccinationCode({ body, token }) {
  console.log(`usuario com id ${body.code} na fila`);
}

/** M??todo POST que cria um novo lote TO-DO
 * @param {body: { name, qtdDoses, expirationDate }, token: secretaria}
 */
function postNewLot({ body, token }) {
  console.log(body, token);
}

/**
 * M??todo POST  que envia o c??digo de confirma????o de vacina????o para retirar unidade de lote e atua
 * lizar a fila TO-DO NOT YET IMPLEMENTED
 * @param {body:{confirmationCode:c??digo de confirma????o}, token: secretario}
 */
function postConfirmationCode({ body, token }) {
  console.log(
    `vacinacao do usuario com senha ${body.confirmationCode} confirmada`
  );
}

export {
  isAdmin,
  getVaccineList,
  getLotsList,
  getUnitsList,
  postLogin,
  postUnitSignUp,
  getUnitLots,
  getUnitQueue,
  postVaccinationCode,
  postNewLot,
  postConfirmationCode,
};
