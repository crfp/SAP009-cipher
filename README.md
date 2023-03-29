# Cifra de César

## Índice

* [1. Cifra de César](#1-cifra-de-cesar)
* [2. O projeto](#2-o-projeto)
* [3. Como utilizar](#3-como-utilizar)
* [4. Tecnologias utilizadas](#4-tecnologias-utilizadas)

***

## 1. Cifra de César

A cifra de César é um método milenar de codificação de mensagens, e funciona por substituição, 
onde cada letra do texto original é substituída por outra de acordo com um número de deslocamento
no próprio alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. O projeto

Utilizando do princípio da Cifra de César, este projeto foi desenvolvido
para que o usuário que deseje cifrar ou decifrar qualquer mensagem de forma simples
e prática.

## 3. Como utilizar

No campo "escreva sua mensagem", o usuário deve escrever a mensagem a ser cifrada ou 
decifrada, escolher, também, o número de deslocamento que quiser e apertar o botão
correspondente à função desejada. A mensagem aparecerá no campo à direita.  

## 4. Tecnologias utilizadas

* HMTL
* Javascript
* CSS
* VS Code
