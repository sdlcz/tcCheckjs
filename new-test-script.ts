import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://www.saucedemo.com/`;
    
test('New Test', async (t: TestController) => {
    await t
        .click('#login-button')
        .typeText('#user-name', 'stant')
        .pressKey('backspace')
        .typeText('#user-name', 'dard_user')
        .click('#login-button')
        .click('#user-name')
        .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
        .typeText('#password', 'secret_sauce')
        .click('#login-button')
        .click('#password')
        .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
        .doubleClick('#login_credentials')
        .pressKey('ctrl+c')
        .click('#user-name')
        .pressKey('ctrl+v')
        .click('#login-button')
        .typeText('#password', 'fefwef')
        .click('#login-button')
        .doubleClick('#login_credentials')
        .pressKey('ctrl+c')
        .doubleClick('#user-name', {
            caretPos: 0
        })
        .pressKey('ctrl+v')
        .doubleClick(Selector('#root div').withText('Password for all users:').nth(4))
        .pressKey('ctrl+c')
        .doubleClick('#password', {
            caretPos: 0
        })
        .pressKey('ctrl+v')
        .click('#login-button')
});


test('New Test 1', async (t: TestController) => {
    await t
        .click('#login-button')Selector('#login-button')Selector('#user-name')Selector('#password')
    await t
        .click('#login_credentials')
        .doubleClick('#login_credentials')
        .pressKey('ctrl+c')
        .click('#user-name')
        .pressKey('ctrl+v')
        .doubleClick(Selector('#root div').withText('Password for all users:').nth(4))
        .pressKey('ctrl+c')
        .click('#password')
        .pressKey('ctrl+v')
        .click('#login-button')

        
    
});