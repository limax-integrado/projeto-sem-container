CREATE DATABASE IF NOT EXISTS meu_banco;
USE meu_banco;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nome) VALUES ('Ana Silva'), ('Carlos Souza');