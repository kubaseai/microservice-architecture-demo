This is a demo of microservices architecture (in a micro scale) on OpenShift.

## SPA
Single Page Application hosted in nginx container, using keycloak JS proxied by API Gateway to iam-service and calling simple timezone microservice via API Gateway. SPA doesn't use underlying services in a uncovered manner, because of CORS and layered security approach.

## OpenShift route
Exposed via HTTP(S) SPA container service.

## API Gateway
Exposes for SPA /auth (from iam-service) with JS and /getTimeZoneOffset (from micro-service).

## Microservice
Microservice is secured by keycloak Spring Boot starter and validates tokens with roles.

![deploy.sh to bring it up](https://github.com/kubaseai/microservice-architecture-demo/tree/master/_imgs/msa-01.png)
![pods](https://github.com/kubaseai/microservice-architecture-demo/tree/master/_imgs/msa-02.png)
![routes](https://github.com/kubaseai/microservice-architecture-demo/tree/master/_imgs/msa-03.png)
![login to Keycloak](https://github.com/kubaseai/microservice-architecture-demo/tree/master/_imgs/msa-04.png)
![required OIDC configuration #1](https://github.com/kubaseai/microservice-architecture-demo/tree/master/_imgs/msa-05.png)
![required OIDC configuration #1](https://github.com/kubaseai/microservice-architecture-demo/tree/master/_imgs/msa-06.png)



