import http from "k6/http";

// Definir o endpoint como constante
const ENDPOINT = "http://localhost:8080";

// Definir as opções do teste
export const options = {
  scenarios: {
    // Cenário para o endpoint
    endpoint: {
      executor: "ramping-vus", // Usar o executor ramping-vus
      startVUs: 0, // Começar com 0 VUs
      stages: [
        // Rampa linear de 0 a 10 VUs em 5 minutos
        { duration: "5m", target: 10 },
        // Manter 10 VUs por 55 minutos
        { duration: "55m", target: 10 },
      ],
      gracefulRampDown: "10s", // Esperar 10 segundos para terminar uma iteração
      exec: "endpoint", // Nome da função que será executada
    },
  },
};

// Definir a função que será executada para o endpoint
export function endpoint() {
  // Fazer uma requisição GET para o endpoint
  http.get(ENDPOINT);
}
