import { Knex } from 'knex';
import { ETableNames } from '../ETableName';


export const seed = async (Knex: Knex) => {

    const [{ count }] = await Knex(ETableNames.cidade).count<[{ count: number }]>('* as count')
    if (!Number.isInteger(count) || Number(count) > 0) return

    const cidadesToInset = cidadesEstadoDeSaoPaulo.map(nomeDaCidade => ({nome: nomeDaCidade}))
    await Knex(ETableNames.cidade).insert(cidadesToInset)

}


const cidadesEstadoDeSaoPaulo = [
    "Adamantina",
    "Adolfo",
    "Aguaí",
    "Águas da Prata",
    "Águas de Lindóia",
    "Águas de Santa Bárbara",
    "Águas de São Pedro",
    "Agudos",
    "Alambari",
    "Alfredo Marcondes",
    "Altair",
    "Altinópolis",
    "Alto Alegre",
    "Alumínio",
    "Álvares Florence",
    "Álvares Machado",
    "Álvaro de Carvalho",
    "Alvinlândia",
    "Americana",
    "Américo Brasiliense",
    "Américo de Campos",
    "Amparo",
    "Analândia",
    "Andradina",
    "Angatuba",
    "Anhembi",
    "Anhumas",
    "Aparecida",
    "Aparecida d'Oeste",
    "Apiaí",
    "Araçariguama",
    "Araçatuba",
    "Araçoiaba da Serra",
    "Aramina",
    "Arandu",
    "Arapeí",
    "Araraquara",
    "Araras",
    "Arco-Íris",
    "Arealva",
    "Areias",
    "Areiópolis",
    "Ariranha",
    "Artur Nogueira",
    "Arujá",
    "Aspásia",
    "Assis",
    "Atibaia",
    "Auriflama",
    "Avaí",
    "Avanhandava",
    "Avaré",
    "Bady Bassitt",
    "Balbinos",
    "Bálsamo",
    "Bananal",
    "Barão de Antonina",
    "Barbosa",
    "Bariri",
    "Barra Bonita",
    "Barra do Chapéu",
    "Barra do Turvo",
    "Barretos",
    "Barrinha",
    "Barueri",
    "Bastos",
    "Batatais",
    "Bauru",
    "Bebedouro",
    "Bento de Abreu",
    "Bernardino de Campos",
    "Bertioga",
    "Bilac",
    "Birigui",
    "Biritiba Mirim",
    "Boa Esperança do Sul",
    "Bocaina",
    "Bofete",
    "Boituva",
    "Bom Jesus dos Perdões",
    "Bom Sucesso de Itararé",
    "Borá",
    "Boracéia",
    "Borborema",
    "Borebi",
    "Botucatu",
    "Bragança Paulista",
    "Braúna",
    "Brejo Alegre",
    "Brodowski",
    "Brotas",
    "Buri",
    "Buritama",
    "Buritizal",
    "Cabrália Paulista",
    "Cabreúva",
    "Caçapava",
    "Cachoeira Paulista",
    "Caconde",
    "Cafelândia",
    "Caiabu",
    "Caieiras",
    "Caiuá",
    "Cajamar",
    "Cajati",
    "Cajobi",
    "Cajuru",
    "Campina do Monte Alegre",
    "Campinas",
    "Campo Limpo Paulista",
    "Campos do Jordão",
    "Campos Novos Paulista",
    "Cananéia",
    "Canas",
    "Cândido Mota",
    "Cândido Rodrigues",
    "Canitar",
    "Capão Bonito",
    "Capela do Alto",
    "Capivari",
    "Caraguatatuba",
    "Carapicuíba",
    "Cardoso",
    "Casa Branca",
    "Cássia dos Coqueiros",
    "Castilho",
    "Catanduva",
    "Catiguá",
    "Cedral",
    "Cerqueira César",
    "Cerquilho",
    "Cesário Lange",
    "Charqueada",
    "Chavantes",
    "Clementina",
    "Colina",
    "Colômbia",
    "Conchal",
    "Conchas",
    "Cordeirópolis",
    "Coroados",
    "Coronel Macedo",
    "Corumbataí",
    "Cosmópolis",
    "Cosmorama",
    "Cotia",
    "Cravinhos",
    "Cristais Paulista",
    "Cruzália",
    "Cruzeiro",
    "Cubatão",
    "Cunha",
    "Descalvado",
    "Diadema",
    "Dirce Reis",
    "Divinolândia",
    "Dobrada",
    "Dois Córregos",
    "Dolcinópolis",
    "Dourado",
    "Dracena",
    "Duartina",
    "Dumont",
    "Echaporã",
    "Eldorado",
    "Elias Fausto",
    "Elisiário",
    "Embaúba",
    "Embu das Artes",
    "Embu-Guaçu",
    "Emilianópolis",
    "Engenheiro Coelho",
    "Espírito Santo do Pinhal",
    "Espírito Santo do Turvo",
    "Estiva Gerbi",
    "Estrela d'Oeste",
    "Estrela do Norte",
    "Euclides da Cunha Paulista",
    "Fartura",
    "Fernando Prestes",
    "Fernandópolis",
    "Fernão",
    "Ferraz de Vasconcelos",
    "Flora Rica",
    "Floreal",
    "Flórida Paulista",
    "Florínia",
    "Franca",
    "Francisco Morato",
    "Franco da Rocha",
    "Gabriel Monteiro",
    "Gália",
    "Garça",
    "Gastão Vidigal",
    "Gavião Peixoto",
    "General Salgado",
    "Getulina",
    "Glicério",
    "Guaiçara",
    "Guaimbê",
    "Guaíra",
    "Guapiaçu",
    "Guapiara",
    "Guará",
    "Guaraçaí",
    "Guaraci",
    "Guarani d'Oeste",
    "Guarantã",
    "Guararapes",
    "Guararema",
    "Guaratinguetá",
    "Guareí",
    "Guariba",
    "Guarujá",
    "Guarulhos",
    "Guatapará",
    "Guzolândia",
    "Herculândia",
    "Holambra",
    "Hortolândia",
    "Iacanga",
    "Iacri",
    "Iaras",
    "Ibaté",
    "Ibirá",
    "Ibirarema",
    "Ibitinga",
    "Ibiúna",
    "Icém",
    "Iepê",
    "Igaraçu do Tietê"
]





