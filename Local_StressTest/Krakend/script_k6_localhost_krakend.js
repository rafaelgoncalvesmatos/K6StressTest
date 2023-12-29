import http from "k6/http";

// Definir os endpoints como constantes
const ENDPOINT1 = "http://localhost:8080/market/cached";
const ENDPOINT2 = "http://localhost:8080/shop";
const ENDPOINT3 = "http://localhost:8080/mocked-response";
const ENDPOINT4 = "http://localhost:8080/sequential";
const ENDPOINT5 = "http://localhost:8080/market/simple";
const ENDPOINT6 = "http://localhost:8080/cryptos/btc";
const ENDPOINT7 = "http://localhost:8080/market/concurrent";
const ENDPOINT8 = "http://localhost:8080/public";

// Rodar o teste por 10 minutos
const durationtest = "10m"
// Alocar 5 VUs para esse cenário
let VUs = 50000

// Definir as opções do teste
export const options = {
  scenarios: {
    // Cenário para o primeiro endpoint
    endpoint1: {
      executor: "constant-arrival-rate", // Usar o executor constant-arrival-rate
      rate: 10, // Gerar 10 iterações por minuto
      timeUnit: "1m", // Especificar o tempo em minutos
      duration: (durationtest), // Rodar o teste por 10 minutos
      preAllocatedVUs: (VUs), // Alocar 5 VUs para esse cenário
      exec: "endpoint1", // Nome da função que será executada
    },
    // Cenário para o segundo endpoint
    endpoint2: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1m",
      duration: (durationtest),
      preAllocatedVUs: (VUs),
      exec: "endpoint2",
    },
    // Cenário para o terceiro endpoint
    endpoint3: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1m",
      duration: (durationtest),
      preAllocatedVUs: (VUs),
      exec: "endpoint3",
    },
    // Cenário para o quarto endpoint
    endpoint4: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1m",
      duration: (durationtest),
      preAllocatedVUs: (VUs),
      exec: "endpoint4",
    },
  },
};

// Definir as funções que serão executadas para cada endpoint
export function endpoint1() {
  // Fazer uma requisição GET para o primeiro endpoint
  http.get(ENDPOINT1);
}

export function endpoint2() {
  // Fazer uma requisição GET para o segundo endpoint
  http.get(ENDPOINT2);
}

export function endpoint3() {
  // Fazer uma requisição GET para o terceiro endpoint
  http.get(ENDPOINT3);
}

export function endpoint4() {
  // Fazer uma requisição GET para o quarto endpoint
  http.get(ENDPOINT4);
}

export function endpoint5() {
  // Fazer uma requisição GET para o quarto endpoint
  http.get(ENDPOINT5);
}

export function endpoint6() {
  // Fazer uma requisição GET para o quarto endpoint
  http.get(ENDPOINT6);
}

export function endpoint7() {
  // Fazer uma requisição GET para o quarto endpoint
  http.get(ENDPOINT7);
}

export function endpoint8() {
  // Fazer uma requisição GET para o quarto endpoint
  http.get(ENDPOINT8);
}