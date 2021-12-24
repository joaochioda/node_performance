loadtest -n 100000 -c 100 http://localhost:3000/ => request per second ~ 700

loadtest -n 100000 -c 100 http://localhost:80/ -nginx 3 servers => request per second ~ 2500
