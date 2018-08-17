import { NegotiationController } from './controllers/NegotiationController';

const controller = new NegotiationController();

// Using jQuery
$('.form').submit(controller.add.bind(controller));