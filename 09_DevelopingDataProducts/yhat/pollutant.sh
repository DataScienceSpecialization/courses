#!/bin/bash

curl -X POST -H "Content-Type: application/json" --user rdpeng@gmail.com:90d2a80bb532cabb2387aa51ac4553cc --data '{"lon": $1, "lat": $2, "radius": $3 }' http://sandbox.yhathq.com/rdpeng@gmail.com/models/pollutant/

