#!/bin/bash

for cfg in $(find ../ -name *.y*ml); do
    echo "Deleting definiton $cfg"
    kind=$(grep -c Kind $cfg)
    if [[ $kind -gt 0 ]]; then
        echo "Deleting definiton $cfg"
        oc delete -f $cfg
    fi
done

for pv in "gw-db-pv"; do
    echo "Deleting pv $pv"
    oc delete pv $pv --wait=false
done

echo "Set context to default"
oc config set-context $(oc config current-context) --namespace=default
echo "Deleting whole msa namespace"
oc delete namespace msa --wait=true
echo 'Finished'
