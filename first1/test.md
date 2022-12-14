## My documentation about using K6

Let me show any commands: 

Using without docker:

```sh
rafael@rafael-Inspiron-15-7000-Gaming:~/Repository/K6StressTest/first1/test1$ sudo docker run --rm -i grafana/k6 run - < script2.js

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: -
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 10 looping VUs for 30s (gracefulStop: 30s)


running (0m01.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [   3% ] 10 VUs  01.0s/30s

running (0m02.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [   7% ] 10 VUs  02.0s/30s

running (0m03.0s), 10/10 VUs, 10 complete and 0 interrupted iterations
```

Using with docker:


```sh
rafael@rafael-Inspiron-15-7000-Gaming:~/Repository/K6StressTest/first1/test1$ k6 run --vus 10 --duration 30s script.js

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: script.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 10 looping VUs for 30s (gracefulStop: 30s)


running (0m05.1s), 10/10 VUs, 20 complete and 0 interrupted iterations
default   [=====>--------------------------------] 10 VUs  05.1s/30s
```
