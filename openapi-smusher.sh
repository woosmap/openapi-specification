#!/usr/bin/env bash
set -e

RELEASE_BINARY_SUFFIX="_darwin_arm64.tar.gz"
ARCH="$(arch)"

if [[ "$OSTYPE" == "linux-gnu"* ]]
then
    if [[ "$ARCH" == "arm64" ]]
    then
         RELEASE_BINARY_SUFFIX = "_linux_arm64.tar.gz"
    else
         RELEASE_BINARY_SUFFIX = "_linux_amd64.tar.gz"
    fi
elif [[ "$OSTYPE" == "darwin"* ]]
then
    if [[ "$ARCH" == "x86_64" ]]
then
         RELEASE_BINARY_SUFFIX = "_darwin_amd64.tar.gz"
    fi
fi

if [[ -z "${GH_TOKEN}" ]]
then
    read -s -p "GitHub.com PAT: " token
    echo -en "\r\033[K"
else
    token="${GH_TOKEN}"
fi

BINARY_URL=$(curl --fail https://$token:@api.github.com/repos/Woosmap/openapi-smusher/releases/latest  | jq -r ".assets[] | select(.name | contains (\"${RELEASE_BINARY_SUFFIX}\")) | .url")
BINARY="openapi-smusher${RELEASE_BINARY_SUFFIX}"
echo "$BINARY_URL"
curl --fail --location --output $BINARY --header 'Accept: application/octet-stream' --user $username:$token "$BINARY_URL"
tar -xf "$BINARY"

./openapi-smusher
