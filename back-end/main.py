from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

pessoas = [
    {
        'id': 1,
        'nome': 'Ariel',
        'nickname': 'Picolé_e_2_Bolas_por_10_reais'
    },
    {
        'id': 2,
        'nome': 'Miguel',
        'nickname': 'Pika_da_milica_libanesa'
    },
    {
        'id': 3,
        'nome': 'Miquéias',
        'nickname': 'Já_Vesti_Calcinha_do_Teu_Pai'
    },
]

# Consultar (todos)
@app.route('/pessoas', methods=['GET'])
def obter_pessoas():
    return jsonify(pessoas)

# Consultar (por ID)
@app.route('/pessoas/<int:id>', methods=['GET'])
def obter_pessoa_por_id(id):
    for pessoa in pessoas:
        if pessoa.get('id') == id:
            return jsonify(pessoa)
    return jsonify({'error': 'Pessoa não encontrada'})

# Editar
@app.route('/pessoas/<int:id>', methods=['PUT'])
def editar_pessoa_por_id(id):
    pessoa_alterada = request.get_json()
    for indice, pessoa in enumerate(pessoas):
        if pessoa.get('id') == id:
            pessoas[indice] = pessoa_alterada
            return jsonify(pessoas[indice])
    return jsonify({'error': 'Pessoa não encontrada'})

# Criar
@app.route('/pessoas', methods=['POST'])
def incluir_nova_pessoa():
    nova_pessoa = request.get_json()
    pessoas.append(nova_pessoa)
    return jsonify(pessoas)

# Excluir
@app.route('/pessoas/<int:id>', methods=['DELETE'])
def excluir_pessoa(id):
    pessoas_filtradas = [pessoa for pessoa in pessoas if pessoa.get('id') != id]
    if len(pessoas_filtradas) < len(pessoas):
        pessoas.clear()
        pessoas.extend(pessoas_filtradas)
        return jsonify(pessoas)
    return jsonify({'error': 'Pessoa não encontrada'})

if __name__ == '__main__':
    app.run(port=5000, host='localhost', debug=True)