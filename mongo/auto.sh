#!/bin/sh
mongod --shutdown /srv/mongodb.conf
mongod -f /srv/mongodb.conf