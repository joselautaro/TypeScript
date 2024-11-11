import * as readline from 'readline';

import { TareaService } from './services/TareaServices';

import { EstadoTarea } from './models/estados';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})