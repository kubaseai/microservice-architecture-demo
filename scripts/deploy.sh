#!/bin/bash

source ./storage-functions.sh

function info () {
    echo -e $'\e[1m'"${1}"$'\e[0m'
}

OSH_APP_DOMAIN=$(cat TARGET_DOMAIN)

info "---"
info "This scripts assumes thay $OSH_APP_DOMAIN is hosted on OpenShift 3.11"
info "You can get it via https://www.okd.io/download.html#oc-platform:"
info "oc cluster up --public-hostname=osh.localdomain --routing-suffix=app.osh.localdomain"
info "---"


function setupOpenShiftAppDomain {
    LAST_APP_DOMAIN=$(cat LAST_APP_DOMAIN)
    for file in $(find .. -iname "*.json" -o -iname "*.y*ml" -o -iname "*.conf" -o -iname "*.properties" -o -iname "*.html"); do
        match=$(cat $file | grep -c $LAST_APP_DOMAIN)
        if [[ $match -gt 0 ]]; then
            cp $file $file.bak
            cat $file.bak | sed -e s/$LAST_APP_DOMAIN/$OSH_APP_DOMAIN/g > $file
            rm $file.bak
        fi
    done
    echo $OSH_APP_DOMAIN > LAST_APP_DOMAIN
}

setupOpenShiftAppDomain

oc create namespace msa
oc create serviceaccount msa-account -n msa
oc config set-context $(oc config current-context) --namespace=msa
oc create -f ../rbac/rbac.yaml

# to view deployments in Console UI
oc adm policy add-role-to-user admin admin -n msa

# WARNING!!! Security risk introduced by some container
# oc adm policy add-scc-to-user anyuid -n msa -z msa-account
#
# due to istio
oc adm policy add-scc-to-user privileged -n msa -z msa-account

info 'Creating ConfigMap(s)...'
oc create configmap micro-svc-app-properties --from-file=../confs/micro-svc/
oc create configmap spa-files --from-file=../confs/spa/
oc create configmap spa-cors --from-file=../confs/spa-cors/

setupStorage

# info 'Deploying db volume...'
# oc create -f ../extras/rdbms/pgsql/pgsql-persistent-volume-claim.yaml

info 'Creating Service(s)...'
for svc in $(find .. -name *service.y*ml | grep -v db); do
    [[ ! $svc =~ .*gw.* ]] && oc create -f $svc;
done

info 'Creating Deployment(s)...'
for svc in $(find .. -name *deployment.y*ml | grep -v db); do
    [[ ! $svc =~ .*gw.* ]] && oc create -f $svc;
done

info 'Deploying Ingresses...'
for yaml in $(find ../ingresses/ -name *.yaml); do
    oc create -f $yaml
done

info 'Finished'
CLUSTERED_EP="spa.$OSH_APP_DOMAIN"

echo "To access the IAM, try https://$CLUSTERED_EP in your browser."
