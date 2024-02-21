import { IChunk } from './types'

export const chunk: IChunk = (phrase, length) => phrase.match(new RegExp(`.{1,${length}}`, 'g'))

