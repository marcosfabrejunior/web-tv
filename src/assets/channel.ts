let date = new Date();
let date_init = date.getTime() - 60*1000;
let date_end = date.getTime() + 20*60*1000;
let date_init_string = new Date(date_init).toString();
let date_end_string =  new Date(date_end).toString();

console.log(date_init_string);

export default
    [
        {
            "id": 11,
            "name": "Animal World",
            "description": "Sempre Atualizado com as novidades no mundo da Tecnologia",
            "program": {
                "id": 1,
                "name": "Os predadores da África em ação | África Selvagem: Rios | Animal Planet Brasil",
                "description": "Neste super documentário, conheça como vivem os predadores na África Selvagem.",
                "videoId": "qPEYfRXg5ws",
                "start": date_init_string,
                "end": date_end_string
            },
            "nextChannel":  { 
                "id": 10,
                "name": "TechPlay",
                "description": "Sempre Atualizado com as novidades no mundo da Tecnologia",
                "program": {
                    "id": 1,
                    "name": "Evan You - State of Vue",
                    "description": "Palestra do criador de um dos maiores frameworks Javascript na VueConf 2017",
                    "videoId": "lG0Ys-2d4MA",
                    "start": date_init_string,
                    "end": date_end_string
                },
                "nextChannel": {
                    "id": 11,
                    "name": "Animal World",
                    "description": "Sempre Atualizado com as novidades no mundo da Tecnologia",
                    "program": {
                        "id": 1,
                        "name": "Os predadores da África em ação | África Selvagem: Rios | Animal Planet Brasil",
                        "description": "Neste super documentário, conheça como vivem os predadores na África Selvagem.",
                        "videoId": "qPEYfRXg5ws",
                        "start": date_init_string,
                        "end": date_end_string
                    },
                    "nextChannel": 11,
                    "previousChannel": 11
                },
                "previousChannel": {
                    "id": 11,
                    "name": "Animal World",
                    "description": "Sempre Atualizado com as novidades no mundo da Tecnologia",
                    "program": {
                        "id": 1,
                        "name": "Os predadores da África em ação | África Selvagem: Rios | Animal Planet Brasil",
                        "description": "Neste super documentário, conheça como vivem os predadores na África Selvagem.",
                        "videoId": "qPEYfRXg5ws",
                        "start": date_init_string,
                        "end": date_end_string
                    },
                    "nextChannel": 11,
                    "previousChannel": 11
                }
            },
            "previousChannel":  {
                "id": 10,
                "name": "TechPlay",
                "description": "Sempre Atualizado com as novidades no mundo da Tecnologia",
                "program": {
                    "id": 1,
                    "name": "Evan You - State of Vue",
                    "description": "Palestra do criador de um dos maiores frameworks Javascript na VueConf 2017",
                    "videoId": "lG0Ys-2d4MA",
                    "start": date_init_string,
                    "end": date_end_string
                },
                "nextChannel": {
                    "id": 11,
                    "name": "Animal World",
                    "description": "Sempre Atualizado com as novidades no mundo da Tecnologia",
                    "program": {
                        "id": 1,
                        "name": "Os predadores da África em ação | África Selvagem: Rios | Animal Planet Brasil",
                        "description": "Neste super documentário, conheça como vivem os predadores na África Selvagem.",
                        "videoId": "qPEYfRXg5ws",
                        "start": date_init_string,
                        "end": date_end_string
                    },
                    "nextChannel": 11,
                    "previousChannel": 11
                },
                "previousChannel": {
                    "id": 11,
                    "name": "Animal World",
                    "description": "Sempre Atualizado com as novidades no mundo da Tecnologia",
                    "program": {
                        "id": 1,
                        "name": "Os predadores da África em ação | África Selvagem: Rios | Animal Planet Brasil",
                        "description": "Neste super documentário, conheça como vivem os predadores na África Selvagem.",
                        "videoId": "qPEYfRXg5ws",
                        "start": date_init_string,
                        "end": date_end_string
                    },
                    "nextChannel": 11,
                    "previousChannel": 11
                }
            }
        }

    ];

