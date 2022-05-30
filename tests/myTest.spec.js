const { test, expect } = require('@playwright/test')

test.describe('testes de API', () => {
    test('primeiro teste', async ({ request }) => {
        const response = await request.post('/login',{
            failOnStatusCode: false,
            data:{
                body: {
                    "type":"LOGIN",
                    "username":"Katharina_Bernier",
                    "password":"s3cret"
                }
            }
                 
        });
        page.pause()
        expect(response.status()).toEqual(200);
        
    })

})