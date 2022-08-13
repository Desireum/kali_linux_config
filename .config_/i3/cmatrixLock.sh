#! /bin/bash

alacritty -e cmatrix &
sleep 0.1

i3-msg fullscreen

i3lock -n; i3-msg kill
