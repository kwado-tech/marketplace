const Marketplace = artifacts.require('./Marketplace.sol');

contract('Marketplace', (accounts) => {
    let marketplace;

    before(async () => {
        marketplace = await Marketplace.deployed();
    });

    describe('deployment', () => {
        it('deploys successfully', async () => {
            // act
            const address = await marketplace.address;

            // assert
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });

        it('has a name object', async () => {
            // act
            const name = await marketplace.name();

            // assert
            assert.equal(name, 'Dapp University Marketplace');
        })
    })
});