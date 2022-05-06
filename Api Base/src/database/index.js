import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import example from '../models/example';

const models = [example];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => { model.init(connection); });
