const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

export async function somethingAsync() {
  await delay(250);

  console.log('hi');
}