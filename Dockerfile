# Version: 0.1
FROM fedora:27
MAINTAINER Jakub Jozwicki jakub.jozwicki@gmail.com
RUN yum -y install ansible git wget patch python2-passlib httpd-tools java-1.8.0-openjdk-headless openssl
RUN git clone https://github.com/openshift/openshift-ansible.git -b release-3.11
RUN cd openshift-ansible; wget https://github.com/kubaseai/microservice-architecture-demo/raw/master/hosts; wget https://github.com/kubaseai/microservice-architecture-demo/raw/master/ocp.diff; mv hosts /etc/ansible/hosts
