import http from "k6/http";

// Definir os endpoints como constantes
const ENDPOINT1 = "http://localhost:8080/market/cached";
const ENDPOINT2 = "http://localhost:8080/shop";
const ENDPOINT3 = "http://localhost:8080/mocked-response";
const ENDPOINT4 = "http://localhost:8080/sequential";

// Definir as opções do teste
export const options = {
  scenarios: {
    // Cenário para o primeiro endpoint
    endpoint1: {
      executor: "constant-arrival-rate", // Usar o executor constant-arrival-rate
      rate: 10, // Gerar 10 iterações por minuto
      timeUnit: "1m", // Especificar o tempo em minutos
      duration: "10m", // Rodar o teste por 10 minutos
      preAllocatedVUs: 5, // Alocar 5 VUs para esse cenário
      exec: "endpoint1", // Nome da função que será executada
    },
    // Cenário para o segundo endpoint
    endpoint2: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1m",
      duration: "10m",
      preAllocatedVUs: 5,
      exec: "endpoint2",
    },
    // Cenário para o terceiro endpoint
    endpoint3: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1m",
      duration: "10m",
      preAllocatedVUs: 5,
      exec: "endpoint3",
    },
    // Cenário para o quarto endpoint
    endpoint4: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1m",
      duration: "10m",
      preAllocatedVUs: 5,
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

