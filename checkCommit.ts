import { Selector } from 'testcafe';

fixture `Login Test`
    .page `https://www.saucedemo.com/v1/`;

test('User can login with valid credentials', async t => {
    const usernameInput = Selector('#user-name');
    const passwordInput = Selector('#password');
    const loginButton = Selector('#login-button');
    const inventoryList = Selector('.inventory_list');

    await t
        .typeText(usernameInput, 'standard_user')
        .typeText(passwordInput, 'secret_sauce')
        .click(loginButton)
        .expect(inventoryList.exists).ok();
});