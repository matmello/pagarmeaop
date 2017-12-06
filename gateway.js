import pagarme from './pagarme';

export default class extends pagarme {
    constructor() {

    }

    customMethod(id) {
        return {
            status: 'success',
            id: id
        }
    }
}
