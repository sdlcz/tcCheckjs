import { Selector } from 'testcafe';

fixture `Login Test`
    .page `https://www.saucedemo.com/v1/`;

test('User can login with valid credentials', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button')
        .expect(Selector('.inventory_list').exists).ok();
});