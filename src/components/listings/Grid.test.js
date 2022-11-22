import data from '../../data/courses.json';

const numItems = data.length;
const dataTest = data[0].title;
const data2 = ['React Native', 'React'];

describe('Number test', () => {
	test('Number of items = 12', () => {
		expect(numItems).toBe(12);
	});
	test('Number of items to be greater than or equal 12', () => {
		expect(numItems).toBeGreaterThanOrEqual(12);
	});
});

describe('String test', () => {
	test('There is a JS in the title', () => {
		expect(dataTest).toMatch(/JS/);
	});
	test('The title contains React', () => {
		expect(dataTest).toContain('React');
	});
});

describe('Arrays and Objects test', () => {
	test('The list of courses contains React native and React', () => {
		expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2));
	});

	test('The first course to have a property title', () => {
		expect(data[0]).toHaveProperty('title');
	});
	test('The first course to have a property title and value of 31266', () => {
		expect(data[0]).toHaveProperty('views', '31,266');
	});
});



