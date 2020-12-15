import sinon from 'sinon';
import chai from 'chai';
import babelRegister from '@babel/register';

babelRegister({extensions: ['.ts']});

sinon.assert.expose(chai.assert, {prefix: ''});

process.on('unhandledRejection', reason => {
  throw reason;
});
