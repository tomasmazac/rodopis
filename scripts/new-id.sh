#!/bin/sh
# Prints an id no person page uses yet.
# Crockford Base32 without i, l, o, u; the leading letter keeps YAML from reading ids like 123e45 as numbers.
set -eu
cd "$(dirname "$0")/.."
while :; do
  first=$(LC_ALL=C tr -dc 'abcdefghjkmnpqrstvwxyz' < /dev/urandom | head -c 1)
  rest=$(LC_ALL=C tr -dc '0123456789abcdefghjkmnpqrstvwxyz' < /dev/urandom | head -c 5)
  id="$first$rest"
  if ! grep -qx "id: $id" content/osoby/*.md; then
    echo "$id"
    exit 0
  fi
done
