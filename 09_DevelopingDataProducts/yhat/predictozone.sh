#!/bin/bash

echo $1
echo $2

curl -X POST -H "Content-Type: application/json" \
    --user rdpeng@gmail.com:90d2a80bb532cabb2387aa51ac4553cc \
    --data '{"Wind": $1, "Temp": $2 }' \
    http://sandbox.yhathq.com/rdpeng@gmail.com/models/ozone/
