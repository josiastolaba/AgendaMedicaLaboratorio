import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import indexRoutes from './routes/indexRoutes.js';
import medicoRoutes from './routes/medicoRoutes.js';
import personaRoutes from './routes/personaRoutes.js';
import agendaRoutes from './routes/agendaRoutes.js';
import turnoRoutes from './routes/turnoRoutes.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoutes);
app.use('/medico', medicoRoutes);
app.use('/persona', personaRoutes);
app.use('/agenda', agendaRoutes);
app.use('/turnos', turnoRoutes);


app.listen(port, () => {
  console.log("App en puerto 3000");
});
