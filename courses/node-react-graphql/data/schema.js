import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
	type Query {
		testString: String
	}
`;

const SCHEMA = makeExecutableSchema({ typeDefs});

addMockFunctionsToSchema({ SCHEMA,  mocks});

export default SCHEMA;
