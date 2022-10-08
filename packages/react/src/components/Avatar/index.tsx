import { User } from 'phosphor-react'
import React from 'react'

import * as S from './styles'

export type AvatarProps = React.ComponentProps<typeof S.AvatarImage>

export const Avatar = (props: AvatarProps) => (
  <S.AvatarContainer>
    <S.AvatarImage {...props} />

    <S.AvatarFallback delayMs={600}>
      <User />
    </S.AvatarFallback>
  </S.AvatarContainer>
)