---
title: 'Introdução ao Ansible'
description: 'Uma breve introdução à ferramenta Ansible para estudos'
pubDate: 'Jun 23 2025'
heroImage: '../../assets/intro-to-ansible.jpg'
---
> O seguinte conteúdo refere-se às anotações de estudo sobre a ferramenta Ansible.


### Ansible: O que é e por quê?
O Ansible é uma ferramenta criada por engenheiros da Red Hat com o propósito de automatizar as tarefas de administração de servidores. A ferramenta é open-source, patrocinada pela Red Hat e centralizada. 

Em caso de gerenciamento de diversos servidores, é durante as tarefas de configuração, atualização, monitoramento e outras que o Ansible se destaca. Com a utilização de python em todas as máquinas e com as configurações necessárias, somos capazes de automatizar tarefas ou realizar comandos em larga escala.

> Para o texto atual, iremos chamar a máquina central de "nó de controle" e as máquinas controladas de "nós gerenciáveis".


### Requisitos
Para ser rodado, o Ansible necessita, no mínimo, do Python 3.5 instalado em todos os nós. 

#### Para o nó de controle
- 1. Sistema Unix-like (Debian, Red Hat, Suse, macOS, BSDs) ou um Windows com WSL
- 2. CLI do Ansible

#### Para o nó gerenciável
- 1. Conta de usuário com conexão SSH com um shell POSIX


### "Hands-On"
Para iniciarmos a parte prática, é necessário saber uma pequena porção de teoria do Ansible. Por exemplo, o arquivo de configuração do Ansible (ansible.cfg) sempre será lido de acordo com a seguinte ordem:
![Ordem de prioridade do arquivo ansible.cfg](../../assets/ansible-cfg-order.png)


