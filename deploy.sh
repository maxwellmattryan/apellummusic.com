#!/bin/bash

start_time=$(date +%s)

git subtree push --prefix ui heroku master
echo -e "\nSUCCESS: Pushed UI source code to Heroku\n"

convertsecs() {
    ((m = (${1} % 3600) / 60))
    ((s = ${1} % 60))
    printf "%02dm %02ds\n" $m $s
}

end_time=$(date +%s)
execution_time=$(expr $end_time - $start_time)
echo -e "Total time elapsed: $(convertsecs $execution_time)"