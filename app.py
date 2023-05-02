from flask import Flask, jsonify, request

app = Flask(__name__)

pessoas = [
    {
        'id': 1,
        'nome': 'Ariel',
        'nickmane': 'Picolé_e_2_Bolas_por_10_reais'
    },
    {
        'id': 2,
        'nome': 'Miguel',
        'nickmane': 'Pika_da_milica_libanesa'
    },
    {
        'id': 3,
        'nome': 'Miquéias',
        'nickmane': 'Já_Vesti_Calcinha_do_Teu_Pai'
    },
]

# Consultar(todos)
@app.route('/pessoas',methods=['GET'])
def obter_pessoas():
    return jsonify(pessoas)

# Consultar(id)
@app.route('/pessoas/<int:id>',methods=['GET'])
def obter_pessoa_por_id(id):
    for pessoa in pessoas:
        if pessoa.get('id') == id:
            return jsonify(pessoa)
# Editar
@app.route('/pessoas/<int:id>',methods=['PUT'])
def editar_pessoa_por_id(id):
    pessoa_alterada = request.get_json()
    for indice,pessoa in enumerate(pessoas):
        if pessoa.get('id') == id:
            pessoas[indice].update(pessoa_alterada)
            return jsonify(pessoas[indice])
# Criar
@app.route('/pessoas',methods=['POST'])
def incluir_novo_pessoa():
    novo_pessoa = request.get_json()
    pessoas.append(novo_pessoa)
    
    return jsonify(pessoas)
# Excluir
@app.route('/pessoas/<int:id>',methods=['DELETE'])
def excluir_pessoa(id):
    for indice, pessoa in enumerate(pessoas):
        if pessoa.get('id') == id:
            del pessoas[indice]

    return jsonify(pessoas)

app.run(port=5000,host='localhost',debug=True)