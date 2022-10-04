import { schema } from './MenageAddCreditCard.services'

test("MenageAddCreditCard- return error when the object is empty", async () => {
    const data = {
        art_name: "",
        num_rib_bank: "",
        end_date: "",
        codeVerify: ""
    }

    const validation = await schema.isValid(data);

    expect(validation).toBe(false);
});