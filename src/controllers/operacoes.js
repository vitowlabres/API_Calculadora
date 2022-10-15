export default class Operacoes
{
    static adicao = (req,res) => {
        res.status(200).send('oi')
        console.log(`req.params: ${req.params}`)
        console.log(`req.params.id: ${req.params.id}`)
        console.log(`req: ${req}`)
        console.log(`req.query: ${req.query}`)
    };

    static subtracao = (req,res) => {
        
    };

    static multiplicacao = (req,res) => {
        
    };

    static divisao = (req,res) => {
        
    };

}