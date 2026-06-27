#!/bin/bash

# Cores para o terminal
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

printf "${CYAN}------------------------------------------${NC}\n"
printf "${CYAN}   🌸 NEZUKO V5 - SISTEMA DE INICIALIZAÇÃO 🌸   ${NC}\n"
printf "${CYAN}------------------------------------------${NC}\n"

# Lógica de argumentos
MODO_ARG=$1

while :
do
    if [ "$MODO_ARG" = "sim" ]; then
        printf "${CYAN}[!] Iniciando Nezuko v5 em modo PAIRING CODE...${NC}\n"
        node index.js --pairing
    else
        printf "${GREEN}[!] Iniciando Nezuko v5 em modo QR CODE (Padrão)...${NC}\n"
        node index.js
    fi
    
    printf "${RED}[!] Bot parou ou crashou! Reiniciando em 5 segundos...${NC}\n"
    sleep 5
done
