
// import "@babel/polyfill";

export default function hello() {
  let set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);
  Promise.resolve(1).then(v => {
    console.log(v);
  })
  return 'hello webpack';
}