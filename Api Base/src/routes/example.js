import { Router } from 'express';
import example from '../controllers/example';

const router = Router();

router.get('/', example.index);

export default router;
