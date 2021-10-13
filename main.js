import { br } from './dist/pulsar.js';

const myPulsar = br;

console.log('What do I have here? ', myPulsar);

// the below will fail but that's ok
const req = {
  type: 'read',
  object: 'Account',
  data: {
    Id: '0013600000HflNnAAJ'
  }
}
myPulsar.send(req, function(res){
  console.log('RESPONSE:');
  console.dir(res);
});
