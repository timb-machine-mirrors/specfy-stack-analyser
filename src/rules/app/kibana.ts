import { register } from '../../register.js';

register({
  tech: 'kibana',
  name: 'Kibana',
  type: 'app',
  dotenv: ['KIBANA_'],
  dependencies: [{ type: 'docker', name: /kibana/, example: 'kibana:0.0.0' }],
});
