import barba from '@barba/core'
import { transitionArr } from './transitionBundle'
import { viewArr } from './viewBundle'
import { options } from './barbaOptions'
import { quicklink } from 'quicklink'

quicklink.listen();

barba.init({
  ...options,
  transition: transitionArr,
  views: viewArr
})