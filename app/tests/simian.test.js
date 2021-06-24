const server = require('../../server');
const request = require('supertest');
const DnaModel = require('../model/dnaResearch');
const {
    DNA_NOT_ARRAY,
    DNA_NOT_N_X_N,
    DNA_INVALID_CHARACTER

} = require('../helper/consts/constants');
const {
    compareMatrices
} = require('../helper/utils/utils');


describe('Simian Component', () => {

    it('Test post with valid and simian DNA for the first time', async () => {
        const allDna = await DnaModel.getAll();
        const dnaToSave = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
        if(allDna.length) {
            const dnaToDelete = allDna.find( ({ dna }) => compareMatrices(dna, dnaToSave));
            await DnaModel.deleteById(dnaToDelete._id);
        }

        const res = await request(server)
        .post('/simian')
        .send({dna: dnaToSave })
        .set('Accept', 'application/json')

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            response: 'Simian detected'
        })
    })


    it('Test post with valid and simian DNA - second time, don"t persist on database', async () => {

        const res = await request(server)
        .post('/simian')
        .send({dna: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]})
        .set('Accept', 'application/json')

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            response: 'Simian detected'
        })
    })

    it('Test post with valid and human DNA', async () => {
        const res = await request(server)
        .post('/simian')
        .send({dna: ["ATGCGA", "CAGTCC", "TTATGT", "AGATGG", "CCTCTA", "TCACTG"]})
        .set('Accept', 'application/json')

        expect(res.statusCode).toEqual(403);
        expect(res.body).toEqual({
            response: 'Human dna not allowed'
        })
    })

    it('Test post with invalid dna - not array ', async () => {
        const res = await request(server)
        .post('/simian')
        .send({dna: DNA_NOT_ARRAY})
        .set('Accept', 'application/json')

        expect(res.statusCode).toEqual(302);
        expect(res.body).toEqual({
            error: 'Dna must be an array'
        })
    })

    it('Test post with invalid dna - invalid characters ', async () => {
        const res = await request(server)
        .post('/simian')
        .send({dna: DNA_INVALID_CHARACTER})
        .set('Accept', 'application/json')

        expect(res.statusCode).toEqual(302);
        expect(res.body).toEqual({
            error: 'The dna sequence provided contain invalid letters'
        })
    })

    it('Test post with invalid dna - not NxN ', async () => {
        const res = await request(server)
        .post('/simian')
        .send({dna: DNA_NOT_N_X_N})
        .set('Accept', 'application/json')

        expect(res.statusCode).toEqual(302);
        expect(res.body).toEqual({
            error: 'Dna provided is not a NxN'
        })
    })

    it('Test get stats', async () => {
        const res = await request(server)
        .get('/stats')

        expect(res.body).toEqual({
            countSimians: 1,
            countHumans: 1,
            ratio: 1,
        })
    })
})