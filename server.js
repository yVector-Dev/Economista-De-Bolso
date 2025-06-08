const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/cotacao', async (req, res) => {
    try {
        const resposta = await axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const valor = parseFloat(resposta.data.USDBRL.bid).toFixed(2);
        res.json({ moeda: 'USD-BRL', valor });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao obter cotação' });
    }
});

app.get('/api/converter', async (req, res) => {
    const { origem, destino, valor, tarifa } = req.query;

    if (!origem || !destino || !valor) {
        return res.status(400).json({ erro: 'Parâmetros inválidos' });
    }

    if (origem === destino) {
        const resultadoTarifado = (parseFloat(valor) * (1 - (parseFloat(tarifa) || 0) / 100)).toFixed(2);
        return res.json({ resultado: resultadoTarifado });
    }

    try {
        const url = `https://economia.awesomeapi.com.br/json/last/${origem}-${destino}`;
        const resposta = await axios.get(url);
        const chave = `${origem}${destino}`;
        const taxa = parseFloat(resposta.data[chave].bid);
        const bruto = parseFloat(valor) * taxa;
        const resultado = (bruto * (1 - (parseFloat(tarifa) || 0) / 100)).toFixed(2);

        res.json({ resultado, taxa });
    } catch (error) {
        res.status(500).json({ erro: 'Erro na conversão' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
