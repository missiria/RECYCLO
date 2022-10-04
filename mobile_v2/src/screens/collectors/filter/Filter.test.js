import {schema} from './services/Filter.services'

test('should validate the form', async () => {
    const values = {
        type: '',
        city: '',
        time: '',
    }
    const result = await schema.isValid(values)
    expect(result).toBe(false)
});

test('Form is validated', async () => {
    const values = {
        type: 'mini test',
        city: 'agadir',
        time: 'morning',
    }
    const result = await schema.isValid(values)
    expect(result).toBe(true)   
});