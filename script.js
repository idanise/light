'use strict'

const btn = document.getElementById('btn')
const light = document.getElementById('light')

const toggleBtn = () => {
  btn.classList.toggle('active')
  light.classList.toggle('on')
}
