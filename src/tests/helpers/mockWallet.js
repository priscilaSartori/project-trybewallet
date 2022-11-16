const mockWallet = {
  currencies: [],
  expenses: [{
    id: 0,
    value: '11',
    description: 'Onze dólares',
    currency: 'USD',
    method: 'Cartão de crédito',
    tag: 'Lazer',
    exchangeRates: {
      USD: {
        code: 'USD',
        codein: 'BRL',
        name: 'Dólar Americano/Real Brasileiro',
        high: '5.333',
        low: '5.333',
        varBid: '0.0005',
        pctChange: '0.01',
        bid: '5.3325',
        ask: '5.3335',
        timestamp: '1668535189',
        create_date: '2022-11-15 14:59:49',
      },
    },
  }],
  editor: false,
  idToEdit: 0,
};

export default mockWallet;
