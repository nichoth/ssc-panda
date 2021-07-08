import p2panda from 'p2panda-js';

p2panda.then(({ KeyPair }) => {
    const keyPair = new KeyPair();
    console.log('public', keyPair.publicKey());
    console.log('key pair', keyPair)
});

