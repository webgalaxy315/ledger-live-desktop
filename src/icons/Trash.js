// @flow

import React from 'react'

const path = (
  <g transform="translate(670.57 190.38)">
    <path
      fill="currentColor"
      d="m-658.54-187.18h3.2002a0.80037 0.80037 0 0 1 0 1.5993h-0.80049v10.4a2.3999 2.3999 0 0 1-2.3999 2.3999h-8.0001a2.3999 2.3999 0 0 1-2.3999-2.3999v-10.4h-0.79878a0.80037 0.80037 0 1 1 0-1.5993h3.1991v-0.80049a2.3999 2.3999 0 0 1 2.3999-2.3999h3.2003a2.3999 2.3999 0 0 1 2.3999 2.3999zm-1.5993 0v-0.80049a0.80037 0.80037 0 0 0-0.80049-0.80049h-3.2003a0.80037 0.80037 0 0 0-0.79878 0.80049v0.80049zm0.80049 1.5993a0.84357 0.84357 0 0 1-1e-3 0h-6.3995a0.84357 0.84357 0 0 1-2e-3 0h-1.5976v10.4c0 0.44224 0.35825 0.79877 0.79878 0.79877h8.0001a0.80037 0.80037 0 0 0 0.8005-0.79877v-10.4zm-5.6004 3.2003a0.80037 0.80037 0 1 1 1.5993 0v4.7997a0.80037 0.80037 0 0 1-1.5993 0zm3.1992 0a0.80049 0.80049 0 1 1 1.601 0v4.7997a0.80049 0.80049 0 0 1-1.601 0z"
      strokeWidth="1.2"
    />
  </g>
)

export default ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 17.6" height={size} width={size} {...p}>
    {path}
  </svg>
)
