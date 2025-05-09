import * as create from "./create";
import * as deleteById from "./deleteByid";
import * as getAll from "./getAll";
import * as getById from "./getById";
import * as updateById from "./updateById";
import * as count from "./count"


export const PessoasProvider = {
    ...getAll,
    ...getById,
    ...updateById,
    ...deleteById,
    ...create,
    ...count
}