#!/usr/bin/env bash
set -e

while [ $# -gt 0 ]; do
  case "$1" in
    --spec*|-s*)
      if [[ "$1" != *=* ]]; then shift; fi
      SPEC="${1#*=}"
      ;;
    --output*|-o*)
      if [[ "$1" != *=* ]]; then shift; fi
      OUTPUT="${1#*=}"
      ;;
    *)
      >&2 printf "Error: Invalid argument\n"
      exit 1
      ;;
  esac
  shift
done

if ! command -v jq &> /dev/null
then
    echo -e "\033[31m'jq' could not be found. It is a requirement."
    exit 1
fi

jq --arg spec "$SPEC" --arg output "$OUTPUT" '."input-file"= $spec | ."output-file"= $output' \
  smusher-config.json > tmp-smusher-config.json && mv tmp-smusher-config.json smusher-config.json

RELEASE_BINARY_SUFFIX="_darwin_arm64.tar.gz"
ARCH="$(arch)"

if [[ "$OSTYPE" == "linux-gnu"* ]]
then
    if [[ "$ARCH" == "arm64" ]]
    then
         RELEASE_BINARY_SUFFIX="_linux_arm64.tar.gz"
    else
         RELEASE_BINARY_SUFFIX="_linux_amd64.tar.gz"
    fi
elif [[ "$OSTYPE" == "darwin"* ]]
then
    if [[ "$ARCH" == "x86_64" ]]
    then
         RELEASE_BINARY_SUFFIX="_darwin_amd64.tar.gz"
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
