const add =(a,b) => a+b;
const generateGreeting = (name) => `Hello ${name}`;
const generateGreeting1 = (name ='Anonymous') => `Hello ${name}`;

test ('Should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test ('should print greeting', () => {
    const result = generateGreeting('Ranjan');
    expect(result).toBe('Hello Ranjan');
});

// testing with no data
test ('should print greeting', () => {
    const result = generateGreeting1();
    expect(result).toBe('Hello Anonymous');
});