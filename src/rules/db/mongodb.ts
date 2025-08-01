import { register } from '../../register.js';

register({
  tech: 'mongodb',
  name: 'MongoDB',
  type: 'db',
  dotenv: ['MONGODB_'],
  dependencies: [
    { type: 'npm', name: 'mongodb' },
    { type: 'npm', name: /mongoose/, example: 'mongoose' },
    { type: 'npm', name: '@mikro-orm/mongodb', example: '@mikro-orm/mongodb' },
    { type: 'npm', name: '@opentelemetry/instrumentation-mongodb' },
    { type: 'npm', name: '@opentelemetry/instrumentation-mongoose' },
    { type: 'docker', name: 'mongo' },
    { type: 'docker', name: 'mongodb/mongodb-community-server' },
    { type: 'docker', name: 'mongodb/mongodb-enterprise-server' },
    { type: 'docker', name: 'bitnami/mongodb' },
    { type: 'docker', name: 'mongodb/atlas' },
    { type: 'docker', name: 'bitnami/mongodb-sharded' },
    { type: 'docker', name: 'rapidfort/mongodb' },
    { type: 'docker', name: 'circleci/mongo' },
    { type: 'rust', name: 'mongodb' },
    { type: 'ruby', name: 'mongo' },
    { type: 'php', name: 'mongodb/mongodb' },
    { type: 'python', name: 'pymongo' },
    { type: 'terraform.resource', name: 'airbyte_destination_mongodb' },
    { type: 'python', name: 'langchain-mongodb' },
  ],
});
