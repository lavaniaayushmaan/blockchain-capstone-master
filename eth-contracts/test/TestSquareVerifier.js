// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
let squareVerifier = artifacts.require('SquareVerifier');
// Test verification with correct proof
let proof = require('../../zokrates/code/square/proof');
// - use the contents from proof.json generated from zokrates steps
contract('TestSquareVerifier', accounts => {

    const account_one = accounts[0];

    describe('Test verification with correct proof', function () {
        beforeEach(async function () {

            try {
                this.contract = await squareVerifier.new({ from: account_one });
            }
            catch (e) {
                console.log(e);
            }
        });

        it('verification with correct proof', async function () {
            let result = await this.contract.verifyTx.call(
                proof.proof.a,
                proof.proof.b,
                proof.proof.c,
                proof.inputs,
                { from: account_one }
            );

            assert.equal(result, true, "Unexpected verification result");
        });

        // Test verification with incorrect proof
        it('Test verification with incorrect proof', async function () {
            let inputs = [10, 2]
            let result = await this.contract.verifyTx.call(
                proof.proof.a,
                proof.proof.b,
                proof.proof.c,
                inputs,
                { from: account_one }
            );

            assert.equal(result, false, "The proof is not correct");
        })
    })
});


