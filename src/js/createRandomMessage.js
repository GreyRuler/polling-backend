import { faker } from '@faker-js/faker/locale/ru';

export default function createRandomMessage() {
	const name = faker.name.firstName();
	const lastName = faker.name.lastName();
	return {
		id: faker.datatype.uuid(),
		from: `${name.toLowerCase()}@${lastName.toLowerCase()}`,
		subject: `Привет от ${name} ${lastName}`,
		body: faker.lorem.paragraph(),
		received: Date.now(),
	};
}
