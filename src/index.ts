const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

export async function somethingAsync() {
  await delay(250);

  const arr = ['red', 'green', 'blue'];

  console.log(arr.includes('red')); // true
}