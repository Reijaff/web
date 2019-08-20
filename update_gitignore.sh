#!/bin/bash
find -name 'node_modules' | grep -v 'node_modules.*node_modules' > .gitignore

