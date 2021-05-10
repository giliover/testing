#!/bin/bash
if [ $1 == "--init-dev" ]; then
    echo "Iniciando ambiente de desenvolvimento Descendo os Containers..."
    echo "Desconstruindo containers, caso existam..."
    docker-compose -f docker-compose.yml down
    echo "Construindo containers de desenvolvimento..."
    docker-compose -f docker-compose.yml up -d --build
fi
if [ $1 == "--dev" ]; then
    echo "Fazendo deploy em ambiente de desenvolvimento"
    
    echo "Construindo containers de desenvolvimento"
    docker-compose -f docker-compose.yml up -d --build
fi
#!/bin/bash production script
# if [ $1 == "--init-prod" ]; then
#     echo "Iniciando ambiente de produção Descendo os Containers..."
#     echo "Desconstruindo containers, caso existam..."
#     docker-compose -f docker-compose-build.yml down
#     echo "Construindo containers de desenvolvimento..."
#     docker-compose -f docker-compose-build.yml up -d --build
# fi
# if [ $1 == "--prod" ]; then
#     echo "Fazendo deploy em ambiente de produção"
    
#     echo "Construindo containers de desenvolvimento"
#     docker-compose -f docker-compose-build.yml up -d --build
# fi